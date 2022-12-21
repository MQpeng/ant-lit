import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from '../style/message.css';
import { AttrMixin } from '../mixin/attr.mixin';
import { Direction } from '../common/bidi';
import { NzMessageData, NzMessageDataOptions } from './message';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { coerceCssPixelValue } from '@cdk/coercion/css-pixel-value';

export interface MessageConfig {
  nzAnimate?: boolean;
  nzDuration?: number;
  nzMaxStack?: number;
  nzPauseOnHover?: boolean;
  nzTop?: number | string;
  nzDirection?: Direction;
}

const NZ_CONFIG_COMPONENT_NAME = 'message';

const NZ_MESSAGE_DEFAULT_CONFIG: Required<MessageConfig> = {
  nzAnimate: true,
  nzDuration: 3000,
  nzMaxStack: 7,
  nzPauseOnHover: true,
  nzTop: 24,
  nzDirection: 'ltr'
};

@customElement('ant-message-container')
export class MessageContainerElement extends AttrMixin(LitElement) {
  static styles = [style];

  @property() dir: Direction = 'ltr';
  @property() config?: Required<MessageConfig>;
  @property() instances: Array<Required<NzMessageData>> = [];
  @property() top?: string | null;

  connectedCallback() {
    super.connectedCallback();
    this.updateConfig();
    this.dir = this.config?.nzDirection || 'ltr';
  }

  render() {
    return html`
      <div
        class="ant-message ${classMap({ 'ant-message-rtl': this.dir === 'rtl' })}"
        style=${styleMap({ top: this.top })}
      >
        ${this.instances.map(
          instance => html` <ant-message .instance=${instance} @destroyed=${this.onDestroy}></ant-message> `
        )}
      </div>
    `;
  }

  onDestroy(e: CustomEventInit<any>) {
    this.removeInstance(e.detail.id, e.detail.userAction);
  }

  create(data: NzMessageData): Required<NzMessageData> {
    const instance = this.onCreate(data);

    if (this.instances.length >= this.config!.nzMaxStack) {
      this.instances = this.instances.slice(1);
    }

    this.instances = [...this.instances, instance];

    this.readyInstances();

    return instance;
  }

  removeInstance(id: string, userAction: boolean = false): void {
    this.instances.some((instance, index) => {
      if (instance.messageId === id) {
        this.instances.splice(index, 1);
        this.instances = [...this.instances];
        this.onRemove(instance, userAction);
        this.readyInstances();
        return true;
      }
      return false;
    });
  }

  removeAll(): void {
    this.instances.forEach(i => this.onRemove(i, false));
    this.instances = [];

    this.readyInstances();
  }

  protected onCreate(instance: NzMessageData): Required<NzMessageData> {
    instance.options = this.mergeOptions(instance.options);
    // instance.onClose = new Subject<boolean>();
    return instance as Required<NzMessageData>;
  }

  protected onRemove(instance: Required<NzMessageData>, userAction: boolean): void {
    instance.onClose.next(userAction);
    instance.onClose.complete();
  }

  protected readyInstances(): void {}

  protected updateConfig(): void {
    this.config = {
      ...NZ_MESSAGE_DEFAULT_CONFIG,
      ...this.config
    };

    this.top = coerceCssPixelValue(this.config.nzTop);
  }

  protected subscribeConfigChange(): void {}

  protected mergeOptions(options?: NzMessageDataOptions): NzMessageDataOptions {
    const { nzDuration, nzAnimate, nzPauseOnHover } = this.config!;
    return { nzDuration, nzAnimate, nzPauseOnHover, ...options };
  }
}

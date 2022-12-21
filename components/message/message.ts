import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import style from '../style/message.css';
import move from '../animation/move.css';
import { AttrMixin } from '../mixin/attr.mixin';
import { styleMap } from 'lit/directives/style-map.js';

export type NzMessageType = 'success' | 'info' | 'warning' | 'error' | 'loading' | string;

export interface NzMessageDataOptions {
  nzDuration?: number;
  nzAnimate?: boolean;
  nzPauseOnHover?: boolean;
}

export interface NzMessageData {
  type?: NzMessageType;
  content?: string;
  messageId?: string;
  createdAt?: Date;
  options?: NzMessageDataOptions;
  state?: 'enter' | 'leave';

  onClose?: any;
}

export type NzMessageRef = Pick<Required<NzMessageData>, 'onClose' | 'messageId'>;

@customElement('ant-message')
export class MessageElement extends AttrMixin(LitElement) {
  static typeToIcon: { [key in NzMessageType]: string } = {
    success: 'check-circle',
    info: 'info-circle',
    warning: 'exclamation-circle',
    error: 'close-circle',
    loading: 'loading'
  };
  static styles = [style, move];

  moveClassMap = {
    enter: 'slide-bottom',
    leave: 'slide-top'
  };

  protected options!: Required<NzMessageDataOptions>;
  protected autoClose?: boolean;
  protected closeTimer?: any;
  protected userAction: boolean = false;
  protected eraseTimer: any = null;
  protected eraseTimingStart?: number;
  protected eraseTTL!: number;

  @property() instance!: Required<NzMessageData>;
  @state() instanceState: 'enter' | 'leave';

  connectedCallback() {
    super.connectedCallback();
    this.options = this.instance.options as Required<NzMessageDataOptions>;

    if (this.options.nzAnimate) {
      this.instance.state = 'enter';
    }

    this.instanceState = this.instance.state;

    this.autoClose = this.options.nzDuration > 0;

    if (this.autoClose) {
      this.initErase();
      this.startEraseTimeout();
    }
  }

  async firstUpdated() {}

  onEnter() {
    if (this.autoClose && this.options.nzPauseOnHover) {
      this.clearEraseTimeout();
      this.updateTTL();
    }
  }

  onLeave() {
    if (this.autoClose && this.options.nzPauseOnHover) {
      this.startEraseTimeout();
    }
  }

  render() {
    const type = this.instance.type;
    const colorMap: { [key: NzMessageType]: string } = {
      success: 'var(--ant-success-color)',
      error: 'var(--ant-error-color)',
      warning: 'var(--ant-warning-color)',
      info: 'var(--ant-info-color)',
      loading: 'var(--ant-info-color)'
    };

    return html`
      <div
        class="ant-message-notice ${this.moveClassMap[this.instanceState]}"
        @mouseenter="${this.onEnter}"
        @mouseleave="${this.onLeave}"
      >
        <div class="ant-message-notice-content">
          <div
            class="ant-message-custom-content ${'ant-message-' + type}"
            style=${styleMap({ '--ant-icon-color': colorMap[type] })}
          >
            <ant-icon nzType="${MessageElement.typeToIcon[type]}"></ant-icon>
            <span .innerHTML="${this.instance.content}"></span>
          </div>
        </div>
      </div>
    `;
  }

  protected destroy(userAction: boolean = false): void {
    this.userAction = userAction;
    const destroy$ = new CustomEvent('destroyed', { detail: { id: this.instance.messageId, userAction } });
    if (this.options.nzAnimate) {
      this.instanceState = this.instance.state = 'leave';
      this.closeTimer = setTimeout(() => {
        this.closeTimer = undefined;
        this.dispatchEvent(destroy$);
      }, 200);
    } else {
      this.dispatchEvent(destroy$);
    }
  }

  private initErase(): void {
    this.eraseTTL = this.options.nzDuration;
    this.eraseTimingStart = Date.now();
  }

  private updateTTL(): void {
    if (this.autoClose) {
      this.eraseTTL -= Date.now() - this.eraseTimingStart!;
    }
  }

  private startEraseTimeout(): void {
    if (this.eraseTTL > 0) {
      this.clearEraseTimeout();
      this.eraseTimer = setTimeout(() => this.destroy(), this.eraseTTL);
      this.eraseTimingStart = Date.now();
    } else {
      this.destroy();
    }
  }

  private clearEraseTimeout(): void {
    if (this.eraseTimer !== null) {
      clearTimeout(this.eraseTimer);
      this.eraseTimer = null;
    }
  }
}

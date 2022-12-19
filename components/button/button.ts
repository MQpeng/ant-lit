import { LitElement, html, PropertyValues } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { InputBoolean } from '../decorator/convert';
import style from '../style/button.css';
import wave from '../wave/wave.css';
import { NzWaveRenderer } from '../wave/nz-wave-renderer';
import { AttrMixin } from '../mixin/attr.mixin';

export type NzButtonType = 'primary' | 'default' | 'dashed' | 'link' | 'text' | null;
export type NzButtonShape = 'circle' | 'round' | null;
export type NzButtonSize = 'large' | 'default' | 'small';

@customElement('ant-button')
export class ButtonElement extends AttrMixin(LitElement) {
  static styles = [style, wave];

  @property() nzType: NzButtonType = 'default';
  @property() nzShape: NzButtonShape = null;
  @property() nzSize: NzButtonSize = 'default';

  @property() nzBlock: boolean = false;
  @property() nzGhost: boolean = false;
  @property() nzSearch: boolean = false;
  @property() nzLoading: boolean = false;
  @property() @InputBoolean() nzDanger: boolean = false;
  @property() disabled: boolean = false;

  private _wave: NzWaveRenderer;

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this._wave = new NzWaveRenderer(this.shadowRoot!, this.shadowRoot?.querySelector('.ant-btn')!, false);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._wave.destroy();
  }

  render() {
    const classes = {
      'ant-btn-primary': this.nzType === 'primary',
      'ant-btn-dashed': this.nzType === 'dashed',
      'ant-btn-link': this.nzType === 'link',
      'ant-btn-text': this.nzType === 'text',
      'ant-btn-circle': this.nzShape === 'circle',
      'ant-btn-round': this.nzShape === 'round',
      'ant-btn-lg': this.nzSize === 'large',
      'ant-btn-sm': this.nzSize === 'small',
      'ant-btn-dangerous': this.nzDanger,
      'ant-btn-loading': this.nzLoading,
      'ant-btn-background-ghost': this.nzGhost,
      'ant-btn-block': this.nzBlock,
      'ant-input-search-button': this.nzSearch,
      'ant-btn-rtl': this.dir === 'rtl',
      'ant-btn': true
      // '[attr.tabindex]': 'disabled ? -1 : (tabIndex === null ? null : tabIndex)',
      // '[attr.disabled]': 'disabled || null'
    };
    return html`<button
      class=${classMap(classes)}
      .nzType=${this.nzType}
      .nzShape=${this.nzShape}
      .nzSize=${this.nzSize}
      .nzDanger=${this.nzDanger}
      .nzLoading=${this.nzLoading}
      .nzGhost=${this.nzGhost}
      .nzBlock=${this.nzBlock}
      .nzSearch=${this.nzSearch}
      ><span><slot></slot></span
    ></button>`;
  }
}

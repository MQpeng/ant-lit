import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { InputBoolean } from '../decorator/convert';
import style from '../style/icon.css';
import { BooleanInput } from '../types/convert-input';
import { ThemeType, ThemeTypeUpperCase } from '@ant-design/icons-svg/lib/types';
import * as IconResource from '@ant-design/icons-svg';
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/es/helpers';
import { TitleCase } from '../common/pure.fun';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { DisShadowMixin } from '@mixin/dis.mixin';
export interface IdentifierMeta {
  name: string;
  themeSuffix?: ThemeTypeUpperCase;
}

export interface GetIdentifierType {
  (meta: IdentifierMeta): string;
}
export function getIdentifier({ name, themeSuffix }: IdentifierMeta): string {
  return (name + (themeSuffix ? `-${themeSuffix}` : ''))
    .split('-')
    .map(v => TitleCase(v))
    .join('');
}

export class IconCache {
  private cache = new Map<string, string>();
  register(identifyKey: string, value: string) {
    if (this.cache.has(identifyKey)) return;
    this.cache.set(identifyKey, value);
  }

  get(identifyKey: string) {
    const tmp = this.cache.get(identifyKey);
    if (tmp) return tmp;
    const svgHTMLString = renderIconDefinitionToSVGElement(_IconResource[identifyKey], {
      extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
    });
    this.register(identifyKey, svgHTMLString);
    return svgHTMLString;
  }
}

const _IconResource: any = IconResource;

@customElement('ant-icon')
export class IconElement extends DisShadowMixin(LitElement) {
  static styles = [
    style,
    css`
      :host {
        line-height: 0;
        text-align: center;
        vertical-align: baseline;
        display: inline-block;
      }
    `
  ];

  type: string;
  theme?: ThemeTypeUpperCase;
  twoToneColor?: string;

  // @property() nzType: NzButtonType = 'default';
  static ngAcceptInputType_nzSpin: BooleanInput;

  cacheClassName: string | null = null;
  @property()
  @InputBoolean()
  set nzSpin(value: boolean) {
    this.spin = value;
  }

  @property() nzRotate: number = 0;

  @property()
  set nzType(value: string) {
    this.type = value;
  }

  @property()
  set nzTheme(value: ThemeTypeUpperCase) {
    this.theme = value;
  }

  @property()
  set nzTwotoneColor(value: string) {
    this.twoToneColor = value;
  }

  @property()
  set nzIconfont(value: string) {
    this.iconfont = value;
  }

  hostClass?: string;

  private iconfont?: string;
  private spin: boolean = false;

  private iconService: IconCache = new IconCache();

  connectedCallback() {
    super.connectedCallback();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    const svgHTMLString = this.iconService.get(
      getIdentifier({ name: this.type, themeSuffix: this.theme || 'Outlined' })
    );
    // console.log('unsafeStatic(svgHTMLString)', unsafeStatic(svgHTMLString));

    return html`<span class="anticon">${unsafeSVG(svgHTMLString)}</span>`;
  }
}

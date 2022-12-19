
import { css } from 'lit-element';
export default css`.ant-typography {
  color: rgba(0, 0, 0, 0.85);
  overflow-wrap: break-word;
}
.ant-typography.ant-typography-secondary {
  color: rgba(0, 0, 0, 0.45);
}
.ant-typography.ant-typography-success {
  color: var(--ant-success-color);
}
.ant-typography.ant-typography-warning {
  color: var(--ant-warning-color);
}
.ant-typography.ant-typography-danger {
  color: var(--ant-error-color);
}
a.ant-typography.ant-typography-danger:active,
a.ant-typography.ant-typography-danger:focus {
  color: var(--ant-error-color-active);
}
a.ant-typography.ant-typography-danger:hover {
  color: var(--ant-error-color-hover);
}
.ant-typography.ant-typography-disabled {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
  user-select: none;
}
div.ant-typography,
.ant-typography p {
  margin-bottom: 1em;
}
h1.ant-typography,
div.ant-typography-h1,
div.ant-typography-h1 > textarea,
.ant-typography h1 {
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 38px;
  line-height: 1.23;
}
h2.ant-typography,
div.ant-typography-h2,
div.ant-typography-h2 > textarea,
.ant-typography h2 {
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 30px;
  line-height: 1.35;
}
h3.ant-typography,
div.ant-typography-h3,
div.ant-typography-h3 > textarea,
.ant-typography h3 {
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 24px;
  line-height: 1.35;
}
h4.ant-typography,
div.ant-typography-h4,
div.ant-typography-h4 > textarea,
.ant-typography h4 {
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
}
h5.ant-typography,
div.ant-typography-h5,
div.ant-typography-h5 > textarea,
.ant-typography h5 {
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
}
.ant-typography + h1.ant-typography,
.ant-typography + h2.ant-typography,
.ant-typography + h3.ant-typography,
.ant-typography + h4.ant-typography,
.ant-typography + h5.ant-typography {
  margin-top: 1.2em;
}
.ant-typography div + h1,
.ant-typography ul + h1,
.ant-typography li + h1,
.ant-typography p + h1,
.ant-typography h1 + h1,
.ant-typography h2 + h1,
.ant-typography h3 + h1,
.ant-typography h4 + h1,
.ant-typography h5 + h1,
.ant-typography div + h2,
.ant-typography ul + h2,
.ant-typography li + h2,
.ant-typography p + h2,
.ant-typography h1 + h2,
.ant-typography h2 + h2,
.ant-typography h3 + h2,
.ant-typography h4 + h2,
.ant-typography h5 + h2,
.ant-typography div + h3,
.ant-typography ul + h3,
.ant-typography li + h3,
.ant-typography p + h3,
.ant-typography h1 + h3,
.ant-typography h2 + h3,
.ant-typography h3 + h3,
.ant-typography h4 + h3,
.ant-typography h5 + h3,
.ant-typography div + h4,
.ant-typography ul + h4,
.ant-typography li + h4,
.ant-typography p + h4,
.ant-typography h1 + h4,
.ant-typography h2 + h4,
.ant-typography h3 + h4,
.ant-typography h4 + h4,
.ant-typography h5 + h4,
.ant-typography div + h5,
.ant-typography ul + h5,
.ant-typography li + h5,
.ant-typography p + h5,
.ant-typography h1 + h5,
.ant-typography h2 + h5,
.ant-typography h3 + h5,
.ant-typography h4 + h5,
.ant-typography h5 + h5 {
  margin-top: 1.2em;
}
a.ant-typography-ellipsis,
span.ant-typography-ellipsis {
  display: inline-block;
  max-width: 100%;
}
a.ant-typography,
.ant-typography a {
  color: var(--ant-primary-color);
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
  text-decoration: none;
}
a.ant-typography:focus,
.ant-typography a:focus,
a.ant-typography:hover,
.ant-typography a:hover {
  color: var(--ant-primary-color-hover);
}
a.ant-typography:active,
.ant-typography a:active {
  color: var(--ant-primary-color-active);
}
a.ant-typography:active,
.ant-typography a:active,
a.ant-typography:hover,
.ant-typography a:hover {
  text-decoration: none;
}
a.ant-typography[disabled],
.ant-typography a[disabled],
a.ant-typography.ant-typography-disabled,
.ant-typography a.ant-typography-disabled {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
a.ant-typography[disabled]:active,
.ant-typography a[disabled]:active,
a.ant-typography.ant-typography-disabled:active,
.ant-typography a.ant-typography-disabled:active,
a.ant-typography[disabled]:hover,
.ant-typography a[disabled]:hover,
a.ant-typography.ant-typography-disabled:hover,
.ant-typography a.ant-typography-disabled:hover {
  color: rgba(0, 0, 0, 0.25);
}
a.ant-typography[disabled]:active,
.ant-typography a[disabled]:active,
a.ant-typography.ant-typography-disabled:active,
.ant-typography a.ant-typography-disabled:active {
  pointer-events: none;
}
.ant-typography code {
  margin: 0 0.2em;
  padding: 0.2em 0.4em 0.1em;
  font-size: 85%;
  background: rgba(150, 150, 150, 0.1);
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 3px;
}
.ant-typography kbd {
  margin: 0 0.2em;
  padding: 0.15em 0.4em 0.1em;
  font-size: 90%;
  background: rgba(150, 150, 150, 0.06);
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-bottom-width: 2px;
  border-radius: 3px;
}
.ant-typography mark {
  padding: 0;
  background-color: #ffe58f;
}
.ant-typography u,
.ant-typography ins {
  text-decoration: underline;
  text-decoration-skip-ink: auto;
}
.ant-typography s,
.ant-typography del {
  text-decoration: line-through;
}
.ant-typography strong {
  font-weight: 600;
}
.ant-typography-expand,
.ant-typography-edit,
.ant-typography-copy {
  color: var(--ant-primary-color);
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
  margin-left: 4px;
}
.ant-typography-expand:focus,
.ant-typography-edit:focus,
.ant-typography-copy:focus,
.ant-typography-expand:hover,
.ant-typography-edit:hover,
.ant-typography-copy:hover {
  color: var(--ant-primary-color-hover);
}
.ant-typography-expand:active,
.ant-typography-edit:active,
.ant-typography-copy:active {
  color: var(--ant-primary-color-active);
}
.ant-typography-copy-success,
.ant-typography-copy-success:hover,
.ant-typography-copy-success:focus {
  color: var(--ant-success-color);
}
.ant-typography-edit-content {
  position: relative;
}
div.ant-typography-edit-content {
  left: -12px;
  margin-top: -5px;
  margin-bottom: calc(1em - 4px - 1px);
}
.ant-typography-edit-content-confirm {
  position: absolute;
  right: 10px;
  bottom: 8px;
  color: rgba(0, 0, 0, 0.45);
  font-weight: normal;
  font-size: 14px;
  font-style: normal;
  pointer-events: none;
}
.ant-typography-edit-content textarea {
  height: 1em;
  margin: 0 !important;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -moz-transition: none;
}
.ant-typography ul,
.ant-typography ol {
  margin: 0 0 1em;
  padding: 0;
}
.ant-typography ul li,
.ant-typography ol li {
  margin: 0 0 0 20px;
  padding: 0 0 0 4px;
}
.ant-typography ul {
  list-style-type: circle;
}
.ant-typography ul ul {
  list-style-type: disc;
}
.ant-typography ol {
  list-style-type: decimal;
}
.ant-typography pre,
.ant-typography blockquote {
  margin: 1em 0;
}
.ant-typography pre {
  padding: 0.4em 0.6em;
  white-space: pre-wrap;
  word-wrap: break-word;
  background: rgba(150, 150, 150, 0.1);
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 3px;
}
.ant-typography pre code {
  display: inline;
  margin: 0;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  background: transparent;
  border: 0;
}
.ant-typography blockquote {
  padding: 0 0 0 0.6em;
  border-left: 4px solid rgba(100, 100, 100, 0.2);
  opacity: 0.85;
}
.ant-typography-single-line {
  white-space: nowrap;
}
.ant-typography-ellipsis-single-line {
  overflow: hidden;
  text-overflow: ellipsis;
}
a.ant-typography-ellipsis-single-line,
span.ant-typography-ellipsis-single-line {
  vertical-align: bottom;
}
.ant-typography-ellipsis-multiple-line {
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
}
.ant-typography-rtl {
  direction: rtl;
}
.ant-typography-rtl .ant-typography-expand,
.ant-typography-rtl .ant-typography-edit,
.ant-typography-rtl .ant-typography-copy {
  margin-right: 4px;
  margin-left: 0;
}
.ant-typography-rtl .ant-typography-expand {
  float: left;
}
div.ant-typography-edit-content.ant-typography-rtl {
  right: -12px;
  left: auto;
}
.ant-typography-rtl .ant-typography-edit-content-confirm {
  right: auto;
  left: 10px;
}
.ant-typography-rtl.ant-typography ul li,
.ant-typography-rtl.ant-typography ol li {
  margin: 0 20px 0 0;
  padding: 0 4px 0 0;
}
.ant-tooltip {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  position: absolute;
  z-index: 1070;
  display: block;
  width: max-content;
  width: intrinsic;
  max-width: 250px;
  visibility: visible;
}
.ant-tooltip-content {
  position: relative;
}
.ant-tooltip-hidden {
  display: none;
}
.ant-tooltip-placement-top,
.ant-tooltip-placement-topLeft,
.ant-tooltip-placement-topRight {
  padding-bottom: 14.3137085px;
}
.ant-tooltip-placement-right,
.ant-tooltip-placement-rightTop,
.ant-tooltip-placement-rightBottom {
  padding-left: 14.3137085px;
}
.ant-tooltip-placement-bottom,
.ant-tooltip-placement-bottomLeft,
.ant-tooltip-placement-bottomRight {
  padding-top: 14.3137085px;
}
.ant-tooltip-placement-left,
.ant-tooltip-placement-leftTop,
.ant-tooltip-placement-leftBottom {
  padding-right: 14.3137085px;
}
.ant-tooltip-inner {
  min-width: 30px;
  min-height: 32px;
  padding: 6px 8px;
  color: #fff;
  text-align: left;
  text-decoration: none;
  word-wrap: break-word;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
.ant-tooltip-arrow {
  position: absolute;
  z-index: 2;
  display: block;
  width: 22px;
  height: 22px;
  overflow: hidden;
  background: transparent;
  pointer-events: none;
}
.ant-tooltip-arrow-content {
  --antd-arrow-background-color: linear-gradient(to right bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75));
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 11.3137085px;
  height: 11.3137085px;
  margin: auto;
  background-color: transparent;
  content: '';
  pointer-events: auto;
  border-radius: 0 0 2px;
  pointer-events: none;
}
.ant-tooltip-arrow-content::before {
  position: absolute;
  top: -11.3137085px;
  left: -11.3137085px;
  width: 33.9411255px;
  height: 33.9411255px;
  background: var(--antd-arrow-background-color);
  background-repeat: no-repeat;
  background-position: -10px -10px;
  content: '';
  clip-path: path('M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z');
}
.ant-tooltip-placement-top .ant-tooltip-arrow,
.ant-tooltip-placement-topLeft .ant-tooltip-arrow,
.ant-tooltip-placement-topRight .ant-tooltip-arrow {
  bottom: 0;
  transform: translateY(100%);
}
.ant-tooltip-placement-top .ant-tooltip-arrow-content,
.ant-tooltip-placement-topLeft .ant-tooltip-arrow-content,
.ant-tooltip-placement-topRight .ant-tooltip-arrow-content {
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
  transform: translateY(-11px) rotate(45deg);
}
.ant-tooltip-placement-top .ant-tooltip-arrow {
  left: 50%;
  transform: translateY(100%) translateX(-50%);
}
.ant-tooltip-placement-topLeft .ant-tooltip-arrow {
  left: 13px;
}
.ant-tooltip-placement-topRight .ant-tooltip-arrow {
  right: 13px;
}
.ant-tooltip-placement-right .ant-tooltip-arrow,
.ant-tooltip-placement-rightTop .ant-tooltip-arrow,
.ant-tooltip-placement-rightBottom .ant-tooltip-arrow {
  left: 0;
  transform: translateX(-100%);
}
.ant-tooltip-placement-right .ant-tooltip-arrow-content,
.ant-tooltip-placement-rightTop .ant-tooltip-arrow-content,
.ant-tooltip-placement-rightBottom .ant-tooltip-arrow-content {
  box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
  transform: translateX(11px) rotate(135deg);
}
.ant-tooltip-placement-right .ant-tooltip-arrow {
  top: 50%;
  transform: translateX(-100%) translateY(-50%);
}
.ant-tooltip-placement-rightTop .ant-tooltip-arrow {
  top: 5px;
}
.ant-tooltip-placement-rightBottom .ant-tooltip-arrow {
  bottom: 5px;
}
.ant-tooltip-placement-left .ant-tooltip-arrow,
.ant-tooltip-placement-leftTop .ant-tooltip-arrow,
.ant-tooltip-placement-leftBottom .ant-tooltip-arrow {
  right: 0;
  transform: translateX(100%);
}
.ant-tooltip-placement-left .ant-tooltip-arrow-content,
.ant-tooltip-placement-leftTop .ant-tooltip-arrow-content,
.ant-tooltip-placement-leftBottom .ant-tooltip-arrow-content {
  box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
  transform: translateX(-11px) rotate(315deg);
}
.ant-tooltip-placement-left .ant-tooltip-arrow {
  top: 50%;
  transform: translateX(100%) translateY(-50%);
}
.ant-tooltip-placement-leftTop .ant-tooltip-arrow {
  top: 5px;
}
.ant-tooltip-placement-leftBottom .ant-tooltip-arrow {
  bottom: 5px;
}
.ant-tooltip-placement-bottom .ant-tooltip-arrow,
.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,
.ant-tooltip-placement-bottomRight .ant-tooltip-arrow {
  top: 0;
  transform: translateY(-100%);
}
.ant-tooltip-placement-bottom .ant-tooltip-arrow-content,
.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow-content,
.ant-tooltip-placement-bottomRight .ant-tooltip-arrow-content {
  box-shadow: -3px -3px 7px rgba(0, 0, 0, 0.07);
  transform: translateY(11px) rotate(225deg);
}
.ant-tooltip-placement-bottom .ant-tooltip-arrow {
  left: 50%;
  transform: translateY(-100%) translateX(-50%);
}
.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow {
  left: 13px;
}
.ant-tooltip-placement-bottomRight .ant-tooltip-arrow {
  right: 13px;
}
.ant-tooltip-pink .ant-tooltip-inner {
  background-color: #eb2f96;
}
.ant-tooltip-pink .ant-tooltip-arrow-content::before {
  background: #eb2f96;
}
.ant-tooltip-magenta .ant-tooltip-inner {
  background-color: #eb2f96;
}
.ant-tooltip-magenta .ant-tooltip-arrow-content::before {
  background: #eb2f96;
}
.ant-tooltip-red .ant-tooltip-inner {
  background-color: #f5222d;
}
.ant-tooltip-red .ant-tooltip-arrow-content::before {
  background: #f5222d;
}
.ant-tooltip-volcano .ant-tooltip-inner {
  background-color: #fa541c;
}
.ant-tooltip-volcano .ant-tooltip-arrow-content::before {
  background: #fa541c;
}
.ant-tooltip-orange .ant-tooltip-inner {
  background-color: #fa8c16;
}
.ant-tooltip-orange .ant-tooltip-arrow-content::before {
  background: #fa8c16;
}
.ant-tooltip-yellow .ant-tooltip-inner {
  background-color: #fadb14;
}
.ant-tooltip-yellow .ant-tooltip-arrow-content::before {
  background: #fadb14;
}
.ant-tooltip-gold .ant-tooltip-inner {
  background-color: #faad14;
}
.ant-tooltip-gold .ant-tooltip-arrow-content::before {
  background: #faad14;
}
.ant-tooltip-cyan .ant-tooltip-inner {
  background-color: #13c2c2;
}
.ant-tooltip-cyan .ant-tooltip-arrow-content::before {
  background: #13c2c2;
}
.ant-tooltip-lime .ant-tooltip-inner {
  background-color: #a0d911;
}
.ant-tooltip-lime .ant-tooltip-arrow-content::before {
  background: #a0d911;
}
.ant-tooltip-green .ant-tooltip-inner {
  background-color: #52c41a;
}
.ant-tooltip-green .ant-tooltip-arrow-content::before {
  background: #52c41a;
}
.ant-tooltip-blue .ant-tooltip-inner {
  background-color: #1890ff;
}
.ant-tooltip-blue .ant-tooltip-arrow-content::before {
  background: #1890ff;
}
.ant-tooltip-geekblue .ant-tooltip-inner {
  background-color: #2f54eb;
}
.ant-tooltip-geekblue .ant-tooltip-arrow-content::before {
  background: #2f54eb;
}
.ant-tooltip-purple .ant-tooltip-inner {
  background-color: #722ed1;
}
.ant-tooltip-purple .ant-tooltip-arrow-content::before {
  background: #722ed1;
}
.ant-tooltip-rtl {
  direction: rtl;
}
.ant-tooltip-rtl .ant-tooltip-inner {
  text-align: right;
}
.ant-tooltip {
  position: relative;
}
.ant-input-affix-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  /* stylelint-disable-next-line selector-no-vendor-prefix */
  display: inline-flex;
}
.ant-input-affix-wrapper::-moz-placeholder {
  opacity: 1;
}
.ant-input-affix-wrapper::placeholder {
  color: #bfbfbf;
  user-select: none;
}
.ant-input-affix-wrapper:placeholder-shown {
  text-overflow: ellipsis;
}
.ant-input-affix-wrapper:hover {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
}
.ant-input-rtl .ant-input-affix-wrapper:hover {
  border-right-width: 0;
  border-left-width: 1px !important;
}
.ant-input-affix-wrapper:focus,
.ant-input-affix-wrapper-focused {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-rtl .ant-input-affix-wrapper:focus,
.ant-input-rtl .ant-input-affix-wrapper-focused {
  border-right-width: 0;
  border-left-width: 1px !important;
}
.ant-input-affix-wrapper-disabled {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-input-affix-wrapper-disabled:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-input-affix-wrapper[disabled] {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-input-affix-wrapper[disabled]:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-input-affix-wrapper-borderless,
.ant-input-affix-wrapper-borderless:hover,
.ant-input-affix-wrapper-borderless:focus,
.ant-input-affix-wrapper-borderless-focused,
.ant-input-affix-wrapper-borderless-disabled,
.ant-input-affix-wrapper-borderless[disabled] {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
textarea.ant-input-affix-wrapper {
  max-width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5715;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
}
.ant-input-affix-wrapper-lg {
  padding: 6.5px 11px;
  font-size: 16px;
}
.ant-input-affix-wrapper-sm {
  padding: 0px 7px;
}
.ant-input-affix-wrapper-rtl {
  direction: rtl;
}
.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
  z-index: 1;
}
.ant-input-rtl .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
  border-right-width: 0;
  border-left-width: 1px !important;
}
.ant-input-search-with-button .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
  z-index: 0;
}
.ant-input-affix-wrapper-focused,
.ant-input-affix-wrapper:focus {
  z-index: 1;
}
.ant-input-affix-wrapper-disabled .ant-input[disabled] {
  background: transparent;
}
.ant-input-affix-wrapper > input.ant-input {
  padding: 0;
  border: none;
  outline: none;
}
.ant-input-affix-wrapper > input.ant-input:focus {
  box-shadow: none !important;
}
.ant-input-affix-wrapper::before {
  width: 0;
  visibility: hidden;
  content: '\a0';
}
.ant-input-prefix,
.ant-input-suffix {
  display: flex;
  flex: none;
  align-items: center;
}
.ant-input-prefix > *:not(:last-child),
.ant-input-suffix > *:not(:last-child) {
  margin-right: 8px;
}
.ant-input-show-count-suffix {
  color: rgba(0, 0, 0, 0.45);
}
.ant-input-show-count-has-suffix {
  margin-right: 2px;
}
.ant-input-prefix {
  margin-right: 4px;
}
.ant-input-suffix {
  margin-left: 4px;
}
.anticon.ant-input-clear-icon,
.ant-input-clear-icon {
  margin: 0;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  vertical-align: -1px;
  cursor: pointer;
  transition: color 0.3s;
}
.anticon.ant-input-clear-icon:hover,
.ant-input-clear-icon:hover {
  color: rgba(0, 0, 0, 0.45);
}
.anticon.ant-input-clear-icon:active,
.ant-input-clear-icon:active {
  color: rgba(0, 0, 0, 0.85);
}
.anticon.ant-input-clear-icon-hidden,
.ant-input-clear-icon-hidden {
  visibility: hidden;
}
.anticon.ant-input-clear-icon-has-suffix,
.ant-input-clear-icon-has-suffix {
  margin: 0 4px;
}
.ant-input-affix-wrapper-textarea-with-clear-btn {
  padding: 0 !important;
  border: 0 !important;
}
.ant-input-affix-wrapper-textarea-with-clear-btn .ant-input-clear-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
}
.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
  background: #fff;
  border-color: var(--ant-error-color);
}
.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus,
.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input-focused {
  border-color: var(--ant-error-color-hover);
  box-shadow: 0 0 0 2px var(--ant-error-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-status-error .ant-input-prefix {
  color: var(--ant-error-color);
}
.ant-input-status-warning:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
.ant-input-status-warning:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
  background: #fff;
  border-color: var(--ant-warning-color);
}
.ant-input-status-warning:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus,
.ant-input-status-warning:not(.ant-input-disabled):not(.ant-input-borderless).ant-input-focused {
  border-color: var(--ant-warning-color-hover);
  box-shadow: 0 0 0 2px var(--ant-warning-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-status-warning .ant-input-prefix {
  color: var(--ant-warning-color);
}
.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover {
  background: #fff;
  border-color: var(--ant-error-color);
}
.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:focus,
.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper-focused {
  border-color: var(--ant-error-color-hover);
  box-shadow: 0 0 0 2px var(--ant-error-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-affix-wrapper-status-error .ant-input-prefix {
  color: var(--ant-error-color);
}
.ant-input-affix-wrapper-status-warning:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
.ant-input-affix-wrapper-status-warning:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover {
  background: #fff;
  border-color: var(--ant-warning-color);
}
.ant-input-affix-wrapper-status-warning:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:focus,
.ant-input-affix-wrapper-status-warning:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper-focused {
  border-color: var(--ant-warning-color-hover);
  box-shadow: 0 0 0 2px var(--ant-warning-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-affix-wrapper-status-warning .ant-input-prefix {
  color: var(--ant-warning-color);
}
.ant-input-textarea-status-error.ant-input-textarea-has-feedback .ant-input,
.ant-input-textarea-status-warning.ant-input-textarea-has-feedback .ant-input,
.ant-input-textarea-status-success.ant-input-textarea-has-feedback .ant-input,
.ant-input-textarea-status-validating.ant-input-textarea-has-feedback .ant-input {
  padding-right: 24px;
}
.ant-input-group-wrapper-status-error .ant-input-group-addon {
  color: var(--ant-error-color);
  border-color: var(--ant-error-color);
}
.ant-input-group-wrapper-status-warning .ant-input-group-addon {
  color: var(--ant-warning-color);
  border-color: var(--ant-warning-color);
}
.ant-input {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  /* stylelint-disable-next-line selector-no-vendor-prefix */
}
.ant-input::-moz-placeholder {
  opacity: 1;
}
.ant-input::placeholder {
  color: #bfbfbf;
  user-select: none;
}
.ant-input:placeholder-shown {
  text-overflow: ellipsis;
}
.ant-input:hover {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
}
.ant-input-rtl .ant-input:hover {
  border-right-width: 0;
  border-left-width: 1px !important;
}
.ant-input:focus,
.ant-input-focused {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-rtl .ant-input:focus,
.ant-input-rtl .ant-input-focused {
  border-right-width: 0;
  border-left-width: 1px !important;
}
.ant-input-disabled {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-input-disabled:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-input[disabled] {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-input[disabled]:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-input-borderless,
.ant-input-borderless:hover,
.ant-input-borderless:focus,
.ant-input-borderless-focused,
.ant-input-borderless-disabled,
.ant-input-borderless[disabled] {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
textarea.ant-input {
  max-width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5715;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
}
.ant-input-lg {
  padding: 6.5px 11px;
  font-size: 16px;
}
.ant-input-sm {
  padding: 0px 7px;
}
.ant-input-rtl {
  direction: rtl;
}
.ant-input-group {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}
.ant-input-group[class*='col-'] {
  float: none;
  padding-right: 0;
  padding-left: 0;
}
.ant-input-group > [class*='col-'] {
  padding-right: 8px;
}
.ant-input-group > [class*='col-']:last-child {
  padding-right: 0;
}
.ant-input-group-addon,
.ant-input-group-wrap,
.ant-input-group > .ant-input {
  display: table-cell;
}
.ant-input-group-addon:not(:first-child):not(:last-child),
.ant-input-group-wrap:not(:first-child):not(:last-child),
.ant-input-group > .ant-input:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.ant-input-group-addon,
.ant-input-group-wrap {
  width: 1px;
  white-space: nowrap;
  vertical-align: middle;
}
.ant-input-group-wrap > * {
  display: block !important;
}
.ant-input-group .ant-input {
  float: left;
  width: 100%;
  margin-bottom: 0;
  text-align: inherit;
}
.ant-input-group .ant-input:focus {
  z-index: 1;
  border-right-width: 1px;
}
.ant-input-group .ant-input:hover {
  z-index: 1;
  border-right-width: 1px;
}
.ant-input-search-with-button .ant-input-group .ant-input:hover {
  z-index: 0;
}
.ant-input-group-addon {
  position: relative;
  padding: 0 11px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
}
.ant-input-group-addon .ant-select {
  margin: -5px -11px;
}
.ant-input-group-addon .ant-select.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
  background-color: inherit;
  border: 1px solid transparent;
  box-shadow: none;
}
.ant-input-group-addon .ant-select-open .ant-select-selector,
.ant-input-group-addon .ant-select-focused .ant-select-selector {
  color: var(--ant-primary-color);
}
.ant-input-group-addon .ant-cascader-picker {
  margin: -9px -12px;
  background-color: transparent;
}
.ant-input-group-addon .ant-cascader-picker .ant-cascader-input {
  text-align: left;
  border: 0;
  box-shadow: none;
}
.ant-input-group > .ant-input:first-child,
.ant-input-group-addon:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.ant-input-group > .ant-input:first-child .ant-select .ant-select-selector,
.ant-input-group-addon:first-child .ant-select .ant-select-selector {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.ant-input-group > .ant-input-affix-wrapper:not(:first-child) .ant-input {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.ant-input-group > .ant-input-affix-wrapper:not(:last-child) .ant-input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.ant-input-group-addon:first-child {
  border-right: 0;
}
.ant-input-group-addon:last-child {
  border-left: 0;
}
.ant-input-group > .ant-input:last-child,
.ant-input-group-addon:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.ant-input-group > .ant-input:last-child .ant-select .ant-select-selector,
.ant-input-group-addon:last-child .ant-select .ant-select-selector {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.ant-input-group-lg .ant-input,
.ant-input-group-lg > .ant-input-group-addon {
  padding: 6.5px 11px;
  font-size: 16px;
}
.ant-input-group-sm .ant-input,
.ant-input-group-sm > .ant-input-group-addon {
  padding: 0px 7px;
}
.ant-input-group-lg .ant-select-single .ant-select-selector {
  height: 40px;
}
.ant-input-group-sm .ant-select-single .ant-select-selector {
  height: 24px;
}
.ant-input-group .ant-input-affix-wrapper:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.ant-input-search .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.ant-input-group .ant-input-affix-wrapper:not(:first-child),
.ant-input-search .ant-input-group .ant-input-affix-wrapper:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.ant-input-group.ant-input-group-compact {
  display: block;
}
.ant-input-group.ant-input-group-compact::before {
  display: table;
  content: '';
}
.ant-input-group.ant-input-group-compact::after {
  display: table;
  clear: both;
  content: '';
}
.ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child),
.ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child),
.ant-input-group.ant-input-group-compact > .ant-input:not(:first-child):not(:last-child) {
  border-right-width: 1px;
}
.ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child):hover,
.ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child):hover,
.ant-input-group.ant-input-group-compact > .ant-input:not(:first-child):not(:last-child):hover {
  z-index: 1;
}
.ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child):focus,
.ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child):focus,
.ant-input-group.ant-input-group-compact > .ant-input:not(:first-child):not(:last-child):focus {
  z-index: 1;
}
.ant-input-group.ant-input-group-compact > * {
  display: inline-block;
  float: none;
  vertical-align: top;
  border-radius: 0;
}
.ant-input-group.ant-input-group-compact > .ant-input-affix-wrapper {
  display: inline-flex;
}
.ant-input-group.ant-input-group-compact > .ant-picker-range {
  display: inline-flex;
}
.ant-input-group.ant-input-group-compact > *:not(:last-child) {
  margin-right: -1px;
  border-right-width: 1px;
}
.ant-input-group.ant-input-group-compact .ant-input {
  float: none;
}
.ant-input-group.ant-input-group-compact > .ant-select > .ant-select-selector,
.ant-input-group.ant-input-group-compact > .ant-select-auto-complete .ant-input,
.ant-input-group.ant-input-group-compact > .ant-cascader-picker .ant-input,
.ant-input-group.ant-input-group-compact > .ant-input-group-wrapper .ant-input {
  border-right-width: 1px;
  border-radius: 0;
}
.ant-input-group.ant-input-group-compact > .ant-select > .ant-select-selector:hover,
.ant-input-group.ant-input-group-compact > .ant-select-auto-complete .ant-input:hover,
.ant-input-group.ant-input-group-compact > .ant-cascader-picker .ant-input:hover,
.ant-input-group.ant-input-group-compact > .ant-input-group-wrapper .ant-input:hover {
  z-index: 1;
}
.ant-input-group.ant-input-group-compact > .ant-select > .ant-select-selector:focus,
.ant-input-group.ant-input-group-compact > .ant-select-auto-complete .ant-input:focus,
.ant-input-group.ant-input-group-compact > .ant-cascader-picker .ant-input:focus,
.ant-input-group.ant-input-group-compact > .ant-input-group-wrapper .ant-input:focus {
  z-index: 1;
}
.ant-input-group.ant-input-group-compact > .ant-select-focused {
  z-index: 1;
}
.ant-input-group.ant-input-group-compact > .ant-select > .ant-select-arrow {
  z-index: 1;
}
.ant-input-group.ant-input-group-compact > *:first-child,
.ant-input-group.ant-input-group-compact > .ant-select:first-child > .ant-select-selector,
.ant-input-group.ant-input-group-compact > .ant-select-auto-complete:first-child .ant-input,
.ant-input-group.ant-input-group-compact > .ant-cascader-picker:first-child .ant-input {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.ant-input-group.ant-input-group-compact > *:last-child,
.ant-input-group.ant-input-group-compact > .ant-select:last-child > .ant-select-selector,
.ant-input-group.ant-input-group-compact > .ant-cascader-picker:last-child .ant-input,
.ant-input-group.ant-input-group-compact > .ant-cascader-picker-focused:last-child .ant-input {
  border-right-width: 1px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.ant-input-group.ant-input-group-compact > .ant-select-auto-complete .ant-input {
  vertical-align: top;
}
.ant-input-group.ant-input-group-compact .ant-input-group-wrapper + .ant-input-group-wrapper {
  margin-left: -1px;
}
.ant-input-group.ant-input-group-compact .ant-input-group-wrapper + .ant-input-group-wrapper .ant-input-affix-wrapper {
  border-radius: 0;
}
.ant-input-group.ant-input-group-compact .ant-input-group-wrapper:not(:last-child).ant-input-search > .ant-input-group > .ant-input-group-addon > .ant-input-search-button {
  border-radius: 0;
}
.ant-input-group.ant-input-group-compact .ant-input-group-wrapper:not(:last-child).ant-input-search > .ant-input-group > .ant-input {
  border-radius: 2px 0 0 2px;
}
.ant-input-group > .ant-input-rtl:first-child,
.ant-input-group-rtl .ant-input-group-addon:first-child {
  border-radius: 0 2px 2px 0;
}
.ant-input-group-rtl .ant-input-group-addon:first-child {
  border-right: 1px solid #d9d9d9;
  border-left: 0;
}
.ant-input-group-rtl .ant-input-group-addon:last-child {
  border-right: 0;
  border-left: 1px solid #d9d9d9;
}
.ant-input-group-rtl.ant-input-group > .ant-input:last-child,
.ant-input-group-rtl.ant-input-group-addon:last-child {
  border-radius: 2px 0 0 2px;
}
.ant-input-group-rtl.ant-input-group .ant-input-affix-wrapper:not(:first-child) {
  border-radius: 2px 0 0 2px;
}
.ant-input-group-rtl.ant-input-group .ant-input-affix-wrapper:not(:last-child) {
  border-radius: 0 2px 2px 0;
}
.ant-input-group-rtl.ant-input-group.ant-input-group-compact > *:not(:last-child) {
  margin-right: 0;
  margin-left: -1px;
  border-left-width: 1px;
}
.ant-input-group-rtl.ant-input-group.ant-input-group-compact > *:first-child,
.ant-input-group-rtl.ant-input-group.ant-input-group-compact > .ant-select:first-child > .ant-select-selector,
.ant-input-group-rtl.ant-input-group.ant-input-group-compact > .ant-select-auto-complete:first-child .ant-input,
.ant-input-group-rtl.ant-input-group.ant-input-group-compact > .ant-cascader-picker:first-child .ant-input {
  border-radius: 0 2px 2px 0;
}
.ant-input-group-rtl.ant-input-group.ant-input-group-compact > *:last-child,
.ant-input-group-rtl.ant-input-group.ant-input-group-compact > .ant-select:last-child > .ant-select-selector,
.ant-input-group-rtl.ant-input-group.ant-input-group-compact > .ant-select-auto-complete:last-child .ant-input,
.ant-input-group-rtl.ant-input-group.ant-input-group-compact > .ant-cascader-picker:last-child .ant-input,
.ant-input-group-rtl.ant-input-group.ant-input-group-compact > .ant-cascader-picker-focused:last-child .ant-input {
  border-left-width: 1px;
  border-radius: 2px 0 0 2px;
}
.ant-input-group.ant-input-group-compact .ant-input-group-wrapper-rtl + .ant-input-group-wrapper-rtl {
  margin-right: -1px;
  margin-left: 0;
}
.ant-input-group.ant-input-group-compact .ant-input-group-wrapper-rtl:not(:last-child).ant-input-search > .ant-input-group > .ant-input {
  border-radius: 0 2px 2px 0;
}
.ant-input-group-wrapper {
  display: inline-block;
  width: 100%;
  text-align: start;
  vertical-align: top;
}
.ant-input-password-icon.anticon {
  color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
  transition: all 0.3s;
}
.ant-input-password-icon.anticon:hover {
  color: rgba(0, 0, 0, 0.85);
}
.ant-input[type='color'] {
  height: 32px;
}
.ant-input[type='color'].ant-input-lg {
  height: 40px;
}
.ant-input[type='color'].ant-input-sm {
  height: 24px;
  padding-top: 3px;
  padding-bottom: 3px;
}
.ant-input-textarea-show-count > .ant-input {
  height: 100%;
}
.ant-input-textarea-show-count::after {
  float: right;
  color: rgba(0, 0, 0, 0.45);
  white-space: nowrap;
  content: attr(data-count);
  pointer-events: none;
}
.ant-input-textarea-show-count.ant-input-textarea-in-form-item::after {
  margin-bottom: -22px;
}
.ant-input-textarea-suffix {
  position: absolute;
  top: 0;
  right: 11px;
  bottom: 0;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  margin: auto;
}
.ant-input-search .ant-input:hover,
.ant-input-search .ant-input:focus {
  border-color: var(--ant-primary-5);
}
.ant-input-search .ant-input:hover + .ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary),
.ant-input-search .ant-input:focus + .ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary) {
  border-left-color: var(--ant-primary-5);
}
.ant-input-search .ant-input-affix-wrapper {
  border-radius: 0;
}
.ant-input-search .ant-input-lg {
  line-height: 1.5713;
}
.ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
  left: -1px;
  padding: 0;
  border: 0;
}
.ant-input-search > .ant-input-group > .ant-input-group-addon:last-child .ant-input-search-button {
  padding-top: 0;
  padding-bottom: 0;
  border-radius: 0 2px 2px 0;
}
.ant-input-search > .ant-input-group > .ant-input-group-addon:last-child .ant-input-search-button:not(.ant-btn-primary) {
  color: rgba(0, 0, 0, 0.45);
}
.ant-input-search > .ant-input-group > .ant-input-group-addon:last-child .ant-input-search-button:not(.ant-btn-primary).ant-btn-loading::before {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.ant-input-search-button {
  height: 32px;
}
.ant-input-search-button:hover,
.ant-input-search-button:focus {
  z-index: 1;
}
.ant-input-search-large .ant-input-search-button {
  height: 40px;
}
.ant-input-search-small .ant-input-search-button {
  height: 24px;
}
.ant-input-group-wrapper-rtl {
  direction: rtl;
}
.ant-input-group-rtl {
  direction: rtl;
}
.ant-input-affix-wrapper.ant-input-affix-wrapper-rtl > input.ant-input {
  border: none;
  outline: none;
}
.ant-input-affix-wrapper-rtl .ant-input-prefix {
  margin: 0 0 0 4px;
}
.ant-input-affix-wrapper-rtl .ant-input-suffix {
  margin: 0 4px 0 0;
}
.ant-input-textarea-rtl {
  direction: rtl;
}
.ant-input-textarea-rtl.ant-input-textarea-show-count::after {
  text-align: left;
}
.ant-input-affix-wrapper-rtl .ant-input-clear-icon-has-suffix {
  margin-right: 0;
  margin-left: 4px;
}
.ant-input-affix-wrapper-rtl .ant-input-clear-icon {
  right: auto;
  left: 8px;
}
.ant-input-search-rtl {
  direction: rtl;
}
.ant-input-search-rtl .ant-input:hover + .ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary),
.ant-input-search-rtl .ant-input:focus + .ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary) {
  border-right-color: var(--ant-primary-5);
  border-left-color: #d9d9d9;
}
.ant-input-search-rtl > .ant-input-group > .ant-input-affix-wrapper:hover,
.ant-input-search-rtl > .ant-input-group > .ant-input-affix-wrapper-focused {
  border-right-color: var(--ant-primary-5);
}
.ant-input-search-rtl > .ant-input-group > .ant-input-group-addon {
  right: -1px;
  left: auto;
}
.ant-input-search-rtl > .ant-input-group > .ant-input-group-addon .ant-input-search-button {
  border-radius: 2px 0 0 2px;
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ant-input {
    height: 32px;
  }
  .ant-input-lg {
    height: 40px;
  }
  .ant-input-sm {
    height: 24px;
  }
  .ant-input-affix-wrapper > input.ant-input {
    height: auto;
  }
}
textarea.nz-textarea-autosize-measuring {
  height: auto !important;
  overflow: hidden !important;
  padding: 2px 0 !important;
}
.ant-input-search-rtl.ant-input-search-enter-button + .ant-input-group-addon .ant-input-search-button.ant-btn-icon-only,
.ant-input-search-rtl.ant-input-search-enter-button input + .ant-input-group-addon .ant-input-search-button.ant-btn-icon-only {
  width: 32px;
  height: 32px;
}
.ant-input-search-rtl.ant-input-search-enter-button + .ant-input-group-addon .ant-input-search-button.ant-btn-icon-only.ant-btn-sm,
.ant-input-search-rtl.ant-input-search-enter-button input + .ant-input-group-addon .ant-input-search-button.ant-btn-icon-only.ant-btn-sm {
  width: 24px;
  height: 24px;
}
.ant-input-search-rtl.ant-input-search-enter-button + .ant-input-group-addon .ant-input-search-button.ant-btn-icon-only.ant-btn-lg,
.ant-input-search-rtl.ant-input-search-enter-button input + .ant-input-group-addon .ant-input-search-button.ant-btn-icon-only.ant-btn-lg {
  width: 40px;
  height: 40px;
}
.ant-input-affix-wrapper-textarea-with-clear-btn .ant-input-suffix {
  margin-left: 0;
}
nz-form-item-feedback-icon.ant-input-suffix {
  display: flex;
  flex: none;
  align-items: center;
  pointer-events: none;
}
nz-form-item-feedback-icon.ant-input-suffix {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  height: 100%;
  margin-right: 12px;
  margin-left: 4px;
}
.ant-input-status-error.ant-input-has-feedback,
.ant-input-status-warning.ant-input-has-feedback,
.ant-input-status-validating.ant-input-has-feedback,
.ant-input-status-success.ant-input-has-feedback {
  padding-right: 28px;
}
`
          
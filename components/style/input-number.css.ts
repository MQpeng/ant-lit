
import { css } from 'lit-element';
export default css`.ant-input-number-affix-wrapper {
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
  position: relative;
  display: inline-flex;
  width: 90px;
  padding: 0;
  padding-inline-start: 11px;
}
.ant-input-number-affix-wrapper::-moz-placeholder {
  opacity: 1;
}
.ant-input-number-affix-wrapper::placeholder {
  color: #bfbfbf;
  user-select: none;
}
.ant-input-number-affix-wrapper:placeholder-shown {
  text-overflow: ellipsis;
}
.ant-input-number-affix-wrapper:hover {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
}
.ant-input-number-affix-wrapper:focus,
.ant-input-number-affix-wrapper-focused {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-number-affix-wrapper-disabled {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-input-number-affix-wrapper-disabled:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-input-number-affix-wrapper[disabled] {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-input-number-affix-wrapper[disabled]:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-input-number-affix-wrapper-borderless,
.ant-input-number-affix-wrapper-borderless:hover,
.ant-input-number-affix-wrapper-borderless:focus,
.ant-input-number-affix-wrapper-borderless-focused,
.ant-input-number-affix-wrapper-borderless-disabled,
.ant-input-number-affix-wrapper-borderless[disabled] {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
textarea.ant-input-number-affix-wrapper {
  max-width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5715;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
}
.ant-input-number-affix-wrapper-lg {
  padding: 6.5px 11px;
  font-size: 16px;
}
.ant-input-number-affix-wrapper-sm {
  padding: 0px 7px;
}
.ant-input-number-affix-wrapper:not(.ant-input-number-affix-wrapper-disabled):hover {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
  z-index: 1;
}
.ant-input-number-affix-wrapper-focused,
.ant-input-number-affix-wrapper:focus {
  z-index: 1;
}
.ant-input-number-affix-wrapper-disabled .ant-input-number[disabled] {
  background: transparent;
}
.ant-input-number-affix-wrapper > div.ant-input-number {
  width: 100%;
  border: none;
  outline: none;
}
.ant-input-number-affix-wrapper > div.ant-input-number.ant-input-number-focused {
  box-shadow: none !important;
}
.ant-input-number-affix-wrapper input.ant-input-number-input {
  padding: 0;
}
.ant-input-number-affix-wrapper::before {
  width: 0;
  visibility: hidden;
  content: '\a0';
}
.ant-input-number-affix-wrapper .ant-input-number-handler-wrap {
  z-index: 2;
}
.ant-input-number-prefix,
.ant-input-number-suffix {
  display: flex;
  flex: none;
  align-items: center;
  pointer-events: none;
}
.ant-input-number-prefix {
  margin-inline-end: 4px;
}
.ant-input-number-suffix {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  height: 100%;
  margin-right: 11px;
  margin-left: 4px;
}
.ant-input-number-group-wrapper .ant-input-number-affix-wrapper {
  width: 100%;
}
.ant-input-number-status-error:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number,
.ant-input-number-status-error:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number:hover {
  background: #fff;
  border-color: var(--ant-error-color);
}
.ant-input-number-status-error:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number:focus,
.ant-input-number-status-error:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number-focused {
  border-color: var(--ant-error-color-hover);
  box-shadow: 0 0 0 2px var(--ant-error-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-number-status-error .ant-input-number-prefix {
  color: var(--ant-error-color);
}
.ant-input-number-status-warning:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number,
.ant-input-number-status-warning:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number:hover {
  background: #fff;
  border-color: var(--ant-warning-color);
}
.ant-input-number-status-warning:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number:focus,
.ant-input-number-status-warning:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number-focused {
  border-color: var(--ant-warning-color-hover);
  box-shadow: 0 0 0 2px var(--ant-warning-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-number-status-warning .ant-input-number-prefix {
  color: var(--ant-warning-color);
}
.ant-input-number-affix-wrapper-status-error:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper,
.ant-input-number-affix-wrapper-status-error:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover {
  background: #fff;
  border-color: var(--ant-error-color);
}
.ant-input-number-affix-wrapper-status-error:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:focus,
.ant-input-number-affix-wrapper-status-error:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper-focused {
  border-color: var(--ant-error-color-hover);
  box-shadow: 0 0 0 2px var(--ant-error-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-number-affix-wrapper-status-error .ant-input-number-prefix {
  color: var(--ant-error-color);
}
.ant-input-number-affix-wrapper-status-warning:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper,
.ant-input-number-affix-wrapper-status-warning:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover {
  background: #fff;
  border-color: var(--ant-warning-color);
}
.ant-input-number-affix-wrapper-status-warning:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:focus,
.ant-input-number-affix-wrapper-status-warning:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper-focused {
  border-color: var(--ant-warning-color-hover);
  box-shadow: 0 0 0 2px var(--ant-warning-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-number-affix-wrapper-status-warning .ant-input-number-prefix {
  color: var(--ant-warning-color);
}
.ant-input-number-group-wrapper-status-error .ant-input-number-group-addon {
  color: var(--ant-error-color);
  border-color: var(--ant-error-color);
}
.ant-input-number-group-wrapper-status-warning .ant-input-number-group-addon {
  color: var(--ant-warning-color);
  border-color: var(--ant-warning-color);
}
.ant-input-number {
  box-sizing: border-box;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  transition: all 0.3s;
  /* stylelint-disable-next-line selector-no-vendor-prefix */
  display: inline-block;
  width: 90px;
  margin: 0;
  padding: 0;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
.ant-input-number::-moz-placeholder {
  opacity: 1;
}
.ant-input-number::placeholder {
  color: #bfbfbf;
  user-select: none;
}
.ant-input-number:placeholder-shown {
  text-overflow: ellipsis;
}
.ant-input-number:hover {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
}
.ant-input-number:focus,
.ant-input-number-focused {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-number-disabled {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-input-number-disabled:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-input-number[disabled] {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-input-number[disabled]:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-input-number-borderless,
.ant-input-number-borderless:hover,
.ant-input-number-borderless:focus,
.ant-input-number-borderless-focused,
.ant-input-number-borderless-disabled,
.ant-input-number-borderless[disabled] {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
textarea.ant-input-number {
  max-width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5715;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
}
.ant-input-number-lg {
  padding: 6.5px 11px;
  font-size: 16px;
}
.ant-input-number-sm {
  padding: 0px 7px;
}
.ant-input-number-group {
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
.ant-input-number-group[class*='col-'] {
  float: none;
  padding-right: 0;
  padding-left: 0;
}
.ant-input-number-group > [class*='col-'] {
  padding-right: 8px;
}
.ant-input-number-group > [class*='col-']:last-child {
  padding-right: 0;
}
.ant-input-number-group-addon,
.ant-input-number-group-wrap,
.ant-input-number-group > .ant-input-number {
  display: table-cell;
}
.ant-input-number-group-addon:not(:first-child):not(:last-child),
.ant-input-number-group-wrap:not(:first-child):not(:last-child),
.ant-input-number-group > .ant-input-number:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.ant-input-number-group-addon,
.ant-input-number-group-wrap {
  width: 1px;
  white-space: nowrap;
  vertical-align: middle;
}
.ant-input-number-group-wrap > * {
  display: block !important;
}
.ant-input-number-group .ant-input-number {
  float: left;
  width: 100%;
  margin-bottom: 0;
  text-align: inherit;
}
.ant-input-number-group .ant-input-number:focus {
  z-index: 1;
  border-right-width: 1px;
}
.ant-input-number-group .ant-input-number:hover {
  z-index: 1;
  border-right-width: 1px;
}
.ant-input-search-with-button .ant-input-number-group .ant-input-number:hover {
  z-index: 0;
}
.ant-input-number-group-addon {
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
.ant-input-number-group-addon .ant-select {
  margin: -5px -11px;
}
.ant-input-number-group-addon .ant-select.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
  background-color: inherit;
  border: 1px solid transparent;
  box-shadow: none;
}
.ant-input-number-group-addon .ant-select-open .ant-select-selector,
.ant-input-number-group-addon .ant-select-focused .ant-select-selector {
  color: var(--ant-primary-color);
}
.ant-input-number-group-addon .ant-cascader-picker {
  margin: -9px -12px;
  background-color: transparent;
}
.ant-input-number-group-addon .ant-cascader-picker .ant-cascader-input {
  text-align: left;
  border: 0;
  box-shadow: none;
}
.ant-input-number-group > .ant-input-number:first-child,
.ant-input-number-group-addon:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.ant-input-number-group > .ant-input-number:first-child .ant-select .ant-select-selector,
.ant-input-number-group-addon:first-child .ant-select .ant-select-selector {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.ant-input-number-group > .ant-input-number-affix-wrapper:not(:first-child) .ant-input-number {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.ant-input-number-group > .ant-input-number-affix-wrapper:not(:last-child) .ant-input-number {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.ant-input-number-group-addon:first-child {
  border-right: 0;
}
.ant-input-number-group-addon:last-child {
  border-left: 0;
}
.ant-input-number-group > .ant-input-number:last-child,
.ant-input-number-group-addon:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.ant-input-number-group > .ant-input-number:last-child .ant-select .ant-select-selector,
.ant-input-number-group-addon:last-child .ant-select .ant-select-selector {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.ant-input-number-group-lg .ant-input-number,
.ant-input-number-group-lg > .ant-input-number-group-addon {
  padding: 6.5px 11px;
  font-size: 16px;
}
.ant-input-number-group-sm .ant-input-number,
.ant-input-number-group-sm > .ant-input-number-group-addon {
  padding: 0px 7px;
}
.ant-input-number-group-lg .ant-select-single .ant-select-selector {
  height: 40px;
}
.ant-input-number-group-sm .ant-select-single .ant-select-selector {
  height: 24px;
}
.ant-input-number-group .ant-input-number-affix-wrapper:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.ant-input-search .ant-input-number-group .ant-input-number-affix-wrapper:not(:last-child) {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.ant-input-number-group .ant-input-number-affix-wrapper:not(:first-child),
.ant-input-search .ant-input-number-group .ant-input-number-affix-wrapper:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.ant-input-number-group.ant-input-number-group-compact {
  display: block;
}
.ant-input-number-group.ant-input-number-group-compact::before {
  display: table;
  content: '';
}
.ant-input-number-group.ant-input-number-group-compact::after {
  display: table;
  clear: both;
  content: '';
}
.ant-input-number-group.ant-input-number-group-compact-addon:not(:first-child):not(:last-child),
.ant-input-number-group.ant-input-number-group-compact-wrap:not(:first-child):not(:last-child),
.ant-input-number-group.ant-input-number-group-compact > .ant-input-number:not(:first-child):not(:last-child) {
  border-right-width: 1px;
}
.ant-input-number-group.ant-input-number-group-compact-addon:not(:first-child):not(:last-child):hover,
.ant-input-number-group.ant-input-number-group-compact-wrap:not(:first-child):not(:last-child):hover,
.ant-input-number-group.ant-input-number-group-compact > .ant-input-number:not(:first-child):not(:last-child):hover {
  z-index: 1;
}
.ant-input-number-group.ant-input-number-group-compact-addon:not(:first-child):not(:last-child):focus,
.ant-input-number-group.ant-input-number-group-compact-wrap:not(:first-child):not(:last-child):focus,
.ant-input-number-group.ant-input-number-group-compact > .ant-input-number:not(:first-child):not(:last-child):focus {
  z-index: 1;
}
.ant-input-number-group.ant-input-number-group-compact > * {
  display: inline-block;
  float: none;
  vertical-align: top;
  border-radius: 0;
}
.ant-input-number-group.ant-input-number-group-compact > .ant-input-number-affix-wrapper {
  display: inline-flex;
}
.ant-input-number-group.ant-input-number-group-compact > .ant-picker-range {
  display: inline-flex;
}
.ant-input-number-group.ant-input-number-group-compact > *:not(:last-child) {
  margin-right: -1px;
  border-right-width: 1px;
}
.ant-input-number-group.ant-input-number-group-compact .ant-input-number {
  float: none;
}
.ant-input-number-group.ant-input-number-group-compact > .ant-select > .ant-select-selector,
.ant-input-number-group.ant-input-number-group-compact > .ant-select-auto-complete .ant-input,
.ant-input-number-group.ant-input-number-group-compact > .ant-cascader-picker .ant-input,
.ant-input-number-group.ant-input-number-group-compact > .ant-input-group-wrapper .ant-input {
  border-right-width: 1px;
  border-radius: 0;
}
.ant-input-number-group.ant-input-number-group-compact > .ant-select > .ant-select-selector:hover,
.ant-input-number-group.ant-input-number-group-compact > .ant-select-auto-complete .ant-input:hover,
.ant-input-number-group.ant-input-number-group-compact > .ant-cascader-picker .ant-input:hover,
.ant-input-number-group.ant-input-number-group-compact > .ant-input-group-wrapper .ant-input:hover {
  z-index: 1;
}
.ant-input-number-group.ant-input-number-group-compact > .ant-select > .ant-select-selector:focus,
.ant-input-number-group.ant-input-number-group-compact > .ant-select-auto-complete .ant-input:focus,
.ant-input-number-group.ant-input-number-group-compact > .ant-cascader-picker .ant-input:focus,
.ant-input-number-group.ant-input-number-group-compact > .ant-input-group-wrapper .ant-input:focus {
  z-index: 1;
}
.ant-input-number-group.ant-input-number-group-compact > .ant-select-focused {
  z-index: 1;
}
.ant-input-number-group.ant-input-number-group-compact > .ant-select > .ant-select-arrow {
  z-index: 1;
}
.ant-input-number-group.ant-input-number-group-compact > *:first-child,
.ant-input-number-group.ant-input-number-group-compact > .ant-select:first-child > .ant-select-selector,
.ant-input-number-group.ant-input-number-group-compact > .ant-select-auto-complete:first-child .ant-input,
.ant-input-number-group.ant-input-number-group-compact > .ant-cascader-picker:first-child .ant-input {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.ant-input-number-group.ant-input-number-group-compact > *:last-child,
.ant-input-number-group.ant-input-number-group-compact > .ant-select:last-child > .ant-select-selector,
.ant-input-number-group.ant-input-number-group-compact > .ant-cascader-picker:last-child .ant-input,
.ant-input-number-group.ant-input-number-group-compact > .ant-cascader-picker-focused:last-child .ant-input {
  border-right-width: 1px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.ant-input-number-group.ant-input-number-group-compact > .ant-select-auto-complete .ant-input {
  vertical-align: top;
}
.ant-input-number-group.ant-input-number-group-compact .ant-input-group-wrapper + .ant-input-group-wrapper {
  margin-left: -1px;
}
.ant-input-number-group.ant-input-number-group-compact .ant-input-group-wrapper + .ant-input-group-wrapper .ant-input-affix-wrapper {
  border-radius: 0;
}
.ant-input-number-group.ant-input-number-group-compact .ant-input-group-wrapper:not(:last-child).ant-input-search > .ant-input-group > .ant-input-group-addon > .ant-input-search-button {
  border-radius: 0;
}
.ant-input-number-group.ant-input-number-group-compact .ant-input-group-wrapper:not(:last-child).ant-input-search > .ant-input-group > .ant-input {
  border-radius: 2px 0 0 2px;
}
.ant-input-number-group-wrapper {
  display: inline-block;
  text-align: start;
  vertical-align: top;
}
.ant-input-number-handler {
  position: relative;
  display: block;
  width: 100%;
  height: 50%;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.45);
  font-weight: bold;
  line-height: 0;
  text-align: center;
  border-left: 1px solid #d9d9d9;
  transition: all 0.1s linear;
}
.ant-input-number-handler:active {
  background: #f4f4f4;
}
.ant-input-number-handler:hover .ant-input-number-handler-up-inner,
.ant-input-number-handler:hover .ant-input-number-handler-down-inner {
  color: var(--ant-primary-5);
}
.ant-input-number-handler-up-inner,
.ant-input-number-handler-down-inner {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  right: 4px;
  width: 12px;
  height: 12px;
  color: rgba(0, 0, 0, 0.45);
  line-height: 12px;
  transition: all 0.1s linear;
  user-select: none;
}
.ant-input-number-handler-up-inner > *,
.ant-input-number-handler-down-inner > * {
  line-height: 1;
}
.ant-input-number-handler-up-inner svg,
.ant-input-number-handler-down-inner svg {
  display: inline-block;
}
.ant-input-number-handler-up-inner::before,
.ant-input-number-handler-down-inner::before {
  display: none;
}
.ant-input-number-handler-up-inner .ant-input-number-handler-up-inner-icon,
.ant-input-number-handler-up-inner .ant-input-number-handler-down-inner-icon,
.ant-input-number-handler-down-inner .ant-input-number-handler-up-inner-icon,
.ant-input-number-handler-down-inner .ant-input-number-handler-down-inner-icon {
  display: block;
}
.ant-input-number:hover {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
}
.ant-input-number:hover + .ant-form-item-children-icon {
  opacity: 0;
  transition: opacity 0.24s linear 0.24s;
}
.ant-input-number-focused {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-number-disabled {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-input-number-disabled:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-input-number-disabled .ant-input-number-input {
  cursor: not-allowed;
}
.ant-input-number-disabled .ant-input-number-handler-wrap {
  display: none;
}
.ant-input-number-readonly .ant-input-number-handler-wrap {
  display: none;
}
.ant-input-number-input {
  width: 100%;
  height: 30px;
  padding: 0 11px;
  text-align: left;
  background-color: transparent;
  border: 0;
  border-radius: 2px;
  outline: 0;
  transition: all 0.3s linear;
  appearance: textfield !important;
  /* stylelint-disable-next-line selector-no-vendor-prefix */
}
.ant-input-number-input::-moz-placeholder {
  opacity: 1;
}
.ant-input-number-input::placeholder {
  color: #bfbfbf;
  user-select: none;
}
.ant-input-number-input:placeholder-shown {
  text-overflow: ellipsis;
}
.ant-input-number-input[type='number']::-webkit-inner-spin-button,
.ant-input-number-input[type='number']::-webkit-outer-spin-button {
  margin: 0;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
  appearance: none;
}
.ant-input-number-lg {
  padding: 0;
  font-size: 16px;
}
.ant-input-number-lg input {
  height: 38px;
}
.ant-input-number-sm {
  padding: 0;
}
.ant-input-number-sm input {
  height: 22px;
  padding: 0 7px;
}
.ant-input-number-handler-wrap {
  position: absolute;
  top: 0;
  right: 0;
  width: 22px;
  height: 100%;
  background: #fff;
  border-radius: 0 2px 2px 0;
  opacity: 0;
  transition: opacity 0.24s linear 0.1s;
}
.ant-input-number-handler-wrap .ant-input-number-handler .ant-input-number-handler-up-inner,
.ant-input-number-handler-wrap .ant-input-number-handler .ant-input-number-handler-down-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: auto;
  margin-right: 0;
  font-size: 7px;
}
.ant-input-number-borderless .ant-input-number-handler-wrap {
  border-left-width: 0;
}
.ant-input-number-handler-wrap:hover .ant-input-number-handler {
  height: 40%;
}
.ant-input-number:hover .ant-input-number-handler-wrap,
.ant-input-number-focused .ant-input-number-handler-wrap {
  opacity: 1;
}
.ant-input-number-handler-up {
  border-top-right-radius: 2px;
  cursor: pointer;
}
.ant-input-number-handler-up-inner {
  top: 50%;
  margin-top: -5px;
  text-align: center;
}
.ant-input-number-handler-up:hover {
  height: 60% !important;
}
.ant-input-number-handler-down {
  top: 0;
  border-top: 1px solid #d9d9d9;
  border-bottom-right-radius: 2px;
  cursor: pointer;
}
.ant-input-number-handler-down-inner {
  top: 50%;
  text-align: center;
  transform: translateY(-50%);
}
.ant-input-number-handler-down:hover {
  height: 60% !important;
}
.ant-input-number-borderless .ant-input-number-handler-down {
  border-top-width: 0;
}
.ant-input-number-handler-up-disabled,
.ant-input-number-handler-down-disabled {
  cursor: not-allowed;
}
.ant-input-number-handler-up-disabled:hover .ant-input-number-handler-up-inner,
.ant-input-number-handler-down-disabled:hover .ant-input-number-handler-down-inner {
  color: rgba(0, 0, 0, 0.25);
}
.ant-input-number-borderless {
  box-shadow: none;
}
.ant-input-number-out-of-range input {
  color: var(--ant-error-color);
}
.ant-input-number-rtl {
  direction: rtl;
}
.ant-input-number-rtl .ant-input-number-handler {
  border-right: 1px solid #d9d9d9;
  border-left: 0;
}
.ant-input-number-rtl .ant-input-number-handler-wrap {
  right: auto;
  left: 0;
}
.ant-input-number-rtl.ant-input-number-borderless .ant-input-number-handler-wrap {
  border-right-width: 0;
}
.ant-input-number-rtl .ant-input-number-handler-up {
  border-top-right-radius: 0;
}
.ant-input-number-rtl .ant-input-number-handler-down {
  border-bottom-right-radius: 0;
}
.ant-input-number-rtl .ant-input-number-input {
  direction: ltr;
  text-align: right;
}
.ant-input-number-affix-wrapper > nz-input-number.ant-input-number {
  width: 100%;
  border: none;
  outline: none;
}
.ant-input-number-affix-wrapper > nz-input-number.ant-input-number.ant-input-number-focused {
  box-shadow: none !important;
}
.ant-input-number.ant-input-number-has-feedback .ant-input-number-handler-wrap {
  z-index: 2;
}
`
          

import { css } from 'lit-element';
export default css`.ant-select-single .ant-select-selector {
  display: flex;
}
.ant-select-single .ant-select-selector .ant-select-selection-search {
  position: absolute;
  top: 0;
  right: 11px;
  bottom: 0;
  left: 11px;
}
.ant-select-single .ant-select-selector .ant-select-selection-search-input {
  width: 100%;
}
.ant-select-single .ant-select-selector .ant-select-selection-item,
.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
  padding: 0;
  line-height: 30px;
  transition: all 0.3s;
}
@supports (-moz-appearance: meterbar) {
  .ant-select-single .ant-select-selector .ant-select-selection-item,
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 30px;
  }
}
.ant-select-single .ant-select-selector .ant-select-selection-item {
  position: relative;
  user-select: none;
}
.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
  transition: none;
  pointer-events: none;
}
.ant-select-single .ant-select-selector::after,
.ant-select-single .ant-select-selector .ant-select-selection-item::after,
.ant-select-single .ant-select-selector .ant-select-selection-placeholder::after {
  display: inline-block;
  width: 0;
  visibility: hidden;
  content: '\a0';
}
.ant-select-single.ant-select-show-arrow .ant-select-selection-search {
  right: 25px;
}
.ant-select-single.ant-select-show-arrow .ant-select-selection-item,
.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
  padding-right: 18px;
}
.ant-select-single.ant-select-open .ant-select-selection-item {
  color: #bfbfbf;
}
.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
  width: 100%;
  height: 32px;
  padding: 0 11px;
}
.ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
  height: 30px;
}
.ant-select-single:not(.ant-select-customize-input) .ant-select-selector::after {
  line-height: 30px;
}
.ant-select-single.ant-select-customize-input .ant-select-selector::after {
  display: none;
}
.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-search {
  position: static;
  width: 100%;
}
.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-placeholder {
  position: absolute;
  right: 0;
  left: 0;
  padding: 0 11px;
}
.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-placeholder::after {
  display: none;
}
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
  height: 40px;
}
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector::after,
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item,
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-placeholder {
  line-height: 38px;
}
.ant-select-single.ant-select-lg:not(.ant-select-customize-input):not(.ant-select-customize-input) .ant-select-selection-search-input {
  height: 38px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector {
  height: 24px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector::after,
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item,
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-placeholder {
  line-height: 22px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input):not(.ant-select-customize-input) .ant-select-selection-search-input {
  height: 22px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selection-search {
  right: 7px;
  left: 7px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector {
  padding: 0 7px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-search {
  right: 28px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-item,
.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-placeholder {
  padding-right: 21px;
}
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
  padding: 0 11px;
}
/**
 * Do not merge `height` & `line-height` under style with `selection` & `search`,
 * since chrome may update to redesign with its align logic.
 */
.ant-select-selection-overflow {
  position: relative;
  display: flex;
  flex: auto;
  flex-wrap: wrap;
  max-width: 100%;
}
.ant-select-selection-overflow-item {
  flex: none;
  align-self: center;
  max-width: 100%;
}
.ant-select-multiple .ant-select-selector {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1px 4px;
}
.ant-select-show-search.ant-select-multiple .ant-select-selector {
  cursor: text;
}
.ant-select-disabled.ant-select-multiple .ant-select-selector {
  background: #f5f5f5;
  cursor: not-allowed;
}
.ant-select-multiple .ant-select-selector::after {
  display: inline-block;
  width: 0;
  margin: 2px 0;
  line-height: 24px;
  content: '\a0';
}
.ant-select-multiple.ant-select-show-arrow .ant-select-selector,
.ant-select-multiple.ant-select-allow-clear .ant-select-selector {
  padding-right: 24px;
}
.ant-select-multiple .ant-select-selection-item {
  position: relative;
  display: flex;
  flex: none;
  box-sizing: border-box;
  max-width: 100%;
  height: 24px;
  margin-top: 2px;
  margin-bottom: 2px;
  line-height: 22px;
  background: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  cursor: default;
  transition: font-size 0.3s, line-height 0.3s, height 0.3s;
  user-select: none;
  margin-inline-end: 4px;
  padding-inline-start: 8px;
  padding-inline-end: 4px;
}
.ant-select-disabled.ant-select-multiple .ant-select-selection-item {
  color: #bfbfbf;
  border-color: #d9d9d9;
  cursor: not-allowed;
}
.ant-select-multiple .ant-select-selection-item-content {
  display: inline-block;
  margin-right: 4px;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
}
.ant-select-multiple .ant-select-selection-item-remove {
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  color: rgba(0, 0, 0, 0.45);
  font-weight: bold;
  font-size: 10px;
  line-height: inherit;
  cursor: pointer;
}
.ant-select-multiple .ant-select-selection-item-remove > * {
  line-height: 1;
}
.ant-select-multiple .ant-select-selection-item-remove svg {
  display: inline-block;
}
.ant-select-multiple .ant-select-selection-item-remove::before {
  display: none;
}
.ant-select-multiple .ant-select-selection-item-remove .ant-select-multiple .ant-select-selection-item-remove-icon {
  display: block;
}
.ant-select-multiple .ant-select-selection-item-remove > .anticon {
  vertical-align: middle;
}
.ant-select-multiple .ant-select-selection-item-remove:hover {
  color: rgba(0, 0, 0, 0.75);
}
.ant-select-multiple .ant-select-selection-overflow-item + .ant-select-selection-overflow-item .ant-select-selection-search {
  margin-inline-start: 0;
}
.ant-select-multiple .ant-select-selection-search {
  position: relative;
  max-width: 100%;
  margin-inline-start: 7px;
}
.ant-select-multiple .ant-select-selection-search-input,
.ant-select-multiple .ant-select-selection-search-mirror {
  height: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  line-height: 24px;
  transition: all 0.3s;
}
.ant-select-multiple .ant-select-selection-search-input {
  width: 100%;
  min-width: 4.1px;
}
.ant-select-multiple .ant-select-selection-search-mirror {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  white-space: pre;
  visibility: hidden;
}
.ant-select-multiple .ant-select-selection-placeholder {
  position: absolute;
  top: 50%;
  right: 11px;
  left: 11px;
  transform: translateY(-50%);
  transition: all 0.3s;
}
.ant-select-multiple.ant-select-lg .ant-select-selector::after {
  line-height: 32px;
}
.ant-select-multiple.ant-select-lg .ant-select-selection-item {
  height: 32px;
  line-height: 30px;
}
.ant-select-multiple.ant-select-lg .ant-select-selection-search {
  height: 32px;
  line-height: 32px;
}
.ant-select-multiple.ant-select-lg .ant-select-selection-search-input,
.ant-select-multiple.ant-select-lg .ant-select-selection-search-mirror {
  height: 32px;
  line-height: 30px;
}
.ant-select-multiple.ant-select-sm .ant-select-selector::after {
  line-height: 16px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-item {
  height: 16px;
  line-height: 14px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-search {
  height: 16px;
  line-height: 16px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-search-input,
.ant-select-multiple.ant-select-sm .ant-select-selection-search-mirror {
  height: 16px;
  line-height: 14px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-placeholder {
  left: 7px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-search {
  margin-inline-start: 3px;
}
.ant-select-multiple.ant-select-lg .ant-select-selection-item {
  height: 32px;
  line-height: 32px;
}
.ant-select-disabled .ant-select-selection-item-remove {
  display: none;
}
.ant-select-status-error.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) .ant-select-selector {
  background-color: #fff;
  border-color: var(--ant-error-color) !important;
}
.ant-select-status-error.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-open .ant-select-selector,
.ant-select-status-error.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-focused .ant-select-selector {
  border-color: var(--ant-error-color-hover);
  box-shadow: 0 0 0 2px var(--ant-error-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-select-status-warning.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) .ant-select-selector {
  background-color: #fff;
  border-color: var(--ant-warning-color) !important;
}
.ant-select-status-warning.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-open .ant-select-selector,
.ant-select-status-warning.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-focused .ant-select-selector {
  border-color: var(--ant-warning-color-hover);
  box-shadow: 0 0 0 2px var(--ant-warning-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-select-status-error.ant-select-has-feedback .ant-select-clear,
.ant-select-status-warning.ant-select-has-feedback .ant-select-clear,
.ant-select-status-success.ant-select-has-feedback .ant-select-clear,
.ant-select-status-validating.ant-select-has-feedback .ant-select-clear {
  right: 32px;
}
.ant-select-status-error.ant-select-has-feedback .ant-select-selection-selected-value,
.ant-select-status-warning.ant-select-has-feedback .ant-select-selection-selected-value,
.ant-select-status-success.ant-select-has-feedback .ant-select-selection-selected-value,
.ant-select-status-validating.ant-select-has-feedback .ant-select-selection-selected-value {
  padding-right: 42px;
}
/* Reset search input style */
.ant-select {
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
  display: inline-block;
  cursor: pointer;
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  position: relative;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector input {
  cursor: pointer;
}
.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  cursor: text;
}
.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector input {
  cursor: auto;
}
.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  color: rgba(0, 0, 0, 0.25);
  background: #f5f5f5;
  cursor: not-allowed;
}
.ant-select-multiple.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  background: #f5f5f5;
}
.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector input {
  cursor: not-allowed;
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  appearance: none;
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input::-webkit-search-cancel-button {
  display: none;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
}
.ant-select:not(.ant-select-disabled):hover .ant-select-selector {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
}
.ant-select-selection-item {
  flex: 1;
  overflow: hidden;
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@media all and (-ms-high-contrast: none) {
  .ant-select-selection-item *::-ms-backdrop,
  .ant-select-selection-item {
    flex: auto;
  }
}
.ant-select-selection-placeholder {
  flex: 1;
  overflow: hidden;
  color: #bfbfbf;
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none;
}
@media all and (-ms-high-contrast: none) {
  .ant-select-selection-placeholder *::-ms-backdrop,
  .ant-select-selection-placeholder {
    flex: auto;
  }
}
.ant-select-arrow {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 50%;
  right: 11px;
  display: flex;
  align-items: center;
  height: 12px;
  margin-top: -6px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  line-height: 1;
  text-align: center;
  pointer-events: none;
}
.ant-select-arrow > * {
  line-height: 1;
}
.ant-select-arrow svg {
  display: inline-block;
}
.ant-select-arrow::before {
  display: none;
}
.ant-select-arrow .ant-select-arrow-icon {
  display: block;
}
.ant-select-arrow .anticon {
  vertical-align: top;
  transition: transform 0.3s;
}
.ant-select-arrow .anticon > svg {
  vertical-align: top;
}
.ant-select-arrow .anticon:not(.ant-select-suffix) {
  pointer-events: auto;
}
.ant-select-disabled .ant-select-arrow {
  cursor: not-allowed;
}
.ant-select-arrow > *:not(:last-child) {
  margin-inline-end: 8px;
}
.ant-select-clear {
  position: absolute;
  top: 50%;
  right: 11px;
  z-index: 1;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  font-style: normal;
  line-height: 1;
  text-align: center;
  text-transform: none;
  background: #fff;
  cursor: pointer;
  opacity: 0;
  transition: color 0.3s ease, opacity 0.15s ease;
  text-rendering: auto;
}
.ant-select-clear::before {
  display: block;
}
.ant-select-clear:hover {
  color: rgba(0, 0, 0, 0.45);
}
.ant-select:hover .ant-select-clear {
  opacity: 1;
}
.ant-select-dropdown {
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: 1050;
  box-sizing: border-box;
  padding: 4px 0;
  overflow: hidden;
  font-size: 14px;
  font-variant: initial;
  background-color: #fff;
  border-radius: 2px;
  outline: none;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
.ant-select-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-select-dropdown-placement-bottomLeft,
.ant-select-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-select-dropdown-placement-bottomLeft {
  animation-name: antSlideUpIn;
}
.ant-select-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-select-dropdown-placement-topLeft,
.ant-select-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-select-dropdown-placement-topLeft {
  animation-name: antSlideDownIn;
}
.ant-select-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-select-dropdown-placement-bottomLeft {
  animation-name: antSlideUpOut;
}
.ant-select-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-select-dropdown-placement-topLeft {
  animation-name: antSlideDownOut;
}
.ant-select-dropdown-hidden {
  display: none;
}
.ant-select-dropdown-empty {
  color: rgba(0, 0, 0, 0.25);
}
.ant-select-item-empty {
  position: relative;
  display: block;
  min-height: 32px;
  padding: 5px 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.25);
}
.ant-select-item {
  position: relative;
  display: block;
  min-height: 32px;
  padding: 5px 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.ant-select-item-group {
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  cursor: default;
}
.ant-select-item-option {
  display: flex;
}
.ant-select-item-option-content {
  flex: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ant-select-item-option-state {
  flex: none;
}
.ant-select-item-option-active:not(.ant-select-item-option-disabled) {
  background-color: #f5f5f5;
}
.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  background-color: var(--ant-primary-1);
}
.ant-select-item-option-selected:not(.ant-select-item-option-disabled) .ant-select-item-option-state {
  color: var(--ant-primary-color);
}
.ant-select-item-option-disabled {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-select-item-option-disabled.ant-select-item-option-selected {
  background-color: #f5f5f5;
}
.ant-select-item-option-grouped {
  padding-left: 24px;
}
.ant-select-lg {
  font-size: 16px;
}
.ant-select-borderless .ant-select-selector {
  background-color: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
.ant-select.ant-select-in-form-item {
  width: 100%;
}
.ant-select-rtl {
  direction: rtl;
}
.ant-select-rtl .ant-select-arrow {
  right: initial;
  left: 11px;
}
.ant-select-rtl .ant-select-clear {
  right: initial;
  left: 11px;
}
.ant-select-dropdown-rtl {
  direction: rtl;
}
.ant-select-dropdown-rtl .ant-select-item-option-grouped {
  padding-right: 24px;
  padding-left: 12px;
}
.ant-select-rtl.ant-select-multiple.ant-select-show-arrow .ant-select-selector,
.ant-select-rtl.ant-select-multiple.ant-select-allow-clear .ant-select-selector {
  padding-right: 4px;
  padding-left: 24px;
}
.ant-select-rtl.ant-select-multiple .ant-select-selection-item {
  text-align: right;
}
.ant-select-rtl.ant-select-multiple .ant-select-selection-item-content {
  margin-right: 0;
  margin-left: 4px;
  text-align: right;
}
.ant-select-rtl.ant-select-multiple .ant-select-selection-search-mirror {
  right: 0;
  left: auto;
}
.ant-select-rtl.ant-select-multiple .ant-select-selection-placeholder {
  right: 11px;
  left: auto;
}
.ant-select-rtl.ant-select-multiple.ant-select-sm .ant-select-selection-placeholder {
  right: 7px;
}
.ant-select-rtl.ant-select-single .ant-select-selector .ant-select-selection-item,
.ant-select-rtl.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
  right: 0;
  left: 9px;
  text-align: right;
}
.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-search {
  right: 11px;
  left: 25px;
}
.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-item,
.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
  padding-right: 0;
  padding-left: 18px;
}
.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-search {
  right: 6px;
}
.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-item,
.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-placeholder {
  padding-right: 0;
  padding-left: 21px;
}
.ant-empty {
  margin: 0 8px;
  font-size: 14px;
  line-height: 1.5715;
  text-align: center;
}
.ant-empty-image {
  height: 100px;
  margin-bottom: 8px;
}
.ant-empty-image img {
  height: 100%;
}
.ant-empty-image svg {
  height: 100%;
  margin: auto;
}
.ant-empty-footer {
  margin-top: 16px;
}
.ant-empty-normal {
  margin: 32px 0;
  color: rgba(0, 0, 0, 0.25);
}
.ant-empty-normal .ant-empty-image {
  height: 40px;
}
.ant-empty-small {
  margin: 8px 0;
  color: rgba(0, 0, 0, 0.25);
}
.ant-empty-small .ant-empty-image {
  height: 35px;
}
.ant-empty-img-default-ellipse {
  fill: #f5f5f5;
  fill-opacity: 0.8;
}
.ant-empty-img-default-path-1 {
  fill: #aeb8c2;
}
.ant-empty-img-default-path-2 {
  fill: url('#linearGradient-1');
}
.ant-empty-img-default-path-3 {
  fill: #f5f5f7;
}
.ant-empty-img-default-path-4 {
  fill: #dce0e6;
}
.ant-empty-img-default-path-5 {
  fill: #dce0e6;
}
.ant-empty-img-default-g {
  fill: #fff;
}
.ant-empty-img-simple-ellipse {
  fill: #f5f5f5;
}
.ant-empty-img-simple-g {
  stroke: #d9d9d9;
}
.ant-empty-img-simple-path {
  fill: #fafafa;
}
.ant-empty-rtl {
  direction: rtl;
}
nz-empty {
  display: block;
}
.ant-select-dropdown {
  top: 100%;
  left: 0;
  position: relative;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 4px;
  display: block;
}
.ant-select-dropdown .cdk-virtual-scroll-content-wrapper {
  right: 0;
}
.ant-select-dropdown .full-width {
  contain: initial;
}
.ant-select-dropdown .full-width .cdk-virtual-scroll-content-wrapper {
  position: static;
}
.ant-select-dropdown .full-width .cdk-virtual-scroll-spacer {
  position: absolute;
  top: 0;
  width: 1px;
}
`
          
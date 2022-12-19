
import { css } from 'lit-element';
export default css`@keyframes antCheckboxEffect {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}
.ant-cascader-checkbox {
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
  top: 0.2em;
  line-height: 1;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
}
.ant-cascader-checkbox-wrapper:hover .ant-cascader-checkbox-inner,
.ant-cascader-checkbox:hover .ant-cascader-checkbox-inner,
.ant-cascader-checkbox-input:focus + .ant-cascader-checkbox-inner {
  border-color: var(--ant-primary-color);
}
.ant-cascader-checkbox-checked::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid var(--ant-primary-color);
  border-radius: 2px;
  visibility: hidden;
  animation: antCheckboxEffect 0.36s ease-in-out;
  animation-fill-mode: backwards;
  content: '';
}
.ant-cascader-checkbox:hover::after,
.ant-cascader-checkbox-wrapper:hover .ant-cascader-checkbox::after {
  visibility: visible;
}
.ant-cascader-checkbox-inner {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  direction: ltr;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  border-collapse: separate;
  transition: all 0.3s;
}
.ant-cascader-checkbox-inner::after {
  position: absolute;
  top: 50%;
  left: 21.5%;
  display: table;
  width: 5.71428571px;
  height: 9.14285714px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(0) translate(-50%, -50%);
  opacity: 0;
  transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
  content: ' ';
}
.ant-cascader-checkbox-input {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
.ant-cascader-checkbox-checked .ant-cascader-checkbox-inner::after {
  position: absolute;
  display: table;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(1) translate(-50%, -50%);
  opacity: 1;
  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  content: ' ';
}
.ant-cascader-checkbox-checked .ant-cascader-checkbox-inner {
  background-color: var(--ant-primary-color);
  border-color: var(--ant-primary-color);
}
.ant-cascader-checkbox-disabled {
  cursor: not-allowed;
}
.ant-cascader-checkbox-disabled.ant-cascader-checkbox-checked .ant-cascader-checkbox-inner::after {
  border-color: rgba(0, 0, 0, 0.25);
  animation-name: none;
}
.ant-cascader-checkbox-disabled .ant-cascader-checkbox-input {
  cursor: not-allowed;
  pointer-events: none;
}
.ant-cascader-checkbox-disabled .ant-cascader-checkbox-inner {
  background-color: #f5f5f5;
  border-color: #d9d9d9 !important;
}
.ant-cascader-checkbox-disabled .ant-cascader-checkbox-inner::after {
  border-color: #f5f5f5;
  border-collapse: separate;
  animation-name: none;
}
.ant-cascader-checkbox-disabled + span {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-cascader-checkbox-disabled:hover::after,
.ant-cascader-checkbox-wrapper:hover .ant-cascader-checkbox-disabled::after {
  visibility: hidden;
}
.ant-cascader-checkbox-wrapper {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  display: inline-flex;
  align-items: baseline;
  line-height: unset;
  cursor: pointer;
}
.ant-cascader-checkbox-wrapper::after {
  display: inline-block;
  width: 0;
  overflow: hidden;
  content: '\a0';
}
.ant-cascader-checkbox-wrapper.ant-cascader-checkbox-wrapper-disabled {
  cursor: not-allowed;
}
.ant-cascader-checkbox-wrapper + .ant-cascader-checkbox-wrapper {
  margin-left: 8px;
}
.ant-cascader-checkbox-wrapper.ant-cascader-checkbox-wrapper-in-form-item input[type='checkbox'] {
  width: 14px;
  height: 14px;
}
.ant-cascader-checkbox + span {
  padding-right: 8px;
  padding-left: 8px;
}
.ant-cascader-checkbox-group {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  display: inline-block;
}
.ant-cascader-checkbox-group-item {
  margin-right: 8px;
}
.ant-cascader-checkbox-group-item:last-child {
  margin-right: 0;
}
.ant-cascader-checkbox-group-item + .ant-cascader-checkbox-group-item {
  margin-left: 0;
}
.ant-cascader-checkbox-indeterminate .ant-cascader-checkbox-inner {
  background-color: #fff;
  border-color: #d9d9d9;
}
.ant-cascader-checkbox-indeterminate .ant-cascader-checkbox-inner::after {
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: var(--ant-primary-color);
  border: 0;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  content: ' ';
}
.ant-cascader-checkbox-indeterminate.ant-cascader-checkbox-disabled .ant-cascader-checkbox-inner::after {
  background-color: rgba(0, 0, 0, 0.25);
  border-color: rgba(0, 0, 0, 0.25);
}
.ant-cascader {
  width: 184px;
}
.ant-cascader-checkbox {
  top: 0;
  margin-right: 8px;
}
.ant-cascader-menus {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
}
.ant-cascader-menus.ant-cascader-menu-empty .ant-cascader-menu {
  width: 100%;
  height: auto;
}
.ant-cascader-menu {
  flex-grow: 1;
  min-width: 111px;
  height: 180px;
  margin: 0;
  margin: -4px 0;
  padding: 4px 0;
  overflow: auto;
  vertical-align: top;
  list-style: none;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
.ant-cascader-menu-item {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 5px 12px;
  overflow: hidden;
  line-height: 22px;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: all 0.3s;
}
.ant-cascader-menu-item:hover {
  background: #f5f5f5;
}
.ant-cascader-menu-item-disabled {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-cascader-menu-item-disabled:hover {
  background: transparent;
}
.ant-cascader-menu-empty .ant-cascader-menu-item {
  color: rgba(0, 0, 0, 0.25);
  cursor: default;
  pointer-events: none;
}
.ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled),
.ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled):hover {
  font-weight: 600;
  background-color: var(--ant-primary-1);
}
.ant-cascader-menu-item-content {
  flex: auto;
}
.ant-cascader-menu-item-expand .ant-cascader-menu-item-expand-icon,
.ant-cascader-menu-item-loading-icon {
  margin-left: 4px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 10px;
}
.ant-cascader-menu-item-disabled.ant-cascader-menu-item-expand .ant-cascader-menu-item-expand-icon,
.ant-cascader-menu-item-disabled.ant-cascader-menu-item-loading-icon {
  color: rgba(0, 0, 0, 0.25);
}
.ant-cascader-menu-item-keyword {
  color: #ff4d4f;
}
.ant-cascader-rtl .ant-cascader-menu-item-expand-icon,
.ant-cascader-rtl .ant-cascader-menu-item-loading-icon {
  margin-right: 4px;
  margin-left: 0;
}
.ant-cascader-rtl .ant-cascader-checkbox {
  top: 0;
  margin-right: 0;
  margin-left: 8px;
}
.ant-cascader-menus {
  position: relative;
  margin-top: 2px;
  margin-bottom: 2px;
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
          
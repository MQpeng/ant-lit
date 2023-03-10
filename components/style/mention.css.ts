
import { css } from 'lit-element';
export default css`.ant-mentions-status-error:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions,
.ant-mentions-status-error:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions:hover {
  background: #fff;
  border-color: var(--ant-error-color);
}
.ant-mentions-status-error:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions:focus,
.ant-mentions-status-error:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions-focused {
  border-color: var(--ant-error-color-hover);
  box-shadow: 0 0 0 2px var(--ant-error-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-mentions-status-error .ant-input-prefix {
  color: var(--ant-error-color);
}
.ant-mentions-status-warning:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions,
.ant-mentions-status-warning:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions:hover {
  background: #fff;
  border-color: var(--ant-warning-color);
}
.ant-mentions-status-warning:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions:focus,
.ant-mentions-status-warning:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions-focused {
  border-color: var(--ant-warning-color-hover);
  box-shadow: 0 0 0 2px var(--ant-warning-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-mentions-status-warning .ant-input-prefix {
  color: var(--ant-warning-color);
}
.ant-mentions {
  box-sizing: border-box;
  margin: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  /* stylelint-disable-next-line selector-no-vendor-prefix */
  position: relative;
  display: inline-block;
  height: auto;
  padding: 0;
  overflow: hidden;
  line-height: 1.5715;
  white-space: pre-wrap;
  vertical-align: bottom;
}
.ant-mentions::-moz-placeholder {
  opacity: 1;
}
.ant-mentions::placeholder {
  color: #bfbfbf;
  user-select: none;
}
.ant-mentions:placeholder-shown {
  text-overflow: ellipsis;
}
.ant-mentions:hover {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
}
.ant-mentions:focus,
.ant-mentions-focused {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-mentions-disabled {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-mentions-disabled:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-mentions[disabled] {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-mentions[disabled]:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-mentions-borderless,
.ant-mentions-borderless:hover,
.ant-mentions-borderless:focus,
.ant-mentions-borderless-focused,
.ant-mentions-borderless-disabled,
.ant-mentions-borderless[disabled] {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
textarea.ant-mentions {
  max-width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5715;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
}
.ant-mentions-lg {
  padding: 6.5px 11px;
  font-size: 16px;
}
.ant-mentions-sm {
  padding: 0px 7px;
}
.ant-mentions-disabled > textarea {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-mentions-disabled > textarea:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-mentions-focused {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-mentions > textarea,
.ant-mentions-measure {
  min-height: 30px;
  margin: 0;
  padding: 4px 11px;
  overflow: inherit;
  overflow-x: hidden;
  overflow-y: auto;
  /* stylelint-disable declaration-block-no-redundant-longhand-properties */
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-size-adjust: inherit;
  font-stretch: inherit;
  line-height: inherit;
  /* stylelint-enable declaration-block-no-redundant-longhand-properties */
  direction: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  text-align: inherit;
  vertical-align: top;
  word-wrap: break-word;
  word-break: inherit;
  tab-size: inherit;
}
.ant-mentions > textarea {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  /* stylelint-disable-next-line selector-no-vendor-prefix */
}
.ant-mentions > textarea::-moz-placeholder {
  opacity: 1;
}
.ant-mentions > textarea::placeholder {
  color: #bfbfbf;
  user-select: none;
}
.ant-mentions > textarea:placeholder-shown {
  text-overflow: ellipsis;
}
.ant-mentions-measure {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  color: transparent;
  pointer-events: none;
}
.ant-mentions-measure > span {
  display: inline-block;
  min-height: 1em;
}
.ant-mentions-dropdown {
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
  font-size: 14px;
  font-variant: initial;
  background-color: #fff;
  border-radius: 2px;
  outline: none;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
.ant-mentions-dropdown-hidden {
  display: none;
}
.ant-mentions-dropdown-menu {
  max-height: 250px;
  margin-bottom: 0;
  padding-left: 0;
  overflow: auto;
  list-style: none;
  outline: none;
}
.ant-mentions-dropdown-menu-item {
  position: relative;
  display: block;
  min-width: 100px;
  padding: 5px 12px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  font-weight: normal;
  line-height: 1.5715;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: background 0.3s ease;
}
.ant-mentions-dropdown-menu-item:hover {
  background-color: #f5f5f5;
}
.ant-mentions-dropdown-menu-item:first-child {
  border-radius: 2px 2px 0 0;
}
.ant-mentions-dropdown-menu-item:last-child {
  border-radius: 0 0 2px 2px;
}
.ant-mentions-dropdown-menu-item-disabled {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-mentions-dropdown-menu-item-disabled:hover {
  color: rgba(0, 0, 0, 0.25);
  background-color: #fff;
  cursor: not-allowed;
}
.ant-mentions-dropdown-menu-item-selected {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  background-color: #fafafa;
}
.ant-mentions-dropdown-menu-item-active {
  background-color: #f5f5f5;
}
.ant-mentions-suffix {
  position: absolute;
  top: 0;
  right: 11px;
  bottom: 0;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  margin: auto;
}
.ant-mentions-rtl {
  direction: rtl;
}
.ant-mentions-dropdown {
  top: 100%;
  left: 12px;
  position: relative;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 4px;
}
.ant-mentions:focus-within {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-mentions.ant-mentions-status-error:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions:focus-within {
  border-color: var(--ant-error-color-hover);
  box-shadow: 0 0 0 2px var(--ant-error-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-mentions.ant-mentions-status-warning:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions:focus-within {
  border-color: var(--ant-warning-color-hover);
  box-shadow: 0 0 0 2px var(--ant-warning-color-outline);
  border-right-width: 1px;
  outline: 0;
}
`
          
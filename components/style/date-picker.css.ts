
import { css } from 'lit-element';
export default css`.ant-picker-status-error.ant-picker,
.ant-picker-status-error.ant-picker:not([disabled]):hover {
  background-color: #fff;
  border-color: var(--ant-error-color);
}
.ant-picker-status-error.ant-picker-focused,
.ant-picker-status-error.ant-picker:focus {
  border-color: var(--ant-error-color-hover);
  box-shadow: 0 0 0 2px var(--ant-error-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-picker-status-warning.ant-picker,
.ant-picker-status-warning.ant-picker:not([disabled]):hover {
  background-color: #fff;
  border-color: var(--ant-warning-color);
}
.ant-picker-status-warning.ant-picker-focused,
.ant-picker-status-warning.ant-picker:focus {
  border-color: var(--ant-warning-color-hover);
  box-shadow: 0 0 0 2px var(--ant-warning-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-picker {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  padding: 4px 11px 4px;
  position: relative;
  display: inline-flex;
  align-items: center;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: border 0.3s, box-shadow 0.3s;
}
.ant-picker:hover,
.ant-picker-focused {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
}
.ant-input-rtl .ant-picker:hover,
.ant-input-rtl .ant-picker-focused {
  border-right-width: 0;
  border-left-width: 1px !important;
}
.ant-picker-focused {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-rtl .ant-picker-focused {
  border-right-width: 0;
  border-left-width: 1px !important;
}
.ant-picker.ant-picker-disabled {
  background: #f5f5f5;
  border-color: #d9d9d9;
  cursor: not-allowed;
}
.ant-picker.ant-picker-disabled .ant-picker-suffix {
  color: rgba(0, 0, 0, 0.25);
}
.ant-picker.ant-picker-borderless {
  background-color: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
.ant-picker-input {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
}
.ant-picker-input > input {
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
  flex: auto;
  min-width: 1px;
  height: auto;
  padding: 0;
  background: transparent;
  border: 0;
}
.ant-picker-input > input::-moz-placeholder {
  opacity: 1;
}
.ant-picker-input > input::placeholder {
  color: #bfbfbf;
  user-select: none;
}
.ant-picker-input > input:placeholder-shown {
  text-overflow: ellipsis;
}
.ant-picker-input > input:hover {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
}
.ant-input-rtl .ant-picker-input > input:hover {
  border-right-width: 0;
  border-left-width: 1px !important;
}
.ant-picker-input > input:focus,
.ant-picker-input > input-focused {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-rtl .ant-picker-input > input:focus,
.ant-input-rtl .ant-picker-input > input-focused {
  border-right-width: 0;
  border-left-width: 1px !important;
}
.ant-picker-input > input-disabled {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-picker-input > input-disabled:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-picker-input > input[disabled] {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-picker-input > input[disabled]:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-picker-input > input-borderless,
.ant-picker-input > input-borderless:hover,
.ant-picker-input > input-borderless:focus,
.ant-picker-input > input-borderless-focused,
.ant-picker-input > input-borderless-disabled,
.ant-picker-input > input-borderless[disabled] {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
textarea.ant-picker-input > input {
  max-width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5715;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
}
.ant-picker-input > input-lg {
  padding: 6.5px 11px;
  font-size: 16px;
}
.ant-picker-input > input-sm {
  padding: 0px 7px;
}
.ant-picker-input > input-rtl {
  direction: rtl;
}
.ant-picker-input > input:focus {
  box-shadow: none;
}
.ant-picker-input > input[disabled] {
  background: transparent;
}
.ant-picker-input:hover .ant-picker-clear {
  opacity: 1;
}
.ant-picker-input-placeholder > input {
  color: #bfbfbf;
}
.ant-picker-large {
  padding: 6.5px 11px 6.5px;
}
.ant-picker-large .ant-picker-input > input {
  font-size: 16px;
}
.ant-picker-small {
  padding: 0px 7px 0px;
}
.ant-picker-suffix {
  display: flex;
  flex: none;
  align-self: center;
  margin-left: 4px;
  color: rgba(0, 0, 0, 0.25);
  line-height: 1;
  pointer-events: none;
}
.ant-picker-suffix > * {
  vertical-align: top;
}
.ant-picker-suffix > *:not(:last-child) {
  margin-right: 8px;
}
.ant-picker-clear {
  position: absolute;
  top: 50%;
  right: 0;
  color: rgba(0, 0, 0, 0.25);
  line-height: 1;
  background: #fff;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s, color 0.3s;
}
.ant-picker-clear > * {
  vertical-align: top;
}
.ant-picker-clear:hover {
  color: rgba(0, 0, 0, 0.45);
}
.ant-picker-separator {
  position: relative;
  display: inline-block;
  width: 1em;
  height: 16px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 16px;
  vertical-align: top;
  cursor: default;
}
.ant-picker-focused .ant-picker-separator {
  color: rgba(0, 0, 0, 0.45);
}
.ant-picker-disabled .ant-picker-range-separator .ant-picker-separator {
  cursor: not-allowed;
}
.ant-picker-range {
  position: relative;
  display: inline-flex;
}
.ant-picker-range .ant-picker-clear {
  right: 11px;
}
.ant-picker-range:hover .ant-picker-clear {
  opacity: 1;
}
.ant-picker-range .ant-picker-active-bar {
  bottom: -1px;
  height: 2px;
  margin-left: 11px;
  background: var(--ant-primary-color);
  opacity: 0;
  transition: all 0.3s ease-out;
  pointer-events: none;
}
.ant-picker-range.ant-picker-focused .ant-picker-active-bar {
  opacity: 1;
}
.ant-picker-range-separator {
  align-items: center;
  padding: 0 8px;
  line-height: 1;
}
.ant-picker-range.ant-picker-small .ant-picker-clear {
  right: 7px;
}
.ant-picker-range.ant-picker-small .ant-picker-active-bar {
  margin-left: 7px;
}
.ant-picker-dropdown {
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
  top: -9999px;
  left: -9999px;
  z-index: 1050;
}
.ant-picker-dropdown-hidden {
  display: none;
}
.ant-picker-dropdown-placement-bottomLeft .ant-picker-range-arrow {
  top: 2.58561808px;
  display: block;
  transform: rotate(-135deg) translateY(1px);
}
.ant-picker-dropdown-placement-topLeft .ant-picker-range-arrow {
  bottom: 2.58561808px;
  display: block;
  transform: rotate(45deg);
}
.ant-picker-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-picker-dropdown-placement-topLeft,
.ant-picker-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-picker-dropdown-placement-topRight,
.ant-picker-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-picker-dropdown-placement-topLeft,
.ant-picker-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-picker-dropdown-placement-topRight {
  animation-name: antSlideDownIn;
}
.ant-picker-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-picker-dropdown-placement-bottomLeft,
.ant-picker-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-picker-dropdown-placement-bottomRight,
.ant-picker-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-picker-dropdown-placement-bottomLeft,
.ant-picker-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-picker-dropdown-placement-bottomRight {
  animation-name: antSlideUpIn;
}
.ant-picker-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-picker-dropdown-placement-topLeft,
.ant-picker-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-picker-dropdown-placement-topRight {
  animation-name: antSlideDownOut;
}
.ant-picker-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-picker-dropdown-placement-bottomLeft,
.ant-picker-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-picker-dropdown-placement-bottomRight {
  animation-name: antSlideUpOut;
}
.ant-picker-dropdown-range {
  padding: 7.54247233px 0;
}
.ant-picker-dropdown-range-hidden {
  display: none;
}
.ant-picker-dropdown .ant-picker-panel > .ant-picker-time-panel {
  padding-top: 4px;
}
.ant-picker-ranges {
  margin-bottom: 0;
  padding: 4px 12px;
  overflow: hidden;
  line-height: 34px;
  text-align: left;
  list-style: none;
}
.ant-picker-ranges > li {
  display: inline-block;
}
.ant-picker-ranges .ant-picker-preset > .ant-tag-blue {
  color: var(--ant-primary-color);
  background: var(--ant-primary-1);
  border-color: var(--ant-primary-3);
  cursor: pointer;
}
.ant-picker-ranges .ant-picker-ok {
  float: right;
  margin-left: 8px;
}
.ant-picker-range-wrapper {
  display: flex;
}
.ant-picker-range-arrow {
  position: absolute;
  z-index: 1;
  display: none;
  width: 11.3137085px;
  height: 11.3137085px;
  margin-left: 16.5px;
  background: linear-gradient(135deg, transparent 40%, #fff 40%);
  box-shadow: 2px 2px 6px -2px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease-out;
  border-radius: 0 0 2px;
  pointer-events: none;
}
.ant-picker-range-arrow::before {
  position: absolute;
  top: -11.3137085px;
  left: -11.3137085px;
  width: 33.9411255px;
  height: 33.9411255px;
  background: #fff;
  background-repeat: no-repeat;
  background-position: -10px -10px;
  content: '';
  clip-path: path('M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z');
}
.ant-picker-panel-container {
  overflow: hidden;
  vertical-align: top;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  transition: margin 0.3s;
}
.ant-picker-panel-container .ant-picker-panels {
  display: inline-flex;
  flex-wrap: nowrap;
  direction: ltr;
}
.ant-picker-panel-container .ant-picker-panel {
  vertical-align: top;
  background: transparent;
  border-width: 0 0 1px 0;
  border-radius: 0;
}
.ant-picker-panel-container .ant-picker-panel .ant-picker-content,
.ant-picker-panel-container .ant-picker-panel table {
  text-align: center;
}
.ant-picker-panel-container .ant-picker-panel-focused {
  border-color: rgba(0, 0, 0, 0.06);
}
.ant-picker-panel {
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  outline: none;
}
.ant-picker-panel-focused {
  border-color: var(--ant-primary-color);
}
.ant-picker-decade-panel,
.ant-picker-year-panel,
.ant-picker-quarter-panel,
.ant-picker-month-panel,
.ant-picker-week-panel,
.ant-picker-date-panel,
.ant-picker-time-panel {
  display: flex;
  flex-direction: column;
  width: 280px;
}
.ant-picker-header {
  display: flex;
  padding: 0 8px;
  color: rgba(0, 0, 0, 0.85);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-picker-header > * {
  flex: none;
}
.ant-picker-header button {
  padding: 0;
  color: rgba(0, 0, 0, 0.25);
  line-height: 40px;
  background: transparent;
  border: 0;
  cursor: pointer;
  transition: color 0.3s;
}
.ant-picker-header > button {
  min-width: 1.6em;
  font-size: 14px;
}
.ant-picker-header > button:hover {
  color: rgba(0, 0, 0, 0.85);
}
.ant-picker-header-view {
  flex: auto;
  font-weight: 500;
  line-height: 40px;
}
.ant-picker-header-view button {
  color: inherit;
  font-weight: inherit;
}
.ant-picker-header-view button:not(:first-child) {
  margin-left: 8px;
}
.ant-picker-header-view button:hover {
  color: var(--ant-primary-color);
}
.ant-picker-prev-icon,
.ant-picker-next-icon,
.ant-picker-super-prev-icon,
.ant-picker-super-next-icon {
  position: relative;
  display: inline-block;
  width: 7px;
  height: 7px;
}
.ant-picker-prev-icon::before,
.ant-picker-next-icon::before,
.ant-picker-super-prev-icon::before,
.ant-picker-super-next-icon::before {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 7px;
  height: 7px;
  border: 0 solid currentcolor;
  border-width: 1.5px 0 0 1.5px;
  content: '';
}
.ant-picker-super-prev-icon::after,
.ant-picker-super-next-icon::after {
  position: absolute;
  top: 4px;
  left: 4px;
  display: inline-block;
  width: 7px;
  height: 7px;
  border: 0 solid currentcolor;
  border-width: 1.5px 0 0 1.5px;
  content: '';
}
.ant-picker-prev-icon,
.ant-picker-super-prev-icon {
  transform: rotate(-45deg);
}
.ant-picker-next-icon,
.ant-picker-super-next-icon {
  transform: rotate(135deg);
}
.ant-picker-content {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}
.ant-picker-content th,
.ant-picker-content td {
  position: relative;
  min-width: 24px;
  font-weight: 400;
}
.ant-picker-content th {
  height: 30px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 30px;
}
.ant-picker-cell {
  padding: 3px 0;
  color: rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
.ant-picker-cell-in-view {
  color: rgba(0, 0, 0, 0.85);
}
.ant-picker-cell::before {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  z-index: 1;
  height: 24px;
  transform: translateY(-50%);
  transition: all 0.3s;
  content: '';
}
.ant-picker-cell .ant-picker-cell-inner {
  position: relative;
  z-index: 2;
  display: inline-block;
  min-width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 2px;
  transition: background 0.3s, border 0.3s;
}
.ant-picker-cell:hover:not(.ant-picker-cell-in-view) .ant-picker-cell-inner,
.ant-picker-cell:hover:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-range-hover-start):not(.ant-picker-cell-range-hover-end) .ant-picker-cell-inner {
  background: #f5f5f5;
}
.ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  border: 1px solid var(--ant-primary-color);
  border-radius: 2px;
  content: '';
}
.ant-picker-cell-in-view.ant-picker-cell-in-range {
  position: relative;
}
.ant-picker-cell-in-view.ant-picker-cell-in-range::before {
  background: var(--ant-primary-1);
}
.ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner,
.ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,
.ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner {
  color: #fff;
  background: var(--ant-primary-color);
}
.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single)::before,
.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single)::before {
  background: var(--ant-primary-1);
}
.ant-picker-cell-in-view.ant-picker-cell-range-start::before {
  left: 50%;
}
.ant-picker-cell-in-view.ant-picker-cell-range-end::before {
  right: 50%;
}
.ant-picker-cell-in-view.ant-picker-cell-range-hover-start:not(.ant-picker-cell-in-range):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end)::after,
.ant-picker-cell-in-view.ant-picker-cell-range-hover-end:not(.ant-picker-cell-in-range):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end)::after,
.ant-picker-cell-in-view.ant-picker-cell-range-hover-start.ant-picker-cell-range-start-single::after,
.ant-picker-cell-in-view.ant-picker-cell-range-hover-start.ant-picker-cell-range-start.ant-picker-cell-range-end.ant-picker-cell-range-end-near-hover::after,
.ant-picker-cell-in-view.ant-picker-cell-range-hover-end.ant-picker-cell-range-start.ant-picker-cell-range-end.ant-picker-cell-range-start-near-hover::after,
.ant-picker-cell-in-view.ant-picker-cell-range-hover-end.ant-picker-cell-range-end-single::after,
.ant-picker-cell-in-view.ant-picker-cell-range-hover:not(.ant-picker-cell-in-range)::after {
  position: absolute;
  top: 50%;
  z-index: 0;
  height: 24px;
  border-top: 1px dashed var(--ant-primary-color-deprecated-l-20);
  border-bottom: 1px dashed var(--ant-primary-color-deprecated-l-20);
  transform: translateY(-50%);
  transition: all 0.3s;
  content: '';
}
.ant-picker-cell-range-hover-start::after,
.ant-picker-cell-range-hover-end::after,
.ant-picker-cell-range-hover::after {
  right: 0;
  left: 2px;
}
.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover::before,
.ant-picker-cell-in-view.ant-picker-cell-range-start.ant-picker-cell-range-hover::before,
.ant-picker-cell-in-view.ant-picker-cell-range-end.ant-picker-cell-range-hover::before,
.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single).ant-picker-cell-range-hover-start::before,
.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single).ant-picker-cell-range-hover-end::before,
.ant-picker-panel > :not(.ant-picker-date-panel) .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start::before,
.ant-picker-panel > :not(.ant-picker-date-panel) .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end::before {
  background: var(--ant-primary-color-deprecated-l-35);
}
.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single):not(.ant-picker-cell-range-end) .ant-picker-cell-inner {
  border-radius: 2px 0 0 2px;
}
.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single):not(.ant-picker-cell-range-start) .ant-picker-cell-inner {
  border-radius: 0 2px 2px 0;
}
.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start .ant-picker-cell-inner::after,
.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end .ant-picker-cell-inner::after {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  background: var(--ant-primary-color-deprecated-l-35);
  transition: all 0.3s;
  content: '';
}
.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start .ant-picker-cell-inner::after {
  right: -6px;
  left: 0;
}
.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end .ant-picker-cell-inner::after {
  right: 0;
  left: -6px;
}
.ant-picker-cell-range-hover.ant-picker-cell-range-start::after {
  right: 50%;
}
.ant-picker-cell-range-hover.ant-picker-cell-range-end::after {
  left: 50%;
}
tr > .ant-picker-cell-in-view.ant-picker-cell-range-hover:first-child::after,
tr > .ant-picker-cell-in-view.ant-picker-cell-range-hover-end:first-child::after,
.ant-picker-cell-in-view.ant-picker-cell-start.ant-picker-cell-range-hover-edge-start.ant-picker-cell-range-hover-edge-start-near-range::after,
.ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-start:not(.ant-picker-cell-range-hover-edge-start-near-range)::after,
.ant-picker-cell-in-view.ant-picker-cell-range-hover-start::after {
  left: 6px;
  border-left: 1px dashed var(--ant-primary-color-deprecated-l-20);
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
tr > .ant-picker-cell-in-view.ant-picker-cell-range-hover:last-child::after,
tr > .ant-picker-cell-in-view.ant-picker-cell-range-hover-start:last-child::after,
.ant-picker-cell-in-view.ant-picker-cell-end.ant-picker-cell-range-hover-edge-end.ant-picker-cell-range-hover-edge-end-near-range::after,
.ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-end:not(.ant-picker-cell-range-hover-edge-end-near-range)::after,
.ant-picker-cell-in-view.ant-picker-cell-range-hover-end::after {
  right: 6px;
  border-right: 1px dashed var(--ant-primary-color-deprecated-l-20);
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.ant-picker-cell-disabled {
  color: rgba(0, 0, 0, 0.25);
  pointer-events: none;
}
.ant-picker-cell-disabled .ant-picker-cell-inner {
  background: transparent;
}
.ant-picker-cell-disabled::before {
  background: rgba(0, 0, 0, 0.04);
}
.ant-picker-cell-disabled.ant-picker-cell-today .ant-picker-cell-inner::before {
  border-color: rgba(0, 0, 0, 0.25);
}
.ant-picker-decade-panel .ant-picker-content,
.ant-picker-year-panel .ant-picker-content,
.ant-picker-quarter-panel .ant-picker-content,
.ant-picker-month-panel .ant-picker-content {
  height: 264px;
}
.ant-picker-decade-panel .ant-picker-cell-inner,
.ant-picker-year-panel .ant-picker-cell-inner,
.ant-picker-quarter-panel .ant-picker-cell-inner,
.ant-picker-month-panel .ant-picker-cell-inner {
  padding: 0 8px;
}
.ant-picker-quarter-panel .ant-picker-content {
  height: 56px;
}
.ant-picker-footer {
  width: min-content;
  min-width: 100%;
  line-height: 38px;
  text-align: center;
  border-bottom: 1px solid transparent;
}
.ant-picker-panel .ant-picker-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-picker-footer-extra {
  padding: 0 12px;
  line-height: 38px;
  text-align: left;
}
.ant-picker-footer-extra:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-picker-now {
  text-align: left;
}
.ant-picker-today-btn {
  color: var(--ant-primary-color);
}
.ant-picker-today-btn:hover {
  color: var(--ant-primary-color-hover);
}
.ant-picker-today-btn:active {
  color: var(--ant-primary-color-active);
}
.ant-picker-today-btn.ant-picker-today-btn-disabled {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-picker-decade-panel .ant-picker-cell-inner {
  padding: 0 4px;
}
.ant-picker-decade-panel .ant-picker-cell::before {
  display: none;
}
.ant-picker-year-panel .ant-picker-body,
.ant-picker-quarter-panel .ant-picker-body,
.ant-picker-month-panel .ant-picker-body {
  padding: 0 8px;
}
.ant-picker-year-panel .ant-picker-cell-inner,
.ant-picker-quarter-panel .ant-picker-cell-inner,
.ant-picker-month-panel .ant-picker-cell-inner {
  width: 60px;
}
.ant-picker-year-panel .ant-picker-cell-range-hover-start::after,
.ant-picker-quarter-panel .ant-picker-cell-range-hover-start::after,
.ant-picker-month-panel .ant-picker-cell-range-hover-start::after {
  left: 14px;
  border-left: 1px dashed var(--ant-primary-color-deprecated-l-20);
  border-radius: 2px 0 0 2px;
}
.ant-picker-panel-rtl .ant-picker-year-panel .ant-picker-cell-range-hover-start::after,
.ant-picker-panel-rtl .ant-picker-quarter-panel .ant-picker-cell-range-hover-start::after,
.ant-picker-panel-rtl .ant-picker-month-panel .ant-picker-cell-range-hover-start::after {
  right: 14px;
  border-right: 1px dashed var(--ant-primary-color-deprecated-l-20);
  border-radius: 0 2px 2px 0;
}
.ant-picker-year-panel .ant-picker-cell-range-hover-end::after,
.ant-picker-quarter-panel .ant-picker-cell-range-hover-end::after,
.ant-picker-month-panel .ant-picker-cell-range-hover-end::after {
  right: 14px;
  border-right: 1px dashed var(--ant-primary-color-deprecated-l-20);
  border-radius: 0 2px 2px 0;
}
.ant-picker-panel-rtl .ant-picker-year-panel .ant-picker-cell-range-hover-end::after,
.ant-picker-panel-rtl .ant-picker-quarter-panel .ant-picker-cell-range-hover-end::after,
.ant-picker-panel-rtl .ant-picker-month-panel .ant-picker-cell-range-hover-end::after {
  left: 14px;
  border-left: 1px dashed var(--ant-primary-color-deprecated-l-20);
  border-radius: 2px 0 0 2px;
}
.ant-picker-week-panel .ant-picker-body {
  padding: 8px 12px;
}
.ant-picker-week-panel .ant-picker-cell:hover .ant-picker-cell-inner,
.ant-picker-week-panel .ant-picker-cell-selected .ant-picker-cell-inner,
.ant-picker-week-panel .ant-picker-cell .ant-picker-cell-inner {
  background: transparent !important;
}
.ant-picker-week-panel-row td {
  transition: background 0.3s;
}
.ant-picker-week-panel-row:hover td {
  background: #f5f5f5;
}
.ant-picker-week-panel-row-selected td,
.ant-picker-week-panel-row-selected:hover td {
  background: var(--ant-primary-color);
}
.ant-picker-week-panel-row-selected td.ant-picker-cell-week,
.ant-picker-week-panel-row-selected:hover td.ant-picker-cell-week {
  color: rgba(255, 255, 255, 0.5);
}
.ant-picker-week-panel-row-selected td.ant-picker-cell-today .ant-picker-cell-inner::before,
.ant-picker-week-panel-row-selected:hover td.ant-picker-cell-today .ant-picker-cell-inner::before {
  border-color: #fff;
}
.ant-picker-week-panel-row-selected td .ant-picker-cell-inner,
.ant-picker-week-panel-row-selected:hover td .ant-picker-cell-inner {
  color: #fff;
}
.ant-picker-date-panel .ant-picker-body {
  padding: 8px 12px;
}
.ant-picker-date-panel .ant-picker-content {
  width: 252px;
}
.ant-picker-date-panel .ant-picker-content th {
  width: 36px;
}
.ant-picker-datetime-panel {
  display: flex;
}
.ant-picker-datetime-panel .ant-picker-time-panel {
  border-left: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-picker-datetime-panel .ant-picker-date-panel,
.ant-picker-datetime-panel .ant-picker-time-panel {
  transition: opacity 0.3s;
}
.ant-picker-datetime-panel-active .ant-picker-date-panel,
.ant-picker-datetime-panel-active .ant-picker-time-panel {
  opacity: 0.3;
}
.ant-picker-datetime-panel-active .ant-picker-date-panel-active,
.ant-picker-datetime-panel-active .ant-picker-time-panel-active {
  opacity: 1;
}
.ant-picker-time-panel {
  width: auto;
  min-width: auto;
}
.ant-picker-time-panel .ant-picker-content {
  display: flex;
  flex: auto;
  height: 224px;
}
.ant-picker-time-panel-column {
  flex: 1 0 auto;
  width: 56px;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  text-align: left;
  list-style: none;
  transition: background 0.3s;
}
.ant-picker-time-panel-column::after {
  display: block;
  height: 196px;
  content: '';
}
.ant-picker-datetime-panel .ant-picker-time-panel-column::after {
  height: 198px;
}
.ant-picker-time-panel-column:not(:first-child) {
  border-left: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-picker-time-panel-column-active {
  background: var(--ant-primary-color-active-deprecated-f-30);
}
.ant-picker-time-panel-column:hover {
  overflow-y: auto;
}
.ant-picker-time-panel-column > li {
  margin: 0;
  padding: 0;
}
.ant-picker-time-panel-column > li.ant-picker-time-panel-cell .ant-picker-time-panel-cell-inner {
  display: block;
  width: 100%;
  height: 28px;
  margin: 0;
  padding: 0 0 0 14px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 28px;
  border-radius: 0;
  cursor: pointer;
  transition: background 0.3s;
}
.ant-picker-time-panel-column > li.ant-picker-time-panel-cell .ant-picker-time-panel-cell-inner:hover {
  background: #f5f5f5;
}
.ant-picker-time-panel-column > li.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner {
  background: var(--ant-primary-1);
}
.ant-picker-time-panel-column > li.ant-picker-time-panel-cell-disabled .ant-picker-time-panel-cell-inner {
  color: rgba(0, 0, 0, 0.25);
  background: transparent;
  cursor: not-allowed;
}
/* stylelint-disable selector-type-no-unknown,selector-no-vendor-prefix */
_:-ms-fullscreen .ant-picker-range-wrapper .ant-picker-month-panel .ant-picker-cell,
:root .ant-picker-range-wrapper .ant-picker-month-panel .ant-picker-cell,
_:-ms-fullscreen .ant-picker-range-wrapper .ant-picker-year-panel .ant-picker-cell,
:root .ant-picker-range-wrapper .ant-picker-year-panel .ant-picker-cell {
  padding: 21px 0;
}
.ant-picker-rtl {
  direction: rtl;
}
.ant-picker-rtl .ant-picker-suffix {
  margin-right: 4px;
  margin-left: 0;
}
.ant-picker-rtl .ant-picker-clear {
  right: auto;
  left: 0;
}
.ant-picker-rtl .ant-picker-separator {
  transform: rotate(180deg);
}
.ant-picker-panel-rtl .ant-picker-header-view button:not(:first-child) {
  margin-right: 8px;
  margin-left: 0;
}
.ant-picker-rtl.ant-picker-range .ant-picker-clear {
  right: auto;
  left: 11px;
}
.ant-picker-rtl.ant-picker-range .ant-picker-active-bar {
  margin-right: 11px;
  margin-left: 0;
}
.ant-picker-rtl.ant-picker-range.ant-picker-small .ant-picker-active-bar {
  margin-right: 7px;
}
.ant-picker-dropdown-rtl .ant-picker-ranges {
  text-align: right;
}
.ant-picker-dropdown-rtl .ant-picker-ranges .ant-picker-ok {
  float: left;
  margin-right: 8px;
  margin-left: 0;
}
.ant-picker-panel-rtl {
  direction: rtl;
}
.ant-picker-panel-rtl .ant-picker-prev-icon,
.ant-picker-panel-rtl .ant-picker-super-prev-icon {
  transform: rotate(135deg);
}
.ant-picker-panel-rtl .ant-picker-next-icon,
.ant-picker-panel-rtl .ant-picker-super-next-icon {
  transform: rotate(-45deg);
}
.ant-picker-cell .ant-picker-cell-inner {
  position: relative;
  z-index: 2;
  display: inline-block;
  min-width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 2px;
  transition: background 0.3s, border 0.3s;
}
.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-start::before {
  right: 50%;
  left: 0;
}
.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-end::before {
  right: 0;
  left: 50%;
}
.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-start.ant-picker-cell-range-end::before {
  right: 50%;
  left: 50%;
}
.ant-picker-panel-rtl .ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start .ant-picker-cell-inner::after {
  right: 0;
  left: -6px;
}
.ant-picker-panel-rtl .ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end .ant-picker-cell-inner::after {
  right: -6px;
  left: 0;
}
.ant-picker-panel-rtl .ant-picker-cell-range-hover.ant-picker-cell-range-start::after {
  right: 0;
  left: 50%;
}
.ant-picker-panel-rtl .ant-picker-cell-range-hover.ant-picker-cell-range-end::after {
  right: 50%;
  left: 0;
}
.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single):not(.ant-picker-cell-range-end) .ant-picker-cell-inner {
  border-radius: 0 2px 2px 0;
}
.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single):not(.ant-picker-cell-range-start) .ant-picker-cell-inner {
  border-radius: 2px 0 0 2px;
}
.ant-picker-panel-rtl tr > .ant-picker-cell-in-view.ant-picker-cell-range-hover:not(.ant-picker-cell-selected):first-child::after,
.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-start.ant-picker-cell-range-hover-edge-start.ant-picker-cell-range-hover-edge-start-near-range::after,
.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-start:not(.ant-picker-cell-range-hover-edge-start-near-range)::after,
.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-hover-start::after {
  right: 6px;
  left: 0;
  border-right: 1px dashed var(--ant-primary-color-deprecated-l-20);
  border-left: none;
  border-radius: 0 2px 2px 0;
}
.ant-picker-panel-rtl tr > .ant-picker-cell-in-view.ant-picker-cell-range-hover:not(.ant-picker-cell-selected):last-child::after,
.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-end.ant-picker-cell-range-hover-edge-end.ant-picker-cell-range-hover-edge-end-near-range::after,
.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-end:not(.ant-picker-cell-range-hover-edge-end-near-range)::after,
.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-hover-end::after {
  right: 0;
  left: 6px;
  border-right: none;
  border-left: 1px dashed var(--ant-primary-color-deprecated-l-20);
  border-radius: 2px 0 0 2px;
}
.ant-picker-panel-rtl tr > .ant-picker-cell-in-view.ant-picker-cell-range-hover-start:last-child::after,
.ant-picker-panel-rtl tr > .ant-picker-cell-in-view.ant-picker-cell-range-hover-end:first-child::after,
.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-start.ant-picker-cell-range-hover-edge-start:not(.ant-picker-cell-range-hover)::after,
.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-start.ant-picker-cell-range-hover-end.ant-picker-cell-range-hover-edge-start:not(.ant-picker-cell-range-hover)::after,
.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-end.ant-picker-cell-range-hover-start.ant-picker-cell-range-hover-edge-end:not(.ant-picker-cell-range-hover)::after,
.ant-picker-panel-rtl tr > .ant-picker-cell-in-view.ant-picker-cell-start.ant-picker-cell-range-hover.ant-picker-cell-range-hover-edge-start:last-child::after,
.ant-picker-panel-rtl tr > .ant-picker-cell-in-view.ant-picker-cell-end.ant-picker-cell-range-hover.ant-picker-cell-range-hover-edge-end:first-child::after {
  right: 6px;
  left: 6px;
  border-right: 1px dashed var(--ant-primary-color-deprecated-l-20);
  border-left: 1px dashed var(--ant-primary-color-deprecated-l-20);
  border-radius: 2px;
}
.ant-picker-dropdown-rtl .ant-picker-footer-extra {
  direction: rtl;
  text-align: right;
}
.ant-picker-panel-rtl .ant-picker-time-panel {
  direction: ltr;
}
.ant-picker-inline {
  border: none;
  padding: 0;
}
.ant-picker-inline .ant-picker-range-arrow {
  display: none !important;
}
.ant-picker-inline .ant-picker-dropdown {
  z-index: auto;
}
.ant-picker-dropdown {
  top: unset;
  left: unset;
}
.ant-picker-panel-container.ant-picker-week-number .ant-picker-date-panel .ant-picker-content {
  width: 100%;
}
.ant-picker-panel-container.ant-picker-week-number .ant-picker-date-panel .ant-picker-content th {
  width: inherit;
}
.ant-picker-range-arrow {
  margin-right: 16.5px;
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
.ant-tag {
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
  height: auto;
  margin-right: 8px;
  padding: 0 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  opacity: 1;
  transition: all 0.3s;
}
.ant-tag,
.ant-tag a,
.ant-tag a:hover {
  color: rgba(0, 0, 0, 0.85);
}
.ant-tag > a:first-child:last-child {
  display: inline-block;
  margin: 0 -8px;
  padding: 0 8px;
}
.ant-tag-close-icon {
  margin-left: 3px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 10px;
  cursor: pointer;
  transition: all 0.3s;
}
.ant-tag-close-icon:hover {
  color: rgba(0, 0, 0, 0.85);
}
.ant-tag-has-color {
  border-color: transparent;
}
.ant-tag-has-color,
.ant-tag-has-color a,
.ant-tag-has-color a:hover,
.ant-tag-has-color .anticon-close,
.ant-tag-has-color .anticon-close:hover {
  color: #fff;
}
.ant-tag-checkable {
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
}
.ant-tag-checkable:not(.ant-tag-checkable-checked):hover {
  color: var(--ant-primary-color);
}
.ant-tag-checkable:active,
.ant-tag-checkable-checked {
  color: #fff;
}
.ant-tag-checkable-checked {
  background-color: var(--ant-primary-6);
}
.ant-tag-checkable:active {
  background-color: var(--ant-primary-7);
}
.ant-tag-hidden {
  display: none;
}
.ant-tag-pink {
  color: #c41d7f;
  background: #fff0f6;
  border-color: #ffadd2;
}
.ant-tag-pink-inverse {
  color: #fff;
  background: #eb2f96;
  border-color: #eb2f96;
}
.ant-tag-magenta {
  color: #c41d7f;
  background: #fff0f6;
  border-color: #ffadd2;
}
.ant-tag-magenta-inverse {
  color: #fff;
  background: #eb2f96;
  border-color: #eb2f96;
}
.ant-tag-red {
  color: #cf1322;
  background: #fff1f0;
  border-color: #ffa39e;
}
.ant-tag-red-inverse {
  color: #fff;
  background: #f5222d;
  border-color: #f5222d;
}
.ant-tag-volcano {
  color: #d4380d;
  background: #fff2e8;
  border-color: #ffbb96;
}
.ant-tag-volcano-inverse {
  color: #fff;
  background: #fa541c;
  border-color: #fa541c;
}
.ant-tag-orange {
  color: #d46b08;
  background: #fff7e6;
  border-color: #ffd591;
}
.ant-tag-orange-inverse {
  color: #fff;
  background: #fa8c16;
  border-color: #fa8c16;
}
.ant-tag-yellow {
  color: #d4b106;
  background: #feffe6;
  border-color: #fffb8f;
}
.ant-tag-yellow-inverse {
  color: #fff;
  background: #fadb14;
  border-color: #fadb14;
}
.ant-tag-gold {
  color: #d48806;
  background: #fffbe6;
  border-color: #ffe58f;
}
.ant-tag-gold-inverse {
  color: #fff;
  background: #faad14;
  border-color: #faad14;
}
.ant-tag-cyan {
  color: #08979c;
  background: #e6fffb;
  border-color: #87e8de;
}
.ant-tag-cyan-inverse {
  color: #fff;
  background: #13c2c2;
  border-color: #13c2c2;
}
.ant-tag-lime {
  color: #7cb305;
  background: #fcffe6;
  border-color: #eaff8f;
}
.ant-tag-lime-inverse {
  color: #fff;
  background: #a0d911;
  border-color: #a0d911;
}
.ant-tag-green {
  color: #389e0d;
  background: #f6ffed;
  border-color: #b7eb8f;
}
.ant-tag-green-inverse {
  color: #fff;
  background: #52c41a;
  border-color: #52c41a;
}
.ant-tag-blue {
  color: #096dd9;
  background: #e6f7ff;
  border-color: #91d5ff;
}
.ant-tag-blue-inverse {
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
}
.ant-tag-geekblue {
  color: #1d39c4;
  background: #f0f5ff;
  border-color: #adc6ff;
}
.ant-tag-geekblue-inverse {
  color: #fff;
  background: #2f54eb;
  border-color: #2f54eb;
}
.ant-tag-purple {
  color: #531dab;
  background: #f9f0ff;
  border-color: #d3adf7;
}
.ant-tag-purple-inverse {
  color: #fff;
  background: #722ed1;
  border-color: #722ed1;
}
.ant-tag-success {
  color: var(--ant-success-color);
  background: var(--ant-success-color-deprecated-bg);
  border-color: var(--ant-success-color-deprecated-border);
}
.ant-tag-processing {
  color: var(--ant-info-color);
  background: var(--ant-info-color-deprecated-bg);
  border-color: var(--ant-info-color-deprecated-border);
}
.ant-tag-error {
  color: var(--ant-error-color);
  background: var(--ant-error-color-deprecated-bg);
  border-color: var(--ant-error-color-deprecated-border);
}
.ant-tag-warning {
  color: var(--ant-warning-color);
  background: var(--ant-warning-color-deprecated-bg);
  border-color: var(--ant-warning-color-deprecated-border);
}
.ant-tag > .anticon + span,
.ant-tag > span + .anticon {
  margin-left: 7px;
}
.ant-tag.ant-tag-rtl {
  margin-right: 0;
  margin-left: 8px;
  direction: rtl;
  text-align: right;
}
.ant-tag-rtl .ant-tag-close-icon {
  margin-right: 3px;
  margin-left: 0;
}
.ant-tag-rtl.ant-tag > .anticon + span,
.ant-tag-rtl.ant-tag > span + .anticon {
  margin-right: 7px;
  margin-left: 0;
}
`
          
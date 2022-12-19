
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
.ant-transfer-customize-list .ant-transfer-list {
  flex: 1 1 50%;
  width: auto;
  height: auto;
  min-height: 200px;
}
.ant-transfer-customize-list .ant-table-wrapper .ant-table-small {
  border: 0;
  border-radius: 0;
}
.ant-transfer-customize-list .ant-table-wrapper .ant-table-small .ant-table-selection-column {
  width: 40px;
  min-width: 40px;
}
.ant-transfer-customize-list .ant-table-wrapper .ant-table-small > .ant-table-content > .ant-table-body > table > .ant-table-thead > tr > th {
  background: #fafafa;
}
.ant-transfer-customize-list .ant-table-wrapper .ant-table-small > .ant-table-content .ant-table-row:last-child td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-transfer-customize-list .ant-table-wrapper .ant-table-small .ant-table-body {
  margin: 0;
}
.ant-transfer-customize-list .ant-table-wrapper .ant-table-pagination.ant-pagination {
  margin: 16px 0 4px;
}
.ant-transfer-customize-list .ant-input[disabled] {
  background-color: transparent;
}
.ant-transfer-status-error .ant-transfer-list {
  border-color: var(--ant-error-color);
}
.ant-transfer-status-error .ant-transfer-list-search:not([disabled]) {
  border-color: #d9d9d9;
}
.ant-transfer-status-error .ant-transfer-list-search:not([disabled]):hover {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
}
.ant-input-rtl .ant-transfer-status-error .ant-transfer-list-search:not([disabled]):hover {
  border-right-width: 0;
  border-left-width: 1px !important;
}
.ant-transfer-status-error .ant-transfer-list-search:not([disabled]):focus {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-rtl .ant-transfer-status-error .ant-transfer-list-search:not([disabled]):focus {
  border-right-width: 0;
  border-left-width: 1px !important;
}
.ant-transfer-status-warning .ant-transfer-list {
  border-color: var(--ant-warning-color);
}
.ant-transfer-status-warning .ant-transfer-list-search:not([disabled]) {
  border-color: #d9d9d9;
}
.ant-transfer-status-warning .ant-transfer-list-search:not([disabled]):hover {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
}
.ant-input-rtl .ant-transfer-status-warning .ant-transfer-list-search:not([disabled]):hover {
  border-right-width: 0;
  border-left-width: 1px !important;
}
.ant-transfer-status-warning .ant-transfer-list-search:not([disabled]):focus {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-input-rtl .ant-transfer-status-warning .ant-transfer-list-search:not([disabled]):focus {
  border-right-width: 0;
  border-left-width: 1px !important;
}
.ant-transfer {
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
  display: flex;
  align-items: stretch;
}
.ant-transfer-disabled .ant-transfer-list {
  background: #f5f5f5;
}
.ant-transfer-list {
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 200px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
.ant-transfer-list-with-pagination {
  width: 250px;
  height: auto;
}
.ant-transfer-list-search .anticon-search {
  color: rgba(0, 0, 0, 0.25);
}
.ant-transfer-list-header {
  display: flex;
  flex: none;
  align-items: center;
  height: 40px;
  padding: 8px 12px 9px;
  color: rgba(0, 0, 0, 0.85);
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px 2px 0 0;
}
.ant-transfer-list-header > *:not(:last-child) {
  margin-right: 4px;
}
.ant-transfer-list-header > * {
  flex: none;
}
.ant-transfer-list-header-title {
  flex: auto;
  overflow: hidden;
  white-space: nowrap;
  text-align: right;
  text-overflow: ellipsis;
}
.ant-transfer-list-header-dropdown {
  font-size: 10px;
  transform: translateY(10%);
  cursor: pointer;
}
.ant-transfer-list-header-dropdown[disabled] {
  cursor: not-allowed;
}
.ant-transfer-list-body {
  display: flex;
  flex: auto;
  flex-direction: column;
  overflow: hidden;
  font-size: 14px;
}
.ant-transfer-list-body-search-wrapper {
  position: relative;
  flex: none;
  padding: 12px;
}
.ant-transfer-list-content {
  flex: auto;
  margin: 0;
  padding: 0;
  overflow: auto;
  list-style: none;
}
.ant-transfer-list-content-item {
  display: flex;
  align-items: center;
  min-height: 32px;
  padding: 6px 12px;
  line-height: 20px;
  transition: all 0.3s;
}
.ant-transfer-list-content-item > *:not(:last-child) {
  margin-right: 8px;
}
.ant-transfer-list-content-item > * {
  flex: none;
}
.ant-transfer-list-content-item-text {
  flex: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ant-transfer-list-content-item-remove {
  color: var(--ant-primary-color);
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
  position: relative;
  color: #d9d9d9;
}
.ant-transfer-list-content-item-remove:focus,
.ant-transfer-list-content-item-remove:hover {
  color: var(--ant-primary-color-hover);
}
.ant-transfer-list-content-item-remove:active {
  color: var(--ant-primary-color-active);
}
.ant-transfer-list-content-item-remove::after {
  position: absolute;
  top: -6px;
  right: -50%;
  bottom: -6px;
  left: -50%;
  content: '';
}
.ant-transfer-list-content-item-remove:hover {
  color: var(--ant-primary-color-hover);
}
.ant-transfer-list-content-item:not(.ant-transfer-list-content-item-disabled):hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
.ant-transfer-list-content-item:not(.ant-transfer-list-content-item-disabled).ant-transfer-list-content-item-checked:hover {
  background-color: var(--ant-primary-color-active-deprecated-d-02);
}
.ant-transfer-list-content-show-remove .ant-transfer-list-content-item:not(.ant-transfer-list-content-item-disabled):hover {
  background: transparent;
  cursor: default;
}
.ant-transfer-list-content-item-checked {
  background-color: var(--ant-primary-1);
}
.ant-transfer-list-content-item-disabled {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-transfer-list-pagination {
  padding: 8px 0;
  text-align: right;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-transfer-list-body-not-found {
  flex: none;
  width: 100%;
  margin: auto 0;
  color: rgba(0, 0, 0, 0.25);
  text-align: center;
}
.ant-transfer-list-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-transfer-operation {
  display: flex;
  flex: none;
  flex-direction: column;
  align-self: center;
  margin: 0 8px;
  vertical-align: middle;
}
.ant-transfer-operation .ant-btn {
  display: block;
}
.ant-transfer-operation .ant-btn:first-child {
  margin-bottom: 4px;
}
.ant-transfer-operation .ant-btn .anticon {
  font-size: 12px;
}
.ant-transfer .ant-empty-image {
  max-height: -2px;
}
.ant-transfer-rtl {
  direction: rtl;
}
.ant-transfer-rtl .ant-transfer-list-search {
  padding-right: 8px;
  padding-left: 24px;
}
.ant-transfer-rtl .ant-transfer-list-search-action {
  right: auto;
  left: 12px;
}
.ant-transfer-rtl .ant-transfer-list-header > *:not(:last-child) {
  margin-right: 0;
  margin-left: 4px;
}
.ant-transfer-rtl .ant-transfer-list-header {
  right: 0;
  left: auto;
}
.ant-transfer-rtl .ant-transfer-list-header-title {
  text-align: left;
}
.ant-transfer-rtl .ant-transfer-list-content-item > *:not(:last-child) {
  margin-right: 0;
  margin-left: 8px;
}
.ant-transfer-rtl .ant-transfer-list-pagination {
  text-align: left;
}
.ant-transfer-rtl .ant-transfer-list-footer {
  right: 0;
  left: auto;
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
.ant-checkbox {
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
.ant-checkbox-wrapper:hover .ant-checkbox-inner,
.ant-checkbox:hover .ant-checkbox-inner,
.ant-checkbox-input:focus + .ant-checkbox-inner {
  border-color: var(--ant-primary-color);
}
.ant-checkbox-checked::after {
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
.ant-checkbox:hover::after,
.ant-checkbox-wrapper:hover .ant-checkbox::after {
  visibility: visible;
}
.ant-checkbox-inner {
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
.ant-checkbox-inner::after {
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
.ant-checkbox-input {
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
.ant-checkbox-checked .ant-checkbox-inner::after {
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
.ant-checkbox-checked .ant-checkbox-inner {
  background-color: var(--ant-primary-color);
  border-color: var(--ant-primary-color);
}
.ant-checkbox-disabled {
  cursor: not-allowed;
}
.ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
  border-color: rgba(0, 0, 0, 0.25);
  animation-name: none;
}
.ant-checkbox-disabled .ant-checkbox-input {
  cursor: not-allowed;
  pointer-events: none;
}
.ant-checkbox-disabled .ant-checkbox-inner {
  background-color: #f5f5f5;
  border-color: #d9d9d9 !important;
}
.ant-checkbox-disabled .ant-checkbox-inner::after {
  border-color: #f5f5f5;
  border-collapse: separate;
  animation-name: none;
}
.ant-checkbox-disabled + span {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-checkbox-disabled:hover::after,
.ant-checkbox-wrapper:hover .ant-checkbox-disabled::after {
  visibility: hidden;
}
.ant-checkbox-wrapper {
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
.ant-checkbox-wrapper::after {
  display: inline-block;
  width: 0;
  overflow: hidden;
  content: '\a0';
}
.ant-checkbox-wrapper.ant-checkbox-wrapper-disabled {
  cursor: not-allowed;
}
.ant-checkbox-wrapper + .ant-checkbox-wrapper {
  margin-left: 8px;
}
.ant-checkbox-wrapper.ant-checkbox-wrapper-in-form-item input[type='checkbox'] {
  width: 14px;
  height: 14px;
}
.ant-checkbox + span {
  padding-right: 8px;
  padding-left: 8px;
}
.ant-checkbox-group {
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
.ant-checkbox-group-item {
  margin-right: 8px;
}
.ant-checkbox-group-item:last-child {
  margin-right: 0;
}
.ant-checkbox-group-item + .ant-checkbox-group-item {
  margin-left: 0;
}
.ant-checkbox-indeterminate .ant-checkbox-inner {
  background-color: #fff;
  border-color: #d9d9d9;
}
.ant-checkbox-indeterminate .ant-checkbox-inner::after {
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
.ant-checkbox-indeterminate.ant-checkbox-disabled .ant-checkbox-inner::after {
  background-color: rgba(0, 0, 0, 0.25);
  border-color: rgba(0, 0, 0, 0.25);
}
.ant-checkbox-rtl {
  direction: rtl;
}
.ant-checkbox-group-rtl .ant-checkbox-group-item {
  margin-right: 0;
  margin-left: 8px;
}
.ant-checkbox-group-rtl .ant-checkbox-group-item:last-child {
  margin-left: 0 !important;
}
.ant-checkbox-group-rtl .ant-checkbox-group-item + .ant-checkbox-group-item {
  margin-left: 8px;
}
.ant-checkbox + span:empty {
  display: none;
}
.ant-btn {
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.85);
  border-color: #d9d9d9;
  background: #fff;
}
.ant-btn > .anticon {
  line-height: 1;
}
.ant-btn,
.ant-btn:active,
.ant-btn:focus {
  outline: 0;
}
.ant-btn:not([disabled]):hover {
  text-decoration: none;
}
.ant-btn:not([disabled]):active {
  outline: 0;
  box-shadow: none;
}
.ant-btn[disabled] {
  cursor: not-allowed;
}
.ant-btn[disabled] > * {
  pointer-events: none;
}
.ant-btn-lg {
  height: 40px;
  padding: 6.4px 15px;
  font-size: 16px;
  border-radius: 2px;
}
.ant-btn-sm {
  height: 24px;
  padding: 0px 7px;
  font-size: 14px;
  border-radius: 2px;
}
.ant-btn > a:only-child {
  color: currentcolor;
}
.ant-btn > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn:hover,
.ant-btn:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: #fff;
}
.ant-btn:hover > a:only-child,
.ant-btn:focus > a:only-child {
  color: currentcolor;
}
.ant-btn:hover > a:only-child::after,
.ant-btn:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: #fff;
}
.ant-btn:active > a:only-child {
  color: currentcolor;
}
.ant-btn:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn[disabled],
.ant-btn[disabled]:hover,
.ant-btn[disabled]:focus,
.ant-btn[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn[disabled] > a:only-child,
.ant-btn[disabled]:hover > a:only-child,
.ant-btn[disabled]:focus > a:only-child,
.ant-btn[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn[disabled] > a:only-child::after,
.ant-btn[disabled]:hover > a:only-child::after,
.ant-btn[disabled]:focus > a:only-child::after,
.ant-btn[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn:hover,
.ant-btn:focus,
.ant-btn:active {
  text-decoration: none;
  background: #fff;
}
.ant-btn > span {
  display: inline-block;
}
.ant-btn-primary {
  color: #fff;
  border-color: var(--ant-primary-color);
  background: var(--ant-primary-color);
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.ant-btn-primary > a:only-child {
  color: currentcolor;
}
.ant-btn-primary > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-primary:hover,
.ant-btn-primary:focus {
  color: #fff;
  border-color: var(--ant-primary-color-hover);
  background: var(--ant-primary-color-hover);
}
.ant-btn-primary:hover > a:only-child,
.ant-btn-primary:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-primary:hover > a:only-child::after,
.ant-btn-primary:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-primary:active {
  color: #fff;
  border-color: var(--ant-primary-color-active);
  background: var(--ant-primary-color-active);
}
.ant-btn-primary:active > a:only-child {
  color: currentcolor;
}
.ant-btn-primary:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-primary[disabled],
.ant-btn-primary[disabled]:hover,
.ant-btn-primary[disabled]:focus,
.ant-btn-primary[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-primary[disabled] > a:only-child,
.ant-btn-primary[disabled]:hover > a:only-child,
.ant-btn-primary[disabled]:focus > a:only-child,
.ant-btn-primary[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-primary[disabled] > a:only-child::after,
.ant-btn-primary[disabled]:hover > a:only-child::after,
.ant-btn-primary[disabled]:focus > a:only-child::after,
.ant-btn-primary[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-group .ant-btn-primary:not(:first-child):not(:last-child) {
  border-right-color: var(--ant-primary-5);
  border-left-color: var(--ant-primary-5);
}
.ant-btn-group .ant-btn-primary:not(:first-child):not(:last-child):disabled {
  border-color: #d9d9d9;
}
.ant-btn-group .ant-btn-primary:first-child:not(:last-child) {
  border-right-color: var(--ant-primary-5);
}
.ant-btn-group .ant-btn-primary:first-child:not(:last-child)[disabled] {
  border-right-color: #d9d9d9;
}
.ant-btn-group .ant-btn-primary:last-child:not(:first-child),
.ant-btn-group .ant-btn-primary + .ant-btn-primary {
  border-left-color: var(--ant-primary-5);
}
.ant-btn-group .ant-btn-primary:last-child:not(:first-child)[disabled],
.ant-btn-group .ant-btn-primary + .ant-btn-primary[disabled] {
  border-left-color: #d9d9d9;
}
.ant-btn-ghost {
  color: rgba(0, 0, 0, 0.85);
  border-color: #d9d9d9;
  background: transparent;
}
.ant-btn-ghost > a:only-child {
  color: currentcolor;
}
.ant-btn-ghost > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-ghost:hover,
.ant-btn-ghost:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: transparent;
}
.ant-btn-ghost:hover > a:only-child,
.ant-btn-ghost:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-ghost:hover > a:only-child::after,
.ant-btn-ghost:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-ghost:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: transparent;
}
.ant-btn-ghost:active > a:only-child {
  color: currentcolor;
}
.ant-btn-ghost:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-ghost[disabled],
.ant-btn-ghost[disabled]:hover,
.ant-btn-ghost[disabled]:focus,
.ant-btn-ghost[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-ghost[disabled] > a:only-child,
.ant-btn-ghost[disabled]:hover > a:only-child,
.ant-btn-ghost[disabled]:focus > a:only-child,
.ant-btn-ghost[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-ghost[disabled] > a:only-child::after,
.ant-btn-ghost[disabled]:hover > a:only-child::after,
.ant-btn-ghost[disabled]:focus > a:only-child::after,
.ant-btn-ghost[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dashed {
  color: rgba(0, 0, 0, 0.85);
  border-color: #d9d9d9;
  background: #fff;
  border-style: dashed;
}
.ant-btn-dashed > a:only-child {
  color: currentcolor;
}
.ant-btn-dashed > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dashed:hover,
.ant-btn-dashed:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: #fff;
}
.ant-btn-dashed:hover > a:only-child,
.ant-btn-dashed:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-dashed:hover > a:only-child::after,
.ant-btn-dashed:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dashed:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: #fff;
}
.ant-btn-dashed:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dashed:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dashed[disabled],
.ant-btn-dashed[disabled]:hover,
.ant-btn-dashed[disabled]:focus,
.ant-btn-dashed[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-dashed[disabled] > a:only-child,
.ant-btn-dashed[disabled]:hover > a:only-child,
.ant-btn-dashed[disabled]:focus > a:only-child,
.ant-btn-dashed[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dashed[disabled] > a:only-child::after,
.ant-btn-dashed[disabled]:hover > a:only-child::after,
.ant-btn-dashed[disabled]:focus > a:only-child::after,
.ant-btn-dashed[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-danger {
  color: #fff;
  border-color: var(--ant-error-color);
  background: var(--ant-error-color);
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.ant-btn-danger > a:only-child {
  color: currentcolor;
}
.ant-btn-danger > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-danger:hover,
.ant-btn-danger:focus {
  color: #fff;
  border-color: var(--ant-error-color-hover);
  background: var(--ant-error-color-hover);
}
.ant-btn-danger:hover > a:only-child,
.ant-btn-danger:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-danger:hover > a:only-child::after,
.ant-btn-danger:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-danger:active {
  color: #fff;
  border-color: var(--ant-error-color-active);
  background: var(--ant-error-color-active);
}
.ant-btn-danger:active > a:only-child {
  color: currentcolor;
}
.ant-btn-danger:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-danger[disabled],
.ant-btn-danger[disabled]:hover,
.ant-btn-danger[disabled]:focus,
.ant-btn-danger[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-danger[disabled] > a:only-child,
.ant-btn-danger[disabled]:hover > a:only-child,
.ant-btn-danger[disabled]:focus > a:only-child,
.ant-btn-danger[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-danger[disabled] > a:only-child::after,
.ant-btn-danger[disabled]:hover > a:only-child::after,
.ant-btn-danger[disabled]:focus > a:only-child::after,
.ant-btn-danger[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-link {
  color: var(--ant-primary-color);
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}
.ant-btn-link > a:only-child {
  color: currentcolor;
}
.ant-btn-link > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-link:hover,
.ant-btn-link:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: transparent;
}
.ant-btn-link:hover > a:only-child,
.ant-btn-link:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-link:hover > a:only-child::after,
.ant-btn-link:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-link:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: transparent;
}
.ant-btn-link:active > a:only-child {
  color: currentcolor;
}
.ant-btn-link:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-link[disabled],
.ant-btn-link[disabled]:hover,
.ant-btn-link[disabled]:focus,
.ant-btn-link[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-link[disabled] > a:only-child,
.ant-btn-link[disabled]:hover > a:only-child,
.ant-btn-link[disabled]:focus > a:only-child,
.ant-btn-link[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-link[disabled] > a:only-child::after,
.ant-btn-link[disabled]:hover > a:only-child::after,
.ant-btn-link[disabled]:focus > a:only-child::after,
.ant-btn-link[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-link:hover {
  background: transparent;
}
.ant-btn-link:hover,
.ant-btn-link:focus,
.ant-btn-link:active {
  border-color: transparent;
}
.ant-btn-link[disabled],
.ant-btn-link[disabled]:hover,
.ant-btn-link[disabled]:focus,
.ant-btn-link[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: transparent;
  background: transparent;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-link[disabled] > a:only-child,
.ant-btn-link[disabled]:hover > a:only-child,
.ant-btn-link[disabled]:focus > a:only-child,
.ant-btn-link[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-link[disabled] > a:only-child::after,
.ant-btn-link[disabled]:hover > a:only-child::after,
.ant-btn-link[disabled]:focus > a:only-child::after,
.ant-btn-link[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-text {
  color: rgba(0, 0, 0, 0.85);
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}
.ant-btn-text > a:only-child {
  color: currentcolor;
}
.ant-btn-text > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-text:hover,
.ant-btn-text:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: transparent;
}
.ant-btn-text:hover > a:only-child,
.ant-btn-text:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-text:hover > a:only-child::after,
.ant-btn-text:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-text:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: transparent;
}
.ant-btn-text:active > a:only-child {
  color: currentcolor;
}
.ant-btn-text:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-text[disabled],
.ant-btn-text[disabled]:hover,
.ant-btn-text[disabled]:focus,
.ant-btn-text[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-text[disabled] > a:only-child,
.ant-btn-text[disabled]:hover > a:only-child,
.ant-btn-text[disabled]:focus > a:only-child,
.ant-btn-text[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-text[disabled] > a:only-child::after,
.ant-btn-text[disabled]:hover > a:only-child::after,
.ant-btn-text[disabled]:focus > a:only-child::after,
.ant-btn-text[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-text:hover,
.ant-btn-text:focus {
  color: rgba(0, 0, 0, 0.85);
  background: rgba(0, 0, 0, 0.018);
  border-color: transparent;
}
.ant-btn-text:active {
  color: rgba(0, 0, 0, 0.85);
  background: rgba(0, 0, 0, 0.028);
  border-color: transparent;
}
.ant-btn-text[disabled],
.ant-btn-text[disabled]:hover,
.ant-btn-text[disabled]:focus,
.ant-btn-text[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: transparent;
  background: transparent;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-text[disabled] > a:only-child,
.ant-btn-text[disabled]:hover > a:only-child,
.ant-btn-text[disabled]:focus > a:only-child,
.ant-btn-text[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-text[disabled] > a:only-child::after,
.ant-btn-text[disabled]:hover > a:only-child::after,
.ant-btn-text[disabled]:focus > a:only-child::after,
.ant-btn-text[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous {
  color: var(--ant-error-color);
  border-color: var(--ant-error-color);
  background: #fff;
}
.ant-btn-dangerous > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous:hover,
.ant-btn-dangerous:focus {
  color: var(--ant-error-color-hover);
  border-color: var(--ant-error-color-hover);
  background: #fff;
}
.ant-btn-dangerous:hover > a:only-child,
.ant-btn-dangerous:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous:hover > a:only-child::after,
.ant-btn-dangerous:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous:active {
  color: var(--ant-error-color-active);
  border-color: var(--ant-error-color-active);
  background: #fff;
}
.ant-btn-dangerous:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous[disabled],
.ant-btn-dangerous[disabled]:hover,
.ant-btn-dangerous[disabled]:focus,
.ant-btn-dangerous[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-dangerous[disabled] > a:only-child,
.ant-btn-dangerous[disabled]:hover > a:only-child,
.ant-btn-dangerous[disabled]:focus > a:only-child,
.ant-btn-dangerous[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous[disabled] > a:only-child::after,
.ant-btn-dangerous[disabled]:hover > a:only-child::after,
.ant-btn-dangerous[disabled]:focus > a:only-child::after,
.ant-btn-dangerous[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-primary {
  color: #fff;
  border-color: var(--ant-error-color);
  background: var(--ant-error-color);
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.ant-btn-dangerous.ant-btn-primary > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-primary > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-primary:hover,
.ant-btn-dangerous.ant-btn-primary:focus {
  color: #fff;
  border-color: var(--ant-error-color-hover);
  background: var(--ant-error-color-hover);
}
.ant-btn-dangerous.ant-btn-primary:hover > a:only-child,
.ant-btn-dangerous.ant-btn-primary:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-primary:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-primary:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-primary:active {
  color: #fff;
  border-color: var(--ant-error-color-active);
  background: var(--ant-error-color-active);
}
.ant-btn-dangerous.ant-btn-primary:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-primary:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-primary[disabled],
.ant-btn-dangerous.ant-btn-primary[disabled]:hover,
.ant-btn-dangerous.ant-btn-primary[disabled]:focus,
.ant-btn-dangerous.ant-btn-primary[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-dangerous.ant-btn-primary[disabled] > a:only-child,
.ant-btn-dangerous.ant-btn-primary[disabled]:hover > a:only-child,
.ant-btn-dangerous.ant-btn-primary[disabled]:focus > a:only-child,
.ant-btn-dangerous.ant-btn-primary[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-primary[disabled] > a:only-child::after,
.ant-btn-dangerous.ant-btn-primary[disabled]:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-primary[disabled]:focus > a:only-child::after,
.ant-btn-dangerous.ant-btn-primary[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-link {
  color: var(--ant-error-color);
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}
.ant-btn-dangerous.ant-btn-link > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-link > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-link:hover,
.ant-btn-dangerous.ant-btn-link:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: transparent;
}
.ant-btn-dangerous.ant-btn-link:hover > a:only-child,
.ant-btn-dangerous.ant-btn-link:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-link:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-link:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-link:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: transparent;
}
.ant-btn-dangerous.ant-btn-link:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-link:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-link[disabled],
.ant-btn-dangerous.ant-btn-link[disabled]:hover,
.ant-btn-dangerous.ant-btn-link[disabled]:focus,
.ant-btn-dangerous.ant-btn-link[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-dangerous.ant-btn-link[disabled] > a:only-child,
.ant-btn-dangerous.ant-btn-link[disabled]:hover > a:only-child,
.ant-btn-dangerous.ant-btn-link[disabled]:focus > a:only-child,
.ant-btn-dangerous.ant-btn-link[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-link[disabled] > a:only-child::after,
.ant-btn-dangerous.ant-btn-link[disabled]:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-link[disabled]:focus > a:only-child::after,
.ant-btn-dangerous.ant-btn-link[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-link:hover,
.ant-btn-dangerous.ant-btn-link:focus {
  color: var(--ant-error-color-hover);
  border-color: transparent;
  background: transparent;
}
.ant-btn-dangerous.ant-btn-link:hover > a:only-child,
.ant-btn-dangerous.ant-btn-link:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-link:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-link:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-link:active {
  color: var(--ant-error-color-active);
  border-color: transparent;
  background: transparent;
}
.ant-btn-dangerous.ant-btn-link:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-link:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-link[disabled],
.ant-btn-dangerous.ant-btn-link[disabled]:hover,
.ant-btn-dangerous.ant-btn-link[disabled]:focus,
.ant-btn-dangerous.ant-btn-link[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: transparent;
  background: transparent;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-dangerous.ant-btn-link[disabled] > a:only-child,
.ant-btn-dangerous.ant-btn-link[disabled]:hover > a:only-child,
.ant-btn-dangerous.ant-btn-link[disabled]:focus > a:only-child,
.ant-btn-dangerous.ant-btn-link[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-link[disabled] > a:only-child::after,
.ant-btn-dangerous.ant-btn-link[disabled]:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-link[disabled]:focus > a:only-child::after,
.ant-btn-dangerous.ant-btn-link[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-text {
  color: var(--ant-error-color);
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}
.ant-btn-dangerous.ant-btn-text > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-text > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-text:hover,
.ant-btn-dangerous.ant-btn-text:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: transparent;
}
.ant-btn-dangerous.ant-btn-text:hover > a:only-child,
.ant-btn-dangerous.ant-btn-text:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-text:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-text:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-text:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: transparent;
}
.ant-btn-dangerous.ant-btn-text:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-text:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-text[disabled],
.ant-btn-dangerous.ant-btn-text[disabled]:hover,
.ant-btn-dangerous.ant-btn-text[disabled]:focus,
.ant-btn-dangerous.ant-btn-text[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-dangerous.ant-btn-text[disabled] > a:only-child,
.ant-btn-dangerous.ant-btn-text[disabled]:hover > a:only-child,
.ant-btn-dangerous.ant-btn-text[disabled]:focus > a:only-child,
.ant-btn-dangerous.ant-btn-text[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-text[disabled] > a:only-child::after,
.ant-btn-dangerous.ant-btn-text[disabled]:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-text[disabled]:focus > a:only-child::after,
.ant-btn-dangerous.ant-btn-text[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-text:hover,
.ant-btn-dangerous.ant-btn-text:focus {
  color: var(--ant-error-color-hover);
  border-color: transparent;
  background: rgba(0, 0, 0, 0.018);
}
.ant-btn-dangerous.ant-btn-text:hover > a:only-child,
.ant-btn-dangerous.ant-btn-text:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-text:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-text:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-text:active {
  color: var(--ant-error-color-active);
  border-color: transparent;
  background: rgba(0, 0, 0, 0.028);
}
.ant-btn-dangerous.ant-btn-text:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-text:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-text[disabled],
.ant-btn-dangerous.ant-btn-text[disabled]:hover,
.ant-btn-dangerous.ant-btn-text[disabled]:focus,
.ant-btn-dangerous.ant-btn-text[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: transparent;
  background: transparent;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-dangerous.ant-btn-text[disabled] > a:only-child,
.ant-btn-dangerous.ant-btn-text[disabled]:hover > a:only-child,
.ant-btn-dangerous.ant-btn-text[disabled]:focus > a:only-child,
.ant-btn-dangerous.ant-btn-text[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-text[disabled] > a:only-child::after,
.ant-btn-dangerous.ant-btn-text[disabled]:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-text[disabled]:focus > a:only-child::after,
.ant-btn-dangerous.ant-btn-text[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-icon-only {
  width: 32px;
  height: 32px;
  padding: 2.4px 0;
  font-size: 16px;
  border-radius: 2px;
  vertical-align: -3px;
}
.ant-btn-icon-only > * {
  font-size: 16px;
}
.ant-btn-icon-only.ant-btn-lg {
  width: 40px;
  height: 40px;
  padding: 4.9px 0;
  font-size: 18px;
  border-radius: 2px;
}
.ant-btn-icon-only.ant-btn-lg > * {
  font-size: 18px;
}
.ant-btn-icon-only.ant-btn-sm {
  width: 24px;
  height: 24px;
  padding: 0px 0;
  font-size: 14px;
  border-radius: 2px;
}
.ant-btn-icon-only.ant-btn-sm > * {
  font-size: 14px;
}
.ant-btn-icon-only > .anticon {
  display: flex;
  justify-content: center;
}
a.ant-btn-icon-only {
  vertical-align: -1px;
}
a.ant-btn-icon-only > .anticon {
  display: inline;
}
.ant-btn-round {
  height: 32px;
  padding: 4px 16px;
  font-size: 14px;
  border-radius: 32px;
}
.ant-btn-round.ant-btn-lg {
  height: 40px;
  padding: 6.4px 20px;
  font-size: 16px;
  border-radius: 40px;
}
.ant-btn-round.ant-btn-sm {
  height: 24px;
  padding: 0px 12px;
  font-size: 14px;
  border-radius: 24px;
}
.ant-btn-round.ant-btn-icon-only {
  width: auto;
}
.ant-btn-circle {
  min-width: 32px;
  padding-right: 0;
  padding-left: 0;
  text-align: center;
  border-radius: 50%;
}
.ant-btn-circle.ant-btn-lg {
  min-width: 40px;
  border-radius: 50%;
}
.ant-btn-circle.ant-btn-sm {
  min-width: 24px;
  border-radius: 50%;
}
.ant-btn::before {
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  z-index: 1;
  display: none;
  background: #fff;
  border-radius: inherit;
  opacity: 0.35;
  transition: opacity 0.2s;
  content: '';
  pointer-events: none;
}
.ant-btn .anticon {
  transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-btn .anticon.anticon-plus > svg,
.ant-btn .anticon.anticon-minus > svg {
  shape-rendering: optimizespeed;
}
.ant-btn.ant-btn-loading {
  position: relative;
  cursor: default;
}
.ant-btn.ant-btn-loading::before {
  display: block;
}
.ant-btn > .ant-btn-loading-icon {
  transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-btn > .ant-btn-loading-icon .anticon {
  padding-right: 8px;
  animation: none;
}
.ant-btn > .ant-btn-loading-icon .anticon svg {
  animation: loadingCircle 1s infinite linear;
}
.ant-btn > .ant-btn-loading-icon:only-child .anticon {
  padding-right: 0;
}
.ant-btn-group {
  position: relative;
  display: inline-flex;
}
.ant-btn-group > .ant-btn,
.ant-btn-group > span > .ant-btn {
  position: relative;
}
.ant-btn-group > .ant-btn:hover,
.ant-btn-group > span > .ant-btn:hover,
.ant-btn-group > .ant-btn:focus,
.ant-btn-group > span > .ant-btn:focus,
.ant-btn-group > .ant-btn:active,
.ant-btn-group > span > .ant-btn:active {
  z-index: 2;
}
.ant-btn-group > .ant-btn[disabled],
.ant-btn-group > span > .ant-btn[disabled] {
  z-index: 0;
}
.ant-btn-group .ant-btn-icon-only {
  font-size: 14px;
}
.ant-btn-group .ant-btn + .ant-btn,
.ant-btn + .ant-btn-group,
.ant-btn-group span + .ant-btn,
.ant-btn-group .ant-btn + span,
.ant-btn-group > span + span,
.ant-btn-group + .ant-btn,
.ant-btn-group + .ant-btn-group {
  margin-left: -1px;
}
.ant-btn-group .ant-btn-primary + .ant-btn:not(.ant-btn-primary):not([disabled]) {
  border-left-color: transparent;
}
.ant-btn-group .ant-btn {
  border-radius: 0;
}
.ant-btn-group > .ant-btn:first-child,
.ant-btn-group > span:first-child > .ant-btn {
  margin-left: 0;
}
.ant-btn-group > .ant-btn:only-child {
  border-radius: 2px;
}
.ant-btn-group > span:only-child > .ant-btn {
  border-radius: 2px;
}
.ant-btn-group > .ant-btn:first-child:not(:last-child),
.ant-btn-group > span:first-child:not(:last-child) > .ant-btn {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.ant-btn-group > .ant-btn:last-child:not(:first-child),
.ant-btn-group > span:last-child:not(:first-child) > .ant-btn {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.ant-btn-group-sm > .ant-btn:only-child {
  border-radius: 2px;
}
.ant-btn-group-sm > span:only-child > .ant-btn {
  border-radius: 2px;
}
.ant-btn-group-sm > .ant-btn:first-child:not(:last-child),
.ant-btn-group-sm > span:first-child:not(:last-child) > .ant-btn {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.ant-btn-group-sm > .ant-btn:last-child:not(:first-child),
.ant-btn-group-sm > span:last-child:not(:first-child) > .ant-btn {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.ant-btn-group > .ant-btn-group {
  float: left;
}
.ant-btn-group > .ant-btn-group:not(:first-child):not(:last-child) > .ant-btn {
  border-radius: 0;
}
.ant-btn-group > .ant-btn-group:first-child:not(:last-child) > .ant-btn:last-child {
  padding-right: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.ant-btn-group > .ant-btn-group:last-child:not(:first-child) > .ant-btn:first-child {
  padding-left: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.ant-btn-rtl.ant-btn-group .ant-btn + .ant-btn,
.ant-btn-rtl.ant-btn + .ant-btn-group,
.ant-btn-rtl.ant-btn-group span + .ant-btn,
.ant-btn-rtl.ant-btn-group .ant-btn + span,
.ant-btn-rtl.ant-btn-group > span + span,
.ant-btn-rtl.ant-btn-group + .ant-btn,
.ant-btn-rtl.ant-btn-group + .ant-btn-group,
.ant-btn-group-rtl.ant-btn-group .ant-btn + .ant-btn,
.ant-btn-group-rtl.ant-btn + .ant-btn-group,
.ant-btn-group-rtl.ant-btn-group span + .ant-btn,
.ant-btn-group-rtl.ant-btn-group .ant-btn + span,
.ant-btn-group-rtl.ant-btn-group > span + span,
.ant-btn-group-rtl.ant-btn-group + .ant-btn,
.ant-btn-group-rtl.ant-btn-group + .ant-btn-group {
  margin-right: -1px;
  margin-left: auto;
}
.ant-btn-group.ant-btn-group-rtl {
  direction: rtl;
}
.ant-btn-group-rtl.ant-btn-group > .ant-btn:first-child:not(:last-child),
.ant-btn-group-rtl.ant-btn-group > span:first-child:not(:last-child) > .ant-btn {
  border-radius: 0 2px 2px 0;
}
.ant-btn-group-rtl.ant-btn-group > .ant-btn:last-child:not(:first-child),
.ant-btn-group-rtl.ant-btn-group > span:last-child:not(:first-child) > .ant-btn {
  border-radius: 2px 0 0 2px;
}
.ant-btn-group-rtl.ant-btn-group-sm > .ant-btn:first-child:not(:last-child),
.ant-btn-group-rtl.ant-btn-group-sm > span:first-child:not(:last-child) > .ant-btn {
  border-radius: 0 2px 2px 0;
}
.ant-btn-group-rtl.ant-btn-group-sm > .ant-btn:last-child:not(:first-child),
.ant-btn-group-rtl.ant-btn-group-sm > span:last-child:not(:first-child) > .ant-btn {
  border-radius: 2px 0 0 2px;
}
.ant-btn:focus > span,
.ant-btn:active > span {
  position: relative;
}
.ant-btn > .anticon + span,
.ant-btn > span + .anticon {
  margin-left: 8px;
}
.ant-btn.ant-btn-background-ghost {
  color: #fff;
  border-color: #fff;
}
.ant-btn.ant-btn-background-ghost,
.ant-btn.ant-btn-background-ghost:hover,
.ant-btn.ant-btn-background-ghost:active,
.ant-btn.ant-btn-background-ghost:focus {
  background: transparent;
}
.ant-btn.ant-btn-background-ghost:hover,
.ant-btn.ant-btn-background-ghost:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
}
.ant-btn.ant-btn-background-ghost:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
}
.ant-btn.ant-btn-background-ghost[disabled] {
  color: rgba(0, 0, 0, 0.25);
  background: transparent;
  border-color: #d9d9d9;
}
.ant-btn-background-ghost.ant-btn-primary {
  color: var(--ant-primary-color);
  border-color: var(--ant-primary-color);
  text-shadow: none;
}
.ant-btn-background-ghost.ant-btn-primary > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-primary > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-primary:hover,
.ant-btn-background-ghost.ant-btn-primary:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-primary:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-primary:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-primary:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-primary:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-primary:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-primary:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-primary:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-primary[disabled],
.ant-btn-background-ghost.ant-btn-primary[disabled]:hover,
.ant-btn-background-ghost.ant-btn-primary[disabled]:focus,
.ant-btn-background-ghost.ant-btn-primary[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-background-ghost.ant-btn-primary[disabled] > a:only-child,
.ant-btn-background-ghost.ant-btn-primary[disabled]:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-primary[disabled]:focus > a:only-child,
.ant-btn-background-ghost.ant-btn-primary[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-primary[disabled] > a:only-child::after,
.ant-btn-background-ghost.ant-btn-primary[disabled]:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-primary[disabled]:focus > a:only-child::after,
.ant-btn-background-ghost.ant-btn-primary[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-danger {
  color: var(--ant-error-color);
  border-color: var(--ant-error-color);
  text-shadow: none;
}
.ant-btn-background-ghost.ant-btn-danger > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-danger > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-danger:hover,
.ant-btn-background-ghost.ant-btn-danger:focus {
  color: var(--ant-error-color-hover);
  border-color: var(--ant-error-color-hover);
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-danger:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-danger:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-danger:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-danger:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-danger:active {
  color: var(--ant-error-color-active);
  border-color: var(--ant-error-color-active);
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-danger:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-danger:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-danger[disabled],
.ant-btn-background-ghost.ant-btn-danger[disabled]:hover,
.ant-btn-background-ghost.ant-btn-danger[disabled]:focus,
.ant-btn-background-ghost.ant-btn-danger[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-background-ghost.ant-btn-danger[disabled] > a:only-child,
.ant-btn-background-ghost.ant-btn-danger[disabled]:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-danger[disabled]:focus > a:only-child,
.ant-btn-background-ghost.ant-btn-danger[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-danger[disabled] > a:only-child::after,
.ant-btn-background-ghost.ant-btn-danger[disabled]:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-danger[disabled]:focus > a:only-child::after,
.ant-btn-background-ghost.ant-btn-danger[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous {
  color: var(--ant-error-color);
  border-color: var(--ant-error-color);
  text-shadow: none;
}
.ant-btn-background-ghost.ant-btn-dangerous > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous:hover,
.ant-btn-background-ghost.ant-btn-dangerous:focus {
  color: var(--ant-error-color-hover);
  border-color: var(--ant-error-color-hover);
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-dangerous:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous:active {
  color: var(--ant-error-color-active);
  border-color: var(--ant-error-color-active);
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-dangerous:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous[disabled],
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:hover,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:focus,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-background-ghost.ant-btn-dangerous[disabled] > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:focus > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous[disabled] > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:focus > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link {
  color: var(--ant-error-color);
  border-color: transparent;
  text-shadow: none;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:hover,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:focus {
  color: var(--ant-error-color-active);
  border-color: transparent;
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:active {
  color: var(--ant-error-color-active);
  border-color: transparent;
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled],
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:hover,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:focus,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled] > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:focus > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled] > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:focus > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-two-chinese-chars::first-letter {
  letter-spacing: 0.34em;
}
.ant-btn-two-chinese-chars > *:not(.anticon) {
  margin-right: -0.34em;
  letter-spacing: 0.34em;
}
.ant-btn.ant-btn-block {
  width: 100%;
}
.ant-btn:empty {
  display: inline-block;
  width: 0;
  visibility: hidden;
  content: '\a0';
}
a.ant-btn {
  padding-top: 0.01px !important;
  line-height: 30px;
}
a.ant-btn-lg {
  line-height: 38px;
}
a.ant-btn-sm {
  line-height: 22px;
}
.ant-btn-rtl {
  direction: rtl;
}
.ant-btn-group-rtl.ant-btn-group .ant-btn-primary:last-child:not(:first-child),
.ant-btn-group-rtl.ant-btn-group .ant-btn-primary + .ant-btn-primary {
  border-right-color: var(--ant-primary-5);
  border-left-color: #d9d9d9;
}
.ant-btn-group-rtl.ant-btn-group .ant-btn-primary:last-child:not(:first-child)[disabled],
.ant-btn-group-rtl.ant-btn-group .ant-btn-primary + .ant-btn-primary[disabled] {
  border-right-color: #d9d9d9;
  border-left-color: var(--ant-primary-5);
}
.ant-btn-rtl.ant-btn > .ant-btn-loading-icon .anticon {
  padding-right: 0;
  padding-left: 8px;
}
.ant-btn > .ant-btn-loading-icon:only-child .anticon {
  padding-right: 0;
  padding-left: 0;
}
.ant-btn-rtl.ant-btn > .anticon + span,
.ant-btn-rtl.ant-btn > span + .anticon {
  margin-right: 8px;
  margin-left: 0;
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
          

import { css } from 'lit-element';
export default css`.ant-modal {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  pointer-events: none;
  position: relative;
  top: 100px;
  width: auto;
  max-width: calc(100vw - 32px);
  margin: 0 auto;
  padding-bottom: 24px;
}
.ant-modal.ant-zoom-enter,
.ant-modal.ant-zoom-appear {
  transform: none;
  opacity: 0;
  animation-duration: 0.3s;
  user-select: none;
}
.ant-modal-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
}
.ant-modal-mask-hidden {
  display: none;
}
.ant-modal-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: 0;
  -webkit-overflow-scrolling: touch;
}
.ant-modal-wrap {
  z-index: 1000;
}
.ant-modal-title {
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  word-wrap: break-word;
}
.ant-modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  pointer-events: auto;
}
.ant-modal-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 0;
  color: rgba(0, 0, 0, 0.45);
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: color 0.3s;
}
.ant-modal-close-x {
  display: block;
  width: 56px;
  height: 56px;
  font-size: 16px;
  font-style: normal;
  line-height: 56px;
  text-align: center;
  text-transform: none;
  text-rendering: auto;
}
.ant-modal-close:focus,
.ant-modal-close:hover {
  color: rgba(0, 0, 0, 0.75);
  text-decoration: none;
}
.ant-modal-header {
  padding: 16px 24px;
  color: rgba(0, 0, 0, 0.85);
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px 2px 0 0;
}
.ant-modal-body {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5715;
  word-wrap: break-word;
}
.ant-modal-footer {
  padding: 10px 16px;
  text-align: right;
  background: transparent;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 0 0 2px 2px;
}
.ant-modal-footer .ant-btn + .ant-btn:not(.ant-dropdown-trigger) {
  margin-bottom: 0;
  margin-left: 8px;
}
.ant-modal-open {
  overflow: hidden;
}
.ant-modal-centered {
  text-align: center;
}
.ant-modal-centered::before {
  display: inline-block;
  width: 0;
  height: 100%;
  vertical-align: middle;
  content: '';
}
.ant-modal-centered .ant-modal {
  top: 0;
  display: inline-block;
  padding-bottom: 0;
  text-align: left;
  vertical-align: middle;
}
@media (max-width: 767px) {
  .ant-modal {
    max-width: calc(100vw - 16px);
    margin: 8px auto;
  }
  .ant-modal-centered .ant-modal {
    flex: 1;
  }
}
.ant-modal-confirm .ant-modal-header {
  display: none;
}
.ant-modal-confirm .ant-modal-body {
  padding: 32px 32px 24px;
}
.ant-modal-confirm-body-wrapper::before {
  display: table;
  content: '';
}
.ant-modal-confirm-body-wrapper::after {
  display: table;
  clear: both;
  content: '';
}
.ant-modal-confirm-body .ant-modal-confirm-title {
  display: block;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
}
.ant-modal-confirm-body .ant-modal-confirm-content {
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
}
.ant-modal-confirm-body > .anticon {
  float: left;
  margin-right: 16px;
  font-size: 22px;
}
.ant-modal-confirm-body > .anticon + .ant-modal-confirm-title + .ant-modal-confirm-content {
  margin-left: 38px;
}
.ant-modal-confirm .ant-modal-confirm-btns {
  float: right;
  margin-top: 24px;
}
.ant-modal-confirm .ant-modal-confirm-btns .ant-btn + .ant-btn {
  margin-bottom: 0;
  margin-left: 8px;
}
.ant-modal-confirm-error .ant-modal-confirm-body > .anticon {
  color: var(--ant-error-color);
}
.ant-modal-confirm-warning .ant-modal-confirm-body > .anticon,
.ant-modal-confirm-confirm .ant-modal-confirm-body > .anticon {
  color: var(--ant-warning-color);
}
.ant-modal-confirm-info .ant-modal-confirm-body > .anticon {
  color: var(--ant-info-color);
}
.ant-modal-confirm-success .ant-modal-confirm-body > .anticon {
  color: var(--ant-success-color);
}
.ant-modal-wrap-rtl {
  direction: rtl;
}
.ant-modal-wrap-rtl .ant-modal-close {
  right: initial;
  left: 0;
}
.ant-modal-wrap-rtl .ant-modal-footer {
  text-align: left;
}
.ant-modal-wrap-rtl .ant-modal-footer .ant-btn + .ant-btn {
  margin-right: 8px;
  margin-left: 0;
}
.ant-modal-wrap-rtl .ant-modal-confirm-body {
  direction: rtl;
}
.ant-modal-wrap-rtl .ant-modal-confirm-body > .anticon {
  float: right;
  margin-right: 0;
  margin-left: 16px;
}
.ant-modal-wrap-rtl .ant-modal-confirm-body > .anticon + .ant-modal-confirm-title + .ant-modal-confirm-content {
  margin-right: 38px;
  margin-left: 0;
}
.ant-modal-wrap-rtl .ant-modal-confirm-btns {
  float: left;
}
.ant-modal-wrap-rtl .ant-modal-confirm-btns .ant-btn + .ant-btn {
  margin-right: 8px;
  margin-left: 0;
}
.ant-modal-wrap-rtl.ant-modal-centered .ant-modal {
  text-align: right;
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
`
          

import { css } from 'lit-element';
export default css`.ant-alert {
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
  align-items: center;
  padding: 8px 15px;
  word-wrap: break-word;
  border-radius: 2px;
}
.ant-alert-content {
  flex: 1;
  min-width: 0;
}
.ant-alert-icon {
  margin-right: 8px;
}
.ant-alert-description {
  display: none;
  font-size: 14px;
  line-height: 22px;
}
.ant-alert-success {
  background-color: var(--ant-success-color-deprecated-bg);
  border: 1px solid var(--ant-success-color-deprecated-border);
}
.ant-alert-success .ant-alert-icon {
  color: var(--ant-success-color);
}
.ant-alert-info {
  background-color: var(--ant-info-color-deprecated-bg);
  border: 1px solid var(--ant-info-color-deprecated-border);
}
.ant-alert-info .ant-alert-icon {
  color: var(--ant-info-color);
}
.ant-alert-warning {
  background-color: var(--ant-warning-color-deprecated-bg);
  border: 1px solid var(--ant-warning-color-deprecated-border);
}
.ant-alert-warning .ant-alert-icon {
  color: var(--ant-warning-color);
}
.ant-alert-error {
  background-color: var(--ant-error-color-deprecated-bg);
  border: 1px solid var(--ant-error-color-deprecated-border);
}
.ant-alert-error .ant-alert-icon {
  color: var(--ant-error-color);
}
.ant-alert-error .ant-alert-description > pre {
  margin: 0;
  padding: 0;
}
.ant-alert-action {
  margin-left: 8px;
}
.ant-alert-close-icon {
  margin-left: 8px;
  padding: 0;
  overflow: hidden;
  font-size: 12px;
  line-height: 12px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
.ant-alert-close-icon .anticon-close {
  color: rgba(0, 0, 0, 0.45);
  transition: color 0.3s;
}
.ant-alert-close-icon .anticon-close:hover {
  color: rgba(0, 0, 0, 0.75);
}
.ant-alert-close-text {
  color: rgba(0, 0, 0, 0.45);
  transition: color 0.3s;
}
.ant-alert-close-text:hover {
  color: rgba(0, 0, 0, 0.75);
}
.ant-alert-with-description {
  align-items: flex-start;
  padding: 15px 15px 15px 24px;
}
.ant-alert-with-description.ant-alert-no-icon {
  padding: 15px 15px;
}
.ant-alert-with-description .ant-alert-icon {
  margin-right: 15px;
  font-size: 24px;
}
.ant-alert-with-description .ant-alert-message {
  display: block;
  margin-bottom: 4px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
}
.ant-alert-message {
  color: rgba(0, 0, 0, 0.85);
}
.ant-alert-with-description .ant-alert-description {
  display: block;
}
.ant-alert.ant-alert-motion-leave {
  overflow: hidden;
  opacity: 1;
  transition: max-height 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), padding-top 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), padding-bottom 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), margin-bottom 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}
.ant-alert.ant-alert-motion-leave-active {
  max-height: 0;
  margin-bottom: 0 !important;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
}
.ant-alert-banner {
  margin-bottom: 0;
  border: 0;
  border-radius: 0;
}
.ant-alert.ant-alert-rtl {
  direction: rtl;
}
.ant-alert-rtl .ant-alert-icon {
  margin-right: auto;
  margin-left: 8px;
}
.ant-alert-rtl .ant-alert-action {
  margin-right: 8px;
  margin-left: auto;
}
.ant-alert-rtl .ant-alert-close-icon {
  margin-right: 8px;
  margin-left: auto;
}
.ant-alert-rtl.ant-alert-with-description {
  padding-right: 24px;
  padding-left: 15px;
}
.ant-alert-rtl.ant-alert-with-description .ant-alert-icon {
  margin-right: auto;
  margin-left: 15px;
}
nz-alert {
  display: block;
}
`
          
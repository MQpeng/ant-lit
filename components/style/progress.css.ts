
import { css } from 'lit-element';
export default css`.ant-progress {
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
.ant-progress-line {
  position: relative;
  width: 100%;
  font-size: 14px;
}
.ant-progress-steps {
  display: inline-block;
}
.ant-progress-steps-outer {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ant-progress-steps-item {
  flex-shrink: 0;
  min-width: 2px;
  margin-right: 2px;
  background: #f3f3f3;
  transition: all 0.3s;
}
.ant-progress-steps-item-active {
  background: var(--ant-primary-color);
}
.ant-progress-small.ant-progress-line,
.ant-progress-small.ant-progress-line .ant-progress-text .anticon {
  font-size: 12px;
}
.ant-progress-outer {
  display: inline-block;
  width: 100%;
  margin-right: 0;
  padding-right: 0;
}
.ant-progress-show-info .ant-progress-outer {
  margin-right: calc(-2em - 8px);
  padding-right: calc(2em + 8px);
}
.ant-progress-inner {
  position: relative;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  vertical-align: middle;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 100px;
}
.ant-progress-circle-trail {
  stroke: rgba(0, 0, 0, 0.04);
}
.ant-progress-circle-path {
  animation: ant-progress-appear 0.3s;
}
.ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {
  stroke: var(--ant-primary-color);
}
.ant-progress-success-bg,
.ant-progress-bg {
  position: relative;
  background-color: var(--ant-primary-color);
  border-radius: 100px;
  transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
}
.ant-progress-success-bg {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--ant-success-color);
}
.ant-progress-text {
  display: inline-block;
  width: 2em;
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 1em;
  line-height: 1;
  white-space: nowrap;
  text-align: left;
  vertical-align: middle;
  word-break: normal;
}
.ant-progress-text .anticon {
  font-size: 14px;
}
.ant-progress-status-active .ant-progress-bg::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  border-radius: 10px;
  opacity: 0;
  animation: ant-progress-active 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
  content: '';
}
.ant-progress-status-exception .ant-progress-bg {
  background-color: var(--ant-error-color);
}
.ant-progress-status-exception .ant-progress-text {
  color: var(--ant-error-color);
}
.ant-progress-status-exception .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {
  stroke: var(--ant-error-color);
}
.ant-progress-status-success .ant-progress-bg {
  background-color: var(--ant-success-color);
}
.ant-progress-status-success .ant-progress-text {
  color: var(--ant-success-color);
}
.ant-progress-status-success .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {
  stroke: var(--ant-success-color);
}
.ant-progress-circle .ant-progress-inner {
  position: relative;
  line-height: 1;
  background-color: transparent;
}
.ant-progress-circle .ant-progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 1em;
  line-height: 1;
  white-space: normal;
  text-align: center;
  transform: translate(-50%, -50%);
}
.ant-progress-circle .ant-progress-text .anticon {
  font-size: 1.16666667em;
}
.ant-progress-circle.ant-progress-status-exception .ant-progress-text {
  color: var(--ant-error-color);
}
.ant-progress-circle.ant-progress-status-success .ant-progress-text {
  color: var(--ant-success-color);
}
@keyframes ant-progress-active {
  0% {
    transform: translateX(-100%) scaleX(0);
    opacity: 0.1;
  }
  20% {
    transform: translateX(-100%) scaleX(0);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0) scaleX(1);
    opacity: 0;
  }
}
.ant-progress-rtl {
  direction: rtl;
}
.ant-progress-rtl.ant-progress-show-info .ant-progress-outer {
  margin-right: 0;
  margin-left: calc(-2em - 8px);
  padding-right: 0;
  padding-left: calc(2em + 8px);
}
.ant-progress-rtl .ant-progress-success-bg {
  right: 0;
  left: auto;
}
.ant-progress-rtl.ant-progress-line .ant-progress-text,
.ant-progress-rtl.ant-progress-steps .ant-progress-text {
  margin-right: 8px;
  margin-left: 0;
  text-align: right;
}
`
          
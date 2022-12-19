
import { css } from 'lit-element';
export default css`.ant-collapse {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  border-bottom: 0;
  border-radius: 2px;
}
.ant-collapse > .ant-collapse-item {
  border-bottom: 1px solid #d9d9d9;
}
.ant-collapse > .ant-collapse-item:last-child,
.ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header {
  border-radius: 0 0 2px 2px;
}
.ant-collapse > .ant-collapse-item > .ant-collapse-header {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  padding: 12px 16px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 1.5715;
  cursor: pointer;
  transition: all 0.3s, visibility 0s;
}
.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
  display: inline-block;
  margin-right: 12px;
  font-size: 12px;
  vertical-align: -1px;
}
.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow svg {
  transition: transform 0.24s;
}
.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-extra {
  margin-left: auto;
}
.ant-collapse > .ant-collapse-item > .ant-collapse-header:focus {
  outline: none;
}
.ant-collapse > .ant-collapse-item .ant-collapse-header-collapsible-only {
  cursor: default;
}
.ant-collapse > .ant-collapse-item .ant-collapse-header-collapsible-only .ant-collapse-header-text {
  cursor: pointer;
}
.ant-collapse > .ant-collapse-item.ant-collapse-no-arrow > .ant-collapse-header {
  padding-left: 12px;
}
.ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header {
  position: relative;
  padding: 12px 16px;
  padding-right: 40px;
}
.ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
  position: absolute;
  top: 50%;
  right: 16px;
  left: auto;
  margin: 0;
  transform: translateY(-50%);
}
.ant-collapse-content {
  color: rgba(0, 0, 0, 0.85);
  background-color: #fff;
  border-top: 1px solid #d9d9d9;
}
.ant-collapse-content > .ant-collapse-content-box {
  padding: 16px;
}
.ant-collapse-content-hidden {
  display: none;
}
.ant-collapse-item:last-child > .ant-collapse-content {
  border-radius: 0 0 2px 2px;
}
.ant-collapse-borderless {
  background-color: #fafafa;
  border: 0;
}
.ant-collapse-borderless > .ant-collapse-item {
  border-bottom: 1px solid #d9d9d9;
}
.ant-collapse-borderless > .ant-collapse-item:last-child,
.ant-collapse-borderless > .ant-collapse-item:last-child .ant-collapse-header {
  border-radius: 0;
}
.ant-collapse-borderless > .ant-collapse-item:last-child {
  border-bottom: 0;
}
.ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content {
  background-color: transparent;
  border-top: 0;
}
.ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {
  padding-top: 4px;
}
.ant-collapse-ghost {
  background-color: transparent;
  border: 0;
}
.ant-collapse-ghost > .ant-collapse-item {
  border-bottom: 0;
}
.ant-collapse-ghost > .ant-collapse-item > .ant-collapse-content {
  background-color: transparent;
  border-top: 0;
}
.ant-collapse-ghost > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {
  padding-top: 12px;
  padding-bottom: 12px;
}
.ant-collapse .ant-collapse-item-disabled > .ant-collapse-header,
.ant-collapse .ant-collapse-item-disabled > .ant-collapse-header > .arrow {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-collapse-rtl {
  direction: rtl;
}
.ant-collapse-rtl .ant-collapse > .ant-collapse-item > .ant-collapse-header {
  padding: 12px 16px;
  padding-right: 40px;
}
.ant-collapse-rtl.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
  margin-right: 0;
  margin-left: 12px;
}
.ant-collapse-rtl.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow svg {
  transform: rotate(180deg);
}
.ant-collapse-rtl.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-extra {
  margin-right: auto;
  margin-left: 0;
}
.ant-collapse-rtl.ant-collapse > .ant-collapse-item.ant-collapse-no-arrow > .ant-collapse-header {
  padding-right: 12px;
  padding-left: 0;
}
nz-collapse {
  display: block;
}
nz-collapse-panel {
  display: block;
}
`
          
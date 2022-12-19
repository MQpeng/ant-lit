
import { css } from 'lit-element';
export default css`.ant-divider {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-divider-vertical {
  position: relative;
  top: -0.06em;
  display: inline-block;
  height: 0.9em;
  margin: 0 8px;
  vertical-align: middle;
  border-top: 0;
  border-left: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-divider-horizontal {
  display: flex;
  clear: both;
  width: 100%;
  min-width: 100%;
  margin: 24px 0;
}
.ant-divider-horizontal.ant-divider-with-text {
  display: flex;
  margin: 16px 0;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-align: center;
  border-top: 0;
  border-top-color: rgba(0, 0, 0, 0.06);
}
.ant-divider-horizontal.ant-divider-with-text::before,
.ant-divider-horizontal.ant-divider-with-text::after {
  position: relative;
  top: 50%;
  width: 50%;
  border-top: 1px solid transparent;
  border-top-color: inherit;
  border-bottom: 0;
  transform: translateY(50%);
  content: '';
}
.ant-divider-horizontal.ant-divider-with-text-left::before {
  top: 50%;
  width: 5%;
}
.ant-divider-horizontal.ant-divider-with-text-left::after {
  top: 50%;
  width: 95%;
}
.ant-divider-horizontal.ant-divider-with-text-right::before {
  top: 50%;
  width: 95%;
}
.ant-divider-horizontal.ant-divider-with-text-right::after {
  top: 50%;
  width: 5%;
}
.ant-divider-inner-text {
  display: inline-block;
  padding: 0 1em;
}
.ant-divider-dashed {
  background: none;
  border-color: rgba(0, 0, 0, 0.06);
  border-style: dashed;
  border-width: 1px 0 0;
}
.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed::before,
.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed::after {
  border-style: dashed none none;
}
.ant-divider-vertical.ant-divider-dashed {
  border-width: 0 0 0 1px;
}
.ant-divider-plain.ant-divider-with-text {
  color: rgba(0, 0, 0, 0.85);
  font-weight: normal;
  font-size: 14px;
}
.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-no-default-orientation-margin-left::before {
  width: 0;
}
.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-no-default-orientation-margin-left::after {
  width: 100%;
}
.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-no-default-orientation-margin-left .ant-divider-inner-text {
  padding-left: 0;
}
.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-no-default-orientation-margin-right::before {
  width: 100%;
}
.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-no-default-orientation-margin-right::after {
  width: 0;
}
.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-no-default-orientation-margin-right .ant-divider-inner-text {
  padding-right: 0;
}
.ant-divider-rtl {
  direction: rtl;
}
.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-left::before {
  width: 95%;
}
.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-left::after {
  width: 5%;
}
.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-right::before {
  width: 5%;
}
.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-right::after {
  width: 95%;
}
`
          
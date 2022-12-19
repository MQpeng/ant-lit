
import { css } from 'lit-element';
export default css`.ant-popover {
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
  top: 0;
  left: 0;
  z-index: 1030;
  font-weight: normal;
  white-space: normal;
  text-align: left;
  cursor: auto;
  user-select: text;
}
.ant-popover::after {
  position: absolute;
  background: rgba(255, 255, 255, 0.01);
  content: '';
}
.ant-popover-hidden {
  display: none;
}
.ant-popover-placement-top,
.ant-popover-placement-topLeft,
.ant-popover-placement-topRight {
  padding-bottom: 15.3137085px;
}
.ant-popover-placement-right,
.ant-popover-placement-rightTop,
.ant-popover-placement-rightBottom {
  padding-left: 15.3137085px;
}
.ant-popover-placement-bottom,
.ant-popover-placement-bottomLeft,
.ant-popover-placement-bottomRight {
  padding-top: 15.3137085px;
}
.ant-popover-placement-left,
.ant-popover-placement-leftTop,
.ant-popover-placement-leftBottom {
  padding-right: 15.3137085px;
}
.ant-popover-inner {
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15) \9;
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ant-popover {
    /* IE10+ */
  }
  .ant-popover-inner {
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }
}
.ant-popover-title {
  min-width: 177px;
  min-height: 32px;
  margin: 0;
  padding: 5px 16px 4px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-popover-inner-content {
  padding: 12px 16px;
  color: rgba(0, 0, 0, 0.85);
}
.ant-popover-message {
  position: relative;
  padding: 4px 0 12px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
}
.ant-popover-message > .anticon {
  position: absolute;
  top: 8.0005px;
  color: var(--ant-warning-color);
  font-size: 14px;
}
.ant-popover-message-title {
  padding-left: 22px;
}
.ant-popover-buttons {
  margin-bottom: 4px;
  text-align: right;
}
.ant-popover-buttons button {
  margin-left: 8px;
}
.ant-popover-arrow {
  position: absolute;
  display: block;
  width: 16px;
  height: 16px;
  overflow: hidden;
  background: transparent;
  pointer-events: none;
}
.ant-popover-arrow-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 11.3137085px;
  height: 11.3137085px;
  margin: auto;
  background-color: #fff;
  content: '';
  pointer-events: auto;
  border-radius: 0 0 2px;
  pointer-events: none;
}
.ant-popover-arrow-content::before {
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
.ant-popover-placement-top .ant-popover-arrow,
.ant-popover-placement-topLeft .ant-popover-arrow,
.ant-popover-placement-topRight .ant-popover-arrow {
  bottom: -0.6862915px;
}
.ant-popover-placement-top .ant-popover-arrow-content,
.ant-popover-placement-topLeft .ant-popover-arrow-content,
.ant-popover-placement-topRight .ant-popover-arrow-content {
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
  transform: translateY(-8px) rotate(45deg);
}
.ant-popover-placement-top .ant-popover-arrow {
  left: 50%;
  transform: translateX(-50%);
}
.ant-popover-placement-topLeft .ant-popover-arrow {
  left: 16px;
}
.ant-popover-placement-topRight .ant-popover-arrow {
  right: 16px;
}
.ant-popover-placement-right .ant-popover-arrow,
.ant-popover-placement-rightTop .ant-popover-arrow,
.ant-popover-placement-rightBottom .ant-popover-arrow {
  left: -0.6862915px;
}
.ant-popover-placement-right .ant-popover-arrow-content,
.ant-popover-placement-rightTop .ant-popover-arrow-content,
.ant-popover-placement-rightBottom .ant-popover-arrow-content {
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
  transform: translateX(8px) rotate(135deg);
}
.ant-popover-placement-right .ant-popover-arrow {
  top: 50%;
  transform: translateY(-50%);
}
.ant-popover-placement-rightTop .ant-popover-arrow {
  top: 12px;
}
.ant-popover-placement-rightBottom .ant-popover-arrow {
  bottom: 12px;
}
.ant-popover-placement-bottom .ant-popover-arrow,
.ant-popover-placement-bottomLeft .ant-popover-arrow,
.ant-popover-placement-bottomRight .ant-popover-arrow {
  top: -0.6862915px;
}
.ant-popover-placement-bottom .ant-popover-arrow-content,
.ant-popover-placement-bottomLeft .ant-popover-arrow-content,
.ant-popover-placement-bottomRight .ant-popover-arrow-content {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.06);
  transform: translateY(8px) rotate(-135deg);
}
.ant-popover-placement-bottom .ant-popover-arrow {
  left: 50%;
  transform: translateX(-50%);
}
.ant-popover-placement-bottomLeft .ant-popover-arrow {
  left: 16px;
}
.ant-popover-placement-bottomRight .ant-popover-arrow {
  right: 16px;
}
.ant-popover-placement-left .ant-popover-arrow,
.ant-popover-placement-leftTop .ant-popover-arrow,
.ant-popover-placement-leftBottom .ant-popover-arrow {
  right: -0.6862915px;
}
.ant-popover-placement-left .ant-popover-arrow-content,
.ant-popover-placement-leftTop .ant-popover-arrow-content,
.ant-popover-placement-leftBottom .ant-popover-arrow-content {
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
  transform: translateX(-8px) rotate(-45deg);
}
.ant-popover-placement-left .ant-popover-arrow {
  top: 50%;
  transform: translateY(-50%);
}
.ant-popover-placement-leftTop .ant-popover-arrow {
  top: 12px;
}
.ant-popover-placement-leftBottom .ant-popover-arrow {
  bottom: 12px;
}
.ant-popover-pink .ant-popover-inner {
  background-color: #eb2f96;
}
.ant-popover-pink .ant-popover-arrow-content {
  background-color: #eb2f96;
}
.ant-popover-magenta .ant-popover-inner {
  background-color: #eb2f96;
}
.ant-popover-magenta .ant-popover-arrow-content {
  background-color: #eb2f96;
}
.ant-popover-red .ant-popover-inner {
  background-color: #f5222d;
}
.ant-popover-red .ant-popover-arrow-content {
  background-color: #f5222d;
}
.ant-popover-volcano .ant-popover-inner {
  background-color: #fa541c;
}
.ant-popover-volcano .ant-popover-arrow-content {
  background-color: #fa541c;
}
.ant-popover-orange .ant-popover-inner {
  background-color: #fa8c16;
}
.ant-popover-orange .ant-popover-arrow-content {
  background-color: #fa8c16;
}
.ant-popover-yellow .ant-popover-inner {
  background-color: #fadb14;
}
.ant-popover-yellow .ant-popover-arrow-content {
  background-color: #fadb14;
}
.ant-popover-gold .ant-popover-inner {
  background-color: #faad14;
}
.ant-popover-gold .ant-popover-arrow-content {
  background-color: #faad14;
}
.ant-popover-cyan .ant-popover-inner {
  background-color: #13c2c2;
}
.ant-popover-cyan .ant-popover-arrow-content {
  background-color: #13c2c2;
}
.ant-popover-lime .ant-popover-inner {
  background-color: #a0d911;
}
.ant-popover-lime .ant-popover-arrow-content {
  background-color: #a0d911;
}
.ant-popover-green .ant-popover-inner {
  background-color: #52c41a;
}
.ant-popover-green .ant-popover-arrow-content {
  background-color: #52c41a;
}
.ant-popover-blue .ant-popover-inner {
  background-color: #1890ff;
}
.ant-popover-blue .ant-popover-arrow-content {
  background-color: #1890ff;
}
.ant-popover-geekblue .ant-popover-inner {
  background-color: #2f54eb;
}
.ant-popover-geekblue .ant-popover-arrow-content {
  background-color: #2f54eb;
}
.ant-popover-purple .ant-popover-inner {
  background-color: #722ed1;
}
.ant-popover-purple .ant-popover-arrow-content {
  background-color: #722ed1;
}
.ant-popover-rtl {
  direction: rtl;
  text-align: right;
}
.ant-popover-rtl .ant-popover-message-title {
  padding-right: 22px;
  padding-left: 16px;
}
.ant-popover-rtl .ant-popover-buttons {
  text-align: left;
}
.ant-popover-rtl .ant-popover-buttons button {
  margin-right: 8px;
  margin-left: 0;
}
.ant-popover {
  position: relative;
}
`
          
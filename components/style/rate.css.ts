
import { css } from 'lit-element';
export default css`.ant-rate {
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  font-feature-settings: 'tnum';
  display: inline-block;
  margin: 0;
  padding: 0;
  color: #fadb14;
  font-size: 20px;
  line-height: unset;
  list-style: none;
  outline: none;
}
.ant-rate-disabled .ant-rate-star {
  cursor: default;
}
.ant-rate-disabled .ant-rate-star > div:hover {
  transform: scale(1);
}
.ant-rate-star {
  position: relative;
  display: inline-block;
  color: inherit;
  cursor: pointer;
}
.ant-rate-star:not(:last-child) {
  margin-right: 8px;
}
.ant-rate-star > div {
  transition: all 0.3s, outline 0s;
}
.ant-rate-star > div:hover {
  transform: scale(1.1);
}
.ant-rate-star > div:focus {
  outline: 0;
}
.ant-rate-star > div:focus-visible {
  outline: 1px dashed #fadb14;
  transform: scale(1.1);
}
.ant-rate-star-first,
.ant-rate-star-second {
  color: rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
  user-select: none;
}
.ant-rate-star-first .anticon,
.ant-rate-star-second .anticon {
  vertical-align: middle;
}
.ant-rate-star-first {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
}
.ant-rate-star-half .ant-rate-star-first,
.ant-rate-star-half .ant-rate-star-second {
  opacity: 1;
}
.ant-rate-star-half .ant-rate-star-first,
.ant-rate-star-full .ant-rate-star-second {
  color: inherit;
}
.ant-rate-text {
  display: inline-block;
  margin: 0 8px;
  font-size: 14px;
}
.ant-rate-rtl {
  direction: rtl;
}
.ant-rate-rtl .ant-rate-star:not(:last-child) {
  margin-right: 0;
  margin-left: 8px;
}
.ant-rate-rtl .ant-rate-star-first {
  right: 0;
  left: auto;
}
.ant-tooltip {
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
  z-index: 1070;
  display: block;
  width: max-content;
  width: intrinsic;
  max-width: 250px;
  visibility: visible;
}
.ant-tooltip-content {
  position: relative;
}
.ant-tooltip-hidden {
  display: none;
}
.ant-tooltip-placement-top,
.ant-tooltip-placement-topLeft,
.ant-tooltip-placement-topRight {
  padding-bottom: 14.3137085px;
}
.ant-tooltip-placement-right,
.ant-tooltip-placement-rightTop,
.ant-tooltip-placement-rightBottom {
  padding-left: 14.3137085px;
}
.ant-tooltip-placement-bottom,
.ant-tooltip-placement-bottomLeft,
.ant-tooltip-placement-bottomRight {
  padding-top: 14.3137085px;
}
.ant-tooltip-placement-left,
.ant-tooltip-placement-leftTop,
.ant-tooltip-placement-leftBottom {
  padding-right: 14.3137085px;
}
.ant-tooltip-inner {
  min-width: 30px;
  min-height: 32px;
  padding: 6px 8px;
  color: #fff;
  text-align: left;
  text-decoration: none;
  word-wrap: break-word;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
.ant-tooltip-arrow {
  position: absolute;
  z-index: 2;
  display: block;
  width: 22px;
  height: 22px;
  overflow: hidden;
  background: transparent;
  pointer-events: none;
}
.ant-tooltip-arrow-content {
  --antd-arrow-background-color: linear-gradient(to right bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75));
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 11.3137085px;
  height: 11.3137085px;
  margin: auto;
  background-color: transparent;
  content: '';
  pointer-events: auto;
  border-radius: 0 0 2px;
  pointer-events: none;
}
.ant-tooltip-arrow-content::before {
  position: absolute;
  top: -11.3137085px;
  left: -11.3137085px;
  width: 33.9411255px;
  height: 33.9411255px;
  background: var(--antd-arrow-background-color);
  background-repeat: no-repeat;
  background-position: -10px -10px;
  content: '';
  clip-path: path('M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z');
}
.ant-tooltip-placement-top .ant-tooltip-arrow,
.ant-tooltip-placement-topLeft .ant-tooltip-arrow,
.ant-tooltip-placement-topRight .ant-tooltip-arrow {
  bottom: 0;
  transform: translateY(100%);
}
.ant-tooltip-placement-top .ant-tooltip-arrow-content,
.ant-tooltip-placement-topLeft .ant-tooltip-arrow-content,
.ant-tooltip-placement-topRight .ant-tooltip-arrow-content {
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
  transform: translateY(-11px) rotate(45deg);
}
.ant-tooltip-placement-top .ant-tooltip-arrow {
  left: 50%;
  transform: translateY(100%) translateX(-50%);
}
.ant-tooltip-placement-topLeft .ant-tooltip-arrow {
  left: 13px;
}
.ant-tooltip-placement-topRight .ant-tooltip-arrow {
  right: 13px;
}
.ant-tooltip-placement-right .ant-tooltip-arrow,
.ant-tooltip-placement-rightTop .ant-tooltip-arrow,
.ant-tooltip-placement-rightBottom .ant-tooltip-arrow {
  left: 0;
  transform: translateX(-100%);
}
.ant-tooltip-placement-right .ant-tooltip-arrow-content,
.ant-tooltip-placement-rightTop .ant-tooltip-arrow-content,
.ant-tooltip-placement-rightBottom .ant-tooltip-arrow-content {
  box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
  transform: translateX(11px) rotate(135deg);
}
.ant-tooltip-placement-right .ant-tooltip-arrow {
  top: 50%;
  transform: translateX(-100%) translateY(-50%);
}
.ant-tooltip-placement-rightTop .ant-tooltip-arrow {
  top: 5px;
}
.ant-tooltip-placement-rightBottom .ant-tooltip-arrow {
  bottom: 5px;
}
.ant-tooltip-placement-left .ant-tooltip-arrow,
.ant-tooltip-placement-leftTop .ant-tooltip-arrow,
.ant-tooltip-placement-leftBottom .ant-tooltip-arrow {
  right: 0;
  transform: translateX(100%);
}
.ant-tooltip-placement-left .ant-tooltip-arrow-content,
.ant-tooltip-placement-leftTop .ant-tooltip-arrow-content,
.ant-tooltip-placement-leftBottom .ant-tooltip-arrow-content {
  box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
  transform: translateX(-11px) rotate(315deg);
}
.ant-tooltip-placement-left .ant-tooltip-arrow {
  top: 50%;
  transform: translateX(100%) translateY(-50%);
}
.ant-tooltip-placement-leftTop .ant-tooltip-arrow {
  top: 5px;
}
.ant-tooltip-placement-leftBottom .ant-tooltip-arrow {
  bottom: 5px;
}
.ant-tooltip-placement-bottom .ant-tooltip-arrow,
.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,
.ant-tooltip-placement-bottomRight .ant-tooltip-arrow {
  top: 0;
  transform: translateY(-100%);
}
.ant-tooltip-placement-bottom .ant-tooltip-arrow-content,
.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow-content,
.ant-tooltip-placement-bottomRight .ant-tooltip-arrow-content {
  box-shadow: -3px -3px 7px rgba(0, 0, 0, 0.07);
  transform: translateY(11px) rotate(225deg);
}
.ant-tooltip-placement-bottom .ant-tooltip-arrow {
  left: 50%;
  transform: translateY(-100%) translateX(-50%);
}
.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow {
  left: 13px;
}
.ant-tooltip-placement-bottomRight .ant-tooltip-arrow {
  right: 13px;
}
.ant-tooltip-pink .ant-tooltip-inner {
  background-color: #eb2f96;
}
.ant-tooltip-pink .ant-tooltip-arrow-content::before {
  background: #eb2f96;
}
.ant-tooltip-magenta .ant-tooltip-inner {
  background-color: #eb2f96;
}
.ant-tooltip-magenta .ant-tooltip-arrow-content::before {
  background: #eb2f96;
}
.ant-tooltip-red .ant-tooltip-inner {
  background-color: #f5222d;
}
.ant-tooltip-red .ant-tooltip-arrow-content::before {
  background: #f5222d;
}
.ant-tooltip-volcano .ant-tooltip-inner {
  background-color: #fa541c;
}
.ant-tooltip-volcano .ant-tooltip-arrow-content::before {
  background: #fa541c;
}
.ant-tooltip-orange .ant-tooltip-inner {
  background-color: #fa8c16;
}
.ant-tooltip-orange .ant-tooltip-arrow-content::before {
  background: #fa8c16;
}
.ant-tooltip-yellow .ant-tooltip-inner {
  background-color: #fadb14;
}
.ant-tooltip-yellow .ant-tooltip-arrow-content::before {
  background: #fadb14;
}
.ant-tooltip-gold .ant-tooltip-inner {
  background-color: #faad14;
}
.ant-tooltip-gold .ant-tooltip-arrow-content::before {
  background: #faad14;
}
.ant-tooltip-cyan .ant-tooltip-inner {
  background-color: #13c2c2;
}
.ant-tooltip-cyan .ant-tooltip-arrow-content::before {
  background: #13c2c2;
}
.ant-tooltip-lime .ant-tooltip-inner {
  background-color: #a0d911;
}
.ant-tooltip-lime .ant-tooltip-arrow-content::before {
  background: #a0d911;
}
.ant-tooltip-green .ant-tooltip-inner {
  background-color: #52c41a;
}
.ant-tooltip-green .ant-tooltip-arrow-content::before {
  background: #52c41a;
}
.ant-tooltip-blue .ant-tooltip-inner {
  background-color: #1890ff;
}
.ant-tooltip-blue .ant-tooltip-arrow-content::before {
  background: #1890ff;
}
.ant-tooltip-geekblue .ant-tooltip-inner {
  background-color: #2f54eb;
}
.ant-tooltip-geekblue .ant-tooltip-arrow-content::before {
  background: #2f54eb;
}
.ant-tooltip-purple .ant-tooltip-inner {
  background-color: #722ed1;
}
.ant-tooltip-purple .ant-tooltip-arrow-content::before {
  background: #722ed1;
}
.ant-tooltip-rtl {
  direction: rtl;
}
.ant-tooltip-rtl .ant-tooltip-inner {
  text-align: right;
}
.ant-tooltip {
  position: relative;
}
`
          
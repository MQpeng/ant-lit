
import { css } from 'lit-element';
export default css`.ant-badge {
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
  display: inline-block;
  line-height: 1;
}
.ant-badge-count {
  z-index: auto;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  color: #fff;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  text-align: center;
  background: #ff4d4f;
  border-radius: 10px;
  box-shadow: 0 0 0 1px #fff;
}
.ant-badge-count a,
.ant-badge-count a:hover {
  color: #fff;
}
.ant-badge-count-sm {
  min-width: 14px;
  height: 14px;
  padding: 0;
  font-size: 12px;
  line-height: 14px;
  border-radius: 7px;
}
.ant-badge-multiple-words {
  padding: 0 8px;
}
.ant-badge-dot {
  z-index: auto;
  width: 6px;
  min-width: 6px;
  height: 6px;
  background: #ff4d4f;
  border-radius: 100%;
  box-shadow: 0 0 0 1px #fff;
}
.ant-badge-dot.ant-scroll-number {
  transition: background 1.5s;
}
.ant-badge-count,
.ant-badge-dot,
.ant-badge .ant-scroll-number-custom-component {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  transform-origin: 100% 0%;
}
.ant-badge-count.anticon-spin,
.ant-badge-dot.anticon-spin,
.ant-badge .ant-scroll-number-custom-component.anticon-spin {
  animation: antBadgeLoadingCircle 1s infinite linear;
}
.ant-badge-status {
  line-height: inherit;
  vertical-align: baseline;
}
.ant-badge-status-dot {
  position: relative;
  top: -1px;
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: middle;
  border-radius: 50%;
}
.ant-badge-status-success {
  background-color: var(--ant-success-color);
}
.ant-badge-status-processing {
  position: relative;
  background-color: var(--ant-primary-color);
}
.ant-badge-status-processing::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid var(--ant-primary-color);
  border-radius: 50%;
  animation: antStatusProcessing 1.2s infinite ease-in-out;
  content: '';
}
.ant-badge-status-default {
  background-color: #d9d9d9;
}
.ant-badge-status-error {
  background-color: var(--ant-error-color);
}
.ant-badge-status-warning {
  background-color: var(--ant-warning-color);
}
.ant-badge-status-pink {
  background: #eb2f96;
}
.ant-badge-status-magenta {
  background: #eb2f96;
}
.ant-badge-status-red {
  background: #f5222d;
}
.ant-badge-status-volcano {
  background: #fa541c;
}
.ant-badge-status-orange {
  background: #fa8c16;
}
.ant-badge-status-yellow {
  background: #fadb14;
}
.ant-badge-status-gold {
  background: #faad14;
}
.ant-badge-status-cyan {
  background: #13c2c2;
}
.ant-badge-status-lime {
  background: #a0d911;
}
.ant-badge-status-green {
  background: #52c41a;
}
.ant-badge-status-blue {
  background: #1890ff;
}
.ant-badge-status-geekblue {
  background: #2f54eb;
}
.ant-badge-status-purple {
  background: #722ed1;
}
.ant-badge-status-text {
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
}
.ant-badge-zoom-appear,
.ant-badge-zoom-enter {
  animation: antZoomBadgeIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  animation-fill-mode: both;
}
.ant-badge-zoom-leave {
  animation: antZoomBadgeOut 0.3s cubic-bezier(0.71, -0.46, 0.88, 0.6);
  animation-fill-mode: both;
}
.ant-badge-not-a-wrapper .ant-badge-zoom-appear,
.ant-badge-not-a-wrapper .ant-badge-zoom-enter {
  animation: antNoWrapperZoomBadgeIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
}
.ant-badge-not-a-wrapper .ant-badge-zoom-leave {
  animation: antNoWrapperZoomBadgeOut 0.3s cubic-bezier(0.71, -0.46, 0.88, 0.6);
}
.ant-badge-not-a-wrapper:not(.ant-badge-status) {
  vertical-align: middle;
}
.ant-badge-not-a-wrapper .ant-scroll-number-custom-component,
.ant-badge-not-a-wrapper .ant-badge-count {
  transform: none;
}
.ant-badge-not-a-wrapper .ant-scroll-number-custom-component,
.ant-badge-not-a-wrapper .ant-scroll-number {
  position: relative;
  top: auto;
  display: block;
  transform-origin: 50% 50%;
}
@keyframes antStatusProcessing {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
}
.ant-scroll-number {
  overflow: hidden;
  direction: ltr;
}
.ant-scroll-number-only {
  position: relative;
  display: inline-block;
  height: 20px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  /* stylelint-disable property-no-vendor-prefix */
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  /* stylelint-enable property-no-vendor-prefix */
}
.ant-scroll-number-only > p.ant-scroll-number-only-unit {
  height: 20px;
  margin: 0;
  /* stylelint-disable property-no-vendor-prefix */
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  /* stylelint-enable property-no-vendor-prefix */
}
.ant-scroll-number-symbol {
  vertical-align: top;
}
@keyframes antZoomBadgeIn {
  0% {
    transform: scale(0) translate(50%, -50%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(50%, -50%);
  }
}
@keyframes antZoomBadgeOut {
  0% {
    transform: scale(1) translate(50%, -50%);
  }
  100% {
    transform: scale(0) translate(50%, -50%);
    opacity: 0;
  }
}
@keyframes antNoWrapperZoomBadgeIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
  }
}
@keyframes antNoWrapperZoomBadgeOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes antBadgeLoadingCircle {
  0% {
    transform-origin: 50%;
  }
  100% {
    transform: translate(50%, -50%) rotate(360deg);
    transform-origin: 50%;
  }
}
.ant-ribbon-wrapper {
  position: relative;
}
.ant-ribbon {
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
  top: 8px;
  height: 22px;
  padding: 0 8px;
  color: #fff;
  line-height: 22px;
  white-space: nowrap;
  background-color: var(--ant-primary-color);
  border-radius: 2px;
}
.ant-ribbon-text {
  color: #fff;
}
.ant-ribbon-corner {
  position: absolute;
  top: 100%;
  width: 8px;
  height: 8px;
  color: currentcolor;
  border: 4px solid;
  transform: scaleY(0.75);
  transform-origin: top;
}
.ant-ribbon-corner::after {
  position: absolute;
  top: -4px;
  left: -4px;
  width: inherit;
  height: inherit;
  color: rgba(0, 0, 0, 0.25);
  border: inherit;
  content: '';
}
.ant-ribbon-color-pink {
  color: #eb2f96;
  background: #eb2f96;
}
.ant-ribbon-color-magenta {
  color: #eb2f96;
  background: #eb2f96;
}
.ant-ribbon-color-red {
  color: #f5222d;
  background: #f5222d;
}
.ant-ribbon-color-volcano {
  color: #fa541c;
  background: #fa541c;
}
.ant-ribbon-color-orange {
  color: #fa8c16;
  background: #fa8c16;
}
.ant-ribbon-color-yellow {
  color: #fadb14;
  background: #fadb14;
}
.ant-ribbon-color-gold {
  color: #faad14;
  background: #faad14;
}
.ant-ribbon-color-cyan {
  color: #13c2c2;
  background: #13c2c2;
}
.ant-ribbon-color-lime {
  color: #a0d911;
  background: #a0d911;
}
.ant-ribbon-color-green {
  color: #52c41a;
  background: #52c41a;
}
.ant-ribbon-color-blue {
  color: #1890ff;
  background: #1890ff;
}
.ant-ribbon-color-geekblue {
  color: #2f54eb;
  background: #2f54eb;
}
.ant-ribbon-color-purple {
  color: #722ed1;
  background: #722ed1;
}
.ant-ribbon.ant-ribbon-placement-end {
  right: -8px;
  border-bottom-right-radius: 0;
}
.ant-ribbon.ant-ribbon-placement-end .ant-ribbon-corner {
  right: 0;
  border-color: currentcolor transparent transparent currentcolor;
}
.ant-ribbon.ant-ribbon-placement-start {
  left: -8px;
  border-bottom-left-radius: 0;
}
.ant-ribbon.ant-ribbon-placement-start .ant-ribbon-corner {
  left: 0;
  border-color: currentcolor currentcolor transparent transparent;
}
.ant-badge-rtl {
  direction: rtl;
}
.ant-badge-rtl.ant-badge:not(.ant-badge-not-a-wrapper) .ant-badge-count,
.ant-badge-rtl.ant-badge:not(.ant-badge-not-a-wrapper) .ant-badge-dot,
.ant-badge-rtl.ant-badge:not(.ant-badge-not-a-wrapper) .ant-scroll-number-custom-component {
  right: auto;
  left: 0;
  direction: ltr;
  transform: translate(-50%, -50%);
  transform-origin: 0% 0%;
}
.ant-badge-rtl.ant-badge:not(.ant-badge-not-a-wrapper) .ant-scroll-number-custom-component {
  right: auto;
  left: 0;
  transform: translate(-50%, -50%);
  transform-origin: 0% 0%;
}
.ant-badge-rtl .ant-badge-status-text {
  margin-right: 8px;
  margin-left: 0;
}
.ant-badge:not(.ant-badge-not-a-wrapper).ant-badge-rtl .ant-badge-zoom-appear,
.ant-badge:not(.ant-badge-not-a-wrapper).ant-badge-rtl .ant-badge-zoom-enter {
  animation-name: antZoomBadgeInRtl;
}
.ant-badge:not(.ant-badge-not-a-wrapper).ant-badge-rtl .ant-badge-zoom-leave {
  animation-name: antZoomBadgeOutRtl;
}
.ant-ribbon-rtl {
  direction: rtl;
}
.ant-ribbon-rtl.ant-ribbon-placement-end {
  right: unset;
  left: -8px;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 0;
}
.ant-ribbon-rtl.ant-ribbon-placement-end .ant-ribbon-corner {
  right: unset;
  left: 0;
  border-color: currentcolor currentcolor transparent transparent;
}
.ant-ribbon-rtl.ant-ribbon-placement-end .ant-ribbon-corner::after {
  border-color: currentcolor currentcolor transparent transparent;
}
.ant-ribbon-rtl.ant-ribbon-placement-start {
  right: -8px;
  left: unset;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 2px;
}
.ant-ribbon-rtl.ant-ribbon-placement-start .ant-ribbon-corner {
  right: 0;
  left: unset;
  border-color: currentcolor transparent transparent currentcolor;
}
.ant-ribbon-rtl.ant-ribbon-placement-start .ant-ribbon-corner::after {
  border-color: currentcolor transparent transparent currentcolor;
}
@keyframes antZoomBadgeInRtl {
  0% {
    transform: scale(0) translate(-50%, -50%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(-50%, -50%);
  }
}
@keyframes antZoomBadgeOutRtl {
  0% {
    transform: scale(1) translate(-50%, -50%);
  }
  100% {
    transform: scale(0) translate(-50%, -50%);
    opacity: 0;
  }
}
.ant-badge .ant-scroll-number:only-child {
  position: relative;
  top: auto;
  display: block;
}
.ant-badge .ant-badge-count:only-child {
  transform: none;
}
nz-ribbon {
  display: block;
}
`
          

import { css } from 'lit-element';
export default css`.ant-steps {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  display: flex;
  width: 100%;
  font-size: 0;
  text-align: initial;
}
.ant-steps-item {
  position: relative;
  display: inline-block;
  flex: 1;
  overflow: hidden;
  vertical-align: top;
}
.ant-steps-item-container {
  outline: none;
}
.ant-steps-item:last-child {
  flex: none;
}
.ant-steps-item:last-child > .ant-steps-item-container > .ant-steps-item-tail,
.ant-steps-item:last-child > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
  display: none;
}
.ant-steps-item-icon,
.ant-steps-item-content {
  display: inline-block;
  vertical-align: top;
}
.ant-steps-item-icon {
  width: 32px;
  height: 32px;
  margin: 0 8px 0 0;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  line-height: 32px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  transition: background-color 0.3s, border-color 0.3s;
}
.ant-steps-item-icon .ant-steps-icon {
  position: relative;
  top: -0.5px;
  color: var(--ant-primary-color);
  line-height: 1;
}
.ant-steps-item-tail {
  position: absolute;
  top: 12px;
  left: 0;
  width: 100%;
  padding: 0 10px;
}
.ant-steps-item-tail::after {
  display: inline-block;
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 1px;
  transition: background 0.3s;
  content: '';
}
.ant-steps-item-title {
  position: relative;
  display: inline-block;
  padding-right: 16px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  line-height: 32px;
}
.ant-steps-item-title::after {
  position: absolute;
  top: 16px;
  left: 100%;
  display: block;
  width: 9999px;
  height: 1px;
  background: rgba(0, 0, 0, 0.06);
  content: '';
}
.ant-steps-item-subtitle {
  display: inline;
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.45);
  font-weight: normal;
  font-size: 14px;
}
.ant-steps-item-description {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.ant-steps-item-wait .ant-steps-item-icon {
  background-color: #fff;
  border-color: rgba(0, 0, 0, 0.25);
}
.ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon {
  color: rgba(0, 0, 0, 0.25);
}
.ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
  background: rgba(0, 0, 0, 0.25);
}
.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
  color: rgba(0, 0, 0, 0.45);
}
.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
  background-color: rgba(0, 0, 0, 0.06);
}
.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
  color: rgba(0, 0, 0, 0.45);
}
.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-tail::after {
  background-color: rgba(0, 0, 0, 0.06);
}
.ant-steps-item-process .ant-steps-item-icon {
  background-color: #fff;
  border-color: var(--ant-primary-color);
}
.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
  color: var(--ant-primary-color);
}
.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
  background: var(--ant-primary-color);
}
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
  color: rgba(0, 0, 0, 0.85);
}
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
  background-color: rgba(0, 0, 0, 0.06);
}
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
  color: rgba(0, 0, 0, 0.85);
}
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-tail::after {
  background-color: rgba(0, 0, 0, 0.06);
}
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
  background: var(--ant-primary-color);
}
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon .ant-steps-icon {
  color: #fff;
}
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-title {
  font-weight: 500;
}
.ant-steps-item-finish .ant-steps-item-icon {
  background-color: #fff;
  border-color: var(--ant-primary-color);
}
.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
  color: var(--ant-primary-color);
}
.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
  background: var(--ant-primary-color);
}
.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
  color: rgba(0, 0, 0, 0.85);
}
.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
  background-color: var(--ant-primary-color);
}
.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
  color: rgba(0, 0, 0, 0.45);
}
.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-tail::after {
  background-color: var(--ant-primary-color);
}
.ant-steps-item-error .ant-steps-item-icon {
  background-color: #fff;
  border-color: var(--ant-error-color);
}
.ant-steps-item-error .ant-steps-item-icon > .ant-steps-icon {
  color: var(--ant-error-color);
}
.ant-steps-item-error .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
  background: var(--ant-error-color);
}
.ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
  color: var(--ant-error-color);
}
.ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
  background-color: rgba(0, 0, 0, 0.06);
}
.ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
  color: var(--ant-error-color);
}
.ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-tail::after {
  background-color: rgba(0, 0, 0, 0.06);
}
.ant-steps-item.ant-steps-next-error .ant-steps-item-title::after {
  background: var(--ant-error-color);
}
.ant-steps-item-disabled {
  cursor: not-allowed;
}
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] {
  cursor: pointer;
}
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] .ant-steps-item-title,
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] .ant-steps-item-subtitle,
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] .ant-steps-item-description,
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] .ant-steps-item-icon .ant-steps-icon {
  transition: color 0.3s;
}
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button']:hover .ant-steps-item-title,
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button']:hover .ant-steps-item-subtitle,
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button']:hover .ant-steps-item-description {
  color: var(--ant-primary-color);
}
.ant-steps .ant-steps-item:not(.ant-steps-item-active):not(.ant-steps-item-process) > .ant-steps-item-container[role='button']:hover .ant-steps-item-icon {
  border-color: var(--ant-primary-color);
}
.ant-steps .ant-steps-item:not(.ant-steps-item-active):not(.ant-steps-item-process) > .ant-steps-item-container[role='button']:hover .ant-steps-item-icon .ant-steps-icon {
  color: var(--ant-primary-color);
}
.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
  padding-left: 16px;
  white-space: nowrap;
}
.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:first-child {
  padding-left: 0;
}
.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child .ant-steps-item-title {
  padding-right: 0;
}
.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-tail {
  display: none;
}
.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-description {
  max-width: 140px;
  white-space: normal;
}
.ant-steps-item-custom > .ant-steps-item-container > .ant-steps-item-icon {
  height: auto;
  background: none;
  border: 0;
}
.ant-steps-item-custom > .ant-steps-item-container > .ant-steps-item-icon > .ant-steps-icon {
  top: 0px;
  left: 0.5px;
  width: 32px;
  height: 32px;
  font-size: 24px;
  line-height: 32px;
}
.ant-steps-item-custom.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
  color: var(--ant-primary-color);
}
.ant-steps:not(.ant-steps-vertical) .ant-steps-item-custom .ant-steps-item-icon {
  width: auto;
  background: none;
}
.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
  padding-left: 12px;
}
.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:first-child {
  padding-left: 0;
}
.ant-steps-small .ant-steps-item-icon {
  width: 24px;
  height: 24px;
  margin: 0 8px 0 0;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  border-radius: 24px;
}
.ant-steps-small .ant-steps-item-title {
  padding-right: 12px;
  font-size: 14px;
  line-height: 24px;
}
.ant-steps-small .ant-steps-item-title::after {
  top: 12px;
}
.ant-steps-small .ant-steps-item-description {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.ant-steps-small .ant-steps-item-tail {
  top: 8px;
}
.ant-steps-small .ant-steps-item-custom .ant-steps-item-icon {
  width: inherit;
  height: inherit;
  line-height: inherit;
  background: none;
  border: 0;
  border-radius: 0;
}
.ant-steps-small .ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {
  font-size: 24px;
  line-height: 24px;
  transform: none;
}
.ant-steps-vertical {
  display: flex;
  flex-direction: column;
}
.ant-steps-vertical > .ant-steps-item {
  display: block;
  flex: 1 0 auto;
  padding-left: 0;
  overflow: visible;
}
.ant-steps-vertical > .ant-steps-item .ant-steps-item-icon {
  float: left;
  margin-right: 16px;
}
.ant-steps-vertical > .ant-steps-item .ant-steps-item-content {
  display: block;
  min-height: 48px;
  overflow: hidden;
}
.ant-steps-vertical > .ant-steps-item .ant-steps-item-title {
  line-height: 32px;
}
.ant-steps-vertical > .ant-steps-item .ant-steps-item-description {
  padding-bottom: 12px;
}
.ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
  position: absolute;
  top: 0;
  left: 16px;
  width: 1px;
  height: 100%;
  padding: 38px 0 6px;
}
.ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail::after {
  width: 1px;
  height: 100%;
}
.ant-steps-vertical > .ant-steps-item:not(:last-child) > .ant-steps-item-container > .ant-steps-item-tail {
  display: block;
}
.ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
  display: none;
}
.ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-tail {
  position: absolute;
  top: 0;
  left: 12px;
  padding: 30px 0 6px;
}
.ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-title {
  line-height: 24px;
}
.ant-steps-label-vertical .ant-steps-item {
  overflow: visible;
}
.ant-steps-label-vertical .ant-steps-item-tail {
  margin-left: 58px;
  padding: 3.5px 24px;
}
.ant-steps-label-vertical .ant-steps-item-content {
  display: block;
  width: 116px;
  margin-top: 8px;
  text-align: center;
}
.ant-steps-label-vertical .ant-steps-item-icon {
  display: inline-block;
  margin-left: 42px;
}
.ant-steps-label-vertical .ant-steps-item-title {
  padding-right: 0;
  padding-left: 0;
}
.ant-steps-label-vertical .ant-steps-item-title::after {
  display: none;
}
.ant-steps-label-vertical .ant-steps-item-subtitle {
  display: block;
  margin-bottom: 4px;
  margin-left: 0;
  line-height: 1.5715;
}
.ant-steps-label-vertical.ant-steps-small:not(.ant-steps-dot) .ant-steps-item-icon {
  margin-left: 46px;
}
.ant-steps-dot .ant-steps-item-title,
.ant-steps-dot.ant-steps-small .ant-steps-item-title {
  line-height: 1.5715;
}
.ant-steps-dot .ant-steps-item-tail,
.ant-steps-dot.ant-steps-small .ant-steps-item-tail {
  top: 2px;
  width: 100%;
  margin: 0 0 0 70px;
  padding: 0;
}
.ant-steps-dot .ant-steps-item-tail::after,
.ant-steps-dot.ant-steps-small .ant-steps-item-tail::after {
  width: calc(100% - 20px);
  height: 3px;
  margin-left: 12px;
}
.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot,
.ant-steps-dot.ant-steps-small .ant-steps-item:first-child .ant-steps-icon-dot {
  left: 2px;
}
.ant-steps-dot .ant-steps-item-icon,
.ant-steps-dot.ant-steps-small .ant-steps-item-icon {
  width: 8px;
  height: 8px;
  margin-left: 67px;
  padding-right: 0;
  line-height: 8px;
  background: transparent;
  border: 0;
}
.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot,
.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot {
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  transition: all 0.3s;
  /* expand hover area */
}
.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot::after,
.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot::after {
  position: absolute;
  top: -12px;
  left: -26px;
  width: 60px;
  height: 32px;
  background: rgba(0, 0, 0, 0.001);
  content: '';
}
.ant-steps-dot .ant-steps-item-content,
.ant-steps-dot.ant-steps-small .ant-steps-item-content {
  width: 140px;
}
.ant-steps-dot .ant-steps-item-process .ant-steps-item-icon,
.ant-steps-dot.ant-steps-small .ant-steps-item-process .ant-steps-item-icon {
  position: relative;
  top: -1px;
  width: 10px;
  height: 10px;
  line-height: 10px;
  background: none;
}
.ant-steps-dot .ant-steps-item-process .ant-steps-icon:first-child .ant-steps-icon-dot,
.ant-steps-dot.ant-steps-small .ant-steps-item-process .ant-steps-icon:first-child .ant-steps-icon-dot {
  left: 0;
}
.ant-steps-vertical.ant-steps-dot .ant-steps-item-icon {
  margin-top: 13px;
  margin-left: 0;
  background: none;
}
.ant-steps-vertical.ant-steps-dot .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
  top: 6.5px;
  left: -9px;
  margin: 0;
  padding: 22px 0 4px;
}
.ant-steps-vertical.ant-steps-dot.ant-steps-small .ant-steps-item-icon {
  margin-top: 10px;
}
.ant-steps-vertical.ant-steps-dot.ant-steps-small .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
  top: 3.5px;
}
.ant-steps-vertical.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot {
  left: 0;
}
.ant-steps-vertical.ant-steps-dot .ant-steps-item-content {
  width: inherit;
}
.ant-steps-vertical.ant-steps-dot .ant-steps-item-process .ant-steps-item-container .ant-steps-item-icon .ant-steps-icon-dot {
  top: -1px;
  left: -1px;
}
.ant-steps-navigation {
  padding-top: 12px;
}
.ant-steps-navigation.ant-steps-small .ant-steps-item-container {
  margin-left: -12px;
}
.ant-steps-navigation .ant-steps-item {
  overflow: visible;
  text-align: center;
}
.ant-steps-navigation .ant-steps-item-container {
  display: inline-block;
  height: 100%;
  margin-left: -16px;
  padding-bottom: 12px;
  text-align: left;
  transition: opacity 0.3s;
}
.ant-steps-navigation .ant-steps-item-container .ant-steps-item-content {
  max-width: auto;
}
.ant-steps-navigation .ant-steps-item-container .ant-steps-item-title {
  max-width: 100%;
  padding-right: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ant-steps-navigation .ant-steps-item-container .ant-steps-item-title::after {
  display: none;
}
.ant-steps-navigation .ant-steps-item:not(.ant-steps-item-active) .ant-steps-item-container[role='button'] {
  cursor: pointer;
}
.ant-steps-navigation .ant-steps-item:not(.ant-steps-item-active) .ant-steps-item-container[role='button']:hover {
  opacity: 0.85;
}
.ant-steps-navigation .ant-steps-item:last-child {
  flex: 1;
}
.ant-steps-navigation .ant-steps-item:last-child::after {
  display: none;
}
.ant-steps-navigation .ant-steps-item::after {
  position: absolute;
  top: 50%;
  left: 100%;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-top: -14px;
  margin-left: -2px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-bottom: none;
  border-left: none;
  transform: rotate(45deg);
  content: '';
}
.ant-steps-navigation .ant-steps-item::before {
  position: absolute;
  bottom: 0;
  left: 50%;
  display: inline-block;
  width: 0;
  height: 2px;
  background-color: var(--ant-primary-color);
  transition: width 0.3s, left 0.3s;
  transition-timing-function: ease-out;
  content: '';
}
.ant-steps-navigation .ant-steps-item.ant-steps-item-active::before {
  left: 0;
  width: 100%;
}
.ant-steps-navigation.ant-steps-vertical > .ant-steps-item {
  margin-right: 0 !important;
}
.ant-steps-navigation.ant-steps-vertical > .ant-steps-item::before {
  display: none;
}
.ant-steps-navigation.ant-steps-vertical > .ant-steps-item.ant-steps-item-active::before {
  top: 0;
  right: 0;
  left: unset;
  display: block;
  width: 3px;
  height: calc(100% - 24px);
}
.ant-steps-navigation.ant-steps-vertical > .ant-steps-item::after {
  position: relative;
  top: -2px;
  left: 50%;
  display: block;
  width: 8px;
  height: 8px;
  margin-bottom: 8px;
  text-align: center;
  transform: rotate(135deg);
}
.ant-steps-navigation.ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
  visibility: hidden;
}
.ant-steps-navigation.ant-steps-horizontal > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
  visibility: hidden;
}
.ant-steps-rtl {
  direction: rtl;
}
.ant-steps.ant-steps-rtl .ant-steps-item-icon {
  margin-right: 0;
  margin-left: 8px;
}
.ant-steps-rtl .ant-steps-item-tail {
  right: 0;
  left: auto;
}
.ant-steps-rtl .ant-steps-item-title {
  padding-right: 0;
  padding-left: 16px;
}
.ant-steps-rtl .ant-steps-item-title .ant-steps-item-subtitle {
  float: left;
  margin-right: 8px;
  margin-left: 0;
}
.ant-steps-rtl .ant-steps-item-title::after {
  right: 100%;
  left: auto;
}
.ant-steps-rtl.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
  padding-right: 16px;
  padding-left: 0;
}
.ant-steps-rtl.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:first-child {
  padding-right: 0;
}
.ant-steps-rtl.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child .ant-steps-item-title {
  padding-left: 0;
}
.ant-steps-rtl .ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {
  right: 0.5px;
  left: auto;
}
.ant-steps-rtl.ant-steps-navigation.ant-steps-small .ant-steps-item-container {
  margin-right: -12px;
  margin-left: 0;
}
.ant-steps-rtl.ant-steps-navigation .ant-steps-item-container {
  margin-right: -16px;
  margin-left: 0;
  text-align: right;
}
.ant-steps-rtl.ant-steps-navigation .ant-steps-item-container .ant-steps-item-title {
  padding-left: 0;
}
.ant-steps-rtl.ant-steps-navigation .ant-steps-item::after {
  right: 100%;
  left: auto;
  margin-right: -2px;
  margin-left: 0;
  transform: rotate(225deg);
}
.ant-steps-rtl.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
  padding-right: 12px;
  padding-left: 0;
}
.ant-steps-rtl.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:first-child {
  padding-right: 0;
}
.ant-steps-rtl.ant-steps-small .ant-steps-item-title {
  padding-right: 0;
  padding-left: 12px;
}
.ant-steps-rtl.ant-steps-vertical > .ant-steps-item .ant-steps-item-icon {
  float: right;
  margin-right: 0;
  margin-left: 16px;
}
.ant-steps-rtl.ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
  right: 16px;
  left: auto;
}
.ant-steps-rtl.ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-tail {
  right: 12px;
  left: auto;
}
.ant-steps-rtl.ant-steps-label-vertical .ant-steps-item-title {
  padding-left: 0;
}
.ant-steps-rtl.ant-steps-dot .ant-steps-item-tail,
.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-tail {
  margin: 0 70px 0 0;
}
.ant-steps-rtl.ant-steps-dot .ant-steps-item-tail::after,
.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-tail::after {
  margin-right: 12px;
  margin-left: 0;
}
.ant-steps-rtl.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot,
.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item:first-child .ant-steps-icon-dot {
  right: 2px;
  left: auto;
}
.ant-steps-rtl.ant-steps-dot .ant-steps-item-icon,
.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-icon {
  margin-right: 67px;
  margin-left: 0;
}
.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot,
.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot {
  /* expand hover area */
}
.ant-steps-rtl.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot,
.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot {
  float: right;
}
.ant-steps-rtl.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot::after,
.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot::after {
  right: -26px;
  left: auto;
}
.ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item-icon {
  margin-right: 0;
  margin-left: 16px;
}
.ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
  right: -9px;
  left: auto;
}
.ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot {
  right: 0;
  left: auto;
}
.ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item-process .ant-steps-icon-dot {
  right: -2px;
  left: auto;
}
.ant-steps-rtl.ant-steps-with-progress.ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item:first-child {
  padding-right: 4px;
  padding-left: 0;
}
.ant-steps-rtl.ant-steps-with-progress.ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item:first-child.ant-steps-item-active {
  padding-right: 4px;
}
.ant-steps-with-progress .ant-steps-item {
  padding-top: 4px;
}
.ant-steps-with-progress .ant-steps-item .ant-steps-item-tail {
  top: 4px !important;
}
.ant-steps-with-progress.ant-steps-horizontal .ant-steps-item:first-child {
  padding-bottom: 4px;
  padding-left: 4px;
}
.ant-steps-with-progress .ant-steps-item-icon {
  position: relative;
}
.ant-steps-with-progress .ant-steps-item-icon .ant-progress {
  position: absolute;
  top: -5px;
  right: -5px;
  bottom: -5px;
  left: -5px;
}
`
          
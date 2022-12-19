
import { css } from 'lit-element';
export default css`.ant-menu-item-danger.ant-menu-item {
  color: var(--ant-error-color);
}
.ant-menu-item-danger.ant-menu-item:hover,
.ant-menu-item-danger.ant-menu-item-active {
  color: var(--ant-error-color);
}
.ant-menu-item-danger.ant-menu-item:active {
  background: #fff1f0;
}
.ant-menu-item-danger.ant-menu-item-selected {
  color: var(--ant-error-color);
}
.ant-menu-item-danger.ant-menu-item-selected > a,
.ant-menu-item-danger.ant-menu-item-selected > a:hover {
  color: var(--ant-error-color);
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-danger.ant-menu-item-selected {
  background-color: #fff1f0;
}
.ant-menu-inline .ant-menu-item-danger.ant-menu-item::after {
  border-right-color: var(--ant-error-color);
}
.ant-menu-dark .ant-menu-item-danger.ant-menu-item,
.ant-menu-dark .ant-menu-item-danger.ant-menu-item:hover,
.ant-menu-dark .ant-menu-item-danger.ant-menu-item > a {
  color: var(--ant-error-color);
}
.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-danger.ant-menu-item-selected {
  color: #fff;
  background-color: var(--ant-error-color);
}
.ant-menu {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  line-height: 1.5715;
  font-feature-settings: 'tnum';
  margin-bottom: 0;
  padding-left: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 0;
  text-align: left;
  list-style: none;
  background: #fff;
  outline: none;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  transition: background 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
}
.ant-menu::before {
  display: table;
  content: '';
}
.ant-menu::after {
  display: table;
  clear: both;
  content: '';
}
.ant-menu.ant-menu-root:focus-visible {
  box-shadow: 0 0 0 2px var(--ant-primary-2);
}
.ant-menu ul,
.ant-menu ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
.ant-menu-overflow {
  display: flex;
}
.ant-menu-overflow-item {
  flex: none;
}
.ant-menu-hidden,
.ant-menu-submenu-hidden {
  display: none;
}
.ant-menu-item-group-title {
  height: 1.5715;
  padding: 8px 16px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 1.5715;
  transition: all 0.3s;
}
.ant-menu-horizontal .ant-menu-submenu {
  transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu-submenu,
.ant-menu-submenu-inline {
  transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu-submenu-selected {
  color: var(--ant-primary-color);
}
.ant-menu-item:active,
.ant-menu-submenu-title:active {
  background: var(--ant-primary-1);
}
.ant-menu-submenu .ant-menu-sub {
  cursor: initial;
  transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu-title-content {
  transition: color 0.3s;
}
.ant-menu-item a {
  color: rgba(0, 0, 0, 0.85);
}
.ant-menu-item a:hover {
  color: var(--ant-primary-color);
}
.ant-menu-item a::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  content: '';
}
.ant-menu-item > .ant-badge a {
  color: rgba(0, 0, 0, 0.85);
}
.ant-menu-item > .ant-badge a:hover {
  color: var(--ant-primary-color);
}
.ant-menu-item-divider {
  overflow: hidden;
  line-height: 0;
  border-color: rgba(0, 0, 0, 0.06);
  border-style: solid;
  border-width: 1px 0 0;
}
.ant-menu-item-divider-dashed {
  border-style: dashed;
}
.ant-menu-horizontal .ant-menu-item,
.ant-menu-horizontal .ant-menu-submenu {
  margin-top: -1px;
}
.ant-menu-horizontal > .ant-menu-item:hover,
.ant-menu-horizontal > .ant-menu-item-active,
.ant-menu-horizontal > .ant-menu-submenu .ant-menu-submenu-title:hover {
  background-color: transparent;
}
.ant-menu-item-selected {
  color: var(--ant-primary-color);
}
.ant-menu-item-selected a,
.ant-menu-item-selected a:hover {
  color: var(--ant-primary-color);
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: var(--ant-primary-1);
}
.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
  border-right: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-menu-vertical-right {
  border-left: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-menu-vertical.ant-menu-sub,
.ant-menu-vertical-left.ant-menu-sub,
.ant-menu-vertical-right.ant-menu-sub {
  min-width: 160px;
  max-height: calc(100vh - 100px);
  padding: 0;
  overflow: hidden;
  border-right: 0;
}
.ant-menu-vertical.ant-menu-sub:not([class*='-active']),
.ant-menu-vertical-left.ant-menu-sub:not([class*='-active']),
.ant-menu-vertical-right.ant-menu-sub:not([class*='-active']) {
  overflow-x: hidden;
  overflow-y: auto;
}
.ant-menu-vertical.ant-menu-sub .ant-menu-item,
.ant-menu-vertical-left.ant-menu-sub .ant-menu-item,
.ant-menu-vertical-right.ant-menu-sub .ant-menu-item {
  left: 0;
  margin-left: 0;
  border-right: 0;
}
.ant-menu-vertical.ant-menu-sub .ant-menu-item::after,
.ant-menu-vertical-left.ant-menu-sub .ant-menu-item::after,
.ant-menu-vertical-right.ant-menu-sub .ant-menu-item::after {
  border-right: 0;
}
.ant-menu-vertical.ant-menu-sub > .ant-menu-item,
.ant-menu-vertical-left.ant-menu-sub > .ant-menu-item,
.ant-menu-vertical-right.ant-menu-sub > .ant-menu-item,
.ant-menu-vertical.ant-menu-sub > .ant-menu-submenu,
.ant-menu-vertical-left.ant-menu-sub > .ant-menu-submenu,
.ant-menu-vertical-right.ant-menu-sub > .ant-menu-submenu {
  transform-origin: 0 0;
}
.ant-menu-horizontal.ant-menu-sub {
  min-width: 114px;
}
.ant-menu-horizontal .ant-menu-item,
.ant-menu-horizontal .ant-menu-submenu-title {
  transition: border-color 0.3s, background 0.3s;
}
.ant-menu-item,
.ant-menu-submenu-title {
  position: relative;
  display: block;
  margin: 0;
  padding: 0 20px;
  white-space: nowrap;
  cursor: pointer;
  transition: border-color 0.3s, background 0.3s, padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu-item .ant-menu-item-icon,
.ant-menu-submenu-title .ant-menu-item-icon,
.ant-menu-item .anticon,
.ant-menu-submenu-title .anticon {
  min-width: 14px;
  font-size: 14px;
  transition: font-size 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), color 0.3s;
}
.ant-menu-item .ant-menu-item-icon + span,
.ant-menu-submenu-title .ant-menu-item-icon + span,
.ant-menu-item .anticon + span,
.ant-menu-submenu-title .anticon + span {
  margin-left: 10px;
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), margin 0.3s, color 0.3s;
}
.ant-menu-item .ant-menu-item-icon.svg,
.ant-menu-submenu-title .ant-menu-item-icon.svg {
  vertical-align: -0.125em;
}
.ant-menu-item.ant-menu-item-only-child > .anticon,
.ant-menu-submenu-title.ant-menu-item-only-child > .anticon,
.ant-menu-item.ant-menu-item-only-child > .ant-menu-item-icon,
.ant-menu-submenu-title.ant-menu-item-only-child > .ant-menu-item-icon {
  margin-right: 0;
}
.ant-menu-item:focus-visible,
.ant-menu-submenu-title:focus-visible {
  box-shadow: 0 0 0 2px var(--ant-primary-2);
}
.ant-menu > .ant-menu-item-divider {
  margin: 1px 0;
  padding: 0;
}
.ant-menu-submenu-popup {
  position: absolute;
  z-index: 1050;
  background: transparent;
  border-radius: 2px;
  box-shadow: none;
  transform-origin: 0 0;
}
.ant-menu-submenu-popup::before {
  position: absolute;
  top: -7px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.0001;
  content: ' ';
}
.ant-menu-submenu-placement-rightTop::before {
  top: 0;
  left: -7px;
}
.ant-menu-submenu > .ant-menu {
  background-color: #fff;
  border-radius: 2px;
}
.ant-menu-submenu > .ant-menu-submenu-title::after {
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu-submenu-popup > .ant-menu {
  background-color: #fff;
}
.ant-menu-submenu-expand-icon,
.ant-menu-submenu-arrow {
  position: absolute;
  top: 50%;
  right: 16px;
  width: 10px;
  color: rgba(0, 0, 0, 0.85);
  transform: translateY(-50%);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu-submenu-arrow::before,
.ant-menu-submenu-arrow::after {
  position: absolute;
  width: 6px;
  height: 1.5px;
  background-color: currentcolor;
  border-radius: 2px;
  transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  content: '';
}
.ant-menu-submenu-arrow::before {
  transform: rotate(45deg) translateY(-2.5px);
}
.ant-menu-submenu-arrow::after {
  transform: rotate(-45deg) translateY(2.5px);
}
.ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-expand-icon,
.ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
  color: var(--ant-primary-color);
}
.ant-menu-inline-collapsed .ant-menu-submenu-arrow::before,
.ant-menu-submenu-inline .ant-menu-submenu-arrow::before {
  transform: rotate(-45deg) translateX(2.5px);
}
.ant-menu-inline-collapsed .ant-menu-submenu-arrow::after,
.ant-menu-submenu-inline .ant-menu-submenu-arrow::after {
  transform: rotate(45deg) translateX(-2.5px);
}
.ant-menu-submenu-horizontal .ant-menu-submenu-arrow {
  display: none;
}
.ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
  transform: translateY(-2px);
}
.ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after {
  transform: rotate(-45deg) translateX(-2.5px);
}
.ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before {
  transform: rotate(45deg) translateX(2.5px);
}
.ant-menu-vertical .ant-menu-submenu-selected,
.ant-menu-vertical-left .ant-menu-submenu-selected,
.ant-menu-vertical-right .ant-menu-submenu-selected {
  color: var(--ant-primary-color);
}
.ant-menu-horizontal {
  line-height: 46px;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: none;
}
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu {
  margin-top: -1px;
  margin-bottom: 0;
  padding: 0 20px;
}
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected {
  color: var(--ant-primary-color);
}
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after {
  border-bottom: 2px solid var(--ant-primary-color);
}
.ant-menu-horizontal > .ant-menu-item,
.ant-menu-horizontal > .ant-menu-submenu {
  position: relative;
  top: 1px;
  display: inline-block;
  vertical-align: bottom;
}
.ant-menu-horizontal > .ant-menu-item::after,
.ant-menu-horizontal > .ant-menu-submenu::after {
  position: absolute;
  right: 20px;
  bottom: 0;
  left: 20px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  content: '';
}
.ant-menu-horizontal > .ant-menu-submenu > .ant-menu-submenu-title {
  padding: 0;
}
.ant-menu-horizontal > .ant-menu-item a {
  color: rgba(0, 0, 0, 0.85);
}
.ant-menu-horizontal > .ant-menu-item a:hover {
  color: var(--ant-primary-color);
}
.ant-menu-horizontal > .ant-menu-item a::before {
  bottom: -2px;
}
.ant-menu-horizontal > .ant-menu-item-selected a {
  color: var(--ant-primary-color);
}
.ant-menu-horizontal::after {
  display: block;
  clear: both;
  height: 0;
  content: '\20';
}
.ant-menu-vertical .ant-menu-item,
.ant-menu-vertical-left .ant-menu-item,
.ant-menu-vertical-right .ant-menu-item,
.ant-menu-inline .ant-menu-item {
  position: relative;
}
.ant-menu-vertical .ant-menu-item::after,
.ant-menu-vertical-left .ant-menu-item::after,
.ant-menu-vertical-right .ant-menu-item::after,
.ant-menu-inline .ant-menu-item::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border-right: 3px solid var(--ant-primary-color);
  transform: scaleY(0.0001);
  opacity: 0;
  transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  content: '';
}
.ant-menu-vertical .ant-menu-item,
.ant-menu-vertical-left .ant-menu-item,
.ant-menu-vertical-right .ant-menu-item,
.ant-menu-inline .ant-menu-item,
.ant-menu-vertical .ant-menu-submenu-title,
.ant-menu-vertical-left .ant-menu-submenu-title,
.ant-menu-vertical-right .ant-menu-submenu-title,
.ant-menu-inline .ant-menu-submenu-title {
  height: 40px;
  margin-top: 4px;
  margin-bottom: 4px;
  padding: 0 16px;
  overflow: hidden;
  line-height: 40px;
  text-overflow: ellipsis;
}
.ant-menu-vertical .ant-menu-submenu,
.ant-menu-vertical-left .ant-menu-submenu,
.ant-menu-vertical-right .ant-menu-submenu,
.ant-menu-inline .ant-menu-submenu {
  padding-bottom: 0.02px;
}
.ant-menu-vertical .ant-menu-item:not(:last-child),
.ant-menu-vertical-left .ant-menu-item:not(:last-child),
.ant-menu-vertical-right .ant-menu-item:not(:last-child),
.ant-menu-inline .ant-menu-item:not(:last-child) {
  margin-bottom: 8px;
}
.ant-menu-vertical > .ant-menu-item,
.ant-menu-vertical-left > .ant-menu-item,
.ant-menu-vertical-right > .ant-menu-item,
.ant-menu-inline > .ant-menu-item,
.ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-vertical-left > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-vertical-right > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  height: 40px;
  line-height: 40px;
}
.ant-menu-vertical .ant-menu-item-group-list .ant-menu-submenu-title,
.ant-menu-vertical .ant-menu-submenu-title {
  padding-right: 34px;
}
.ant-menu-inline {
  width: 100%;
}
.ant-menu-inline .ant-menu-selected::after,
.ant-menu-inline .ant-menu-item-selected::after {
  transform: scaleY(1);
  opacity: 1;
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu-inline .ant-menu-item,
.ant-menu-inline .ant-menu-submenu-title {
  width: calc(100% + 1px);
}
.ant-menu-inline .ant-menu-item-group-list .ant-menu-submenu-title,
.ant-menu-inline .ant-menu-submenu-title {
  padding-right: 34px;
}
.ant-menu-inline.ant-menu-root .ant-menu-item,
.ant-menu-inline.ant-menu-root .ant-menu-submenu-title {
  display: flex;
  align-items: center;
  transition: border-color 0.3s, background 0.3s, padding 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.ant-menu-inline.ant-menu-root .ant-menu-item > .ant-menu-title-content,
.ant-menu-inline.ant-menu-root .ant-menu-submenu-title > .ant-menu-title-content {
  flex: auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ant-menu-inline.ant-menu-root .ant-menu-item > *,
.ant-menu-inline.ant-menu-root .ant-menu-submenu-title > * {
  flex: none;
}
.ant-menu.ant-menu-inline-collapsed {
  width: 80px;
}
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
  left: 0;
  padding: 0 calc(50% - 16px / 2);
  text-overflow: clip;
}
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item .ant-menu-submenu-arrow,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item .ant-menu-submenu-arrow,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title .ant-menu-submenu-arrow,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title .ant-menu-submenu-arrow {
  opacity: 0;
}
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item .ant-menu-item-icon,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item .ant-menu-item-icon,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title .ant-menu-item-icon,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title .ant-menu-item-icon,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item .anticon,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item .anticon,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title .anticon,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title .anticon {
  margin: 0;
  font-size: 16px;
  line-height: 40px;
}
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item .ant-menu-item-icon + span,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item .ant-menu-item-icon + span,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title .ant-menu-item-icon + span,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title .ant-menu-item-icon + span,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item .anticon + span,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item .anticon + span,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title .anticon + span,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title .anticon + span {
  display: inline-block;
  opacity: 0;
}
.ant-menu.ant-menu-inline-collapsed .ant-menu-item-icon,
.ant-menu.ant-menu-inline-collapsed .anticon {
  display: inline-block;
}
.ant-menu.ant-menu-inline-collapsed-tooltip {
  pointer-events: none;
}
.ant-menu.ant-menu-inline-collapsed-tooltip .ant-menu-item-icon,
.ant-menu.ant-menu-inline-collapsed-tooltip .anticon {
  display: none;
}
.ant-menu.ant-menu-inline-collapsed-tooltip a {
  color: rgba(255, 255, 255, 0.85);
}
.ant-menu.ant-menu-inline-collapsed .ant-menu-item-group-title {
  padding-right: 4px;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ant-menu-item-group-list {
  margin: 0;
  padding: 0;
}
.ant-menu-item-group-list .ant-menu-item,
.ant-menu-item-group-list .ant-menu-submenu-title {
  padding: 0 16px 0 28px;
}
.ant-menu-root.ant-menu-vertical,
.ant-menu-root.ant-menu-vertical-left,
.ant-menu-root.ant-menu-vertical-right,
.ant-menu-root.ant-menu-inline {
  box-shadow: none;
}
.ant-menu-root.ant-menu-inline-collapsed .ant-menu-item > .ant-menu-inline-collapsed-noicon,
.ant-menu-root.ant-menu-inline-collapsed .ant-menu-submenu .ant-menu-submenu-title > .ant-menu-inline-collapsed-noicon {
  font-size: 16px;
  text-align: center;
}
.ant-menu-sub.ant-menu-inline {
  padding: 0;
  background: #fafafa;
  border: 0;
  border-radius: 0;
  box-shadow: none;
}
.ant-menu-sub.ant-menu-inline > .ant-menu-item,
.ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  height: 40px;
  line-height: 40px;
  list-style-position: inside;
  list-style-type: disc;
}
.ant-menu-sub.ant-menu-inline .ant-menu-item-group-title {
  padding-left: 32px;
}
.ant-menu-item-disabled,
.ant-menu-submenu-disabled {
  color: rgba(0, 0, 0, 0.25) !important;
  background: none;
  cursor: not-allowed;
}
.ant-menu-item-disabled::after,
.ant-menu-submenu-disabled::after {
  border-color: transparent !important;
}
.ant-menu-item-disabled a,
.ant-menu-submenu-disabled a {
  color: rgba(0, 0, 0, 0.25) !important;
  pointer-events: none;
}
.ant-menu-item-disabled > .ant-menu-submenu-title,
.ant-menu-submenu-disabled > .ant-menu-submenu-title {
  color: rgba(0, 0, 0, 0.25) !important;
  cursor: not-allowed;
}
.ant-menu-item-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-submenu-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-item-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-submenu-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after {
  background: rgba(0, 0, 0, 0.25) !important;
}
.ant-layout-header .ant-menu {
  line-height: inherit;
}
.ant-menu-inline-collapsed-tooltip a,
.ant-menu-inline-collapsed-tooltip a:hover {
  color: #fff;
}
.ant-menu-light .ant-menu-item:hover,
.ant-menu-light .ant-menu-item-active,
.ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
.ant-menu-light .ant-menu-submenu-active,
.ant-menu-light .ant-menu-submenu-title:hover {
  color: var(--ant-primary-color);
}
.ant-menu.ant-menu-root:focus-visible {
  box-shadow: 0 0 0 2px var(--ant-primary-7);
}
.ant-menu-dark .ant-menu-item:focus-visible,
.ant-menu-dark .ant-menu-submenu-title:focus-visible {
  box-shadow: 0 0 0 2px var(--ant-primary-7);
}
.ant-menu.ant-menu-dark,
.ant-menu-dark .ant-menu-sub,
.ant-menu.ant-menu-dark .ant-menu-sub {
  color: rgba(255, 255, 255, 0.65);
  background: #001529;
}
.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow,
.ant-menu.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow {
  opacity: 0.45;
  transition: all 0.3s;
}
.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow::after,
.ant-menu.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow::after,
.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
.ant-menu.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow::before {
  background: #fff;
}
.ant-menu-dark.ant-menu-submenu-popup {
  background: transparent;
}
.ant-menu-dark .ant-menu-inline.ant-menu-sub {
  background: #000c17;
}
.ant-menu-dark.ant-menu-horizontal {
  border-bottom: 0;
}
.ant-menu-dark.ant-menu-horizontal > .ant-menu-item,
.ant-menu-dark.ant-menu-horizontal > .ant-menu-submenu {
  top: 0;
  margin-top: 0;
  padding: 0 20px;
  border-color: #001529;
  border-bottom: 0;
}
.ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover {
  background-color: var(--ant-primary-color);
}
.ant-menu-dark.ant-menu-horizontal > .ant-menu-item > a::before {
  bottom: 0;
}
.ant-menu-dark .ant-menu-item,
.ant-menu-dark .ant-menu-item-group-title,
.ant-menu-dark .ant-menu-item > a,
.ant-menu-dark .ant-menu-item > span > a {
  color: rgba(255, 255, 255, 0.65);
}
.ant-menu-dark.ant-menu-inline,
.ant-menu-dark.ant-menu-vertical,
.ant-menu-dark.ant-menu-vertical-left,
.ant-menu-dark.ant-menu-vertical-right {
  border-right: 0;
}
.ant-menu-dark.ant-menu-inline .ant-menu-item,
.ant-menu-dark.ant-menu-vertical .ant-menu-item,
.ant-menu-dark.ant-menu-vertical-left .ant-menu-item,
.ant-menu-dark.ant-menu-vertical-right .ant-menu-item {
  left: 0;
  margin-left: 0;
  border-right: 0;
}
.ant-menu-dark.ant-menu-inline .ant-menu-item::after,
.ant-menu-dark.ant-menu-vertical .ant-menu-item::after,
.ant-menu-dark.ant-menu-vertical-left .ant-menu-item::after,
.ant-menu-dark.ant-menu-vertical-right .ant-menu-item::after {
  border-right: 0;
}
.ant-menu-dark.ant-menu-inline .ant-menu-item,
.ant-menu-dark.ant-menu-inline .ant-menu-submenu-title {
  width: 100%;
}
.ant-menu-dark .ant-menu-item:hover,
.ant-menu-dark .ant-menu-item-active,
.ant-menu-dark .ant-menu-submenu-active,
.ant-menu-dark .ant-menu-submenu-open,
.ant-menu-dark .ant-menu-submenu-selected,
.ant-menu-dark .ant-menu-submenu-title:hover {
  color: #fff;
  background-color: transparent;
}
.ant-menu-dark .ant-menu-item:hover > a,
.ant-menu-dark .ant-menu-item-active > a,
.ant-menu-dark .ant-menu-submenu-active > a,
.ant-menu-dark .ant-menu-submenu-open > a,
.ant-menu-dark .ant-menu-submenu-selected > a,
.ant-menu-dark .ant-menu-submenu-title:hover > a,
.ant-menu-dark .ant-menu-item:hover > span > a,
.ant-menu-dark .ant-menu-item-active > span > a,
.ant-menu-dark .ant-menu-submenu-active > span > a,
.ant-menu-dark .ant-menu-submenu-open > span > a,
.ant-menu-dark .ant-menu-submenu-selected > span > a,
.ant-menu-dark .ant-menu-submenu-title:hover > span > a {
  color: #fff;
}
.ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
  opacity: 1;
}
.ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before {
  background: #fff;
}
.ant-menu-dark .ant-menu-item:hover {
  background-color: transparent;
}
.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: var(--ant-primary-color);
}
.ant-menu-dark .ant-menu-item-selected {
  color: #fff;
  border-right: 0;
}
.ant-menu-dark .ant-menu-item-selected::after {
  border-right: 0;
}
.ant-menu-dark .ant-menu-item-selected > a,
.ant-menu-dark .ant-menu-item-selected > span > a,
.ant-menu-dark .ant-menu-item-selected > a:hover,
.ant-menu-dark .ant-menu-item-selected > span > a:hover {
  color: #fff;
}
.ant-menu-dark .ant-menu-item-selected .ant-menu-item-icon,
.ant-menu-dark .ant-menu-item-selected .anticon {
  color: #fff;
}
.ant-menu-dark .ant-menu-item-selected .ant-menu-item-icon + span,
.ant-menu-dark .ant-menu-item-selected .anticon + span {
  color: #fff;
}
.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background-color: var(--ant-primary-color);
}
.ant-menu-dark .ant-menu-item-disabled,
.ant-menu-dark .ant-menu-submenu-disabled,
.ant-menu-dark .ant-menu-item-disabled > a,
.ant-menu-dark .ant-menu-submenu-disabled > a,
.ant-menu-dark .ant-menu-item-disabled > span > a,
.ant-menu-dark .ant-menu-submenu-disabled > span > a {
  color: rgba(255, 255, 255, 0.35) !important;
  opacity: 0.8;
}
.ant-menu-dark .ant-menu-item-disabled > .ant-menu-submenu-title,
.ant-menu-dark .ant-menu-submenu-disabled > .ant-menu-submenu-title {
  color: rgba(255, 255, 255, 0.35) !important;
}
.ant-menu-dark .ant-menu-item-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-submenu-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-item-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after {
  background: rgba(255, 255, 255, 0.35) !important;
}
.ant-menu.ant-menu-rtl {
  direction: rtl;
  text-align: right;
}
.ant-menu-rtl .ant-menu-item-group-title {
  text-align: right;
}
.ant-menu-rtl.ant-menu-inline,
.ant-menu-rtl.ant-menu-vertical {
  border-right: none;
  border-left: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-menu-rtl.ant-menu-dark.ant-menu-inline,
.ant-menu-rtl.ant-menu-dark.ant-menu-vertical {
  border-left: none;
}
.ant-menu-rtl.ant-menu-vertical.ant-menu-sub > .ant-menu-item,
.ant-menu-rtl.ant-menu-vertical-left.ant-menu-sub > .ant-menu-item,
.ant-menu-rtl.ant-menu-vertical-right.ant-menu-sub > .ant-menu-item,
.ant-menu-rtl.ant-menu-vertical.ant-menu-sub > .ant-menu-submenu,
.ant-menu-rtl.ant-menu-vertical-left.ant-menu-sub > .ant-menu-submenu,
.ant-menu-rtl.ant-menu-vertical-right.ant-menu-sub > .ant-menu-submenu {
  transform-origin: top right;
}
.ant-menu-rtl .ant-menu-item .ant-menu-item-icon,
.ant-menu-rtl .ant-menu-submenu-title .ant-menu-item-icon,
.ant-menu-rtl .ant-menu-item .anticon,
.ant-menu-rtl .ant-menu-submenu-title .anticon {
  margin-right: auto;
  margin-left: 10px;
}
.ant-menu-rtl .ant-menu-item.ant-menu-item-only-child > .ant-menu-item-icon,
.ant-menu-rtl .ant-menu-submenu-title.ant-menu-item-only-child > .ant-menu-item-icon,
.ant-menu-rtl .ant-menu-item.ant-menu-item-only-child > .anticon,
.ant-menu-rtl .ant-menu-submenu-title.ant-menu-item-only-child > .anticon {
  margin-left: 0;
}
.ant-menu-submenu-rtl.ant-menu-submenu-popup {
  transform-origin: 100% 0;
}
.ant-menu-rtl .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow,
.ant-menu-rtl .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow,
.ant-menu-rtl .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow,
.ant-menu-rtl .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow {
  right: auto;
  left: 16px;
}
.ant-menu-rtl .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
.ant-menu-rtl .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
.ant-menu-rtl .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow::before {
  transform: rotate(-45deg) translateY(-2px);
}
.ant-menu-rtl .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow::after,
.ant-menu-rtl .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow::after,
.ant-menu-rtl .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow::after {
  transform: rotate(45deg) translateY(2px);
}
.ant-menu-rtl.ant-menu-vertical .ant-menu-item::after,
.ant-menu-rtl.ant-menu-vertical-left .ant-menu-item::after,
.ant-menu-rtl.ant-menu-vertical-right .ant-menu-item::after,
.ant-menu-rtl.ant-menu-inline .ant-menu-item::after {
  right: auto;
  left: 0;
}
.ant-menu-rtl.ant-menu-vertical .ant-menu-item,
.ant-menu-rtl.ant-menu-vertical-left .ant-menu-item,
.ant-menu-rtl.ant-menu-vertical-right .ant-menu-item,
.ant-menu-rtl.ant-menu-inline .ant-menu-item,
.ant-menu-rtl.ant-menu-vertical .ant-menu-submenu-title,
.ant-menu-rtl.ant-menu-vertical-left .ant-menu-submenu-title,
.ant-menu-rtl.ant-menu-vertical-right .ant-menu-submenu-title,
.ant-menu-rtl.ant-menu-inline .ant-menu-submenu-title {
  text-align: right;
}
.ant-menu-rtl.ant-menu-inline .ant-menu-submenu-title {
  padding-right: 0;
  padding-left: 34px;
}
.ant-menu-rtl.ant-menu-vertical .ant-menu-submenu-title {
  padding-right: 16px;
  padding-left: 34px;
}
.ant-menu-rtl.ant-menu-inline-collapsed.ant-menu-vertical .ant-menu-submenu-title {
  padding: 0 calc(50% - 16px / 2);
}
.ant-menu-rtl .ant-menu-item-group-list .ant-menu-item,
.ant-menu-rtl .ant-menu-item-group-list .ant-menu-submenu-title {
  padding: 0 28px 0 16px;
}
.ant-menu-sub.ant-menu-inline {
  border: 0;
}
.ant-menu-rtl.ant-menu-sub.ant-menu-inline .ant-menu-item-group-title {
  padding-right: 32px;
  padding-left: 0;
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
.ant-menu-submenu.ant-menu-submenu-placement-bottom {
  top: 6px;
  position: relative;
}
.ant-menu-submenu.ant-menu-submenu-placement-right {
  left: 4px;
  position: relative;
}
.ant-menu-submenu.ant-menu-submenu-placement-right.ant-menu-submenu-rtl {
  left: auto;
  right: 4px;
}
.ant-menu-submenu.ant-menu-submenu-placement-left {
  right: 4px;
  position: relative;
}
.ant-menu-submenu.ant-menu-submenu-placement-left.ant-menu-submenu-rtl {
  right: auto;
  left: 4px;
}
`
          

import { css } from 'lit-element';
export default css`.segmented-disabled-item,
.segmented-disabled-item:hover,
.segmented-disabled-item:focus {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.segmented-item-selected {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.07), 0 0 1px 0 rgba(0, 0, 0, 0.08);
}
.segmented-text-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: keep-all;
}
.ant-segmented {
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
  padding: 2px;
  color: rgba(0, 0, 0, 0.65);
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-segmented-group {
  position: relative;
  display: flex;
  align-items: stretch;
  justify-items: flex-start;
  width: 100%;
}
.ant-segmented.ant-segmented-block {
  display: flex;
}
.ant-segmented.ant-segmented-block .ant-segmented-item {
  flex: 1;
  min-width: 0;
}
.ant-segmented:not(.ant-segmented-disabled):hover,
.ant-segmented:not(.ant-segmented-disabled):focus {
  background-color: rgba(0, 0, 0, 0.06);
}
.ant-segmented-item {
  position: relative;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-segmented-item-selected {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.07), 0 0 1px 0 rgba(0, 0, 0, 0.08);
  color: #262626;
}
.ant-segmented-item:hover,
.ant-segmented-item:focus {
  color: #262626;
}
.ant-segmented-item-label {
  min-height: 28px;
  padding: 0 11px;
  line-height: 28px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: keep-all;
}
.ant-segmented-item-icon + * {
  margin-left: 12px / 2;
}
.ant-segmented-item-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
}
.ant-segmented.ant-segmented-lg .ant-segmented-item-label {
  min-height: 36px;
  padding: 0 11px;
  font-size: 16px;
  line-height: 36px;
}
.ant-segmented.ant-segmented-sm .ant-segmented-item-label {
  min-height: 20px;
  padding: 0 7px;
  line-height: 20px;
}
.ant-segmented-item-disabled,
.ant-segmented-item-disabled:hover,
.ant-segmented-item-disabled:focus {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-segmented-thumb {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.07), 0 0 1px 0 rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  padding: 4px 0;
}
.ant-segmented-thumb-motion-appear-active {
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  will-change: transform, width;
}
.ant-segmented.ant-segmented-rtl {
  direction: rtl;
}
.ant-segmented.ant-segmented-rtl .ant-segmented-item-icon {
  margin-right: 0;
  margin-left: 6px;
}
`
          
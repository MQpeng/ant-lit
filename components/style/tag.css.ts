
import { css } from 'lit-element';
export default css`.ant-tag {
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
  height: auto;
  margin-right: 8px;
  padding: 0 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  opacity: 1;
  transition: all 0.3s;
}
.ant-tag,
.ant-tag a,
.ant-tag a:hover {
  color: rgba(0, 0, 0, 0.85);
}
.ant-tag > a:first-child:last-child {
  display: inline-block;
  margin: 0 -8px;
  padding: 0 8px;
}
.ant-tag-close-icon {
  margin-left: 3px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 10px;
  cursor: pointer;
  transition: all 0.3s;
}
.ant-tag-close-icon:hover {
  color: rgba(0, 0, 0, 0.85);
}
.ant-tag-has-color {
  border-color: transparent;
}
.ant-tag-has-color,
.ant-tag-has-color a,
.ant-tag-has-color a:hover,
.ant-tag-has-color .anticon-close,
.ant-tag-has-color .anticon-close:hover {
  color: #fff;
}
.ant-tag-checkable {
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
}
.ant-tag-checkable:not(.ant-tag-checkable-checked):hover {
  color: var(--ant-primary-color);
}
.ant-tag-checkable:active,
.ant-tag-checkable-checked {
  color: #fff;
}
.ant-tag-checkable-checked {
  background-color: var(--ant-primary-6);
}
.ant-tag-checkable:active {
  background-color: var(--ant-primary-7);
}
.ant-tag-hidden {
  display: none;
}
.ant-tag-pink {
  color: #c41d7f;
  background: #fff0f6;
  border-color: #ffadd2;
}
.ant-tag-pink-inverse {
  color: #fff;
  background: #eb2f96;
  border-color: #eb2f96;
}
.ant-tag-magenta {
  color: #c41d7f;
  background: #fff0f6;
  border-color: #ffadd2;
}
.ant-tag-magenta-inverse {
  color: #fff;
  background: #eb2f96;
  border-color: #eb2f96;
}
.ant-tag-red {
  color: #cf1322;
  background: #fff1f0;
  border-color: #ffa39e;
}
.ant-tag-red-inverse {
  color: #fff;
  background: #f5222d;
  border-color: #f5222d;
}
.ant-tag-volcano {
  color: #d4380d;
  background: #fff2e8;
  border-color: #ffbb96;
}
.ant-tag-volcano-inverse {
  color: #fff;
  background: #fa541c;
  border-color: #fa541c;
}
.ant-tag-orange {
  color: #d46b08;
  background: #fff7e6;
  border-color: #ffd591;
}
.ant-tag-orange-inverse {
  color: #fff;
  background: #fa8c16;
  border-color: #fa8c16;
}
.ant-tag-yellow {
  color: #d4b106;
  background: #feffe6;
  border-color: #fffb8f;
}
.ant-tag-yellow-inverse {
  color: #fff;
  background: #fadb14;
  border-color: #fadb14;
}
.ant-tag-gold {
  color: #d48806;
  background: #fffbe6;
  border-color: #ffe58f;
}
.ant-tag-gold-inverse {
  color: #fff;
  background: #faad14;
  border-color: #faad14;
}
.ant-tag-cyan {
  color: #08979c;
  background: #e6fffb;
  border-color: #87e8de;
}
.ant-tag-cyan-inverse {
  color: #fff;
  background: #13c2c2;
  border-color: #13c2c2;
}
.ant-tag-lime {
  color: #7cb305;
  background: #fcffe6;
  border-color: #eaff8f;
}
.ant-tag-lime-inverse {
  color: #fff;
  background: #a0d911;
  border-color: #a0d911;
}
.ant-tag-green {
  color: #389e0d;
  background: #f6ffed;
  border-color: #b7eb8f;
}
.ant-tag-green-inverse {
  color: #fff;
  background: #52c41a;
  border-color: #52c41a;
}
.ant-tag-blue {
  color: #096dd9;
  background: #e6f7ff;
  border-color: #91d5ff;
}
.ant-tag-blue-inverse {
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
}
.ant-tag-geekblue {
  color: #1d39c4;
  background: #f0f5ff;
  border-color: #adc6ff;
}
.ant-tag-geekblue-inverse {
  color: #fff;
  background: #2f54eb;
  border-color: #2f54eb;
}
.ant-tag-purple {
  color: #531dab;
  background: #f9f0ff;
  border-color: #d3adf7;
}
.ant-tag-purple-inverse {
  color: #fff;
  background: #722ed1;
  border-color: #722ed1;
}
.ant-tag-success {
  color: var(--ant-success-color);
  background: var(--ant-success-color-deprecated-bg);
  border-color: var(--ant-success-color-deprecated-border);
}
.ant-tag-processing {
  color: var(--ant-info-color);
  background: var(--ant-info-color-deprecated-bg);
  border-color: var(--ant-info-color-deprecated-border);
}
.ant-tag-error {
  color: var(--ant-error-color);
  background: var(--ant-error-color-deprecated-bg);
  border-color: var(--ant-error-color-deprecated-border);
}
.ant-tag-warning {
  color: var(--ant-warning-color);
  background: var(--ant-warning-color-deprecated-bg);
  border-color: var(--ant-warning-color-deprecated-border);
}
.ant-tag > .anticon + span,
.ant-tag > span + .anticon {
  margin-left: 7px;
}
.ant-tag.ant-tag-rtl {
  margin-right: 0;
  margin-left: 8px;
  direction: rtl;
  text-align: right;
}
.ant-tag-rtl .ant-tag-close-icon {
  margin-right: 3px;
  margin-left: 0;
}
.ant-tag-rtl.ant-tag > .anticon + span,
.ant-tag-rtl.ant-tag > span + .anticon {
  margin-right: 7px;
  margin-left: 0;
}
`
          
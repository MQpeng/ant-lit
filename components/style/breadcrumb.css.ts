
import { css } from 'lit-element';
export default css`.ant-breadcrumb {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.ant-breadcrumb .anticon {
  font-size: 14px;
}
.ant-breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}
.ant-breadcrumb a {
  color: rgba(0, 0, 0, 0.45);
  transition: color 0.3s;
}
.ant-breadcrumb a:hover {
  color: rgba(0, 0, 0, 0.85);
}
.ant-breadcrumb li:last-child {
  color: rgba(0, 0, 0, 0.85);
}
.ant-breadcrumb li:last-child a {
  color: rgba(0, 0, 0, 0.85);
}
li:last-child .ant-breadcrumb-separator {
  display: none;
}
.ant-breadcrumb-separator {
  margin: 0 8px;
  color: rgba(0, 0, 0, 0.45);
}
.ant-breadcrumb-link > .anticon + span,
.ant-breadcrumb-link > .anticon + a {
  margin-left: 4px;
}
.ant-breadcrumb-overlay-link > .anticon {
  margin-left: 4px;
}
.ant-breadcrumb-rtl {
  direction: rtl;
}
.ant-breadcrumb-rtl::before {
  display: table;
  content: '';
}
.ant-breadcrumb-rtl::after {
  display: table;
  clear: both;
  content: '';
}
.ant-breadcrumb-rtl > span {
  float: right;
}
.ant-breadcrumb-rtl .ant-breadcrumb-link > .anticon + span,
.ant-breadcrumb-rtl .ant-breadcrumb-link > .anticon + a {
  margin-right: 4px;
  margin-left: 0;
}
.ant-breadcrumb-rtl .ant-breadcrumb-overlay-link > .anticon {
  margin-right: 4px;
  margin-left: 0;
}
.ant-breadcrumb-link .anticon + span {
  margin-left: 4px;
}
.ant-breadcrumb > nz-breadcrumb-item:last-child {
  color: rgba(0, 0, 0, 0.85);
}
.ant-breadcrumb > nz-breadcrumb-item:last-child a {
  color: rgba(0, 0, 0, 0.85);
}
.ant-breadcrumb-rtl > nz-breadcrumb-item {
  float: right;
}
nz-breadcrumb {
  display: block;
}
nz-breadcrumb-item:last-child .ant-breadcrumb-separator {
  display: none;
}
`
          
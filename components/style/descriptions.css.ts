
import { css } from 'lit-element';
export default css`.ant-descriptions-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.ant-descriptions-title {
  flex: auto;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5715;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ant-descriptions-extra {
  margin-left: auto;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
}
.ant-descriptions-view {
  width: 100%;
  border-radius: 2px;
}
.ant-descriptions-view table {
  width: 100%;
  table-layout: fixed;
}
.ant-descriptions-row > th,
.ant-descriptions-row > td {
  padding-bottom: 16px;
}
.ant-descriptions-row:last-child {
  border-bottom: none;
}
.ant-descriptions-item-label {
  color: rgba(0, 0, 0, 0.85);
  font-weight: normal;
  font-size: 14px;
  line-height: 1.5715;
  text-align: start;
}
.ant-descriptions-item-label::after {
  content: ':';
  position: relative;
  top: -0.5px;
  margin: 0 8px 0 2px;
}
.ant-descriptions-item-label.ant-descriptions-item-no-colon::after {
  content: ' ';
}
.ant-descriptions-item-no-label::after {
  margin: 0;
  content: '';
}
.ant-descriptions-item-content {
  display: table-cell;
  flex: 1;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  word-break: break-word;
  overflow-wrap: break-word;
}
.ant-descriptions-item {
  padding-bottom: 0;
  vertical-align: top;
}
.ant-descriptions-item-container {
  display: flex;
}
.ant-descriptions-item-container .ant-descriptions-item-label,
.ant-descriptions-item-container .ant-descriptions-item-content {
  display: inline-flex;
  align-items: baseline;
}
.ant-descriptions-middle .ant-descriptions-row > th,
.ant-descriptions-middle .ant-descriptions-row > td {
  padding-bottom: 12px;
}
.ant-descriptions-small .ant-descriptions-row > th,
.ant-descriptions-small .ant-descriptions-row > td {
  padding-bottom: 8px;
}
.ant-descriptions-bordered .ant-descriptions-view {
  border: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-descriptions-bordered .ant-descriptions-view > table {
  table-layout: auto;
  border-collapse: collapse;
}
.ant-descriptions-bordered .ant-descriptions-item-label,
.ant-descriptions-bordered .ant-descriptions-item-content {
  padding: 16px 24px;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-descriptions-bordered .ant-descriptions-item-label:last-child,
.ant-descriptions-bordered .ant-descriptions-item-content:last-child {
  border-right: none;
}
.ant-descriptions-bordered .ant-descriptions-item-label {
  background-color: #fafafa;
}
.ant-descriptions-bordered .ant-descriptions-item-label::after {
  display: none;
}
.ant-descriptions-bordered .ant-descriptions-row {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-descriptions-bordered .ant-descriptions-row:last-child {
  border-bottom: none;
}
.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-label,
.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-content {
  padding: 12px 24px;
}
.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-label,
.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-content {
  padding: 8px 16px;
}
.ant-descriptions-rtl {
  direction: rtl;
}
.ant-descriptions-rtl .ant-descriptions-item-label::after {
  margin: 0 2px 0 8px;
}
.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-label,
.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-content {
  border-right: none;
  border-left: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-label:last-child,
.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-content:last-child {
  border-left: none;
}
nz-descriptions {
  display: block;
}
`
          
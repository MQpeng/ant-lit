
import { css } from 'lit-element';
export default css`.ant-table.ant-table-middle {
  font-size: 14px;
}
.ant-table.ant-table-middle .ant-table-title,
.ant-table.ant-table-middle .ant-table-footer,
.ant-table.ant-table-middle .ant-table-thead > tr > th,
.ant-table.ant-table-middle .ant-table-tbody > tr > td,
.ant-table.ant-table-middle tfoot > tr > th,
.ant-table.ant-table-middle tfoot > tr > td {
  padding: 12px 8px;
}
.ant-table.ant-table-middle .ant-table-filter-trigger {
  margin-right: -4px;
}
.ant-table.ant-table-middle .ant-table-expanded-row-fixed {
  margin: -12px -8px;
}
.ant-table.ant-table-middle .ant-table-tbody .ant-table-wrapper:only-child .ant-table {
  margin: -12px -8px -12px 25px;
}
.ant-table.ant-table-middle .ant-table-selection-column {
  padding-inline-start: 2px;
}
.ant-table.ant-table-small {
  font-size: 14px;
}
.ant-table.ant-table-small .ant-table-title,
.ant-table.ant-table-small .ant-table-footer,
.ant-table.ant-table-small .ant-table-thead > tr > th,
.ant-table.ant-table-small .ant-table-tbody > tr > td,
.ant-table.ant-table-small tfoot > tr > th,
.ant-table.ant-table-small tfoot > tr > td {
  padding: 8px 8px;
}
.ant-table.ant-table-small .ant-table-filter-trigger {
  margin-right: -4px;
}
.ant-table.ant-table-small .ant-table-expanded-row-fixed {
  margin: -8px -8px;
}
.ant-table.ant-table-small .ant-table-tbody .ant-table-wrapper:only-child .ant-table {
  margin: -8px -8px -8px 25px;
}
.ant-table.ant-table-small .ant-table-selection-column {
  padding-inline-start: 2px;
}
.ant-table.ant-table-bordered > .ant-table-title {
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-bottom: 0;
}
.ant-table.ant-table-bordered > .ant-table-container {
  border-left: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > thead > tr > th,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > thead > tr > th,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > thead > tr > th,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > thead > tr > th,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tbody > tr > td,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tbody > tr > td,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tbody > tr > td,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > tbody > tr > td,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tfoot > tr > th,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tfoot > tr > th,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tfoot > tr > th,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > tfoot > tr > th,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tfoot > tr > td,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tfoot > tr > td,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tfoot > tr > td,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > tfoot > tr > td {
  border-right: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > thead > tr:not(:last-child) > th,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > thead > tr:not(:last-child) > th,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > thead > tr:not(:last-child) > th,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > thead > tr:not(:last-child) > th {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > thead > tr > th::before,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > thead > tr > th::before,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > thead > tr > th::before,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > thead > tr > th::before {
  background-color: transparent !important;
}
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > thead > tr > .ant-table-cell-fix-right-first::after,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > thead > tr > .ant-table-cell-fix-right-first::after,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > thead > tr > .ant-table-cell-fix-right-first::after,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > thead > tr > .ant-table-cell-fix-right-first::after,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tbody > tr > .ant-table-cell-fix-right-first::after,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tbody > tr > .ant-table-cell-fix-right-first::after,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tbody > tr > .ant-table-cell-fix-right-first::after,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > tbody > tr > .ant-table-cell-fix-right-first::after,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tfoot > tr > .ant-table-cell-fix-right-first::after,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tfoot > tr > .ant-table-cell-fix-right-first::after,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tfoot > tr > .ant-table-cell-fix-right-first::after,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > tfoot > tr > .ant-table-cell-fix-right-first::after {
  border-right: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tbody > tr > td > .ant-table-expanded-row-fixed,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tbody > tr > td > .ant-table-expanded-row-fixed,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tbody > tr > td > .ant-table-expanded-row-fixed,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > tbody > tr > td > .ant-table-expanded-row-fixed {
  margin: -16px -17px;
}
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tbody > tr > td > .ant-table-expanded-row-fixed::after,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tbody > tr > td > .ant-table-expanded-row-fixed::after,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tbody > tr > td > .ant-table-expanded-row-fixed::after,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > tbody > tr > td > .ant-table-expanded-row-fixed::after {
  position: absolute;
  top: 0;
  right: 1px;
  bottom: 0;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
  content: '';
}
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table,
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-table.ant-table-bordered.ant-table-scroll-horizontal > .ant-table-container > .ant-table-body > table > tbody > tr.ant-table-expanded-row > td,
.ant-table.ant-table-bordered.ant-table-scroll-horizontal > .ant-table-container > .ant-table-body > table > tbody > tr.ant-table-placeholder > td {
  border-right: 0;
}
.ant-table.ant-table-bordered.ant-table-middle > .ant-table-container > .ant-table-content > table > tbody > tr > td > .ant-table-expanded-row-fixed,
.ant-table.ant-table-bordered.ant-table-middle > .ant-table-container > .ant-table-body > table > tbody > tr > td > .ant-table-expanded-row-fixed {
  margin: -12px -9px;
}
.ant-table.ant-table-bordered.ant-table-small > .ant-table-container > .ant-table-content > table > tbody > tr > td > .ant-table-expanded-row-fixed,
.ant-table.ant-table-bordered.ant-table-small > .ant-table-container > .ant-table-body > table > tbody > tr > td > .ant-table-expanded-row-fixed {
  margin: -8px -9px;
}
.ant-table.ant-table-bordered > .ant-table-footer {
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-top: 0;
}
.ant-table-cell .ant-table-container:first-child {
  border-top: 0;
}
.ant-table-cell-scrollbar:not([rowspan]) {
  box-shadow: 0 1px 0 1px #fafafa;
}
.ant-table-wrapper {
  clear: both;
  max-width: 100%;
}
.ant-table-wrapper::before {
  display: table;
  content: '';
}
.ant-table-wrapper::after {
  display: table;
  clear: both;
  content: '';
}
.ant-table {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  font-size: 14px;
  background: #fff;
  border-radius: 2px;
}
.ant-table table {
  width: 100%;
  text-align: left;
  border-radius: 2px 2px 0 0;
  border-collapse: separate;
  border-spacing: 0;
}
.ant-table-thead > tr > th,
.ant-table-tbody > tr > td,
.ant-table tfoot > tr > th,
.ant-table tfoot > tr > td {
  position: relative;
  padding: 16px 16px;
  overflow-wrap: break-word;
}
.ant-table-cell-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: keep-all;
}
.ant-table-cell-ellipsis.ant-table-cell-fix-left-last,
.ant-table-cell-ellipsis.ant-table-cell-fix-right-first {
  overflow: visible;
}
.ant-table-cell-ellipsis.ant-table-cell-fix-left-last .ant-table-cell-content,
.ant-table-cell-ellipsis.ant-table-cell-fix-right-first .ant-table-cell-content {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ant-table-cell-ellipsis .ant-table-column-title {
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
}
.ant-table-title {
  padding: 16px 16px;
}
.ant-table-footer {
  padding: 16px 16px;
  color: rgba(0, 0, 0, 0.85);
  background: #fafafa;
}
.ant-table-thead > tr > th {
  position: relative;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  text-align: left;
  background: #fafafa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: background 0.3s ease;
}
.ant-table-thead > tr > th[colspan]:not([colspan='1']) {
  text-align: center;
}
.ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
  position: absolute;
  top: 50%;
  right: 0;
  width: 1px;
  height: 1.6em;
  background-color: rgba(0, 0, 0, 0.06);
  transform: translateY(-50%);
  transition: background-color 0.3s;
  content: '';
}
.ant-table-thead > tr:not(:last-child) > th[colspan] {
  border-bottom: 0;
}
.ant-table-tbody > tr > td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: background 0.3s;
}
.ant-table-tbody > tr > td > .ant-table-wrapper:only-child .ant-table,
.ant-table-tbody > tr > td > .ant-table-expanded-row-fixed > .ant-table-wrapper:only-child .ant-table {
  margin: -16px -16px -16px 33px;
}
.ant-table-tbody > tr > td > .ant-table-wrapper:only-child .ant-table-tbody > tr:last-child > td,
.ant-table-tbody > tr > td > .ant-table-expanded-row-fixed > .ant-table-wrapper:only-child .ant-table-tbody > tr:last-child > td {
  border-bottom: 0;
}
.ant-table-tbody > tr > td > .ant-table-wrapper:only-child .ant-table-tbody > tr:last-child > td:first-child,
.ant-table-tbody > tr > td > .ant-table-expanded-row-fixed > .ant-table-wrapper:only-child .ant-table-tbody > tr:last-child > td:first-child,
.ant-table-tbody > tr > td > .ant-table-wrapper:only-child .ant-table-tbody > tr:last-child > td:last-child,
.ant-table-tbody > tr > td > .ant-table-expanded-row-fixed > .ant-table-wrapper:only-child .ant-table-tbody > tr:last-child > td:last-child {
  border-radius: 0;
}
.ant-table-tbody > tr.ant-table-row:hover > td,
.ant-table-tbody > tr > td.ant-table-cell-row-hover {
  background: #fafafa;
}
.ant-table-tbody > tr.ant-table-row-selected > td {
  background: var(--ant-primary-1);
  border-color: rgba(0, 0, 0, 0.03);
}
.ant-table-tbody > tr.ant-table-row-selected:hover > td {
  background: var(--ant-primary-color-active-deprecated-d-02);
}
.ant-table-summary {
  position: relative;
  z-index: 2;
  background: #fff;
}
div.ant-table-summary {
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.06);
}
.ant-table-summary > tr > th,
.ant-table-summary > tr > td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-table-pagination.ant-pagination {
  margin: 16px 0;
}
.ant-table-pagination {
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
}
.ant-table-pagination > * {
  flex: none;
}
.ant-table-pagination-left {
  justify-content: flex-start;
}
.ant-table-pagination-center {
  justify-content: center;
}
.ant-table-pagination-right {
  justify-content: flex-end;
}
.ant-table-thead th.ant-table-column-has-sorters {
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
}
.ant-table-thead th.ant-table-column-has-sorters:hover {
  background: rgba(0, 0, 0, 0.04);
}
.ant-table-thead th.ant-table-column-has-sorters:hover::before {
  background-color: transparent !important;
}
.ant-table-thead th.ant-table-column-has-sorters:focus-visible {
  color: var(--ant-primary-color);
}
.ant-table-thead th.ant-table-column-has-sorters.ant-table-cell-fix-left:hover,
.ant-table-thead th.ant-table-column-has-sorters.ant-table-cell-fix-right:hover {
  background: #f5f5f5;
}
.ant-table-thead th.ant-table-column-sort {
  background: #f5f5f5;
}
.ant-table-thead th.ant-table-column-sort::before {
  background-color: transparent !important;
}
td.ant-table-column-sort {
  background: #fafafa;
}
.ant-table-column-title {
  position: relative;
  z-index: 1;
  flex: 1;
}
.ant-table-column-sorters {
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: space-between;
}
.ant-table-column-sorters::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}
.ant-table-column-sorter {
  margin-left: 4px;
  color: #bfbfbf;
  font-size: 0;
  transition: color 0.3s;
}
.ant-table-column-sorter-inner {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
.ant-table-column-sorter-up,
.ant-table-column-sorter-down {
  font-size: 11px;
}
.ant-table-column-sorter-up.active,
.ant-table-column-sorter-down.active {
  color: var(--ant-primary-color);
}
.ant-table-column-sorter-up + .ant-table-column-sorter-down {
  margin-top: -0.3em;
}
.ant-table-column-sorters:hover .ant-table-column-sorter {
  color: #a6a6a6;
}
.ant-table-filter-column {
  display: flex;
  justify-content: space-between;
}
.ant-table-filter-trigger {
  position: relative;
  display: flex;
  align-items: center;
  margin: -4px -8px -4px 4px;
  padding: 0 4px;
  color: #bfbfbf;
  font-size: 12px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
}
.ant-table-filter-trigger:hover {
  color: rgba(0, 0, 0, 0.45);
  background: rgba(0, 0, 0, 0.04);
}
.ant-table-filter-trigger.active {
  color: var(--ant-primary-color);
}
.ant-table-filter-dropdown {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  min-width: 120px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
.ant-table-filter-dropdown .ant-dropdown-menu {
  max-height: 264px;
  overflow-x: hidden;
  border: 0;
  box-shadow: none;
}
.ant-table-filter-dropdown .ant-dropdown-menu:empty::after {
  display: block;
  padding: 8px 0;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  text-align: center;
  content: 'Not Found';
}
.ant-table-filter-dropdown-tree {
  padding: 8px 8px 0;
}
.ant-table-filter-dropdown-tree .ant-tree-treenode .ant-tree-node-content-wrapper:hover {
  background-color: #f5f5f5;
}
.ant-table-filter-dropdown-tree .ant-tree-treenode-checkbox-checked .ant-tree-node-content-wrapper,
.ant-table-filter-dropdown-tree .ant-tree-treenode-checkbox-checked .ant-tree-node-content-wrapper:hover {
  background-color: var(--ant-primary-2);
}
.ant-table-filter-dropdown-search {
  padding: 8px;
  border-bottom: 1px rgba(0, 0, 0, 0.06) solid;
}
.ant-table-filter-dropdown-search-input input {
  min-width: 140px;
}
.ant-table-filter-dropdown-search-input .anticon {
  color: rgba(0, 0, 0, 0.25);
}
.ant-table-filter-dropdown-checkall {
  width: 100%;
  margin-bottom: 4px;
  margin-left: 4px;
}
.ant-table-filter-dropdown-submenu > ul {
  max-height: calc(100vh - 130px);
  overflow-x: hidden;
  overflow-y: auto;
}
.ant-table-filter-dropdown .ant-checkbox-wrapper + span,
.ant-table-filter-dropdown-submenu .ant-checkbox-wrapper + span {
  padding-left: 8px;
}
.ant-table-filter-dropdown-btns {
  display: flex;
  justify-content: space-between;
  padding: 7px 8px;
  overflow: hidden;
  background-color: inherit;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-table-selection-col {
  width: 32px;
}
.ant-table-bordered .ant-table-selection-col {
  width: 50px;
}
table tr th.ant-table-selection-column,
table tr td.ant-table-selection-column {
  padding-right: 8px;
  padding-left: 8px;
  text-align: center;
}
table tr th.ant-table-selection-column .ant-radio-wrapper,
table tr td.ant-table-selection-column .ant-radio-wrapper {
  margin-right: 0;
}
table tr th.ant-table-selection-column.ant-table-cell-fix-left {
  z-index: 3;
}
table tr th.ant-table-selection-column::after {
  background-color: transparent !important;
}
.ant-table-selection {
  position: relative;
  display: inline-flex;
  flex-direction: column;
}
.ant-table-selection-extra {
  position: absolute;
  top: 0;
  z-index: 1;
  cursor: pointer;
  transition: all 0.3s;
  margin-inline-start: 100%;
  padding-inline-start: 4px;
}
.ant-table-selection-extra .anticon {
  color: #bfbfbf;
  font-size: 10px;
}
.ant-table-selection-extra .anticon:hover {
  color: #a6a6a6;
}
.ant-table-expand-icon-col {
  width: 48px;
}
.ant-table-row-expand-icon-cell {
  text-align: center;
}
.ant-table-row-indent {
  float: left;
  height: 1px;
}
.ant-table-row-expand-icon {
  color: var(--ant-primary-color);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
  position: relative;
  display: inline-flex;
  float: left;
  box-sizing: border-box;
  width: 17px;
  height: 17px;
  padding: 0;
  color: inherit;
  line-height: 17px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  outline: none;
  transform: scale(0.94117647);
  transition: all 0.3s;
  user-select: none;
}
.ant-table-row-expand-icon:focus,
.ant-table-row-expand-icon:hover {
  color: var(--ant-primary-color-hover);
}
.ant-table-row-expand-icon:active {
  color: var(--ant-primary-color-active);
}
.ant-table-row-expand-icon:focus,
.ant-table-row-expand-icon:hover,
.ant-table-row-expand-icon:active {
  border-color: currentcolor;
}
.ant-table-row-expand-icon::before,
.ant-table-row-expand-icon::after {
  position: absolute;
  background: currentcolor;
  transition: transform 0.3s ease-out;
  content: '';
}
.ant-table-row-expand-icon::before {
  top: 7px;
  right: 3px;
  left: 3px;
  height: 1px;
}
.ant-table-row-expand-icon::after {
  top: 3px;
  bottom: 3px;
  left: 7px;
  width: 1px;
  transform: rotate(90deg);
}
.ant-table-row-expand-icon-collapsed::before {
  transform: rotate(-180deg);
}
.ant-table-row-expand-icon-collapsed::after {
  transform: rotate(0deg);
}
.ant-table-row-expand-icon-spaced {
  background: transparent;
  border: 0;
  visibility: hidden;
}
.ant-table-row-expand-icon-spaced::before,
.ant-table-row-expand-icon-spaced::after {
  display: none;
  content: none;
}
.ant-table-row-indent + .ant-table-row-expand-icon {
  margin-top: 2.5005px;
  margin-right: 8px;
}
tr.ant-table-expanded-row > td,
tr.ant-table-expanded-row:hover > td {
  background: #fbfbfb;
}
tr.ant-table-expanded-row .ant-descriptions-view {
  display: flex;
}
tr.ant-table-expanded-row .ant-descriptions-view table {
  flex: auto;
  width: auto;
}
.ant-table .ant-table-expanded-row-fixed {
  position: relative;
  margin: -16px -16px;
  padding: 16px 16px;
}
.ant-table-tbody > tr.ant-table-placeholder {
  text-align: center;
}
.ant-table-empty .ant-table-tbody > tr.ant-table-placeholder {
  color: rgba(0, 0, 0, 0.25);
}
.ant-table-tbody > tr.ant-table-placeholder:hover > td {
  background: #fff;
}
.ant-table-cell-fix-left,
.ant-table-cell-fix-right {
  position: sticky !important;
  z-index: 2;
  background: #fff;
}
.ant-table-cell-fix-left-first::after,
.ant-table-cell-fix-left-last::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: -1px;
  width: 30px;
  transform: translateX(100%);
  transition: box-shadow 0.3s;
  content: '';
  pointer-events: none;
}
.ant-table-cell-fix-right-first::after,
.ant-table-cell-fix-right-last::after {
  position: absolute;
  top: 0;
  bottom: -1px;
  left: 0;
  width: 30px;
  transform: translateX(-100%);
  transition: box-shadow 0.3s;
  content: '';
  pointer-events: none;
}
.ant-table .ant-table-container::before,
.ant-table .ant-table-container::after {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  width: 30px;
  transition: box-shadow 0.3s;
  content: '';
  pointer-events: none;
}
.ant-table .ant-table-container::before {
  left: 0;
}
.ant-table .ant-table-container::after {
  right: 0;
}
.ant-table-ping-left:not(.ant-table-has-fix-left) .ant-table-container {
  position: relative;
}
.ant-table-ping-left:not(.ant-table-has-fix-left) .ant-table-container::before {
  box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.15);
}
.ant-table-ping-left .ant-table-cell-fix-left-first::after,
.ant-table-ping-left .ant-table-cell-fix-left-last::after {
  box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.15);
}
.ant-table-ping-left .ant-table-cell-fix-left-last::before {
  background-color: transparent !important;
}
.ant-table-ping-right:not(.ant-table-has-fix-right) .ant-table-container {
  position: relative;
}
.ant-table-ping-right:not(.ant-table-has-fix-right) .ant-table-container::after {
  box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, 0.15);
}
.ant-table-ping-right .ant-table-cell-fix-right-first::after,
.ant-table-ping-right .ant-table-cell-fix-right-last::after {
  box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, 0.15);
}
.ant-table-sticky-holder {
  position: sticky;
  z-index: calc(2 + 1);
  background: #fff;
}
.ant-table-sticky-scroll {
  position: sticky;
  bottom: 0;
  z-index: calc(2 + 1);
  display: flex;
  align-items: center;
  background: rgba(204, 204, 204, 0.06);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  opacity: 0.6;
}
.ant-table-sticky-scroll:hover {
  transform-origin: center bottom;
}
.ant-table-sticky-scroll-bar {
  height: 8px;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 4px;
}
.ant-table-sticky-scroll-bar:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.ant-table-sticky-scroll-bar-active {
  background-color: rgba(0, 0, 0, 0.8);
}
@media all and (-ms-high-contrast: none) {
  .ant-table-ping-left .ant-table-cell-fix-left-last::after {
    box-shadow: none !important;
  }
  .ant-table-ping-right .ant-table-cell-fix-right-first::after {
    box-shadow: none !important;
  }
}
.ant-table {
  /* title + table */
  /* table */
  /* table + footer */
}
.ant-table-title {
  border-radius: 2px 2px 0 0;
}
.ant-table-title + .ant-table-container {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.ant-table-title + .ant-table-container table > thead > tr:first-child th:first-child {
  border-radius: 0;
}
.ant-table-title + .ant-table-container table > thead > tr:first-child th:last-child {
  border-radius: 0;
}
.ant-table-container {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.ant-table-container table > thead > tr:first-child th:first-child {
  border-top-left-radius: 2px;
}
.ant-table-container table > thead > tr:first-child th:last-child {
  border-top-right-radius: 2px;
}
.ant-table-footer {
  border-radius: 0 0 2px 2px;
}
.ant-table-wrapper-rtl {
  direction: rtl;
}
.ant-table-rtl {
  direction: rtl;
}
.ant-table-wrapper-rtl .ant-table table {
  text-align: right;
}
.ant-table-wrapper-rtl .ant-table-thead > tr > th[colspan]:not([colspan='1']) {
  text-align: center;
}
.ant-table-wrapper-rtl .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
  right: auto;
  left: 0;
}
.ant-table-wrapper-rtl .ant-table-thead > tr > th {
  text-align: right;
}
.ant-table-tbody > tr .ant-table-wrapper:only-child .ant-table.ant-table-rtl {
  margin: -16px 33px -16px -16px;
}
.ant-table-wrapper.ant-table-wrapper-rtl .ant-table-pagination-left {
  justify-content: flex-end;
}
.ant-table-wrapper.ant-table-wrapper-rtl .ant-table-pagination-right {
  justify-content: flex-start;
}
.ant-table-wrapper-rtl .ant-table-column-sorter {
  margin-right: 4px;
  margin-left: 0;
}
.ant-table-wrapper-rtl .ant-table-filter-column-title {
  padding: 16px 16px 16px 2.3em;
}
.ant-table-rtl .ant-table-thead tr th.ant-table-column-has-sorters .ant-table-filter-column-title {
  padding: 0 0 0 2.3em;
}
.ant-table-wrapper-rtl .ant-table-filter-trigger {
  margin: -4px 4px -4px -8px;
}
.ant-dropdown-rtl .ant-table-filter-dropdown .ant-checkbox-wrapper + span,
.ant-dropdown-rtl .ant-table-filter-dropdown-submenu .ant-checkbox-wrapper + span,
.ant-dropdown-menu-submenu-rtl.ant-table-filter-dropdown .ant-checkbox-wrapper + span,
.ant-dropdown-menu-submenu-rtl.ant-table-filter-dropdown-submenu .ant-checkbox-wrapper + span {
  padding-right: 8px;
  padding-left: 0;
}
.ant-table-wrapper-rtl .ant-table-selection {
  text-align: center;
}
.ant-table-wrapper-rtl .ant-table-row-indent {
  float: right;
}
.ant-table-wrapper-rtl .ant-table-row-expand-icon {
  float: right;
}
.ant-table-wrapper-rtl .ant-table-row-indent + .ant-table-row-expand-icon {
  margin-right: 0;
  margin-left: 8px;
}
.ant-table-wrapper-rtl .ant-table-row-expand-icon::after {
  transform: rotate(-90deg);
}
.ant-table-wrapper-rtl .ant-table-row-expand-icon-collapsed::before {
  transform: rotate(180deg);
}
.ant-table-wrapper-rtl .ant-table-row-expand-icon-collapsed::after {
  transform: rotate(0deg);
}
nz-table,
nz-table-title-footer,
nz-table-inner-scroll,
nz-table-inner-default,
nz-table-selection {
  display: block;
}
nz-filter-trigger {
  display: inline-flex;
}
.nz-table-out-bordered > .ant-table-title {
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-bottom: 0;
}
.nz-table-out-bordered > .ant-table-container {
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-bottom: 0;
}
.nz-table-out-bordered > .ant-table-footer {
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-top: 0;
}
cdk-virtual-scroll-viewport.ant-table-body {
  overflow-y: scroll;
}
.nz-table-hide-scrollbar {
  scrollbar-color: #fafafa #fafafa;
}
.nz-table-hide-scrollbar::-webkit-scrollbar {
  background-color: #fafafa;
}
.ant-table.ant-table-small .nz-table-hide-scrollbar {
  scrollbar-color: #fafafa #fafafa;
}
.ant-table.ant-table-small .nz-table-hide-scrollbar::-webkit-scrollbar {
  background-color: transparent;
}
.ant-table-wrapper-rtl .ant-table thead > tr > th.ant-table-selection-column {
  text-align: center;
}
.ant-table.ant-table-bordered > .ant-table-container > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > table > thead > tr > th,
.ant-table.ant-table-bordered > .ant-table-container > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > table > tbody > tr > td,
.ant-table.ant-table-bordered > .ant-table-container > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > table > tfoot > tr > th,
.ant-table.ant-table-bordered > .ant-table-container > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > table > tfoot > tr > td {
  border-right: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-table.ant-table-bordered > .ant-table-container > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > table > thead > tr:not(:last-child) > th {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-table.ant-table-bordered > .ant-table-container > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > table > thead > tr > .ant-table-cell-fix-right-first::after,
.ant-table.ant-table-bordered > .ant-table-container > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > table > tbody > tr > .ant-table-cell-fix-right-first::after,
.ant-table.ant-table-bordered > .ant-table-container > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > table > tfoot > tr > .ant-table-cell-fix-right-first::after {
  border-right: 1px solid rgba(0, 0, 0, 0.06);
}
.ant-table.ant-table-bordered > .ant-table-container > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > table > tbody > tr > td > .ant-table-expanded-row-fixed {
  margin: -16px -17px;
}
.ant-table.ant-table-bordered > .ant-table-container > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > table > tbody > tr > td > .ant-table-expanded-row-fixed::after {
  position: absolute;
  top: 0;
  right: 1px;
  bottom: 0;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
  content: '';
}
.ant-table.ant-table-bordered.ant-table-scroll-horizontal > .ant-table-container > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > table > tbody > tr.ant-table-expanded-row > td,
.ant-table.ant-table-bordered.ant-table-scroll-horizontal > .ant-table-container > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > table > tbody > tr.ant-table-placeholder > td {
  border-right: 0;
}
.ant-table.ant-table-bordered.ant-table-middle > .ant-table-container > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > table > tbody > tr > td > .ant-table-expanded-row-fixed {
  margin: -12px -9px;
}
.ant-table.ant-table-bordered.ant-table-small > .ant-table-container > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > table > tbody > tr > td > .ant-table-expanded-row-fixed {
  margin: -8px -9px;
}
.ant-empty {
  margin: 0 8px;
  font-size: 14px;
  line-height: 1.5715;
  text-align: center;
}
.ant-empty-image {
  height: 100px;
  margin-bottom: 8px;
}
.ant-empty-image img {
  height: 100%;
}
.ant-empty-image svg {
  height: 100%;
  margin: auto;
}
.ant-empty-footer {
  margin-top: 16px;
}
.ant-empty-normal {
  margin: 32px 0;
  color: rgba(0, 0, 0, 0.25);
}
.ant-empty-normal .ant-empty-image {
  height: 40px;
}
.ant-empty-small {
  margin: 8px 0;
  color: rgba(0, 0, 0, 0.25);
}
.ant-empty-small .ant-empty-image {
  height: 35px;
}
.ant-empty-img-default-ellipse {
  fill: #f5f5f5;
  fill-opacity: 0.8;
}
.ant-empty-img-default-path-1 {
  fill: #aeb8c2;
}
.ant-empty-img-default-path-2 {
  fill: url('#linearGradient-1');
}
.ant-empty-img-default-path-3 {
  fill: #f5f5f7;
}
.ant-empty-img-default-path-4 {
  fill: #dce0e6;
}
.ant-empty-img-default-path-5 {
  fill: #dce0e6;
}
.ant-empty-img-default-g {
  fill: #fff;
}
.ant-empty-img-simple-ellipse {
  fill: #f5f5f5;
}
.ant-empty-img-simple-g {
  stroke: #d9d9d9;
}
.ant-empty-img-simple-path {
  fill: #fafafa;
}
.ant-empty-rtl {
  direction: rtl;
}
nz-empty {
  display: block;
}
.ant-radio-group {
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
  font-size: 0;
}
.ant-radio-group .ant-badge-count {
  z-index: 1;
}
.ant-radio-group > .ant-badge:not(:first-child) > .ant-radio-button-wrapper {
  border-left: none;
}
.ant-radio-wrapper {
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
  display: inline-flex;
  align-items: baseline;
  margin-right: 8px;
  cursor: pointer;
}
.ant-radio-wrapper-disabled {
  cursor: not-allowed;
}
.ant-radio-wrapper::after {
  display: inline-block;
  width: 0;
  overflow: hidden;
  content: '\a0';
}
.ant-radio-wrapper.ant-radio-wrapper-in-form-item input[type='radio'] {
  width: 14px;
  height: 14px;
}
.ant-radio {
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
  top: 0.2em;
  display: inline-block;
  outline: none;
  cursor: pointer;
}
.ant-radio-wrapper:hover .ant-radio,
.ant-radio:hover .ant-radio-inner,
.ant-radio-input:focus + .ant-radio-inner {
  border-color: var(--ant-primary-color);
}
.ant-radio-input:focus + .ant-radio-inner {
  box-shadow: 0 0 0 3px var(--ant-primary-1);
}
.ant-radio-checked::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid var(--ant-primary-color);
  border-radius: 50%;
  visibility: hidden;
  animation: antRadioEffect 0.36s ease-in-out;
  animation-fill-mode: both;
  content: '';
}
.ant-radio:hover::after,
.ant-radio-wrapper:hover .ant-radio::after {
  visibility: visible;
}
.ant-radio-inner {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-color: #d9d9d9;
  border-style: solid;
  border-width: 1px;
  border-radius: 50%;
  transition: all 0.3s;
}
.ant-radio-inner::after {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 16px;
  height: 16px;
  margin-top: -8px;
  margin-left: -8px;
  background-color: var(--ant-primary-color);
  border-top: 0;
  border-left: 0;
  border-radius: 16px;
  transform: scale(0);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  content: ' ';
}
.ant-radio-input {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
}
.ant-radio-checked .ant-radio-inner {
  border-color: var(--ant-primary-color);
}
.ant-radio-checked .ant-radio-inner::after {
  transform: scale(0.5);
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}
.ant-radio-disabled {
  cursor: not-allowed;
}
.ant-radio-disabled .ant-radio-inner {
  background-color: #f5f5f5;
  border-color: #d9d9d9 !important;
  cursor: not-allowed;
}
.ant-radio-disabled .ant-radio-inner::after {
  background-color: rgba(0, 0, 0, 0.2);
}
.ant-radio-disabled .ant-radio-input {
  cursor: not-allowed;
}
.ant-radio-disabled + span {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
span.ant-radio + * {
  padding-right: 8px;
  padding-left: 8px;
}
.ant-radio-button-wrapper {
  position: relative;
  display: inline-block;
  height: 32px;
  margin: 0;
  padding: 0 15px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 30px;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-top-width: 1.02px;
  border-left-width: 0;
  cursor: pointer;
  transition: color 0.3s, background 0.3s, border-color 0.3s, box-shadow 0.3s;
}
.ant-radio-button-wrapper a {
  color: rgba(0, 0, 0, 0.85);
}
.ant-radio-button-wrapper > .ant-radio-button {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.ant-radio-group-large .ant-radio-button-wrapper {
  height: 40px;
  font-size: 16px;
  line-height: 38px;
}
.ant-radio-group-small .ant-radio-button-wrapper {
  height: 24px;
  padding: 0 7px;
  line-height: 22px;
}
.ant-radio-button-wrapper:not(:first-child)::before {
  position: absolute;
  top: -1px;
  left: -1px;
  display: block;
  box-sizing: content-box;
  width: 1px;
  height: 100%;
  padding: 1px 0;
  background-color: #d9d9d9;
  transition: background-color 0.3s;
  content: '';
}
.ant-radio-button-wrapper:first-child {
  border-left: 1px solid #d9d9d9;
  border-radius: 2px 0 0 2px;
}
.ant-radio-button-wrapper:last-child {
  border-radius: 0 2px 2px 0;
}
.ant-radio-button-wrapper:first-child:last-child {
  border-radius: 2px;
}
.ant-radio-button-wrapper:hover {
  position: relative;
  color: var(--ant-primary-color);
}
.ant-radio-button-wrapper:focus-within {
  box-shadow: 0 0 0 3px var(--ant-primary-1);
}
.ant-radio-button-wrapper .ant-radio-inner,
.ant-radio-button-wrapper input[type='checkbox'],
.ant-radio-button-wrapper input[type='radio'] {
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
  z-index: 1;
  color: var(--ant-primary-color);
  background: #fff;
  border-color: var(--ant-primary-color);
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
  background-color: var(--ant-primary-color);
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child {
  border-color: var(--ant-primary-color);
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
  color: var(--ant-primary-5);
  border-color: var(--ant-primary-5);
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover::before {
  background-color: var(--ant-primary-5);
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active {
  color: var(--ant-primary-7);
  border-color: var(--ant-primary-7);
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active::before {
  background-color: var(--ant-primary-7);
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
  box-shadow: 0 0 0 3px var(--ant-primary-1);
}
.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
  color: #fff;
  background: var(--ant-primary-color);
  border-color: var(--ant-primary-color);
}
.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
  color: #fff;
  background: var(--ant-primary-5);
  border-color: var(--ant-primary-5);
}
.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active {
  color: #fff;
  background: var(--ant-primary-7);
  border-color: var(--ant-primary-7);
}
.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
  box-shadow: 0 0 0 3px var(--ant-primary-1);
}
.ant-radio-button-wrapper-disabled {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  cursor: not-allowed;
}
.ant-radio-button-wrapper-disabled:first-child,
.ant-radio-button-wrapper-disabled:hover {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
}
.ant-radio-button-wrapper-disabled:first-child {
  border-left-color: #d9d9d9;
}
.ant-radio-button-wrapper-disabled.ant-radio-button-wrapper-checked {
  color: rgba(0, 0, 0, 0.25);
  background-color: #e6e6e6;
  border-color: #d9d9d9;
  box-shadow: none;
}
@keyframes antRadioEffect {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}
.ant-radio-group.ant-radio-group-rtl {
  direction: rtl;
}
.ant-radio-wrapper.ant-radio-wrapper-rtl {
  margin-right: 0;
  margin-left: 8px;
  direction: rtl;
}
.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl {
  border-right-width: 0;
  border-left-width: 1px;
}
.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper:not(:first-child)::before {
  right: -1px;
  left: 0;
}
.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper:first-child {
  border-right: 1px solid #d9d9d9;
  border-radius: 0 2px 2px 0;
}
.ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
  border-right-color: var(--ant-primary-5);
}
.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper:last-child {
  border-radius: 2px 0 0 2px;
}
.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper-disabled:first-child {
  border-right-color: #d9d9d9;
}
.ant-radio + span:empty {
  display: none;
}
@keyframes antCheckboxEffect {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}
.ant-checkbox {
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
  top: 0.2em;
  line-height: 1;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
}
.ant-checkbox-wrapper:hover .ant-checkbox-inner,
.ant-checkbox:hover .ant-checkbox-inner,
.ant-checkbox-input:focus + .ant-checkbox-inner {
  border-color: var(--ant-primary-color);
}
.ant-checkbox-checked::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid var(--ant-primary-color);
  border-radius: 2px;
  visibility: hidden;
  animation: antCheckboxEffect 0.36s ease-in-out;
  animation-fill-mode: backwards;
  content: '';
}
.ant-checkbox:hover::after,
.ant-checkbox-wrapper:hover .ant-checkbox::after {
  visibility: visible;
}
.ant-checkbox-inner {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  direction: ltr;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  border-collapse: separate;
  transition: all 0.3s;
}
.ant-checkbox-inner::after {
  position: absolute;
  top: 50%;
  left: 21.5%;
  display: table;
  width: 5.71428571px;
  height: 9.14285714px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(0) translate(-50%, -50%);
  opacity: 0;
  transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
  content: ' ';
}
.ant-checkbox-input {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
.ant-checkbox-checked .ant-checkbox-inner::after {
  position: absolute;
  display: table;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(1) translate(-50%, -50%);
  opacity: 1;
  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  content: ' ';
}
.ant-checkbox-checked .ant-checkbox-inner {
  background-color: var(--ant-primary-color);
  border-color: var(--ant-primary-color);
}
.ant-checkbox-disabled {
  cursor: not-allowed;
}
.ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
  border-color: rgba(0, 0, 0, 0.25);
  animation-name: none;
}
.ant-checkbox-disabled .ant-checkbox-input {
  cursor: not-allowed;
  pointer-events: none;
}
.ant-checkbox-disabled .ant-checkbox-inner {
  background-color: #f5f5f5;
  border-color: #d9d9d9 !important;
}
.ant-checkbox-disabled .ant-checkbox-inner::after {
  border-color: #f5f5f5;
  border-collapse: separate;
  animation-name: none;
}
.ant-checkbox-disabled + span {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-checkbox-disabled:hover::after,
.ant-checkbox-wrapper:hover .ant-checkbox-disabled::after {
  visibility: hidden;
}
.ant-checkbox-wrapper {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  display: inline-flex;
  align-items: baseline;
  line-height: unset;
  cursor: pointer;
}
.ant-checkbox-wrapper::after {
  display: inline-block;
  width: 0;
  overflow: hidden;
  content: '\a0';
}
.ant-checkbox-wrapper.ant-checkbox-wrapper-disabled {
  cursor: not-allowed;
}
.ant-checkbox-wrapper + .ant-checkbox-wrapper {
  margin-left: 8px;
}
.ant-checkbox-wrapper.ant-checkbox-wrapper-in-form-item input[type='checkbox'] {
  width: 14px;
  height: 14px;
}
.ant-checkbox + span {
  padding-right: 8px;
  padding-left: 8px;
}
.ant-checkbox-group {
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
}
.ant-checkbox-group-item {
  margin-right: 8px;
}
.ant-checkbox-group-item:last-child {
  margin-right: 0;
}
.ant-checkbox-group-item + .ant-checkbox-group-item {
  margin-left: 0;
}
.ant-checkbox-indeterminate .ant-checkbox-inner {
  background-color: #fff;
  border-color: #d9d9d9;
}
.ant-checkbox-indeterminate .ant-checkbox-inner::after {
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: var(--ant-primary-color);
  border: 0;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  content: ' ';
}
.ant-checkbox-indeterminate.ant-checkbox-disabled .ant-checkbox-inner::after {
  background-color: rgba(0, 0, 0, 0.25);
  border-color: rgba(0, 0, 0, 0.25);
}
.ant-checkbox-rtl {
  direction: rtl;
}
.ant-checkbox-group-rtl .ant-checkbox-group-item {
  margin-right: 0;
  margin-left: 8px;
}
.ant-checkbox-group-rtl .ant-checkbox-group-item:last-child {
  margin-left: 0 !important;
}
.ant-checkbox-group-rtl .ant-checkbox-group-item + .ant-checkbox-group-item {
  margin-left: 8px;
}
.ant-checkbox + span:empty {
  display: none;
}
.ant-dropdown-menu-item.ant-dropdown-menu-item-danger {
  color: var(--ant-error-color);
}
.ant-dropdown-menu-item.ant-dropdown-menu-item-danger:hover {
  color: #fff;
  background-color: var(--ant-error-color);
}
.ant-dropdown {
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
  top: -9999px;
  left: -9999px;
  z-index: 1050;
  display: block;
}
.ant-dropdown::before {
  position: absolute;
  top: -4px;
  right: 0;
  bottom: -4px;
  left: -7px;
  z-index: -9999;
  opacity: 0.0001;
  content: ' ';
}
.ant-dropdown-wrap {
  position: relative;
}
.ant-dropdown-wrap .ant-btn > .anticon-down {
  font-size: 10px;
}
.ant-dropdown-wrap .anticon-down::before {
  transition: transform 0.2s;
}
.ant-dropdown-wrap-open .anticon-down::before {
  transform: rotate(180deg);
}
.ant-dropdown-hidden,
.ant-dropdown-menu-hidden,
.ant-dropdown-menu-submenu-hidden {
  display: none;
}
.ant-dropdown-show-arrow.ant-dropdown-placement-topLeft,
.ant-dropdown-show-arrow.ant-dropdown-placement-top,
.ant-dropdown-show-arrow.ant-dropdown-placement-topRight {
  padding-bottom: 15.3137085px;
}
.ant-dropdown-show-arrow.ant-dropdown-placement-bottomLeft,
.ant-dropdown-show-arrow.ant-dropdown-placement-bottom,
.ant-dropdown-show-arrow.ant-dropdown-placement-bottomRight {
  padding-top: 15.3137085px;
}
.ant-dropdown-arrow {
  position: absolute;
  z-index: 1;
  display: block;
  width: 11.3137085px;
  height: 11.3137085px;
  background: linear-gradient(135deg, transparent 40%, #fff 40%);
  border-radius: 0 0 2px;
  pointer-events: none;
}
.ant-dropdown-arrow::before {
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
.ant-dropdown-placement-top > .ant-dropdown-arrow,
.ant-dropdown-placement-topLeft > .ant-dropdown-arrow,
.ant-dropdown-placement-topRight > .ant-dropdown-arrow {
  bottom: 10px;
  box-shadow: 3px 3px 7px -3px rgba(0, 0, 0, 0.1);
  transform: rotate(45deg);
}
.ant-dropdown-placement-top > .ant-dropdown-arrow {
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
}
.ant-dropdown-placement-topLeft > .ant-dropdown-arrow {
  left: 16px;
}
.ant-dropdown-placement-topRight > .ant-dropdown-arrow {
  right: 16px;
}
.ant-dropdown-placement-bottom > .ant-dropdown-arrow,
.ant-dropdown-placement-bottomLeft > .ant-dropdown-arrow,
.ant-dropdown-placement-bottomRight > .ant-dropdown-arrow {
  top: 9.41421356px;
  box-shadow: 2px 2px 5px -2px rgba(0, 0, 0, 0.1);
  transform: rotate(-135deg) translateY(-0.5px);
}
.ant-dropdown-placement-bottom > .ant-dropdown-arrow {
  left: 50%;
  transform: translateX(-50%) rotate(-135deg) translateY(-0.5px);
}
.ant-dropdown-placement-bottomLeft > .ant-dropdown-arrow {
  left: 16px;
}
.ant-dropdown-placement-bottomRight > .ant-dropdown-arrow {
  right: 16px;
}
.ant-dropdown-menu {
  position: relative;
  margin: 0;
  padding: 4px 0;
  text-align: left;
  list-style-type: none;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 2px;
  outline: none;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
.ant-dropdown-menu-item-group-title {
  padding: 5px 12px;
  color: rgba(0, 0, 0, 0.45);
  transition: all 0.3s;
}
.ant-dropdown-menu-submenu-popup {
  position: absolute;
  z-index: 1050;
  background: transparent;
  box-shadow: none;
  transform-origin: 0 0;
}
.ant-dropdown-menu-submenu-popup ul,
.ant-dropdown-menu-submenu-popup li {
  list-style: none;
}
.ant-dropdown-menu-submenu-popup ul {
  margin-right: 0.3em;
  margin-left: 0.3em;
}
.ant-dropdown-menu-item {
  position: relative;
  display: flex;
  align-items: center;
}
.ant-dropdown-menu-item-icon {
  min-width: 12px;
  margin-right: 8px;
  font-size: 12px;
}
.ant-dropdown-menu-title-content {
  flex: auto;
}
.ant-dropdown-menu-title-content > a {
  color: inherit;
  transition: all 0.3s;
}
.ant-dropdown-menu-title-content > a:hover {
  color: inherit;
}
.ant-dropdown-menu-title-content > a::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: '';
}
.ant-dropdown-menu-item,
.ant-dropdown-menu-submenu-title {
  clear: both;
  margin: 0;
  padding: 5px 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  transition: all 0.3s;
}
.ant-dropdown-menu-item-selected,
.ant-dropdown-menu-submenu-title-selected {
  color: var(--ant-primary-color);
  background-color: var(--ant-primary-1);
}
.ant-dropdown-menu-item:hover,
.ant-dropdown-menu-submenu-title:hover,
.ant-dropdown-menu-item.ant-dropdown-menu-item-active,
.ant-dropdown-menu-item.ant-dropdown-menu-submenu-title-active,
.ant-dropdown-menu-submenu-title.ant-dropdown-menu-item-active,
.ant-dropdown-menu-submenu-title.ant-dropdown-menu-submenu-title-active {
  background-color: #f5f5f5;
}
.ant-dropdown-menu-item-disabled,
.ant-dropdown-menu-submenu-title-disabled {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-dropdown-menu-item-disabled:hover,
.ant-dropdown-menu-submenu-title-disabled:hover {
  color: rgba(0, 0, 0, 0.25);
  background-color: #fff;
  cursor: not-allowed;
}
.ant-dropdown-menu-item-disabled a,
.ant-dropdown-menu-submenu-title-disabled a {
  pointer-events: none;
}
.ant-dropdown-menu-item-divider,
.ant-dropdown-menu-submenu-title-divider {
  height: 1px;
  margin: 4px 0;
  overflow: hidden;
  line-height: 0;
  background-color: rgba(0, 0, 0, 0.06);
}
.ant-dropdown-menu-item .ant-dropdown-menu-submenu-expand-icon,
.ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-expand-icon {
  position: absolute;
  right: 8px;
}
.ant-dropdown-menu-item .ant-dropdown-menu-submenu-expand-icon .ant-dropdown-menu-submenu-arrow-icon,
.ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-expand-icon .ant-dropdown-menu-submenu-arrow-icon {
  margin-right: 0 !important;
  color: rgba(0, 0, 0, 0.45);
  font-size: 10px;
  font-style: normal;
}
.ant-dropdown-menu-item-group-list {
  margin: 0 8px;
  padding: 0;
  list-style: none;
}
.ant-dropdown-menu-submenu-title {
  padding-right: 24px;
}
.ant-dropdown-menu-submenu-vertical {
  position: relative;
}
.ant-dropdown-menu-submenu-vertical > .ant-dropdown-menu {
  position: absolute;
  top: 0;
  left: 100%;
  min-width: 100%;
  margin-left: 4px;
  transform-origin: 0 0;
}
.ant-dropdown-menu-submenu.ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title,
.ant-dropdown-menu-submenu.ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow-icon {
  color: rgba(0, 0, 0, 0.25);
  background-color: #fff;
  cursor: not-allowed;
}
.ant-dropdown-menu-submenu-selected .ant-dropdown-menu-submenu-title {
  color: var(--ant-primary-color);
}
.ant-dropdown.ant-slide-down-enter.ant-slide-down-enter-active.ant-dropdown-placement-bottomLeft,
.ant-dropdown.ant-slide-down-appear.ant-slide-down-appear-active.ant-dropdown-placement-bottomLeft,
.ant-dropdown.ant-slide-down-enter.ant-slide-down-enter-active.ant-dropdown-placement-bottom,
.ant-dropdown.ant-slide-down-appear.ant-slide-down-appear-active.ant-dropdown-placement-bottom,
.ant-dropdown.ant-slide-down-enter.ant-slide-down-enter-active.ant-dropdown-placement-bottomRight,
.ant-dropdown.ant-slide-down-appear.ant-slide-down-appear-active.ant-dropdown-placement-bottomRight {
  animation-name: antSlideUpIn;
}
.ant-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-dropdown-placement-topLeft,
.ant-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-dropdown-placement-topLeft,
.ant-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-dropdown-placement-top,
.ant-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-dropdown-placement-top,
.ant-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-dropdown-placement-topRight,
.ant-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-dropdown-placement-topRight {
  animation-name: antSlideDownIn;
}
.ant-dropdown.ant-slide-down-leave.ant-slide-down-leave-active.ant-dropdown-placement-bottomLeft,
.ant-dropdown.ant-slide-down-leave.ant-slide-down-leave-active.ant-dropdown-placement-bottom,
.ant-dropdown.ant-slide-down-leave.ant-slide-down-leave-active.ant-dropdown-placement-bottomRight {
  animation-name: antSlideUpOut;
}
.ant-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-dropdown-placement-topLeft,
.ant-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-dropdown-placement-top,
.ant-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-dropdown-placement-topRight {
  animation-name: antSlideDownOut;
}
.ant-dropdown-trigger > .anticon.anticon-down,
.ant-dropdown-link > .anticon.anticon-down,
.ant-dropdown-button > .anticon.anticon-down {
  font-size: 10px;
  vertical-align: baseline;
}
.ant-dropdown-button {
  white-space: nowrap;
}
.ant-dropdown-button.ant-btn-group > .ant-btn-loading,
.ant-dropdown-button.ant-btn-group > .ant-btn-loading + .ant-btn {
  cursor: default;
  pointer-events: none;
}
.ant-dropdown-button.ant-btn-group > .ant-btn-loading + .ant-btn::before {
  display: block;
}
.ant-dropdown-button.ant-btn-group > .ant-btn:last-child:not(:first-child):not(.ant-btn-icon-only) {
  padding-right: 8px;
  padding-left: 8px;
}
.ant-dropdown-menu-dark,
.ant-dropdown-menu-dark .ant-dropdown-menu {
  background: #001529;
}
.ant-dropdown-menu-dark .ant-dropdown-menu-item,
.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title,
.ant-dropdown-menu-dark .ant-dropdown-menu-item > a,
.ant-dropdown-menu-dark .ant-dropdown-menu-item > .anticon + span > a {
  color: rgba(255, 255, 255, 0.65);
}
.ant-dropdown-menu-dark .ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow::after,
.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow::after,
.ant-dropdown-menu-dark .ant-dropdown-menu-item > a .ant-dropdown-menu-submenu-arrow::after,
.ant-dropdown-menu-dark .ant-dropdown-menu-item > .anticon + span > a .ant-dropdown-menu-submenu-arrow::after {
  color: rgba(255, 255, 255, 0.65);
}
.ant-dropdown-menu-dark .ant-dropdown-menu-item:hover,
.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title:hover,
.ant-dropdown-menu-dark .ant-dropdown-menu-item > a:hover,
.ant-dropdown-menu-dark .ant-dropdown-menu-item > .anticon + span > a:hover {
  color: #fff;
  background: transparent;
}
.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected,
.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected:hover,
.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected > a {
  color: #fff;
  background: var(--ant-primary-color);
}
.ant-dropdown-rtl {
  direction: rtl;
}
.ant-dropdown-rtl.ant-dropdown::before {
  right: -7px;
  left: 0;
}
.ant-dropdown-menu.ant-dropdown-menu-rtl {
  direction: rtl;
  text-align: right;
}
.ant-dropdown-rtl .ant-dropdown-menu-item-group-title,
.ant-dropdown-menu-submenu-rtl .ant-dropdown-menu-item-group-title {
  direction: rtl;
  text-align: right;
}
.ant-dropdown-menu-submenu-popup.ant-dropdown-menu-submenu-rtl {
  transform-origin: 100% 0;
}
.ant-dropdown-rtl .ant-dropdown-menu-submenu-popup ul,
.ant-dropdown-rtl .ant-dropdown-menu-submenu-popup li {
  text-align: right;
}
.ant-dropdown-rtl .ant-dropdown-menu-item,
.ant-dropdown-rtl .ant-dropdown-menu-submenu-title {
  text-align: right;
}
.ant-dropdown-rtl .ant-dropdown-menu-item > .anticon:first-child,
.ant-dropdown-rtl .ant-dropdown-menu-submenu-title > .anticon:first-child,
.ant-dropdown-rtl .ant-dropdown-menu-item > span > .anticon:first-child,
.ant-dropdown-rtl .ant-dropdown-menu-submenu-title > span > .anticon:first-child {
  margin-right: 0;
  margin-left: 8px;
}
.ant-dropdown-rtl .ant-dropdown-menu-item .ant-dropdown-menu-submenu-expand-icon,
.ant-dropdown-rtl .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-expand-icon {
  right: auto;
  left: 8px;
}
.ant-dropdown-rtl .ant-dropdown-menu-item .ant-dropdown-menu-submenu-expand-icon .ant-dropdown-menu-submenu-arrow-icon,
.ant-dropdown-rtl .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-expand-icon .ant-dropdown-menu-submenu-arrow-icon {
  margin-left: 0 !important;
  transform: scaleX(-1);
}
.ant-dropdown-rtl .ant-dropdown-menu-submenu-title {
  padding-right: 12px;
  padding-left: 24px;
}
.ant-dropdown-rtl .ant-dropdown-menu-submenu-vertical > .ant-dropdown-menu {
  right: 100%;
  left: 0;
  margin-right: 4px;
  margin-left: 0;
}
.ant-dropdown-menu > ul {
  list-style: inherit;
  margin: 0;
  padding: 0;
}
.ant-dropdown {
  top: 0;
  left: 0;
  position: relative;
  width: 100%;
  margin-top: 6px;
  margin-bottom: 6px;
}
.ant-dropdown-rtl .ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow,
.ant-dropdown-rtl .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow {
  transform: rotate(180deg);
}
.ant-btn {
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.85);
  border-color: #d9d9d9;
  background: #fff;
}
.ant-btn > .anticon {
  line-height: 1;
}
.ant-btn,
.ant-btn:active,
.ant-btn:focus {
  outline: 0;
}
.ant-btn:not([disabled]):hover {
  text-decoration: none;
}
.ant-btn:not([disabled]):active {
  outline: 0;
  box-shadow: none;
}
.ant-btn[disabled] {
  cursor: not-allowed;
}
.ant-btn[disabled] > * {
  pointer-events: none;
}
.ant-btn-lg {
  height: 40px;
  padding: 6.4px 15px;
  font-size: 16px;
  border-radius: 2px;
}
.ant-btn-sm {
  height: 24px;
  padding: 0px 7px;
  font-size: 14px;
  border-radius: 2px;
}
.ant-btn > a:only-child {
  color: currentcolor;
}
.ant-btn > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn:hover,
.ant-btn:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: #fff;
}
.ant-btn:hover > a:only-child,
.ant-btn:focus > a:only-child {
  color: currentcolor;
}
.ant-btn:hover > a:only-child::after,
.ant-btn:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: #fff;
}
.ant-btn:active > a:only-child {
  color: currentcolor;
}
.ant-btn:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn[disabled],
.ant-btn[disabled]:hover,
.ant-btn[disabled]:focus,
.ant-btn[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn[disabled] > a:only-child,
.ant-btn[disabled]:hover > a:only-child,
.ant-btn[disabled]:focus > a:only-child,
.ant-btn[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn[disabled] > a:only-child::after,
.ant-btn[disabled]:hover > a:only-child::after,
.ant-btn[disabled]:focus > a:only-child::after,
.ant-btn[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn:hover,
.ant-btn:focus,
.ant-btn:active {
  text-decoration: none;
  background: #fff;
}
.ant-btn > span {
  display: inline-block;
}
.ant-btn-primary {
  color: #fff;
  border-color: var(--ant-primary-color);
  background: var(--ant-primary-color);
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.ant-btn-primary > a:only-child {
  color: currentcolor;
}
.ant-btn-primary > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-primary:hover,
.ant-btn-primary:focus {
  color: #fff;
  border-color: var(--ant-primary-color-hover);
  background: var(--ant-primary-color-hover);
}
.ant-btn-primary:hover > a:only-child,
.ant-btn-primary:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-primary:hover > a:only-child::after,
.ant-btn-primary:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-primary:active {
  color: #fff;
  border-color: var(--ant-primary-color-active);
  background: var(--ant-primary-color-active);
}
.ant-btn-primary:active > a:only-child {
  color: currentcolor;
}
.ant-btn-primary:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-primary[disabled],
.ant-btn-primary[disabled]:hover,
.ant-btn-primary[disabled]:focus,
.ant-btn-primary[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-primary[disabled] > a:only-child,
.ant-btn-primary[disabled]:hover > a:only-child,
.ant-btn-primary[disabled]:focus > a:only-child,
.ant-btn-primary[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-primary[disabled] > a:only-child::after,
.ant-btn-primary[disabled]:hover > a:only-child::after,
.ant-btn-primary[disabled]:focus > a:only-child::after,
.ant-btn-primary[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-group .ant-btn-primary:not(:first-child):not(:last-child) {
  border-right-color: var(--ant-primary-5);
  border-left-color: var(--ant-primary-5);
}
.ant-btn-group .ant-btn-primary:not(:first-child):not(:last-child):disabled {
  border-color: #d9d9d9;
}
.ant-btn-group .ant-btn-primary:first-child:not(:last-child) {
  border-right-color: var(--ant-primary-5);
}
.ant-btn-group .ant-btn-primary:first-child:not(:last-child)[disabled] {
  border-right-color: #d9d9d9;
}
.ant-btn-group .ant-btn-primary:last-child:not(:first-child),
.ant-btn-group .ant-btn-primary + .ant-btn-primary {
  border-left-color: var(--ant-primary-5);
}
.ant-btn-group .ant-btn-primary:last-child:not(:first-child)[disabled],
.ant-btn-group .ant-btn-primary + .ant-btn-primary[disabled] {
  border-left-color: #d9d9d9;
}
.ant-btn-ghost {
  color: rgba(0, 0, 0, 0.85);
  border-color: #d9d9d9;
  background: transparent;
}
.ant-btn-ghost > a:only-child {
  color: currentcolor;
}
.ant-btn-ghost > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-ghost:hover,
.ant-btn-ghost:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: transparent;
}
.ant-btn-ghost:hover > a:only-child,
.ant-btn-ghost:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-ghost:hover > a:only-child::after,
.ant-btn-ghost:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-ghost:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: transparent;
}
.ant-btn-ghost:active > a:only-child {
  color: currentcolor;
}
.ant-btn-ghost:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-ghost[disabled],
.ant-btn-ghost[disabled]:hover,
.ant-btn-ghost[disabled]:focus,
.ant-btn-ghost[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-ghost[disabled] > a:only-child,
.ant-btn-ghost[disabled]:hover > a:only-child,
.ant-btn-ghost[disabled]:focus > a:only-child,
.ant-btn-ghost[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-ghost[disabled] > a:only-child::after,
.ant-btn-ghost[disabled]:hover > a:only-child::after,
.ant-btn-ghost[disabled]:focus > a:only-child::after,
.ant-btn-ghost[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dashed {
  color: rgba(0, 0, 0, 0.85);
  border-color: #d9d9d9;
  background: #fff;
  border-style: dashed;
}
.ant-btn-dashed > a:only-child {
  color: currentcolor;
}
.ant-btn-dashed > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dashed:hover,
.ant-btn-dashed:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: #fff;
}
.ant-btn-dashed:hover > a:only-child,
.ant-btn-dashed:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-dashed:hover > a:only-child::after,
.ant-btn-dashed:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dashed:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: #fff;
}
.ant-btn-dashed:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dashed:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dashed[disabled],
.ant-btn-dashed[disabled]:hover,
.ant-btn-dashed[disabled]:focus,
.ant-btn-dashed[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-dashed[disabled] > a:only-child,
.ant-btn-dashed[disabled]:hover > a:only-child,
.ant-btn-dashed[disabled]:focus > a:only-child,
.ant-btn-dashed[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dashed[disabled] > a:only-child::after,
.ant-btn-dashed[disabled]:hover > a:only-child::after,
.ant-btn-dashed[disabled]:focus > a:only-child::after,
.ant-btn-dashed[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-danger {
  color: #fff;
  border-color: var(--ant-error-color);
  background: var(--ant-error-color);
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.ant-btn-danger > a:only-child {
  color: currentcolor;
}
.ant-btn-danger > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-danger:hover,
.ant-btn-danger:focus {
  color: #fff;
  border-color: var(--ant-error-color-hover);
  background: var(--ant-error-color-hover);
}
.ant-btn-danger:hover > a:only-child,
.ant-btn-danger:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-danger:hover > a:only-child::after,
.ant-btn-danger:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-danger:active {
  color: #fff;
  border-color: var(--ant-error-color-active);
  background: var(--ant-error-color-active);
}
.ant-btn-danger:active > a:only-child {
  color: currentcolor;
}
.ant-btn-danger:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-danger[disabled],
.ant-btn-danger[disabled]:hover,
.ant-btn-danger[disabled]:focus,
.ant-btn-danger[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-danger[disabled] > a:only-child,
.ant-btn-danger[disabled]:hover > a:only-child,
.ant-btn-danger[disabled]:focus > a:only-child,
.ant-btn-danger[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-danger[disabled] > a:only-child::after,
.ant-btn-danger[disabled]:hover > a:only-child::after,
.ant-btn-danger[disabled]:focus > a:only-child::after,
.ant-btn-danger[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-link {
  color: var(--ant-primary-color);
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}
.ant-btn-link > a:only-child {
  color: currentcolor;
}
.ant-btn-link > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-link:hover,
.ant-btn-link:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: transparent;
}
.ant-btn-link:hover > a:only-child,
.ant-btn-link:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-link:hover > a:only-child::after,
.ant-btn-link:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-link:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: transparent;
}
.ant-btn-link:active > a:only-child {
  color: currentcolor;
}
.ant-btn-link:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-link[disabled],
.ant-btn-link[disabled]:hover,
.ant-btn-link[disabled]:focus,
.ant-btn-link[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-link[disabled] > a:only-child,
.ant-btn-link[disabled]:hover > a:only-child,
.ant-btn-link[disabled]:focus > a:only-child,
.ant-btn-link[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-link[disabled] > a:only-child::after,
.ant-btn-link[disabled]:hover > a:only-child::after,
.ant-btn-link[disabled]:focus > a:only-child::after,
.ant-btn-link[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-link:hover {
  background: transparent;
}
.ant-btn-link:hover,
.ant-btn-link:focus,
.ant-btn-link:active {
  border-color: transparent;
}
.ant-btn-link[disabled],
.ant-btn-link[disabled]:hover,
.ant-btn-link[disabled]:focus,
.ant-btn-link[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: transparent;
  background: transparent;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-link[disabled] > a:only-child,
.ant-btn-link[disabled]:hover > a:only-child,
.ant-btn-link[disabled]:focus > a:only-child,
.ant-btn-link[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-link[disabled] > a:only-child::after,
.ant-btn-link[disabled]:hover > a:only-child::after,
.ant-btn-link[disabled]:focus > a:only-child::after,
.ant-btn-link[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-text {
  color: rgba(0, 0, 0, 0.85);
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}
.ant-btn-text > a:only-child {
  color: currentcolor;
}
.ant-btn-text > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-text:hover,
.ant-btn-text:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: transparent;
}
.ant-btn-text:hover > a:only-child,
.ant-btn-text:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-text:hover > a:only-child::after,
.ant-btn-text:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-text:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: transparent;
}
.ant-btn-text:active > a:only-child {
  color: currentcolor;
}
.ant-btn-text:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-text[disabled],
.ant-btn-text[disabled]:hover,
.ant-btn-text[disabled]:focus,
.ant-btn-text[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-text[disabled] > a:only-child,
.ant-btn-text[disabled]:hover > a:only-child,
.ant-btn-text[disabled]:focus > a:only-child,
.ant-btn-text[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-text[disabled] > a:only-child::after,
.ant-btn-text[disabled]:hover > a:only-child::after,
.ant-btn-text[disabled]:focus > a:only-child::after,
.ant-btn-text[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-text:hover,
.ant-btn-text:focus {
  color: rgba(0, 0, 0, 0.85);
  background: rgba(0, 0, 0, 0.018);
  border-color: transparent;
}
.ant-btn-text:active {
  color: rgba(0, 0, 0, 0.85);
  background: rgba(0, 0, 0, 0.028);
  border-color: transparent;
}
.ant-btn-text[disabled],
.ant-btn-text[disabled]:hover,
.ant-btn-text[disabled]:focus,
.ant-btn-text[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: transparent;
  background: transparent;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-text[disabled] > a:only-child,
.ant-btn-text[disabled]:hover > a:only-child,
.ant-btn-text[disabled]:focus > a:only-child,
.ant-btn-text[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-text[disabled] > a:only-child::after,
.ant-btn-text[disabled]:hover > a:only-child::after,
.ant-btn-text[disabled]:focus > a:only-child::after,
.ant-btn-text[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous {
  color: var(--ant-error-color);
  border-color: var(--ant-error-color);
  background: #fff;
}
.ant-btn-dangerous > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous:hover,
.ant-btn-dangerous:focus {
  color: var(--ant-error-color-hover);
  border-color: var(--ant-error-color-hover);
  background: #fff;
}
.ant-btn-dangerous:hover > a:only-child,
.ant-btn-dangerous:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous:hover > a:only-child::after,
.ant-btn-dangerous:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous:active {
  color: var(--ant-error-color-active);
  border-color: var(--ant-error-color-active);
  background: #fff;
}
.ant-btn-dangerous:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous[disabled],
.ant-btn-dangerous[disabled]:hover,
.ant-btn-dangerous[disabled]:focus,
.ant-btn-dangerous[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-dangerous[disabled] > a:only-child,
.ant-btn-dangerous[disabled]:hover > a:only-child,
.ant-btn-dangerous[disabled]:focus > a:only-child,
.ant-btn-dangerous[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous[disabled] > a:only-child::after,
.ant-btn-dangerous[disabled]:hover > a:only-child::after,
.ant-btn-dangerous[disabled]:focus > a:only-child::after,
.ant-btn-dangerous[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-primary {
  color: #fff;
  border-color: var(--ant-error-color);
  background: var(--ant-error-color);
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.ant-btn-dangerous.ant-btn-primary > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-primary > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-primary:hover,
.ant-btn-dangerous.ant-btn-primary:focus {
  color: #fff;
  border-color: var(--ant-error-color-hover);
  background: var(--ant-error-color-hover);
}
.ant-btn-dangerous.ant-btn-primary:hover > a:only-child,
.ant-btn-dangerous.ant-btn-primary:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-primary:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-primary:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-primary:active {
  color: #fff;
  border-color: var(--ant-error-color-active);
  background: var(--ant-error-color-active);
}
.ant-btn-dangerous.ant-btn-primary:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-primary:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-primary[disabled],
.ant-btn-dangerous.ant-btn-primary[disabled]:hover,
.ant-btn-dangerous.ant-btn-primary[disabled]:focus,
.ant-btn-dangerous.ant-btn-primary[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-dangerous.ant-btn-primary[disabled] > a:only-child,
.ant-btn-dangerous.ant-btn-primary[disabled]:hover > a:only-child,
.ant-btn-dangerous.ant-btn-primary[disabled]:focus > a:only-child,
.ant-btn-dangerous.ant-btn-primary[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-primary[disabled] > a:only-child::after,
.ant-btn-dangerous.ant-btn-primary[disabled]:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-primary[disabled]:focus > a:only-child::after,
.ant-btn-dangerous.ant-btn-primary[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-link {
  color: var(--ant-error-color);
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}
.ant-btn-dangerous.ant-btn-link > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-link > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-link:hover,
.ant-btn-dangerous.ant-btn-link:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: transparent;
}
.ant-btn-dangerous.ant-btn-link:hover > a:only-child,
.ant-btn-dangerous.ant-btn-link:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-link:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-link:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-link:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: transparent;
}
.ant-btn-dangerous.ant-btn-link:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-link:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-link[disabled],
.ant-btn-dangerous.ant-btn-link[disabled]:hover,
.ant-btn-dangerous.ant-btn-link[disabled]:focus,
.ant-btn-dangerous.ant-btn-link[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-dangerous.ant-btn-link[disabled] > a:only-child,
.ant-btn-dangerous.ant-btn-link[disabled]:hover > a:only-child,
.ant-btn-dangerous.ant-btn-link[disabled]:focus > a:only-child,
.ant-btn-dangerous.ant-btn-link[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-link[disabled] > a:only-child::after,
.ant-btn-dangerous.ant-btn-link[disabled]:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-link[disabled]:focus > a:only-child::after,
.ant-btn-dangerous.ant-btn-link[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-link:hover,
.ant-btn-dangerous.ant-btn-link:focus {
  color: var(--ant-error-color-hover);
  border-color: transparent;
  background: transparent;
}
.ant-btn-dangerous.ant-btn-link:hover > a:only-child,
.ant-btn-dangerous.ant-btn-link:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-link:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-link:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-link:active {
  color: var(--ant-error-color-active);
  border-color: transparent;
  background: transparent;
}
.ant-btn-dangerous.ant-btn-link:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-link:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-link[disabled],
.ant-btn-dangerous.ant-btn-link[disabled]:hover,
.ant-btn-dangerous.ant-btn-link[disabled]:focus,
.ant-btn-dangerous.ant-btn-link[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: transparent;
  background: transparent;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-dangerous.ant-btn-link[disabled] > a:only-child,
.ant-btn-dangerous.ant-btn-link[disabled]:hover > a:only-child,
.ant-btn-dangerous.ant-btn-link[disabled]:focus > a:only-child,
.ant-btn-dangerous.ant-btn-link[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-link[disabled] > a:only-child::after,
.ant-btn-dangerous.ant-btn-link[disabled]:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-link[disabled]:focus > a:only-child::after,
.ant-btn-dangerous.ant-btn-link[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-text {
  color: var(--ant-error-color);
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}
.ant-btn-dangerous.ant-btn-text > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-text > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-text:hover,
.ant-btn-dangerous.ant-btn-text:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: transparent;
}
.ant-btn-dangerous.ant-btn-text:hover > a:only-child,
.ant-btn-dangerous.ant-btn-text:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-text:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-text:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-text:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: transparent;
}
.ant-btn-dangerous.ant-btn-text:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-text:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-text[disabled],
.ant-btn-dangerous.ant-btn-text[disabled]:hover,
.ant-btn-dangerous.ant-btn-text[disabled]:focus,
.ant-btn-dangerous.ant-btn-text[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-dangerous.ant-btn-text[disabled] > a:only-child,
.ant-btn-dangerous.ant-btn-text[disabled]:hover > a:only-child,
.ant-btn-dangerous.ant-btn-text[disabled]:focus > a:only-child,
.ant-btn-dangerous.ant-btn-text[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-text[disabled] > a:only-child::after,
.ant-btn-dangerous.ant-btn-text[disabled]:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-text[disabled]:focus > a:only-child::after,
.ant-btn-dangerous.ant-btn-text[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-text:hover,
.ant-btn-dangerous.ant-btn-text:focus {
  color: var(--ant-error-color-hover);
  border-color: transparent;
  background: rgba(0, 0, 0, 0.018);
}
.ant-btn-dangerous.ant-btn-text:hover > a:only-child,
.ant-btn-dangerous.ant-btn-text:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-text:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-text:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-text:active {
  color: var(--ant-error-color-active);
  border-color: transparent;
  background: rgba(0, 0, 0, 0.028);
}
.ant-btn-dangerous.ant-btn-text:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-text:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-dangerous.ant-btn-text[disabled],
.ant-btn-dangerous.ant-btn-text[disabled]:hover,
.ant-btn-dangerous.ant-btn-text[disabled]:focus,
.ant-btn-dangerous.ant-btn-text[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: transparent;
  background: transparent;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-dangerous.ant-btn-text[disabled] > a:only-child,
.ant-btn-dangerous.ant-btn-text[disabled]:hover > a:only-child,
.ant-btn-dangerous.ant-btn-text[disabled]:focus > a:only-child,
.ant-btn-dangerous.ant-btn-text[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-dangerous.ant-btn-text[disabled] > a:only-child::after,
.ant-btn-dangerous.ant-btn-text[disabled]:hover > a:only-child::after,
.ant-btn-dangerous.ant-btn-text[disabled]:focus > a:only-child::after,
.ant-btn-dangerous.ant-btn-text[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-icon-only {
  width: 32px;
  height: 32px;
  padding: 2.4px 0;
  font-size: 16px;
  border-radius: 2px;
  vertical-align: -3px;
}
.ant-btn-icon-only > * {
  font-size: 16px;
}
.ant-btn-icon-only.ant-btn-lg {
  width: 40px;
  height: 40px;
  padding: 4.9px 0;
  font-size: 18px;
  border-radius: 2px;
}
.ant-btn-icon-only.ant-btn-lg > * {
  font-size: 18px;
}
.ant-btn-icon-only.ant-btn-sm {
  width: 24px;
  height: 24px;
  padding: 0px 0;
  font-size: 14px;
  border-radius: 2px;
}
.ant-btn-icon-only.ant-btn-sm > * {
  font-size: 14px;
}
.ant-btn-icon-only > .anticon {
  display: flex;
  justify-content: center;
}
a.ant-btn-icon-only {
  vertical-align: -1px;
}
a.ant-btn-icon-only > .anticon {
  display: inline;
}
.ant-btn-round {
  height: 32px;
  padding: 4px 16px;
  font-size: 14px;
  border-radius: 32px;
}
.ant-btn-round.ant-btn-lg {
  height: 40px;
  padding: 6.4px 20px;
  font-size: 16px;
  border-radius: 40px;
}
.ant-btn-round.ant-btn-sm {
  height: 24px;
  padding: 0px 12px;
  font-size: 14px;
  border-radius: 24px;
}
.ant-btn-round.ant-btn-icon-only {
  width: auto;
}
.ant-btn-circle {
  min-width: 32px;
  padding-right: 0;
  padding-left: 0;
  text-align: center;
  border-radius: 50%;
}
.ant-btn-circle.ant-btn-lg {
  min-width: 40px;
  border-radius: 50%;
}
.ant-btn-circle.ant-btn-sm {
  min-width: 24px;
  border-radius: 50%;
}
.ant-btn::before {
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  z-index: 1;
  display: none;
  background: #fff;
  border-radius: inherit;
  opacity: 0.35;
  transition: opacity 0.2s;
  content: '';
  pointer-events: none;
}
.ant-btn .anticon {
  transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-btn .anticon.anticon-plus > svg,
.ant-btn .anticon.anticon-minus > svg {
  shape-rendering: optimizespeed;
}
.ant-btn.ant-btn-loading {
  position: relative;
  cursor: default;
}
.ant-btn.ant-btn-loading::before {
  display: block;
}
.ant-btn > .ant-btn-loading-icon {
  transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-btn > .ant-btn-loading-icon .anticon {
  padding-right: 8px;
  animation: none;
}
.ant-btn > .ant-btn-loading-icon .anticon svg {
  animation: loadingCircle 1s infinite linear;
}
.ant-btn > .ant-btn-loading-icon:only-child .anticon {
  padding-right: 0;
}
.ant-btn-group {
  position: relative;
  display: inline-flex;
}
.ant-btn-group > .ant-btn,
.ant-btn-group > span > .ant-btn {
  position: relative;
}
.ant-btn-group > .ant-btn:hover,
.ant-btn-group > span > .ant-btn:hover,
.ant-btn-group > .ant-btn:focus,
.ant-btn-group > span > .ant-btn:focus,
.ant-btn-group > .ant-btn:active,
.ant-btn-group > span > .ant-btn:active {
  z-index: 2;
}
.ant-btn-group > .ant-btn[disabled],
.ant-btn-group > span > .ant-btn[disabled] {
  z-index: 0;
}
.ant-btn-group .ant-btn-icon-only {
  font-size: 14px;
}
.ant-btn-group .ant-btn + .ant-btn,
.ant-btn + .ant-btn-group,
.ant-btn-group span + .ant-btn,
.ant-btn-group .ant-btn + span,
.ant-btn-group > span + span,
.ant-btn-group + .ant-btn,
.ant-btn-group + .ant-btn-group {
  margin-left: -1px;
}
.ant-btn-group .ant-btn-primary + .ant-btn:not(.ant-btn-primary):not([disabled]) {
  border-left-color: transparent;
}
.ant-btn-group .ant-btn {
  border-radius: 0;
}
.ant-btn-group > .ant-btn:first-child,
.ant-btn-group > span:first-child > .ant-btn {
  margin-left: 0;
}
.ant-btn-group > .ant-btn:only-child {
  border-radius: 2px;
}
.ant-btn-group > span:only-child > .ant-btn {
  border-radius: 2px;
}
.ant-btn-group > .ant-btn:first-child:not(:last-child),
.ant-btn-group > span:first-child:not(:last-child) > .ant-btn {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.ant-btn-group > .ant-btn:last-child:not(:first-child),
.ant-btn-group > span:last-child:not(:first-child) > .ant-btn {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.ant-btn-group-sm > .ant-btn:only-child {
  border-radius: 2px;
}
.ant-btn-group-sm > span:only-child > .ant-btn {
  border-radius: 2px;
}
.ant-btn-group-sm > .ant-btn:first-child:not(:last-child),
.ant-btn-group-sm > span:first-child:not(:last-child) > .ant-btn {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.ant-btn-group-sm > .ant-btn:last-child:not(:first-child),
.ant-btn-group-sm > span:last-child:not(:first-child) > .ant-btn {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.ant-btn-group > .ant-btn-group {
  float: left;
}
.ant-btn-group > .ant-btn-group:not(:first-child):not(:last-child) > .ant-btn {
  border-radius: 0;
}
.ant-btn-group > .ant-btn-group:first-child:not(:last-child) > .ant-btn:last-child {
  padding-right: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.ant-btn-group > .ant-btn-group:last-child:not(:first-child) > .ant-btn:first-child {
  padding-left: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.ant-btn-rtl.ant-btn-group .ant-btn + .ant-btn,
.ant-btn-rtl.ant-btn + .ant-btn-group,
.ant-btn-rtl.ant-btn-group span + .ant-btn,
.ant-btn-rtl.ant-btn-group .ant-btn + span,
.ant-btn-rtl.ant-btn-group > span + span,
.ant-btn-rtl.ant-btn-group + .ant-btn,
.ant-btn-rtl.ant-btn-group + .ant-btn-group,
.ant-btn-group-rtl.ant-btn-group .ant-btn + .ant-btn,
.ant-btn-group-rtl.ant-btn + .ant-btn-group,
.ant-btn-group-rtl.ant-btn-group span + .ant-btn,
.ant-btn-group-rtl.ant-btn-group .ant-btn + span,
.ant-btn-group-rtl.ant-btn-group > span + span,
.ant-btn-group-rtl.ant-btn-group + .ant-btn,
.ant-btn-group-rtl.ant-btn-group + .ant-btn-group {
  margin-right: -1px;
  margin-left: auto;
}
.ant-btn-group.ant-btn-group-rtl {
  direction: rtl;
}
.ant-btn-group-rtl.ant-btn-group > .ant-btn:first-child:not(:last-child),
.ant-btn-group-rtl.ant-btn-group > span:first-child:not(:last-child) > .ant-btn {
  border-radius: 0 2px 2px 0;
}
.ant-btn-group-rtl.ant-btn-group > .ant-btn:last-child:not(:first-child),
.ant-btn-group-rtl.ant-btn-group > span:last-child:not(:first-child) > .ant-btn {
  border-radius: 2px 0 0 2px;
}
.ant-btn-group-rtl.ant-btn-group-sm > .ant-btn:first-child:not(:last-child),
.ant-btn-group-rtl.ant-btn-group-sm > span:first-child:not(:last-child) > .ant-btn {
  border-radius: 0 2px 2px 0;
}
.ant-btn-group-rtl.ant-btn-group-sm > .ant-btn:last-child:not(:first-child),
.ant-btn-group-rtl.ant-btn-group-sm > span:last-child:not(:first-child) > .ant-btn {
  border-radius: 2px 0 0 2px;
}
.ant-btn:focus > span,
.ant-btn:active > span {
  position: relative;
}
.ant-btn > .anticon + span,
.ant-btn > span + .anticon {
  margin-left: 8px;
}
.ant-btn.ant-btn-background-ghost {
  color: #fff;
  border-color: #fff;
}
.ant-btn.ant-btn-background-ghost,
.ant-btn.ant-btn-background-ghost:hover,
.ant-btn.ant-btn-background-ghost:active,
.ant-btn.ant-btn-background-ghost:focus {
  background: transparent;
}
.ant-btn.ant-btn-background-ghost:hover,
.ant-btn.ant-btn-background-ghost:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
}
.ant-btn.ant-btn-background-ghost:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
}
.ant-btn.ant-btn-background-ghost[disabled] {
  color: rgba(0, 0, 0, 0.25);
  background: transparent;
  border-color: #d9d9d9;
}
.ant-btn-background-ghost.ant-btn-primary {
  color: var(--ant-primary-color);
  border-color: var(--ant-primary-color);
  text-shadow: none;
}
.ant-btn-background-ghost.ant-btn-primary > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-primary > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-primary:hover,
.ant-btn-background-ghost.ant-btn-primary:focus {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-primary:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-primary:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-primary:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-primary:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-primary:active {
  color: var(--ant-primary-color-active);
  border-color: var(--ant-primary-color-active);
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-primary:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-primary:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-primary[disabled],
.ant-btn-background-ghost.ant-btn-primary[disabled]:hover,
.ant-btn-background-ghost.ant-btn-primary[disabled]:focus,
.ant-btn-background-ghost.ant-btn-primary[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-background-ghost.ant-btn-primary[disabled] > a:only-child,
.ant-btn-background-ghost.ant-btn-primary[disabled]:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-primary[disabled]:focus > a:only-child,
.ant-btn-background-ghost.ant-btn-primary[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-primary[disabled] > a:only-child::after,
.ant-btn-background-ghost.ant-btn-primary[disabled]:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-primary[disabled]:focus > a:only-child::after,
.ant-btn-background-ghost.ant-btn-primary[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-danger {
  color: var(--ant-error-color);
  border-color: var(--ant-error-color);
  text-shadow: none;
}
.ant-btn-background-ghost.ant-btn-danger > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-danger > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-danger:hover,
.ant-btn-background-ghost.ant-btn-danger:focus {
  color: var(--ant-error-color-hover);
  border-color: var(--ant-error-color-hover);
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-danger:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-danger:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-danger:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-danger:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-danger:active {
  color: var(--ant-error-color-active);
  border-color: var(--ant-error-color-active);
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-danger:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-danger:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-danger[disabled],
.ant-btn-background-ghost.ant-btn-danger[disabled]:hover,
.ant-btn-background-ghost.ant-btn-danger[disabled]:focus,
.ant-btn-background-ghost.ant-btn-danger[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-background-ghost.ant-btn-danger[disabled] > a:only-child,
.ant-btn-background-ghost.ant-btn-danger[disabled]:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-danger[disabled]:focus > a:only-child,
.ant-btn-background-ghost.ant-btn-danger[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-danger[disabled] > a:only-child::after,
.ant-btn-background-ghost.ant-btn-danger[disabled]:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-danger[disabled]:focus > a:only-child::after,
.ant-btn-background-ghost.ant-btn-danger[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous {
  color: var(--ant-error-color);
  border-color: var(--ant-error-color);
  text-shadow: none;
}
.ant-btn-background-ghost.ant-btn-dangerous > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous:hover,
.ant-btn-background-ghost.ant-btn-dangerous:focus {
  color: var(--ant-error-color-hover);
  border-color: var(--ant-error-color-hover);
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-dangerous:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous:active {
  color: var(--ant-error-color-active);
  border-color: var(--ant-error-color-active);
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-dangerous:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous[disabled],
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:hover,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:focus,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-background-ghost.ant-btn-dangerous[disabled] > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:focus > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous[disabled] > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:focus > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link {
  color: var(--ant-error-color);
  border-color: transparent;
  text-shadow: none;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:hover,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:focus {
  color: var(--ant-error-color-active);
  border-color: transparent;
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:focus > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:active {
  color: var(--ant-error-color-active);
  border-color: transparent;
  background: transparent;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled],
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:hover,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:focus,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:active {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  background: #f5f5f5;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled] > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:hover > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:focus > a:only-child,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:active > a:only-child {
  color: currentcolor;
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled] > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:hover > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:focus > a:only-child::after,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-two-chinese-chars::first-letter {
  letter-spacing: 0.34em;
}
.ant-btn-two-chinese-chars > *:not(.anticon) {
  margin-right: -0.34em;
  letter-spacing: 0.34em;
}
.ant-btn.ant-btn-block {
  width: 100%;
}
.ant-btn:empty {
  display: inline-block;
  width: 0;
  visibility: hidden;
  content: '\a0';
}
a.ant-btn {
  padding-top: 0.01px !important;
  line-height: 30px;
}
a.ant-btn-lg {
  line-height: 38px;
}
a.ant-btn-sm {
  line-height: 22px;
}
.ant-btn-rtl {
  direction: rtl;
}
.ant-btn-group-rtl.ant-btn-group .ant-btn-primary:last-child:not(:first-child),
.ant-btn-group-rtl.ant-btn-group .ant-btn-primary + .ant-btn-primary {
  border-right-color: var(--ant-primary-5);
  border-left-color: #d9d9d9;
}
.ant-btn-group-rtl.ant-btn-group .ant-btn-primary:last-child:not(:first-child)[disabled],
.ant-btn-group-rtl.ant-btn-group .ant-btn-primary + .ant-btn-primary[disabled] {
  border-right-color: #d9d9d9;
  border-left-color: var(--ant-primary-5);
}
.ant-btn-rtl.ant-btn > .ant-btn-loading-icon .anticon {
  padding-right: 0;
  padding-left: 8px;
}
.ant-btn > .ant-btn-loading-icon:only-child .anticon {
  padding-right: 0;
  padding-left: 0;
}
.ant-btn-rtl.ant-btn > .anticon + span,
.ant-btn-rtl.ant-btn > span + .anticon {
  margin-right: 8px;
  margin-left: 0;
}
.ant-spin {
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
  display: none;
  color: var(--ant-primary-color);
  text-align: center;
  vertical-align: middle;
  opacity: 0;
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}
.ant-spin-spinning {
  position: static;
  display: inline-block;
  opacity: 1;
}
.ant-spin-nested-loading {
  position: relative;
}
.ant-spin-nested-loading > div > .ant-spin {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  display: block;
  width: 100%;
  height: 100%;
  max-height: 400px;
}
.ant-spin-nested-loading > div > .ant-spin .ant-spin-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -10px;
}
.ant-spin-nested-loading > div > .ant-spin .ant-spin-text {
  position: absolute;
  top: 50%;
  width: 100%;
  padding-top: 5px;
  text-shadow: 0 1px 2px #fff;
}
.ant-spin-nested-loading > div > .ant-spin.ant-spin-show-text .ant-spin-dot {
  margin-top: -20px;
}
.ant-spin-nested-loading > div > .ant-spin-sm .ant-spin-dot {
  margin: -7px;
}
.ant-spin-nested-loading > div > .ant-spin-sm .ant-spin-text {
  padding-top: 2px;
}
.ant-spin-nested-loading > div > .ant-spin-sm.ant-spin-show-text .ant-spin-dot {
  margin-top: -17px;
}
.ant-spin-nested-loading > div > .ant-spin-lg .ant-spin-dot {
  margin: -16px;
}
.ant-spin-nested-loading > div > .ant-spin-lg .ant-spin-text {
  padding-top: 11px;
}
.ant-spin-nested-loading > div > .ant-spin-lg.ant-spin-show-text .ant-spin-dot {
  margin-top: -26px;
}
.ant-spin-container {
  position: relative;
  transition: opacity 0.3s;
}
.ant-spin-container::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: none \9;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0;
  transition: all 0.3s;
  content: '';
  pointer-events: none;
}
.ant-spin-blur {
  clear: both;
  opacity: 0.5;
  user-select: none;
  pointer-events: none;
}
.ant-spin-blur::after {
  opacity: 0.4;
  pointer-events: auto;
}
.ant-spin-tip {
  color: rgba(0, 0, 0, 0.45);
}
.ant-spin-dot {
  position: relative;
  display: inline-block;
  font-size: 20px;
  width: 1em;
  height: 1em;
}
.ant-spin-dot-item {
  position: absolute;
  display: block;
  width: 9px;
  height: 9px;
  background-color: var(--ant-primary-color);
  border-radius: 100%;
  transform: scale(0.75);
  transform-origin: 50% 50%;
  opacity: 0.3;
  animation: antSpinMove 1s infinite linear alternate;
}
.ant-spin-dot-item:nth-child(1) {
  top: 0;
  left: 0;
}
.ant-spin-dot-item:nth-child(2) {
  top: 0;
  right: 0;
  animation-delay: 0.4s;
}
.ant-spin-dot-item:nth-child(3) {
  right: 0;
  bottom: 0;
  animation-delay: 0.8s;
}
.ant-spin-dot-item:nth-child(4) {
  bottom: 0;
  left: 0;
  animation-delay: 1.2s;
}
.ant-spin-dot-spin {
  transform: rotate(0deg);
  animation: antRotate 1.2s infinite linear;
}
.ant-spin-sm .ant-spin-dot {
  font-size: 14px;
}
.ant-spin-sm .ant-spin-dot i {
  width: 6px;
  height: 6px;
}
.ant-spin-lg .ant-spin-dot {
  font-size: 32px;
}
.ant-spin-lg .ant-spin-dot i {
  width: 14px;
  height: 14px;
}
.ant-spin.ant-spin-show-text .ant-spin-text {
  display: block;
}
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  /* IE10+ */
  .ant-spin-blur {
    background: #fff;
    opacity: 0.5;
  }
}
@keyframes antSpinMove {
  to {
    opacity: 1;
  }
}
@keyframes antRotate {
  to {
    transform: rotate(360deg);
  }
}
.ant-spin-rtl {
  direction: rtl;
}
.ant-spin-rtl .ant-spin-dot-spin {
  transform: rotate(-45deg);
  animation-name: antRotateRtl;
}
@keyframes antRotateRtl {
  to {
    transform: rotate(-405deg);
  }
}
nz-spin {
  display: block;
}
.ant-pagination {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
}
.ant-pagination ul,
.ant-pagination ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
.ant-pagination::after {
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  content: ' ';
}
.ant-pagination-total-text {
  display: inline-block;
  height: 32px;
  margin-right: 8px;
  line-height: 30px;
  vertical-align: middle;
}
.ant-pagination-item {
  display: inline-block;
  min-width: 32px;
  height: 32px;
  margin-right: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  line-height: 30px;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  outline: 0;
  cursor: pointer;
  user-select: none;
}
.ant-pagination-item a {
  display: block;
  padding: 0 6px;
  color: rgba(0, 0, 0, 0.85);
  transition: none;
}
.ant-pagination-item a:hover {
  text-decoration: none;
}
.ant-pagination-item:hover {
  border-color: var(--ant-primary-color);
  transition: all 0.3s;
}
.ant-pagination-item:hover a {
  color: var(--ant-primary-color);
}
.ant-pagination-item:focus-visible {
  border-color: var(--ant-primary-color);
  transition: all 0.3s;
}
.ant-pagination-item:focus-visible a {
  color: var(--ant-primary-color);
}
.ant-pagination-item-active {
  font-weight: 500;
  background: #fff;
  border-color: var(--ant-primary-color);
}
.ant-pagination-item-active a {
  color: var(--ant-primary-color);
}
.ant-pagination-item-active:hover {
  border-color: var(--ant-primary-5);
}
.ant-pagination-item-active:focus-visible {
  border-color: var(--ant-primary-5);
}
.ant-pagination-item-active:hover a {
  color: var(--ant-primary-5);
}
.ant-pagination-item-active:focus-visible a {
  color: var(--ant-primary-5);
}
.ant-pagination-jump-prev,
.ant-pagination-jump-next {
  outline: 0;
}
.ant-pagination-jump-prev .ant-pagination-item-container,
.ant-pagination-jump-next .ant-pagination-item-container {
  position: relative;
}
.ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link-icon,
.ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link-icon {
  color: var(--ant-primary-color);
  font-size: 12px;
  letter-spacing: -1px;
  opacity: 0;
  transition: all 0.2s;
}
.ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link-icon-svg,
.ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link-icon-svg {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-ellipsis,
.ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-ellipsis {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  margin: auto;
  color: rgba(0, 0, 0, 0.25);
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 2px;
  text-align: center;
  text-indent: 0.13em;
  opacity: 1;
  transition: all 0.2s;
}
.ant-pagination-jump-prev:hover .ant-pagination-item-link-icon,
.ant-pagination-jump-next:hover .ant-pagination-item-link-icon {
  opacity: 1;
}
.ant-pagination-jump-prev:hover .ant-pagination-item-ellipsis,
.ant-pagination-jump-next:hover .ant-pagination-item-ellipsis {
  opacity: 0;
}
.ant-pagination-jump-prev:focus-visible .ant-pagination-item-link-icon,
.ant-pagination-jump-next:focus-visible .ant-pagination-item-link-icon {
  opacity: 1;
}
.ant-pagination-jump-prev:focus-visible .ant-pagination-item-ellipsis,
.ant-pagination-jump-next:focus-visible .ant-pagination-item-ellipsis {
  opacity: 0;
}
.ant-pagination-prev,
.ant-pagination-jump-prev,
.ant-pagination-jump-next {
  margin-right: 8px;
}
.ant-pagination-prev,
.ant-pagination-next,
.ant-pagination-jump-prev,
.ant-pagination-jump-next {
  display: inline-block;
  min-width: 32px;
  height: 32px;
  color: rgba(0, 0, 0, 0.85);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  line-height: 32px;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
}
.ant-pagination-prev,
.ant-pagination-next {
  font-family: Arial, Helvetica, sans-serif;
  outline: 0;
}
.ant-pagination-prev button,
.ant-pagination-next button {
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  user-select: none;
}
.ant-pagination-prev:hover button,
.ant-pagination-next:hover button {
  border-color: var(--ant-primary-5);
}
.ant-pagination-prev .ant-pagination-item-link,
.ant-pagination-next .ant-pagination-item-link {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  outline: none;
  transition: all 0.3s;
}
.ant-pagination-prev:focus-visible .ant-pagination-item-link,
.ant-pagination-next:focus-visible .ant-pagination-item-link {
  color: var(--ant-primary-color);
  border-color: var(--ant-primary-color);
}
.ant-pagination-prev:hover .ant-pagination-item-link,
.ant-pagination-next:hover .ant-pagination-item-link {
  color: var(--ant-primary-color);
  border-color: var(--ant-primary-color);
}
.ant-pagination-disabled,
.ant-pagination-disabled:hover {
  cursor: not-allowed;
}
.ant-pagination-disabled .ant-pagination-item-link,
.ant-pagination-disabled:hover .ant-pagination-item-link {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  cursor: not-allowed;
}
.ant-pagination-disabled:focus-visible {
  cursor: not-allowed;
}
.ant-pagination-disabled:focus-visible .ant-pagination-item-link {
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  cursor: not-allowed;
}
.ant-pagination-slash {
  margin: 0 10px 0 5px;
}
.ant-pagination-options {
  display: inline-block;
  margin-left: 16px;
  vertical-align: middle;
}
@media all and (-ms-high-contrast: none) {
  .ant-pagination-options *::-ms-backdrop,
  .ant-pagination-options {
    vertical-align: top;
  }
}
.ant-pagination-options-size-changer.ant-select {
  display: inline-block;
  width: auto;
}
.ant-pagination-options-quick-jumper {
  display: inline-block;
  height: 32px;
  margin-left: 8px;
  line-height: 32px;
  vertical-align: top;
}
.ant-pagination-options-quick-jumper input {
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  /* stylelint-disable-next-line selector-no-vendor-prefix */
  width: 50px;
  height: 32px;
  margin: 0 8px;
}
.ant-pagination-options-quick-jumper input::-moz-placeholder {
  opacity: 1;
}
.ant-pagination-options-quick-jumper input::placeholder {
  color: #bfbfbf;
  user-select: none;
}
.ant-pagination-options-quick-jumper input:placeholder-shown {
  text-overflow: ellipsis;
}
.ant-pagination-options-quick-jumper input:hover {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
}
.ant-pagination-options-quick-jumper input:focus,
.ant-pagination-options-quick-jumper input-focused {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-pagination-options-quick-jumper input-disabled {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-pagination-options-quick-jumper input-disabled:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-pagination-options-quick-jumper input[disabled] {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
}
.ant-pagination-options-quick-jumper input[disabled]:hover {
  border-color: #d9d9d9;
  border-right-width: 1px;
}
.ant-pagination-options-quick-jumper input-borderless,
.ant-pagination-options-quick-jumper input-borderless:hover,
.ant-pagination-options-quick-jumper input-borderless:focus,
.ant-pagination-options-quick-jumper input-borderless-focused,
.ant-pagination-options-quick-jumper input-borderless-disabled,
.ant-pagination-options-quick-jumper input-borderless[disabled] {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
textarea.ant-pagination-options-quick-jumper input {
  max-width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5715;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
}
.ant-pagination-options-quick-jumper input-lg {
  padding: 6.5px 11px;
  font-size: 16px;
}
.ant-pagination-options-quick-jumper input-sm {
  padding: 0px 7px;
}
.ant-pagination-simple .ant-pagination-prev,
.ant-pagination-simple .ant-pagination-next {
  height: 24px;
  line-height: 24px;
  vertical-align: top;
}
.ant-pagination-simple .ant-pagination-prev .ant-pagination-item-link,
.ant-pagination-simple .ant-pagination-next .ant-pagination-item-link {
  height: 24px;
  background-color: transparent;
  border: 0;
}
.ant-pagination-simple .ant-pagination-prev .ant-pagination-item-link::after,
.ant-pagination-simple .ant-pagination-next .ant-pagination-item-link::after {
  height: 24px;
  line-height: 24px;
}
.ant-pagination-simple .ant-pagination-simple-pager {
  display: inline-block;
  height: 24px;
  margin-right: 8px;
}
.ant-pagination-simple .ant-pagination-simple-pager input {
  box-sizing: border-box;
  height: 100%;
  margin-right: 8px;
  padding: 0 6px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  outline: none;
  transition: border-color 0.3s;
}
.ant-pagination-simple .ant-pagination-simple-pager input:hover {
  border-color: var(--ant-primary-color);
}
.ant-pagination-simple .ant-pagination-simple-pager input:focus {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
}
.ant-pagination-simple .ant-pagination-simple-pager input[disabled] {
  color: rgba(0, 0, 0, 0.25);
  background: #f5f5f5;
  border-color: #d9d9d9;
  cursor: not-allowed;
}
.ant-pagination.mini .ant-pagination-total-text,
.ant-pagination.mini .ant-pagination-simple-pager {
  height: 24px;
  line-height: 24px;
}
.ant-pagination.mini .ant-pagination-item {
  min-width: 24px;
  height: 24px;
  margin: 0;
  line-height: 22px;
}
.ant-pagination.mini .ant-pagination-item:not(.ant-pagination-item-active) {
  background: transparent;
  border-color: transparent;
}
.ant-pagination.mini .ant-pagination-prev,
.ant-pagination.mini .ant-pagination-next {
  min-width: 24px;
  height: 24px;
  margin: 0;
  line-height: 24px;
}
.ant-pagination.mini .ant-pagination-prev .ant-pagination-item-link,
.ant-pagination.mini .ant-pagination-next .ant-pagination-item-link {
  background: transparent;
  border-color: transparent;
}
.ant-pagination.mini .ant-pagination-prev .ant-pagination-item-link::after,
.ant-pagination.mini .ant-pagination-next .ant-pagination-item-link::after {
  height: 24px;
  line-height: 24px;
}
.ant-pagination.mini .ant-pagination-jump-prev,
.ant-pagination.mini .ant-pagination-jump-next {
  height: 24px;
  margin-right: 0;
  line-height: 24px;
}
.ant-pagination.mini .ant-pagination-options {
  margin-left: 2px;
}
.ant-pagination.mini .ant-pagination-options-size-changer {
  top: 0px;
}
.ant-pagination.mini .ant-pagination-options-quick-jumper {
  height: 24px;
  line-height: 24px;
}
.ant-pagination.mini .ant-pagination-options-quick-jumper input {
  padding: 0px 7px;
  width: 44px;
  height: 24px;
}
.ant-pagination.ant-pagination-disabled {
  cursor: not-allowed;
}
.ant-pagination.ant-pagination-disabled .ant-pagination-item {
  background: #f5f5f5;
  border-color: #d9d9d9;
  cursor: not-allowed;
}
.ant-pagination.ant-pagination-disabled .ant-pagination-item a {
  color: rgba(0, 0, 0, 0.25);
  background: transparent;
  border: none;
  cursor: not-allowed;
}
.ant-pagination.ant-pagination-disabled .ant-pagination-item-active {
  background: #e6e6e6;
}
.ant-pagination.ant-pagination-disabled .ant-pagination-item-active a {
  color: rgba(0, 0, 0, 0.25);
}
.ant-pagination.ant-pagination-disabled .ant-pagination-item-link {
  color: rgba(0, 0, 0, 0.25);
  background: #f5f5f5;
  border-color: #d9d9d9;
  cursor: not-allowed;
}
.ant-pagination-simple.ant-pagination.ant-pagination-disabled .ant-pagination-item-link {
  background: transparent;
}
.ant-pagination.ant-pagination-disabled .ant-pagination-item-link-icon {
  opacity: 0;
}
.ant-pagination.ant-pagination-disabled .ant-pagination-item-ellipsis {
  opacity: 1;
}
.ant-pagination.ant-pagination-disabled .ant-pagination-simple-pager {
  color: rgba(0, 0, 0, 0.25);
}
@media only screen and (max-width: 992px) {
  .ant-pagination-item-after-jump-prev,
  .ant-pagination-item-before-jump-next {
    display: none;
  }
}
@media only screen and (max-width: 576px) {
  .ant-pagination-options {
    display: none;
  }
}
.ant-pagination-rtl .ant-pagination-total-text {
  margin-right: 0;
  margin-left: 8px;
}
.ant-pagination-rtl .ant-pagination-item,
.ant-pagination-rtl .ant-pagination-prev,
.ant-pagination-rtl .ant-pagination-jump-prev,
.ant-pagination-rtl .ant-pagination-jump-next {
  margin-right: 0;
  margin-left: 8px;
}
.ant-pagination-rtl .ant-pagination-slash {
  margin: 0 5px 0 10px;
}
.ant-pagination-rtl .ant-pagination-options {
  margin-right: 16px;
  margin-left: 0;
}
.ant-pagination-rtl .ant-pagination-options .ant-pagination-options-size-changer.ant-select {
  margin-right: 0;
  margin-left: 8px;
}
.ant-pagination-rtl .ant-pagination-options .ant-pagination-options-quick-jumper {
  margin-left: 0;
}
.ant-pagination-rtl.ant-pagination-simple .ant-pagination-simple-pager {
  margin-right: 0;
  margin-left: 8px;
}
.ant-pagination-rtl.ant-pagination-simple .ant-pagination-simple-pager input {
  margin-right: 0;
  margin-left: 8px;
}
.ant-pagination-rtl.ant-pagination.mini .ant-pagination-options {
  margin-right: 2px;
  margin-left: 0;
}
.ant-select-single .ant-select-selector {
  display: flex;
}
.ant-select-single .ant-select-selector .ant-select-selection-search {
  position: absolute;
  top: 0;
  right: 11px;
  bottom: 0;
  left: 11px;
}
.ant-select-single .ant-select-selector .ant-select-selection-search-input {
  width: 100%;
}
.ant-select-single .ant-select-selector .ant-select-selection-item,
.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
  padding: 0;
  line-height: 30px;
  transition: all 0.3s;
}
@supports (-moz-appearance: meterbar) {
  .ant-select-single .ant-select-selector .ant-select-selection-item,
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 30px;
  }
}
.ant-select-single .ant-select-selector .ant-select-selection-item {
  position: relative;
  user-select: none;
}
.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
  transition: none;
  pointer-events: none;
}
.ant-select-single .ant-select-selector::after,
.ant-select-single .ant-select-selector .ant-select-selection-item::after,
.ant-select-single .ant-select-selector .ant-select-selection-placeholder::after {
  display: inline-block;
  width: 0;
  visibility: hidden;
  content: '\a0';
}
.ant-select-single.ant-select-show-arrow .ant-select-selection-search {
  right: 25px;
}
.ant-select-single.ant-select-show-arrow .ant-select-selection-item,
.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
  padding-right: 18px;
}
.ant-select-single.ant-select-open .ant-select-selection-item {
  color: #bfbfbf;
}
.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
  width: 100%;
  height: 32px;
  padding: 0 11px;
}
.ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
  height: 30px;
}
.ant-select-single:not(.ant-select-customize-input) .ant-select-selector::after {
  line-height: 30px;
}
.ant-select-single.ant-select-customize-input .ant-select-selector::after {
  display: none;
}
.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-search {
  position: static;
  width: 100%;
}
.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-placeholder {
  position: absolute;
  right: 0;
  left: 0;
  padding: 0 11px;
}
.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-placeholder::after {
  display: none;
}
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
  height: 40px;
}
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector::after,
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item,
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-placeholder {
  line-height: 38px;
}
.ant-select-single.ant-select-lg:not(.ant-select-customize-input):not(.ant-select-customize-input) .ant-select-selection-search-input {
  height: 38px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector {
  height: 24px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector::after,
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item,
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-placeholder {
  line-height: 22px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input):not(.ant-select-customize-input) .ant-select-selection-search-input {
  height: 22px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selection-search {
  right: 7px;
  left: 7px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector {
  padding: 0 7px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-search {
  right: 28px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-item,
.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-placeholder {
  padding-right: 21px;
}
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
  padding: 0 11px;
}
/**
 * Do not merge `height` & `line-height` under style with `selection` & `search`,
 * since chrome may update to redesign with its align logic.
 */
.ant-select-selection-overflow {
  position: relative;
  display: flex;
  flex: auto;
  flex-wrap: wrap;
  max-width: 100%;
}
.ant-select-selection-overflow-item {
  flex: none;
  align-self: center;
  max-width: 100%;
}
.ant-select-multiple .ant-select-selector {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1px 4px;
}
.ant-select-show-search.ant-select-multiple .ant-select-selector {
  cursor: text;
}
.ant-select-disabled.ant-select-multiple .ant-select-selector {
  background: #f5f5f5;
  cursor: not-allowed;
}
.ant-select-multiple .ant-select-selector::after {
  display: inline-block;
  width: 0;
  margin: 2px 0;
  line-height: 24px;
  content: '\a0';
}
.ant-select-multiple.ant-select-show-arrow .ant-select-selector,
.ant-select-multiple.ant-select-allow-clear .ant-select-selector {
  padding-right: 24px;
}
.ant-select-multiple .ant-select-selection-item {
  position: relative;
  display: flex;
  flex: none;
  box-sizing: border-box;
  max-width: 100%;
  height: 24px;
  margin-top: 2px;
  margin-bottom: 2px;
  line-height: 22px;
  background: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  cursor: default;
  transition: font-size 0.3s, line-height 0.3s, height 0.3s;
  user-select: none;
  margin-inline-end: 4px;
  padding-inline-start: 8px;
  padding-inline-end: 4px;
}
.ant-select-disabled.ant-select-multiple .ant-select-selection-item {
  color: #bfbfbf;
  border-color: #d9d9d9;
  cursor: not-allowed;
}
.ant-select-multiple .ant-select-selection-item-content {
  display: inline-block;
  margin-right: 4px;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
}
.ant-select-multiple .ant-select-selection-item-remove {
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  color: rgba(0, 0, 0, 0.45);
  font-weight: bold;
  font-size: 10px;
  line-height: inherit;
  cursor: pointer;
}
.ant-select-multiple .ant-select-selection-item-remove > * {
  line-height: 1;
}
.ant-select-multiple .ant-select-selection-item-remove svg {
  display: inline-block;
}
.ant-select-multiple .ant-select-selection-item-remove::before {
  display: none;
}
.ant-select-multiple .ant-select-selection-item-remove .ant-select-multiple .ant-select-selection-item-remove-icon {
  display: block;
}
.ant-select-multiple .ant-select-selection-item-remove > .anticon {
  vertical-align: middle;
}
.ant-select-multiple .ant-select-selection-item-remove:hover {
  color: rgba(0, 0, 0, 0.75);
}
.ant-select-multiple .ant-select-selection-overflow-item + .ant-select-selection-overflow-item .ant-select-selection-search {
  margin-inline-start: 0;
}
.ant-select-multiple .ant-select-selection-search {
  position: relative;
  max-width: 100%;
  margin-inline-start: 7px;
}
.ant-select-multiple .ant-select-selection-search-input,
.ant-select-multiple .ant-select-selection-search-mirror {
  height: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  line-height: 24px;
  transition: all 0.3s;
}
.ant-select-multiple .ant-select-selection-search-input {
  width: 100%;
  min-width: 4.1px;
}
.ant-select-multiple .ant-select-selection-search-mirror {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  white-space: pre;
  visibility: hidden;
}
.ant-select-multiple .ant-select-selection-placeholder {
  position: absolute;
  top: 50%;
  right: 11px;
  left: 11px;
  transform: translateY(-50%);
  transition: all 0.3s;
}
.ant-select-multiple.ant-select-lg .ant-select-selector::after {
  line-height: 32px;
}
.ant-select-multiple.ant-select-lg .ant-select-selection-item {
  height: 32px;
  line-height: 30px;
}
.ant-select-multiple.ant-select-lg .ant-select-selection-search {
  height: 32px;
  line-height: 32px;
}
.ant-select-multiple.ant-select-lg .ant-select-selection-search-input,
.ant-select-multiple.ant-select-lg .ant-select-selection-search-mirror {
  height: 32px;
  line-height: 30px;
}
.ant-select-multiple.ant-select-sm .ant-select-selector::after {
  line-height: 16px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-item {
  height: 16px;
  line-height: 14px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-search {
  height: 16px;
  line-height: 16px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-search-input,
.ant-select-multiple.ant-select-sm .ant-select-selection-search-mirror {
  height: 16px;
  line-height: 14px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-placeholder {
  left: 7px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-search {
  margin-inline-start: 3px;
}
.ant-select-multiple.ant-select-lg .ant-select-selection-item {
  height: 32px;
  line-height: 32px;
}
.ant-select-disabled .ant-select-selection-item-remove {
  display: none;
}
.ant-select-status-error.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) .ant-select-selector {
  background-color: #fff;
  border-color: var(--ant-error-color) !important;
}
.ant-select-status-error.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-open .ant-select-selector,
.ant-select-status-error.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-focused .ant-select-selector {
  border-color: var(--ant-error-color-hover);
  box-shadow: 0 0 0 2px var(--ant-error-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-select-status-warning.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) .ant-select-selector {
  background-color: #fff;
  border-color: var(--ant-warning-color) !important;
}
.ant-select-status-warning.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-open .ant-select-selector,
.ant-select-status-warning.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-focused .ant-select-selector {
  border-color: var(--ant-warning-color-hover);
  box-shadow: 0 0 0 2px var(--ant-warning-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-select-status-error.ant-select-has-feedback .ant-select-clear,
.ant-select-status-warning.ant-select-has-feedback .ant-select-clear,
.ant-select-status-success.ant-select-has-feedback .ant-select-clear,
.ant-select-status-validating.ant-select-has-feedback .ant-select-clear {
  right: 32px;
}
.ant-select-status-error.ant-select-has-feedback .ant-select-selection-selected-value,
.ant-select-status-warning.ant-select-has-feedback .ant-select-selection-selected-value,
.ant-select-status-success.ant-select-has-feedback .ant-select-selection-selected-value,
.ant-select-status-validating.ant-select-has-feedback .ant-select-selection-selected-value {
  padding-right: 42px;
}
/* Reset search input style */
.ant-select {
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
  cursor: pointer;
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  position: relative;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector input {
  cursor: pointer;
}
.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  cursor: text;
}
.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector input {
  cursor: auto;
}
.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
  border-color: var(--ant-primary-color-hover);
  box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  border-right-width: 1px;
  outline: 0;
}
.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  color: rgba(0, 0, 0, 0.25);
  background: #f5f5f5;
  cursor: not-allowed;
}
.ant-select-multiple.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  background: #f5f5f5;
}
.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector input {
  cursor: not-allowed;
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  appearance: none;
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input::-webkit-search-cancel-button {
  display: none;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
}
.ant-select:not(.ant-select-disabled):hover .ant-select-selector {
  border-color: var(--ant-primary-5);
  border-right-width: 1px;
}
.ant-select-selection-item {
  flex: 1;
  overflow: hidden;
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@media all and (-ms-high-contrast: none) {
  .ant-select-selection-item *::-ms-backdrop,
  .ant-select-selection-item {
    flex: auto;
  }
}
.ant-select-selection-placeholder {
  flex: 1;
  overflow: hidden;
  color: #bfbfbf;
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none;
}
@media all and (-ms-high-contrast: none) {
  .ant-select-selection-placeholder *::-ms-backdrop,
  .ant-select-selection-placeholder {
    flex: auto;
  }
}
.ant-select-arrow {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 50%;
  right: 11px;
  display: flex;
  align-items: center;
  height: 12px;
  margin-top: -6px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  line-height: 1;
  text-align: center;
  pointer-events: none;
}
.ant-select-arrow > * {
  line-height: 1;
}
.ant-select-arrow svg {
  display: inline-block;
}
.ant-select-arrow::before {
  display: none;
}
.ant-select-arrow .ant-select-arrow-icon {
  display: block;
}
.ant-select-arrow .anticon {
  vertical-align: top;
  transition: transform 0.3s;
}
.ant-select-arrow .anticon > svg {
  vertical-align: top;
}
.ant-select-arrow .anticon:not(.ant-select-suffix) {
  pointer-events: auto;
}
.ant-select-disabled .ant-select-arrow {
  cursor: not-allowed;
}
.ant-select-arrow > *:not(:last-child) {
  margin-inline-end: 8px;
}
.ant-select-clear {
  position: absolute;
  top: 50%;
  right: 11px;
  z-index: 1;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  font-style: normal;
  line-height: 1;
  text-align: center;
  text-transform: none;
  background: #fff;
  cursor: pointer;
  opacity: 0;
  transition: color 0.3s ease, opacity 0.15s ease;
  text-rendering: auto;
}
.ant-select-clear::before {
  display: block;
}
.ant-select-clear:hover {
  color: rgba(0, 0, 0, 0.45);
}
.ant-select:hover .ant-select-clear {
  opacity: 1;
}
.ant-select-dropdown {
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: 1050;
  box-sizing: border-box;
  padding: 4px 0;
  overflow: hidden;
  font-size: 14px;
  font-variant: initial;
  background-color: #fff;
  border-radius: 2px;
  outline: none;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
.ant-select-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-select-dropdown-placement-bottomLeft,
.ant-select-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-select-dropdown-placement-bottomLeft {
  animation-name: antSlideUpIn;
}
.ant-select-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-select-dropdown-placement-topLeft,
.ant-select-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-select-dropdown-placement-topLeft {
  animation-name: antSlideDownIn;
}
.ant-select-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-select-dropdown-placement-bottomLeft {
  animation-name: antSlideUpOut;
}
.ant-select-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-select-dropdown-placement-topLeft {
  animation-name: antSlideDownOut;
}
.ant-select-dropdown-hidden {
  display: none;
}
.ant-select-dropdown-empty {
  color: rgba(0, 0, 0, 0.25);
}
.ant-select-item-empty {
  position: relative;
  display: block;
  min-height: 32px;
  padding: 5px 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.25);
}
.ant-select-item {
  position: relative;
  display: block;
  min-height: 32px;
  padding: 5px 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.ant-select-item-group {
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  cursor: default;
}
.ant-select-item-option {
  display: flex;
}
.ant-select-item-option-content {
  flex: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ant-select-item-option-state {
  flex: none;
}
.ant-select-item-option-active:not(.ant-select-item-option-disabled) {
  background-color: #f5f5f5;
}
.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  background-color: var(--ant-primary-1);
}
.ant-select-item-option-selected:not(.ant-select-item-option-disabled) .ant-select-item-option-state {
  color: var(--ant-primary-color);
}
.ant-select-item-option-disabled {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-select-item-option-disabled.ant-select-item-option-selected {
  background-color: #f5f5f5;
}
.ant-select-item-option-grouped {
  padding-left: 24px;
}
.ant-select-lg {
  font-size: 16px;
}
.ant-select-borderless .ant-select-selector {
  background-color: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
.ant-select.ant-select-in-form-item {
  width: 100%;
}
.ant-select-rtl {
  direction: rtl;
}
.ant-select-rtl .ant-select-arrow {
  right: initial;
  left: 11px;
}
.ant-select-rtl .ant-select-clear {
  right: initial;
  left: 11px;
}
.ant-select-dropdown-rtl {
  direction: rtl;
}
.ant-select-dropdown-rtl .ant-select-item-option-grouped {
  padding-right: 24px;
  padding-left: 12px;
}
.ant-select-rtl.ant-select-multiple.ant-select-show-arrow .ant-select-selector,
.ant-select-rtl.ant-select-multiple.ant-select-allow-clear .ant-select-selector {
  padding-right: 4px;
  padding-left: 24px;
}
.ant-select-rtl.ant-select-multiple .ant-select-selection-item {
  text-align: right;
}
.ant-select-rtl.ant-select-multiple .ant-select-selection-item-content {
  margin-right: 0;
  margin-left: 4px;
  text-align: right;
}
.ant-select-rtl.ant-select-multiple .ant-select-selection-search-mirror {
  right: 0;
  left: auto;
}
.ant-select-rtl.ant-select-multiple .ant-select-selection-placeholder {
  right: 11px;
  left: auto;
}
.ant-select-rtl.ant-select-multiple.ant-select-sm .ant-select-selection-placeholder {
  right: 7px;
}
.ant-select-rtl.ant-select-single .ant-select-selector .ant-select-selection-item,
.ant-select-rtl.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
  right: 0;
  left: 9px;
  text-align: right;
}
.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-search {
  right: 11px;
  left: 25px;
}
.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-item,
.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
  padding-right: 0;
  padding-left: 18px;
}
.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-search {
  right: 6px;
}
.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-item,
.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-placeholder {
  padding-right: 0;
  padding-left: 21px;
}
.ant-select-dropdown {
  top: 100%;
  left: 0;
  position: relative;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 4px;
  display: block;
}
.ant-select-dropdown .cdk-virtual-scroll-content-wrapper {
  right: 0;
}
.ant-select-dropdown .full-width {
  contain: initial;
}
.ant-select-dropdown .full-width .cdk-virtual-scroll-content-wrapper {
  position: static;
}
.ant-select-dropdown .full-width .cdk-virtual-scroll-spacer {
  position: absolute;
  top: 0;
  width: 1px;
}
nz-pagination {
  display: block;
}
`
          
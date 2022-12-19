
import { css } from 'lit-element';
export default css`.ant-upload {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  outline: 0;
}
.ant-upload p {
  margin: 0;
}
.ant-upload-btn {
  display: block;
  width: 100%;
  outline: none;
}
.ant-upload input[type='file'] {
  cursor: pointer;
}
.ant-upload.ant-upload-select {
  display: inline-block;
}
.ant-upload.ant-upload-disabled {
  cursor: not-allowed;
}
.ant-upload.ant-upload-select-picture-card {
  width: 104px;
  height: 104px;
  margin-right: 8px;
  margin-bottom: 8px;
  text-align: center;
  vertical-align: top;
  background-color: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 2px;
  cursor: pointer;
  transition: border-color 0.3s;
}
.ant-upload.ant-upload-select-picture-card > .ant-upload {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}
.ant-upload.ant-upload-select-picture-card:hover {
  border-color: var(--ant-primary-color);
}
.ant-upload-disabled.ant-upload.ant-upload-select-picture-card:hover {
  border-color: #d9d9d9;
}
.ant-upload.ant-upload-drag {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  background: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 2px;
  cursor: pointer;
  transition: border-color 0.3s;
}
.ant-upload.ant-upload-drag .ant-upload {
  padding: 16px 0;
}
.ant-upload.ant-upload-drag.ant-upload-drag-hover:not(.ant-upload-disabled) {
  border-color: var(--ant-primary-7);
}
.ant-upload.ant-upload-drag.ant-upload-disabled {
  cursor: not-allowed;
}
.ant-upload.ant-upload-drag .ant-upload-btn {
  display: table;
  height: 100%;
}
.ant-upload.ant-upload-drag .ant-upload-drag-container {
  display: table-cell;
  vertical-align: middle;
}
.ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover {
  border-color: var(--ant-primary-5);
}
.ant-upload.ant-upload-drag p.ant-upload-drag-icon {
  margin-bottom: 20px;
}
.ant-upload.ant-upload-drag p.ant-upload-drag-icon .anticon {
  color: var(--ant-primary-5);
  font-size: 48px;
}
.ant-upload.ant-upload-drag p.ant-upload-text {
  margin: 0 0 4px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
}
.ant-upload.ant-upload-drag p.ant-upload-hint {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.ant-upload.ant-upload-drag .anticon-plus {
  color: rgba(0, 0, 0, 0.25);
  font-size: 30px;
  transition: all 0.3s;
}
.ant-upload.ant-upload-drag .anticon-plus:hover {
  color: rgba(0, 0, 0, 0.45);
}
.ant-upload.ant-upload-drag:hover .anticon-plus {
  color: rgba(0, 0, 0, 0.45);
}
.ant-upload-picture-card-wrapper {
  display: inline-block;
  width: 100%;
}
.ant-upload-picture-card-wrapper::before {
  display: table;
  content: '';
}
.ant-upload-picture-card-wrapper::after {
  display: table;
  clear: both;
  content: '';
}
.ant-upload-list {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  line-height: 1.5715;
}
.ant-upload-list::before {
  display: table;
  content: '';
}
.ant-upload-list::after {
  display: table;
  clear: both;
  content: '';
}
.ant-upload-list-item {
  position: relative;
  height: 22.001px;
  margin-top: 8px;
  font-size: 14px;
}
.ant-upload-list-item-name {
  display: inline-block;
  width: 100%;
  padding-left: 22px;
  overflow: hidden;
  line-height: 1.5715;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ant-upload-list-item-card-actions {
  position: absolute;
  right: 0;
}
.ant-upload-list-item-card-actions-btn {
  opacity: 0;
}
.ant-upload-list-item-card-actions-btn.ant-btn-sm {
  height: 22.001px;
  line-height: 1;
  vertical-align: top;
}
.ant-upload-list-item-card-actions.picture {
  top: 22px;
  line-height: 0;
}
.ant-upload-list-item-card-actions-btn:focus,
.ant-upload-list-item-card-actions.picture .ant-upload-list-item-card-actions-btn {
  opacity: 1;
}
.ant-upload-list-item-card-actions .anticon {
  color: rgba(0, 0, 0, 0.45);
  transition: all 0.3s;
}
.ant-upload-list-item-card-actions:hover .anticon {
  color: rgba(0, 0, 0, 0.85);
}
.ant-upload-list-item-info {
  height: 100%;
  transition: background-color 0.3s;
}
.ant-upload-list-item-info > span {
  display: block;
  width: 100%;
  height: 100%;
}
.ant-upload-list-item-info .anticon-loading .anticon,
.ant-upload-list-item-info .ant-upload-text-icon .anticon {
  position: absolute;
  top: 5px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.ant-upload-list-item:hover .ant-upload-list-item-info {
  background-color: #f5f5f5;
}
.ant-upload-list-item:hover .ant-upload-list-item-card-actions-btn {
  opacity: 1;
}
.ant-upload-list-item-error,
.ant-upload-list-item-error .ant-upload-text-icon > .anticon,
.ant-upload-list-item-error .ant-upload-list-item-name {
  color: var(--ant-error-color);
}
.ant-upload-list-item-error .ant-upload-list-item-card-actions .anticon {
  color: var(--ant-error-color);
}
.ant-upload-list-item-error .ant-upload-list-item-card-actions-btn {
  opacity: 1;
}
.ant-upload-list-item-progress {
  position: absolute;
  bottom: -12px;
  width: 100%;
  padding-left: 26px;
  font-size: 14px;
  line-height: 0;
}
.ant-upload-list-picture .ant-upload-list-item,
.ant-upload-list-picture-card .ant-upload-list-item {
  position: relative;
  height: 66px;
  padding: 8px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
.ant-upload-list-picture .ant-upload-list-item:hover,
.ant-upload-list-picture-card .ant-upload-list-item:hover {
  background: transparent;
}
.ant-upload-list-picture .ant-upload-list-item-error,
.ant-upload-list-picture-card .ant-upload-list-item-error {
  border-color: var(--ant-error-color);
}
.ant-upload-list-picture .ant-upload-list-item-info,
.ant-upload-list-picture-card .ant-upload-list-item-info {
  padding: 0;
}
.ant-upload-list-picture .ant-upload-list-item:hover .ant-upload-list-item-info,
.ant-upload-list-picture-card .ant-upload-list-item:hover .ant-upload-list-item-info {
  background: transparent;
}
.ant-upload-list-picture .ant-upload-list-item-uploading,
.ant-upload-list-picture-card .ant-upload-list-item-uploading {
  border-style: dashed;
}
.ant-upload-list-picture .ant-upload-list-item-thumbnail,
.ant-upload-list-picture-card .ant-upload-list-item-thumbnail {
  width: 48px;
  height: 48px;
  line-height: 60px;
  text-align: center;
  opacity: 0.8;
}
.ant-upload-list-picture .ant-upload-list-item-thumbnail .anticon,
.ant-upload-list-picture-card .ant-upload-list-item-thumbnail .anticon {
  font-size: 26px;
}
.ant-upload-list-picture .ant-upload-list-item-error .ant-upload-list-item-thumbnail .anticon svg path[fill='#e6f7ff'],
.ant-upload-list-picture-card .ant-upload-list-item-error .ant-upload-list-item-thumbnail .anticon svg path[fill='#e6f7ff'] {
  fill: var(--ant-error-color-deprecated-bg);
}
.ant-upload-list-picture .ant-upload-list-item-error .ant-upload-list-item-thumbnail .anticon svg path[fill='#1890ff'],
.ant-upload-list-picture-card .ant-upload-list-item-error .ant-upload-list-item-thumbnail .anticon svg path[fill='#1890ff'] {
  fill: var(--ant-error-color);
}
.ant-upload-list-picture .ant-upload-list-item-icon,
.ant-upload-list-picture-card .ant-upload-list-item-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 26px;
  transform: translate(-50%, -50%);
}
.ant-upload-list-picture .ant-upload-list-item-icon .anticon,
.ant-upload-list-picture-card .ant-upload-list-item-icon .anticon {
  font-size: 26px;
}
.ant-upload-list-picture .ant-upload-list-item-image,
.ant-upload-list-picture-card .ant-upload-list-item-image {
  max-width: 100%;
}
.ant-upload-list-picture .ant-upload-list-item-thumbnail img,
.ant-upload-list-picture-card .ant-upload-list-item-thumbnail img {
  display: block;
  width: 48px;
  height: 48px;
  overflow: hidden;
}
.ant-upload-list-picture .ant-upload-list-item-name,
.ant-upload-list-picture-card .ant-upload-list-item-name {
  display: inline-block;
  box-sizing: border-box;
  max-width: 100%;
  margin: 0 0 0 8px;
  padding-right: 8px;
  padding-left: 48px;
  overflow: hidden;
  line-height: 44px;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: all 0.3s;
}
.ant-upload-list-picture .ant-upload-list-item-uploading .ant-upload-list-item-name,
.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-name {
  margin-bottom: 12px;
}
.ant-upload-list-picture .ant-upload-list-item-progress,
.ant-upload-list-picture-card .ant-upload-list-item-progress {
  bottom: 14px;
  width: calc(100% - 24px);
  margin-top: 0;
  padding-left: 56px;
}
.ant-upload-list-picture-card-container {
  display: inline-block;
  width: 104px;
  height: 104px;
  margin: 0 8px 8px 0;
  vertical-align: top;
}
.ant-upload-list-picture-card .ant-upload-list-item {
  height: 100%;
  margin: 0;
}
.ant-upload-list-picture-card .ant-upload-list-item-info {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.ant-upload-list-picture-card .ant-upload-list-item-info::before {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.3s;
  content: ' ';
}
.ant-upload-list-picture-card .ant-upload-list-item:hover .ant-upload-list-item-info::before {
  opacity: 1;
}
.ant-upload-list-picture-card .ant-upload-list-item-actions {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s;
}
.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-eye,
.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-download,
.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-delete {
  z-index: 10;
  width: 16px;
  margin: 0 4px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}
.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-eye:hover,
.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-download:hover,
.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-delete:hover {
  color: #fff;
}
.ant-upload-list-picture-card .ant-upload-list-item-info:hover + .ant-upload-list-item-actions,
.ant-upload-list-picture-card .ant-upload-list-item-actions:hover {
  opacity: 1;
}
.ant-upload-list-picture-card .ant-upload-list-item-thumbnail,
.ant-upload-list-picture-card .ant-upload-list-item-thumbnail img {
  position: static;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.ant-upload-list-picture-card .ant-upload-list-item-name {
  display: none;
  margin: 8px 0 0;
  padding: 0;
  line-height: 1.5715;
  text-align: center;
}
.ant-upload-list-picture-card .ant-upload-list-item-file + .ant-upload-list-item-name {
  position: absolute;
  bottom: 10px;
  display: block;
}
.ant-upload-list-picture-card .ant-upload-list-item-uploading.ant-upload-list-item {
  background-color: #fafafa;
}
.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info {
  height: auto;
}
.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info::before,
.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info .anticon-eye,
.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info .anticon-delete {
  display: none;
}
.ant-upload-list-picture-card .ant-upload-list-item-progress {
  bottom: 32px;
  width: calc(100% - 14px);
  padding-left: 0;
}
.ant-upload-list-text-container,
.ant-upload-list-picture-container {
  transition: opacity 0.3s, height 0.3s;
}
.ant-upload-list-text-container::before,
.ant-upload-list-picture-container::before {
  display: table;
  width: 0;
  height: 0;
  content: '';
}
.ant-upload-list-text-container .ant-upload-span,
.ant-upload-list-picture-container .ant-upload-span {
  display: block;
  flex: auto;
}
.ant-upload-list-text .ant-upload-span,
.ant-upload-list-picture .ant-upload-span {
  display: flex;
  align-items: center;
}
.ant-upload-list-text .ant-upload-span > *,
.ant-upload-list-picture .ant-upload-span > * {
  flex: none;
}
.ant-upload-list-text .ant-upload-list-item-name,
.ant-upload-list-picture .ant-upload-list-item-name {
  flex: auto;
  margin: 0;
  padding: 0 8px;
}
.ant-upload-list-text .ant-upload-list-item-card-actions,
.ant-upload-list-picture .ant-upload-list-item-card-actions {
  position: static;
}
.ant-upload-list-text .ant-upload-text-icon .anticon {
  position: static;
}
.ant-upload-list .ant-upload-animate-inline-appear,
.ant-upload-list .ant-upload-animate-inline-enter,
.ant-upload-list .ant-upload-animate-inline-leave {
  animation-duration: 0.3s;
  animation-fill-mode: cubic-bezier(0.78, 0.14, 0.15, 0.86);
}
.ant-upload-list .ant-upload-animate-inline-appear,
.ant-upload-list .ant-upload-animate-inline-enter {
  animation-name: uploadAnimateInlineIn;
}
.ant-upload-list .ant-upload-animate-inline-leave {
  animation-name: uploadAnimateInlineOut;
}
@keyframes uploadAnimateInlineIn {
  from {
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
  }
}
@keyframes uploadAnimateInlineOut {
  to {
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
  }
}
.ant-upload-rtl {
  direction: rtl;
}
.ant-upload-rtl.ant-upload.ant-upload-select-picture-card {
  margin-right: auto;
  margin-left: 8px;
}
.ant-upload-list-rtl {
  direction: rtl;
}
.ant-upload-list-rtl .ant-upload-list-item-list-type-text:hover .ant-upload-list-item-name-icon-count-1 {
  padding-right: 22px;
  padding-left: 14px;
}
.ant-upload-list-rtl .ant-upload-list-item-list-type-text:hover .ant-upload-list-item-name-icon-count-2 {
  padding-right: 22px;
  padding-left: 28px;
}
.ant-upload-list-rtl .ant-upload-list-item-name {
  padding-right: 22px;
  padding-left: 0;
}
.ant-upload-list-rtl .ant-upload-list-item-name-icon-count-1 {
  padding-left: 14px;
}
.ant-upload-list-rtl .ant-upload-list-item-card-actions {
  right: auto;
  left: 0;
}
.ant-upload-list-rtl .ant-upload-list-item-card-actions .anticon {
  padding-right: 0;
  padding-left: 5px;
}
.ant-upload-list-rtl .ant-upload-list-item-info {
  padding: 0 4px 0 12px;
}
.ant-upload-list-rtl .ant-upload-list-item-error .ant-upload-list-item-card-actions .anticon {
  padding-right: 0;
  padding-left: 5px;
}
.ant-upload-list-rtl .ant-upload-list-item-progress {
  padding-right: 26px;
  padding-left: 0;
}
.ant-upload-list-picture .ant-upload-list-item-info,
.ant-upload-list-picture-card .ant-upload-list-item-info {
  padding: 0;
}
.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-thumbnail,
.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-thumbnail {
  right: 8px;
  left: auto;
}
.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-icon,
.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-icon {
  right: 50%;
  left: auto;
  transform: translate(50%, -50%);
}
.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-name,
.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-name {
  margin: 0 8px 0 0;
  padding-right: 48px;
  padding-left: 8px;
}
.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-name-icon-count-1,
.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-name-icon-count-1 {
  padding-right: 48px;
  padding-left: 18px;
}
.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-name-icon-count-2,
.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-name-icon-count-2 {
  padding-right: 48px;
  padding-left: 36px;
}
.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-progress,
.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-progress {
  padding-right: 0;
  padding-left: 0;
}
.ant-upload-list-rtl .ant-upload-list-picture-card-container {
  margin: 0 0 8px 8px;
}
.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-actions {
  right: 50%;
  left: auto;
  transform: translate(50%, -50%);
}
.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-file + .ant-upload-list-item-name {
  margin: 8px 0 0;
  padding: 0;
}
.ant-progress {
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
.ant-progress-line {
  position: relative;
  width: 100%;
  font-size: 14px;
}
.ant-progress-steps {
  display: inline-block;
}
.ant-progress-steps-outer {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ant-progress-steps-item {
  flex-shrink: 0;
  min-width: 2px;
  margin-right: 2px;
  background: #f3f3f3;
  transition: all 0.3s;
}
.ant-progress-steps-item-active {
  background: var(--ant-primary-color);
}
.ant-progress-small.ant-progress-line,
.ant-progress-small.ant-progress-line .ant-progress-text .anticon {
  font-size: 12px;
}
.ant-progress-outer {
  display: inline-block;
  width: 100%;
  margin-right: 0;
  padding-right: 0;
}
.ant-progress-show-info .ant-progress-outer {
  margin-right: calc(-2em - 8px);
  padding-right: calc(2em + 8px);
}
.ant-progress-inner {
  position: relative;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  vertical-align: middle;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 100px;
}
.ant-progress-circle-trail {
  stroke: rgba(0, 0, 0, 0.04);
}
.ant-progress-circle-path {
  animation: ant-progress-appear 0.3s;
}
.ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {
  stroke: var(--ant-primary-color);
}
.ant-progress-success-bg,
.ant-progress-bg {
  position: relative;
  background-color: var(--ant-primary-color);
  border-radius: 100px;
  transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
}
.ant-progress-success-bg {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--ant-success-color);
}
.ant-progress-text {
  display: inline-block;
  width: 2em;
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 1em;
  line-height: 1;
  white-space: nowrap;
  text-align: left;
  vertical-align: middle;
  word-break: normal;
}
.ant-progress-text .anticon {
  font-size: 14px;
}
.ant-progress-status-active .ant-progress-bg::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  border-radius: 10px;
  opacity: 0;
  animation: ant-progress-active 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
  content: '';
}
.ant-progress-status-exception .ant-progress-bg {
  background-color: var(--ant-error-color);
}
.ant-progress-status-exception .ant-progress-text {
  color: var(--ant-error-color);
}
.ant-progress-status-exception .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {
  stroke: var(--ant-error-color);
}
.ant-progress-status-success .ant-progress-bg {
  background-color: var(--ant-success-color);
}
.ant-progress-status-success .ant-progress-text {
  color: var(--ant-success-color);
}
.ant-progress-status-success .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {
  stroke: var(--ant-success-color);
}
.ant-progress-circle .ant-progress-inner {
  position: relative;
  line-height: 1;
  background-color: transparent;
}
.ant-progress-circle .ant-progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 1em;
  line-height: 1;
  white-space: normal;
  text-align: center;
  transform: translate(-50%, -50%);
}
.ant-progress-circle .ant-progress-text .anticon {
  font-size: 1.16666667em;
}
.ant-progress-circle.ant-progress-status-exception .ant-progress-text {
  color: var(--ant-error-color);
}
.ant-progress-circle.ant-progress-status-success .ant-progress-text {
  color: var(--ant-success-color);
}
@keyframes ant-progress-active {
  0% {
    transform: translateX(-100%) scaleX(0);
    opacity: 0.1;
  }
  20% {
    transform: translateX(-100%) scaleX(0);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0) scaleX(1);
    opacity: 0;
  }
}
.ant-progress-rtl {
  direction: rtl;
}
.ant-progress-rtl.ant-progress-show-info .ant-progress-outer {
  margin-right: 0;
  margin-left: calc(-2em - 8px);
  padding-right: 0;
  padding-left: calc(2em + 8px);
}
.ant-progress-rtl .ant-progress-success-bg {
  right: 0;
  left: auto;
}
.ant-progress-rtl.ant-progress-line .ant-progress-text,
.ant-progress-rtl.ant-progress-steps .ant-progress-text {
  margin-right: 8px;
  margin-left: 0;
  text-align: right;
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
.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item {
  float: unset;
}
`
          
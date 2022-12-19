
import { css } from 'lit-element';
export default css`.ant-image {
  position: relative;
  display: inline-block;
}
.ant-image-img {
  width: 100%;
  height: auto;
  vertical-align: middle;
}
.ant-image-img-placeholder {
  background-color: #f5f5f5;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 30%;
}
.ant-image-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
}
.ant-image-mask-info {
  padding: 0 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ant-image-mask-info .anticon {
  margin-inline-end: 4px;
}
.ant-image-mask:hover {
  opacity: 1;
}
.ant-image-placeholder {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.ant-image-preview {
  pointer-events: none;
  height: 100%;
  text-align: center;
}
.ant-image-preview.ant-zoom-enter,
.ant-image-preview.ant-zoom-appear {
  transform: none;
  opacity: 0;
  animation-duration: 0.3s;
  user-select: none;
}
.ant-image-preview-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
}
.ant-image-preview-mask-hidden {
  display: none;
}
.ant-image-preview-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: 0;
  -webkit-overflow-scrolling: touch;
}
.ant-image-preview-body {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
.ant-image-preview-img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
  transform: scale3d(1, 1, 1);
  cursor: grab;
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  user-select: none;
  pointer-events: auto;
}
.ant-image-preview-img-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}
.ant-image-preview-img-wrapper::before {
  display: inline-block;
  width: 1px;
  height: 50%;
  margin-right: -1px;
  content: '';
}
.ant-image-preview-moving .ant-image-preview-img {
  cursor: grabbing;
}
.ant-image-preview-moving .ant-image-preview-img-wrapper {
  transition-duration: 0s;
}
.ant-image-preview-wrap {
  z-index: 1080;
}
.ant-image-preview-operations {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  font-feature-settings: 'tnum';
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  color: rgba(255, 255, 255, 0.85);
  list-style: none;
  background: rgba(0, 0, 0, 0.1);
  pointer-events: auto;
}
.ant-image-preview-operations-operation {
  margin-left: 12px;
  padding: 12px;
  cursor: pointer;
}
.ant-image-preview-operations-operation-disabled {
  color: rgba(255, 255, 255, 0.25);
  pointer-events: none;
}
.ant-image-preview-operations-operation:last-of-type {
  margin-left: 0;
}
.ant-image-preview-operations-progress {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.ant-image-preview-operations-icon {
  font-size: 18px;
}
.ant-image-preview-switch-left,
.ant-image-preview-switch-right {
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-top: -22px;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  cursor: pointer;
  pointer-events: auto;
}
.ant-image-preview-switch-left-disabled,
.ant-image-preview-switch-right-disabled {
  color: rgba(255, 255, 255, 0.25);
  cursor: not-allowed;
}
.ant-image-preview-switch-left-disabled > .anticon,
.ant-image-preview-switch-right-disabled > .anticon {
  cursor: not-allowed;
}
.ant-image-preview-switch-left > .anticon,
.ant-image-preview-switch-right > .anticon {
  font-size: 18px;
}
.ant-image-preview-switch-left {
  left: 10px;
}
.ant-image-preview-switch-right {
  right: 10px;
}
.cdk-overlay-backdrop.ant-image-preview-mask {
  opacity: 1;
}
`
          
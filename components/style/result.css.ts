
import { css } from 'lit-element';
export default css`.ant-result {
  padding: 48px 32px;
}
.ant-result-success .ant-result-icon > .anticon {
  color: var(--ant-success-color);
}
.ant-result-error .ant-result-icon > .anticon {
  color: var(--ant-error-color);
}
.ant-result-info .ant-result-icon > .anticon {
  color: var(--ant-info-color);
}
.ant-result-warning .ant-result-icon > .anticon {
  color: var(--ant-warning-color);
}
.ant-result-image {
  width: 250px;
  height: 295px;
  margin: auto;
}
.ant-result-icon {
  margin-bottom: 24px;
  text-align: center;
}
.ant-result-icon > .anticon {
  font-size: 72px;
}
.ant-result-title {
  color: rgba(0, 0, 0, 0.85);
  font-size: 24px;
  line-height: 1.8;
  text-align: center;
}
.ant-result-subtitle {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
}
.ant-result-extra {
  margin: 24px 0 0 0;
  text-align: center;
}
.ant-result-extra > * {
  margin-right: 8px;
}
.ant-result-extra > *:last-child {
  margin-right: 0;
}
.ant-result-content {
  margin-top: 24px;
  padding: 24px 40px;
  background-color: #fafafa;
}
.ant-result-rtl {
  direction: rtl;
}
.ant-result-rtl .ant-result-extra > * {
  margin-right: 0;
  margin-left: 8px;
}
.ant-result-rtl .ant-result-extra > *:last-child {
  margin-left: 0;
}
nz-result {
  display: block;
}
`
          
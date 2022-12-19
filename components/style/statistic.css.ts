
import { css } from 'lit-element';
export default css`.ant-statistic {
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
.ant-statistic-title {
  margin-bottom: 4px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.ant-statistic-content {
  color: rgba(0, 0, 0, 0.85);
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
.ant-statistic-content-value {
  display: inline-block;
  direction: ltr;
}
.ant-statistic-content-prefix,
.ant-statistic-content-suffix {
  display: inline-block;
}
.ant-statistic-content-prefix {
  margin-right: 4px;
}
.ant-statistic-content-suffix {
  margin-left: 4px;
}
.ant-statistic-rtl {
  direction: rtl;
}
.ant-statistic-rtl .ant-statistic-content-prefix {
  margin-right: 0;
  margin-left: 4px;
}
.ant-statistic-rtl .ant-statistic-content-suffix {
  margin-right: 4px;
  margin-left: 0;
}
`
          
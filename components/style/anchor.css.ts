
import { css } from 'lit-element';
export default css`.ant-anchor {
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
  padding-left: 2px;
}
.ant-anchor-wrapper {
  margin-left: -4px;
  padding-left: 4px;
  overflow: auto;
  background-color: transparent;
}
.ant-anchor-ink {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
.ant-anchor-ink::before {
  position: relative;
  display: block;
  width: 2px;
  height: 100%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.06);
  content: ' ';
}
.ant-anchor-ink-ball {
  position: absolute;
  left: 50%;
  display: none;
  width: 8px;
  height: 8px;
  background-color: #fff;
  border: 2px solid var(--ant-primary-color);
  border-radius: 8px;
  transform: translateX(-50%);
  transition: top 0.3s ease-in-out;
}
.ant-anchor-ink-ball.visible {
  display: inline-block;
}
.ant-anchor-fixed .ant-anchor-ink .ant-anchor-ink-ball {
  display: none;
}
.ant-anchor-link {
  padding: 4px 0 4px 16px;
}
.ant-anchor-link-title {
  position: relative;
  display: block;
  margin-bottom: 3px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: all 0.3s;
}
.ant-anchor-link-title:only-child {
  margin-bottom: 0;
}
.ant-anchor-link-active > .ant-anchor-link-title {
  color: var(--ant-primary-color);
}
.ant-anchor-link .ant-anchor-link {
  padding-top: 2px;
  padding-bottom: 2px;
}
.ant-anchor-rtl {
  direction: rtl;
}
.ant-anchor-rtl.ant-anchor-wrapper {
  margin-right: -4px;
  margin-left: 0;
  padding-right: 4px;
  padding-left: 0;
}
.ant-anchor-rtl .ant-anchor-ink {
  right: 0;
  left: auto;
}
.ant-anchor-rtl .ant-anchor-ink-ball {
  right: 50%;
  left: 0;
  transform: translateX(50%);
}
.ant-anchor-rtl .ant-anchor-link {
  padding: 4px 16px 4px 0;
}
.ant-affix {
  position: fixed;
  z-index: 10;
}
nz-affix {
  display: block;
}
nz-link {
  display: block;
}
`
          
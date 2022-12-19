
import { css } from 'lit-element';
export default css`nz-tree-virtual-scroll-view .ant-tree-list,
nz-tree-virtual-scroll-view .ant-tree-list-holder {
  height: 100%;
}
nz-tree-virtual-scroll-view .ant-tree-switcher + .ant-tree-switcher.nz-tree-leaf-line-icon,
nz-tree-view .ant-tree-switcher + .ant-tree-switcher.nz-tree-leaf-line-icon {
  display: none;
}
nz-tree-view .ant-tree-list-holder-inner {
  display: flex;
  flex-direction: column;
}
`
          
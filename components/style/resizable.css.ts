
import { css } from 'lit-element';
export default css`.nz-resizable-handle {
  position: absolute;
  user-select: none;
  z-index: 9;
}
.nz-resizable-handle-top {
  width: 100%;
  height: 10px;
  top: -5px;
  left: 0;
}
.nz-resizable-handle-right {
  width: 10px;
  height: 100%;
  top: 0;
  right: -5px;
}
.nz-resizable-handle-bottom {
  width: 100%;
  height: 10px;
  bottom: -5px;
  left: 0;
}
.nz-resizable-handle-left {
  width: 10px;
  height: 100%;
  top: 0;
  left: -5px;
}
.nz-resizable-handle-topRight {
  width: 20px;
  height: 20px;
  top: -5px;
  right: -5px;
  z-index: 10;
}
.nz-resizable-handle-bottomRight {
  width: 20px;
  height: 20px;
  right: -5px;
  bottom: -5px;
  z-index: 10;
}
.nz-resizable-handle-bottomLeft {
  width: 20px;
  height: 20px;
  bottom: -5px;
  left: -5px;
  z-index: 10;
}
.nz-resizable-handle-topLeft {
  width: 20px;
  height: 20px;
  top: -5px;
  left: -5px;
  z-index: 10;
}
.nz-resizable:not(.nz-resizable-resizing) .nz-resizable-handle-top,
.nz-resizable:not(.nz-resizable-resizing) .nz-resizable-handle-bottom {
  cursor: ns-resize;
}
.nz-resizable:not(.nz-resizable-resizing) .nz-resizable-handle-right,
.nz-resizable:not(.nz-resizable-resizing) .nz-resizable-handle-left {
  cursor: ew-resize;
}
.nz-resizable:not(.nz-resizable-resizing) .nz-resizable-handle-bottomRight,
.nz-resizable:not(.nz-resizable-resizing) .nz-resizable-handle-topLeft {
  cursor: nwse-resize;
}
.nz-resizable:not(.nz-resizable-resizing) .nz-resizable-handle-bottomLeft,
.nz-resizable:not(.nz-resizable-resizing) .nz-resizable-handle-topRight {
  cursor: nesw-resize;
}
.nz-resizable-disabled .nz-resizable-handle {
  pointer-events: none;
}
`
          
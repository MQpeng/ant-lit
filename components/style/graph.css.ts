
import { css } from 'lit-element';
export default css`.nz-graph {
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #fff;
}
.nz-graph-nodes .nz-graph-node-rect {
  fill: transparent;
  stroke: var(--ant-primary-3);
  stroke-width: 1px;
}
.nz-graph-nodes .nz-graph-node-rect:hover {
  stroke: var(--ant-primary-color);
}
.nz-graph-edges .nz-graph-edge path {
  fill: none;
  stroke: var(--ant-primary-3);
  stroke-linecap: butt;
  stroke-width: 1px;
}
.nz-graph-edges .nz-graph-edge path:hover {
  stroke: var(--ant-primary-color);
}
.nz-graph-edges .nz-graph-edge-text {
  fill: rgba(0, 0, 0, 0.85);
  font-size: 12px;
}
.nz-graph-edge-marker {
  color: var(--ant-primary-3);
  fill: var(--ant-primary-3);
}
.nz-graph-minimap {
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #fff;
  transition: opacity 0.3s linear;
  pointer-events: auto;
  border: 1px solid #d9d9d9;
  z-index: 99;
}
.nz-graph-minimap.hidden {
  opacity: 0;
  pointer-events: none;
}
.nz-graph-minimap canvas {
  border: 1px solid #999;
}
.nz-graph-minimap rect {
  fill: #fff;
  stroke: rgba(0, 0, 0, 0.45);
  stroke-width: 1px;
  fill-opacity: 0;
  filter: url(#minimapDropShadow);
  cursor: move;
}
.nz-graph-minimap svg {
  position: absolute;
  width: 100%;
  height: 100%;
}
.nz-graph-minimap .buffer,
.nz-graph-minimap .viewport {
  display: block;
  height: 100%;
}
`
          
import { css } from 'lit-element';
export default css`
  [ant-click-animating-without-extra-node='true']::after,
  .ant-click-animating-node {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    border-radius: inherit;
    box-shadow: 0 0 0 0 var(--ant-primary-color);
    box-shadow: 0 0 0 0 var(--antd-wave-shadow-color);
    opacity: 0.2;
    animation: fadeEffect 2s cubic-bezier(0.08, 0.82, 0.17, 1), waveEffect 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);
    animation-fill-mode: forwards;
    content: '';
    pointer-events: none;
  }
  @keyframes waveEffect {
    100% {
      box-shadow: 0 0 0 var(--ant-primary-color);
      box-shadow: 0 0 0 6px var(--antd-wave-shadow-color);
    }
  }
  @keyframes fadeEffect {
    100% {
      opacity: 0;
    }
  }
`;

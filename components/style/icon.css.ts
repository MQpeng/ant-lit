
import { css } from 'lit-element';
export default css`
  .anticon {
    line-height: 0;
    text-align: center;
    display: inline-block;
    vertical-align: -0.125em;
  }

  .anticon-loading {
    animation: loadingCircle 1s infinite linear;
  }

  @keyframes loadingCircle {
    100% {
      transform: rotate(360deg);
    }
  }
`;

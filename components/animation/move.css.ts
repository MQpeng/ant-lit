import { AnimationDuration2 } from './animation-consts';
import { css } from 'lit-element';
export default css`
  .slide-bottom {
    -webkit-animation: slide-bottom ${AnimationDuration2.BASE}s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-bottom ${AnimationDuration2.BASE}s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .slide-top {
    -webkit-animation: slide-top ${AnimationDuration2.BASE}s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-top ${AnimationDuration2.BASE}s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @-webkit-keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
  }
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
  }
`;

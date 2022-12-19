import { css } from 'lit-element';
export default css`
  html {
    --ant-primary-color: #1890ff;
    --ant-primary-color-hover: #40a9ff;
    --ant-primary-color-active: #096dd9;
    --ant-primary-color-outline: rgba(24, 144, 255, 0.2);
    --ant-primary-1: #e6f7ff;
    --ant-primary-2: #bae7ff;
    --ant-primary-3: #91d5ff;
    --ant-primary-4: #69c0ff;
    --ant-primary-5: #40a9ff;
    --ant-primary-6: #1890ff;
    --ant-primary-7: #096dd9;
    --ant-primary-color-deprecated-pure: ;
    --ant-primary-color-deprecated-l-35: #cbe6ff;
    --ant-primary-color-deprecated-l-20: #7ec1ff;
    --ant-primary-color-deprecated-t-20: #46a6ff;
    --ant-primary-color-deprecated-t-50: #8cc8ff;
    --ant-primary-color-deprecated-f-12: rgba(24, 144, 255, 0.12);
    --ant-primary-color-active-deprecated-f-30: rgba(230, 247, 255, 0.3);
    --ant-primary-color-active-deprecated-d-02: #dcf4ff;
    --ant-success-color: #52c41a;
    --ant-success-color-hover: #73d13d;
    --ant-success-color-active: #389e0d;
    --ant-success-color-outline: rgba(82, 196, 26, 0.2);
    --ant-success-color-deprecated-bg: #f6ffed;
    --ant-success-color-deprecated-border: #b7eb8f;
    --ant-error-color: #ff4d4f;
    --ant-error-color-hover: #ff7875;
    --ant-error-color-active: #d9363e;
    --ant-error-color-outline: rgba(255, 77, 79, 0.2);
    --ant-error-color-deprecated-bg: #fff2f0;
    --ant-error-color-deprecated-border: #ffccc7;
    --ant-warning-color: #faad14;
    --ant-warning-color-hover: #ffc53d;
    --ant-warning-color-active: #d48806;
    --ant-warning-color-outline: rgba(250, 173, 20, 0.2);
    --ant-warning-color-deprecated-bg: #fffbe6;
    --ant-warning-color-deprecated-border: #ffe58f;
    --ant-info-color: #1890ff;
    --ant-info-color-deprecated-bg: #e6f7ff;
    --ant-info-color-deprecated-border: #91d5ff;
    --ant-primary-color: #1890ff;
  }

  [class^='ant-']::-ms-clear,
  [class*='ant-']::-ms-clear,
  [class^='ant-'] input::-ms-clear,
  [class*='ant-'] input::-ms-clear,
  [class^='ant-'] input::-ms-reveal,
  [class*='ant-'] input::-ms-reveal {
    display: none;
  }
  /* stylelint-disable property-no-vendor-prefix, at-rule-no-vendor-prefix */
  html,
  body {
    width: 100%;
    height: 100%;
  }
  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  @-ms-viewport {
    width: device-width;
  }
  body {
    margin: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-variant: tabular-nums;
    line-height: 1.5715;
    background-color: #fff;
    font-feature-settings: 'tnum';
  }
  [tabindex='-1']:focus {
    outline: none !important;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
  p {
    margin-top: 0;
    margin-bottom: 1em;
  }
  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    border-bottom: 0;
    cursor: help;
  }
  address {
    margin-bottom: 1em;
    font-style: normal;
    line-height: inherit;
  }
  input[type='text'],
  input[type='password'],
  input[type='number'],
  textarea {
    -webkit-appearance: none;
  }
  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1em;
  }
  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }
  dt {
    font-weight: 500;
  }
  dd {
    margin-bottom: 0.5em;
    margin-left: 0;
  }
  blockquote {
    margin: 0 0 1em;
  }
  dfn {
    font-style: italic;
  }
  b,
  strong {
    font-weight: bolder;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  a {
    color: var(--ant-primary-color);
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
    -webkit-text-decoration-skip: objects;
  }
  a:hover {
    color: var(--ant-primary-color-hover);
  }
  a:active {
    color: var(--ant-primary-color-active);
  }
  a:active,
  a:hover {
    text-decoration: none;
    outline: 0;
  }
  a:focus {
    text-decoration: none;
    outline: 0;
  }
  a[disabled] {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  pre,
  code,
  kbd,
  samp {
    font-size: 1em;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  }
  pre {
    margin-top: 0;
    margin-bottom: 1em;
    overflow: auto;
  }
  figure {
    margin: 0 0 1em;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  a,
  area,
  button,
  [role='button'],
  input:not([type='range']),
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
  }
  caption {
    padding-top: 0.75em;
    padding-bottom: 0.3em;
    color: rgba(0, 0, 0, 0.45);
    text-align: left;
    caption-side: bottom;
  }
  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  html [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  input[type='radio'],
  input[type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
  }
  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }
  textarea {
    overflow: auto;
    resize: vertical;
  }
  fieldset {
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    margin-bottom: 0.5em;
    padding: 0;
    color: inherit;
    font-size: 1.5em;
    line-height: inherit;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }
  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }
  output {
    display: inline-block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none !important;
  }
  mark {
    padding: 0.2em;
    background-color: #feffe6;
  }
  ::selection {
    color: #fff;
    background: var(--ant-primary-color);
  }
  .clearfix::before {
    display: table;
    content: '';
  }
  .clearfix::after {
    display: table;
    clear: both;
    content: '';
  }
  .anticon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .anticon > * {
    line-height: 1;
  }
  .anticon svg {
    display: inline-block;
  }
  .anticon::before {
    display: none;
  }
  .anticon .anticon-icon {
    display: block;
  }
  .anticon > .anticon {
    line-height: 0;
    vertical-align: 0;
  }
  .anticon[tabindex] {
    cursor: pointer;
  }
  .anticon-spin::before {
    display: inline-block;
    animation: loadingCircle 1s infinite linear;
  }
  .anticon-spin {
    display: inline-block;
    animation: loadingCircle 1s infinite linear;
  }
  .ant-fade-enter,
  .ant-fade-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-fade-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-fade-enter.ant-fade-enter-active,
  .ant-fade-appear.ant-fade-appear-active {
    animation-name: antFadeIn;
    animation-play-state: running;
  }
  .ant-fade-leave.ant-fade-leave-active {
    animation-name: antFadeOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-fade-enter,
  .ant-fade-appear {
    opacity: 0;
    animation-timing-function: linear;
  }
  .ant-fade-leave {
    animation-timing-function: linear;
  }
  @keyframes antFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes antFadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .ant-move-up-enter,
  .ant-move-up-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-move-up-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-move-up-enter.ant-move-up-enter-active,
  .ant-move-up-appear.ant-move-up-appear-active {
    animation-name: antMoveUpIn;
    animation-play-state: running;
  }
  .ant-move-up-leave.ant-move-up-leave-active {
    animation-name: antMoveUpOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-move-up-enter,
  .ant-move-up-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .ant-move-up-leave {
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  }
  .ant-move-down-enter,
  .ant-move-down-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-move-down-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-move-down-enter.ant-move-down-enter-active,
  .ant-move-down-appear.ant-move-down-appear-active {
    animation-name: antMoveDownIn;
    animation-play-state: running;
  }
  .ant-move-down-leave.ant-move-down-leave-active {
    animation-name: antMoveDownOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-move-down-enter,
  .ant-move-down-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .ant-move-down-leave {
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  }
  .ant-move-left-enter,
  .ant-move-left-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-move-left-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-move-left-enter.ant-move-left-enter-active,
  .ant-move-left-appear.ant-move-left-appear-active {
    animation-name: antMoveLeftIn;
    animation-play-state: running;
  }
  .ant-move-left-leave.ant-move-left-leave-active {
    animation-name: antMoveLeftOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-move-left-enter,
  .ant-move-left-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .ant-move-left-leave {
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  }
  .ant-move-right-enter,
  .ant-move-right-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-move-right-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-move-right-enter.ant-move-right-enter-active,
  .ant-move-right-appear.ant-move-right-appear-active {
    animation-name: antMoveRightIn;
    animation-play-state: running;
  }
  .ant-move-right-leave.ant-move-right-leave-active {
    animation-name: antMoveRightOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-move-right-enter,
  .ant-move-right-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .ant-move-right-leave {
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  }
  @keyframes antMoveDownIn {
    0% {
      transform: translateY(100%);
      transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes antMoveDownOut {
    0% {
      transform: translateY(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      transform: translateY(100%);
      transform-origin: 0 0;
      opacity: 0;
    }
  }
  @keyframes antMoveLeftIn {
    0% {
      transform: translateX(-100%);
      transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes antMoveLeftOut {
    0% {
      transform: translateX(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      transform: translateX(-100%);
      transform-origin: 0 0;
      opacity: 0;
    }
  }
  @keyframes antMoveRightIn {
    0% {
      transform: translateX(100%);
      transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes antMoveRightOut {
    0% {
      transform: translateX(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      transform: translateX(100%);
      transform-origin: 0 0;
      opacity: 0;
    }
  }
  @keyframes antMoveUpIn {
    0% {
      transform: translateY(-100%);
      transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes antMoveUpOut {
    0% {
      transform: translateY(0%);
      transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      transform-origin: 0 0;
      opacity: 0;
    }
  }
  @keyframes loadingCircle {
    100% {
      transform: rotate(360deg);
    }
  }
  [ant-click-animating='true'],
  [ant-click-animating-without-extra-node='true'] {
    position: relative;
  }
  html {
    --antd-wave-shadow-color: var(--ant-primary-color);
    --scroll-bar: 0;
  }
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
  .ant-slide-up-enter,
  .ant-slide-up-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-slide-up-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-slide-up-enter.ant-slide-up-enter-active,
  .ant-slide-up-appear.ant-slide-up-appear-active {
    animation-name: antSlideUpIn;
    animation-play-state: running;
  }
  .ant-slide-up-leave.ant-slide-up-leave-active {
    animation-name: antSlideUpOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-slide-up-enter,
  .ant-slide-up-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .ant-slide-up-leave {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  .ant-slide-down-enter,
  .ant-slide-down-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-slide-down-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-slide-down-enter.ant-slide-down-enter-active,
  .ant-slide-down-appear.ant-slide-down-appear-active {
    animation-name: antSlideDownIn;
    animation-play-state: running;
  }
  .ant-slide-down-leave.ant-slide-down-leave-active {
    animation-name: antSlideDownOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-slide-down-enter,
  .ant-slide-down-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .ant-slide-down-leave {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  .ant-slide-left-enter,
  .ant-slide-left-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-slide-left-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-slide-left-enter.ant-slide-left-enter-active,
  .ant-slide-left-appear.ant-slide-left-appear-active {
    animation-name: antSlideLeftIn;
    animation-play-state: running;
  }
  .ant-slide-left-leave.ant-slide-left-leave-active {
    animation-name: antSlideLeftOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-slide-left-enter,
  .ant-slide-left-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .ant-slide-left-leave {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  .ant-slide-right-enter,
  .ant-slide-right-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-slide-right-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-slide-right-enter.ant-slide-right-enter-active,
  .ant-slide-right-appear.ant-slide-right-appear-active {
    animation-name: antSlideRightIn;
    animation-play-state: running;
  }
  .ant-slide-right-leave.ant-slide-right-leave-active {
    animation-name: antSlideRightOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-slide-right-enter,
  .ant-slide-right-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .ant-slide-right-leave {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  @keyframes antSlideUpIn {
    0% {
      transform: scaleY(0.8);
      transform-origin: 0% 0%;
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @keyframes antSlideUpOut {
    0% {
      transform: scaleY(1);
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      transform: scaleY(0.8);
      transform-origin: 0% 0%;
      opacity: 0;
    }
  }
  @keyframes antSlideDownIn {
    0% {
      transform: scaleY(0.8);
      transform-origin: 100% 100%;
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      transform-origin: 100% 100%;
      opacity: 1;
    }
  }
  @keyframes antSlideDownOut {
    0% {
      transform: scaleY(1);
      transform-origin: 100% 100%;
      opacity: 1;
    }
    100% {
      transform: scaleY(0.8);
      transform-origin: 100% 100%;
      opacity: 0;
    }
  }
  @keyframes antSlideLeftIn {
    0% {
      transform: scaleX(0.8);
      transform-origin: 0% 0%;
      opacity: 0;
    }
    100% {
      transform: scaleX(1);
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @keyframes antSlideLeftOut {
    0% {
      transform: scaleX(1);
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      transform: scaleX(0.8);
      transform-origin: 0% 0%;
      opacity: 0;
    }
  }
  @keyframes antSlideRightIn {
    0% {
      transform: scaleX(0.8);
      transform-origin: 100% 0%;
      opacity: 0;
    }
    100% {
      transform: scaleX(1);
      transform-origin: 100% 0%;
      opacity: 1;
    }
  }
  @keyframes antSlideRightOut {
    0% {
      transform: scaleX(1);
      transform-origin: 100% 0%;
      opacity: 1;
    }
    100% {
      transform: scaleX(0.8);
      transform-origin: 100% 0%;
      opacity: 0;
    }
  }
  .ant-zoom-enter,
  .ant-zoom-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-zoom-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-zoom-enter.ant-zoom-enter-active,
  .ant-zoom-appear.ant-zoom-appear-active {
    animation-name: antZoomIn;
    animation-play-state: running;
  }
  .ant-zoom-leave.ant-zoom-leave-active {
    animation-name: antZoomOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-zoom-enter,
  .ant-zoom-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .ant-zoom-enter-prepare,
  .ant-zoom-appear-prepare {
    transform: none;
  }
  .ant-zoom-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .ant-zoom-big-enter,
  .ant-zoom-big-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-zoom-big-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-zoom-big-enter.ant-zoom-big-enter-active,
  .ant-zoom-big-appear.ant-zoom-big-appear-active {
    animation-name: antZoomBigIn;
    animation-play-state: running;
  }
  .ant-zoom-big-leave.ant-zoom-big-leave-active {
    animation-name: antZoomBigOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-zoom-big-enter,
  .ant-zoom-big-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .ant-zoom-big-enter-prepare,
  .ant-zoom-big-appear-prepare {
    transform: none;
  }
  .ant-zoom-big-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .ant-zoom-big-fast-enter,
  .ant-zoom-big-fast-appear {
    animation-duration: 0.1s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-zoom-big-fast-leave {
    animation-duration: 0.1s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-zoom-big-fast-enter.ant-zoom-big-fast-enter-active,
  .ant-zoom-big-fast-appear.ant-zoom-big-fast-appear-active {
    animation-name: antZoomBigIn;
    animation-play-state: running;
  }
  .ant-zoom-big-fast-leave.ant-zoom-big-fast-leave-active {
    animation-name: antZoomBigOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-zoom-big-fast-enter,
  .ant-zoom-big-fast-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .ant-zoom-big-fast-enter-prepare,
  .ant-zoom-big-fast-appear-prepare {
    transform: none;
  }
  .ant-zoom-big-fast-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .ant-zoom-up-enter,
  .ant-zoom-up-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-zoom-up-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-zoom-up-enter.ant-zoom-up-enter-active,
  .ant-zoom-up-appear.ant-zoom-up-appear-active {
    animation-name: antZoomUpIn;
    animation-play-state: running;
  }
  .ant-zoom-up-leave.ant-zoom-up-leave-active {
    animation-name: antZoomUpOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-zoom-up-enter,
  .ant-zoom-up-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .ant-zoom-up-enter-prepare,
  .ant-zoom-up-appear-prepare {
    transform: none;
  }
  .ant-zoom-up-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .ant-zoom-down-enter,
  .ant-zoom-down-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-zoom-down-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-zoom-down-enter.ant-zoom-down-enter-active,
  .ant-zoom-down-appear.ant-zoom-down-appear-active {
    animation-name: antZoomDownIn;
    animation-play-state: running;
  }
  .ant-zoom-down-leave.ant-zoom-down-leave-active {
    animation-name: antZoomDownOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-zoom-down-enter,
  .ant-zoom-down-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .ant-zoom-down-enter-prepare,
  .ant-zoom-down-appear-prepare {
    transform: none;
  }
  .ant-zoom-down-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .ant-zoom-left-enter,
  .ant-zoom-left-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-zoom-left-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-zoom-left-enter.ant-zoom-left-enter-active,
  .ant-zoom-left-appear.ant-zoom-left-appear-active {
    animation-name: antZoomLeftIn;
    animation-play-state: running;
  }
  .ant-zoom-left-leave.ant-zoom-left-leave-active {
    animation-name: antZoomLeftOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-zoom-left-enter,
  .ant-zoom-left-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .ant-zoom-left-enter-prepare,
  .ant-zoom-left-appear-prepare {
    transform: none;
  }
  .ant-zoom-left-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .ant-zoom-right-enter,
  .ant-zoom-right-appear {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-zoom-right-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .ant-zoom-right-enter.ant-zoom-right-enter-active,
  .ant-zoom-right-appear.ant-zoom-right-appear-active {
    animation-name: antZoomRightIn;
    animation-play-state: running;
  }
  .ant-zoom-right-leave.ant-zoom-right-leave-active {
    animation-name: antZoomRightOut;
    animation-play-state: running;
    pointer-events: none;
  }
  .ant-zoom-right-enter,
  .ant-zoom-right-appear {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .ant-zoom-right-enter-prepare,
  .ant-zoom-right-appear-prepare {
    transform: none;
  }
  .ant-zoom-right-leave {
    animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  @keyframes antZoomIn {
    0% {
      transform: scale(0.2);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes antZoomOut {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.2);
      opacity: 0;
    }
  }
  @keyframes antZoomBigIn {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes antZoomBigOut {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
      opacity: 0;
    }
  }
  @keyframes antZoomUpIn {
    0% {
      transform: scale(0.8);
      transform-origin: 50% 0%;
      opacity: 0;
    }
    100% {
      transform: scale(1);
      transform-origin: 50% 0%;
    }
  }
  @keyframes antZoomUpOut {
    0% {
      transform: scale(1);
      transform-origin: 50% 0%;
    }
    100% {
      transform: scale(0.8);
      transform-origin: 50% 0%;
      opacity: 0;
    }
  }
  @keyframes antZoomLeftIn {
    0% {
      transform: scale(0.8);
      transform-origin: 0% 50%;
      opacity: 0;
    }
    100% {
      transform: scale(1);
      transform-origin: 0% 50%;
    }
  }
  @keyframes antZoomLeftOut {
    0% {
      transform: scale(1);
      transform-origin: 0% 50%;
    }
    100% {
      transform: scale(0.8);
      transform-origin: 0% 50%;
      opacity: 0;
    }
  }
  @keyframes antZoomRightIn {
    0% {
      transform: scale(0.8);
      transform-origin: 100% 50%;
      opacity: 0;
    }
    100% {
      transform: scale(1);
      transform-origin: 100% 50%;
    }
  }
  @keyframes antZoomRightOut {
    0% {
      transform: scale(1);
      transform-origin: 100% 50%;
    }
    100% {
      transform: scale(0.8);
      transform-origin: 100% 50%;
      opacity: 0;
    }
  }
  @keyframes antZoomDownIn {
    0% {
      transform: scale(0.8);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: scale(1);
      transform-origin: 50% 100%;
    }
  }
  @keyframes antZoomDownOut {
    0% {
      transform: scale(1);
      transform-origin: 50% 100%;
    }
    100% {
      transform: scale(0.8);
      transform-origin: 50% 100%;
      opacity: 0;
    }
  }
  .ant-motion-collapse-legacy {
    overflow: hidden;
  }
  .ant-motion-collapse-legacy-active {
    transition: height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
  }
  .ant-motion-collapse {
    overflow: hidden;
    transition: height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
  }
`;

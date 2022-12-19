
import { css } from 'lit-element';
export default css`.ant-carousel {
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
.ant-carousel .slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  touch-action: pan-y;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}
.ant-carousel .slick-list {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.ant-carousel .slick-list:focus {
  outline: none;
}
.ant-carousel .slick-list.dragging {
  cursor: pointer;
}
.ant-carousel .slick-list .slick-slide {
  pointer-events: none;
}
.ant-carousel .slick-list .slick-slide input.ant-radio-input,
.ant-carousel .slick-list .slick-slide input.ant-checkbox-input {
  visibility: hidden;
}
.ant-carousel .slick-list .slick-slide.slick-active {
  pointer-events: auto;
}
.ant-carousel .slick-list .slick-slide.slick-active input.ant-radio-input,
.ant-carousel .slick-list .slick-slide.slick-active input.ant-checkbox-input {
  visibility: visible;
}
.ant-carousel .slick-list .slick-slide > div > div {
  vertical-align: bottom;
}
.ant-carousel .slick-slider .slick-track,
.ant-carousel .slick-slider .slick-list {
  transform: translate3d(0, 0, 0);
  touch-action: pan-y;
}
.ant-carousel .slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
}
.ant-carousel .slick-track::before,
.ant-carousel .slick-track::after {
  display: table;
  content: '';
}
.ant-carousel .slick-track::after {
  clear: both;
}
.slick-loading .ant-carousel .slick-track {
  visibility: hidden;
}
.ant-carousel .slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}
.ant-carousel .slick-slide img {
  display: block;
}
.ant-carousel .slick-slide.slick-loading img {
  display: none;
}
.ant-carousel .slick-slide.dragging img {
  pointer-events: none;
}
.ant-carousel .slick-initialized .slick-slide {
  display: block;
}
.ant-carousel .slick-loading .slick-slide {
  visibility: hidden;
}
.ant-carousel .slick-vertical .slick-slide {
  display: block;
  height: auto;
}
.ant-carousel .slick-arrow.slick-hidden {
  display: none;
}
.ant-carousel .slick-prev,
.ant-carousel .slick-next {
  position: absolute;
  top: 50%;
  display: block;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  padding: 0;
  color: transparent;
  font-size: 0;
  line-height: 0;
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
}
.ant-carousel .slick-prev:hover,
.ant-carousel .slick-next:hover,
.ant-carousel .slick-prev:focus,
.ant-carousel .slick-next:focus {
  color: transparent;
  background: transparent;
  outline: none;
}
.ant-carousel .slick-prev:hover::before,
.ant-carousel .slick-next:hover::before,
.ant-carousel .slick-prev:focus::before,
.ant-carousel .slick-next:focus::before {
  opacity: 1;
}
.ant-carousel .slick-prev.slick-disabled::before,
.ant-carousel .slick-next.slick-disabled::before {
  opacity: 0.25;
}
.ant-carousel .slick-prev {
  left: -25px;
}
.ant-carousel .slick-prev::before {
  content: '←';
}
.ant-carousel .slick-next {
  right: -25px;
}
.ant-carousel .slick-next::before {
  content: '→';
}
.ant-carousel .slick-dots {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex !important;
  justify-content: center;
  margin-right: 15%;
  margin-left: 15%;
  padding-left: 0;
  list-style: none;
}
.ant-carousel .slick-dots-bottom {
  bottom: 12px;
}
.ant-carousel .slick-dots-top {
  top: 12px;
  bottom: auto;
}
.ant-carousel .slick-dots li {
  position: relative;
  display: inline-block;
  flex: 0 1 auto;
  box-sizing: content-box;
  width: 16px;
  height: 3px;
  margin: 0 2px;
  margin-right: 3px;
  margin-left: 3px;
  padding: 0;
  text-align: center;
  text-indent: -999px;
  vertical-align: top;
  transition: all 0.5s;
}
.ant-carousel .slick-dots li button {
  display: block;
  width: 100%;
  height: 3px;
  padding: 0;
  color: transparent;
  font-size: 0;
  background: #fff;
  border: 0;
  border-radius: 1px;
  outline: none;
  cursor: pointer;
  opacity: 0.3;
  transition: all 0.5s;
}
.ant-carousel .slick-dots li button:hover,
.ant-carousel .slick-dots li button:focus {
  opacity: 0.75;
}
.ant-carousel .slick-dots li.slick-active {
  width: 24px;
}
.ant-carousel .slick-dots li.slick-active button {
  background: #fff;
  opacity: 1;
}
.ant-carousel .slick-dots li.slick-active:hover,
.ant-carousel .slick-dots li.slick-active:focus {
  opacity: 1;
}
.ant-carousel-vertical .slick-dots {
  top: 50%;
  bottom: auto;
  flex-direction: column;
  width: 3px;
  height: auto;
  margin: 0;
  transform: translateY(-50%);
}
.ant-carousel-vertical .slick-dots-left {
  right: auto;
  left: 12px;
}
.ant-carousel-vertical .slick-dots-right {
  right: 12px;
  left: auto;
}
.ant-carousel-vertical .slick-dots li {
  width: 3px;
  height: 16px;
  margin: 4px 2px;
  vertical-align: baseline;
}
.ant-carousel-vertical .slick-dots li button {
  width: 3px;
  height: 16px;
}
.ant-carousel-vertical .slick-dots li.slick-active {
  width: 3px;
  height: 24px;
}
.ant-carousel-vertical .slick-dots li.slick-active button {
  width: 3px;
  height: 24px;
}
.ant-carousel-rtl {
  direction: rtl;
}
.ant-carousel-rtl .ant-carousel .slick-track {
  right: 0;
  left: auto;
}
.ant-carousel-rtl .ant-carousel .slick-prev {
  right: -25px;
  left: auto;
}
.ant-carousel-rtl .ant-carousel .slick-prev::before {
  content: '→';
}
.ant-carousel-rtl .ant-carousel .slick-next {
  right: auto;
  left: -25px;
}
.ant-carousel-rtl .ant-carousel .slick-next::before {
  content: '←';
}
.ant-carousel-rtl.ant-carousel .slick-dots {
  flex-direction: row-reverse;
}
.ant-carousel-rtl.ant-carousel-vertical .slick-dots {
  flex-direction: column;
}
nz-carousel {
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.slick-dots {
  display: block;
}
.slick-track {
  opacity: 1;
}
.slick-list {
  direction: ltr;
}
`
          
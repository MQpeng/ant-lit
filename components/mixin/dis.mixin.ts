import { LitElement } from 'lit';
import { Constructor } from 'lit-element';

export const DisShadowMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class DisShadowMixinClass extends superClass {
    createRenderRoot() {
      return this;
    }
  }
  // Cast return type to the superClass type passed in
  return DisShadowMixinClass as T;
};

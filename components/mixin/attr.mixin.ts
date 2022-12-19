import { LitElement } from 'lit';
import { Constructor, property } from 'lit-element';

export const AttrMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class AttrMixinClass extends superClass {
    connectedCallback() {
      super.connectedCallback();
    }

    firstUpdated() {
      const container = this.shadowRoot?.firstElementChild;
      if (!container) return;

      container.className = [container.className, this.className]
        .filter(v => !!v)
        .map(v => v.trim())
        .join(' ');
      container.setAttribute(
        'style',
        [container.getAttribute('style'), this.getAttribute('style')]
          .filter(v => !!v)
          .map(v => v!.trim())
          .join(' ')
      );
    }
  }
  // Cast return type to the superClass type passed in
  return AttrMixinClass as T;
};

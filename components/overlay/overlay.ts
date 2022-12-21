import { LitElement } from 'lit';
import { ComponentType } from '../common/portal';
import { NzSingletonService } from '../service/singleton';

export class Overlay {
  private _overlayContainer;
  nzSingletonService: NzSingletonService = NzSingletonService.getInstance();

  private constructor() {
    let container = document.body.querySelector('.cdk-overlay-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'cdk-overlay-container';

      const wrapper = document.createElement('div');
      wrapper.className = 'cdk-global-overlay-wrapper';
      container.appendChild(wrapper);

      document.body.appendChild(container);
    }
    this._overlayContainer = container;
  }

  attach<T extends LitElement>(ctrl: ComponentType<T>) {
    const component = new ctrl();
    const ele = document.createElement(component.tagName);
    this._overlayContainer.appendChild(ele);

    return {
      instance: ele as T
    };
  }

  private static instance: Overlay;
  static getInstance() {
    if (Overlay.instance) {
      return Overlay.instance;
    } else {
      Overlay.instance = new Overlay();
      return Overlay.instance;
    }
  }
}

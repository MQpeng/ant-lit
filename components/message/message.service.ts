/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { ComponentType } from '../common/portal';
import { Overlay } from '../overlay/overlay';
import { NzSingletonService } from '../service/singleton';
import { NzMessageData, NzMessageDataOptions, NzMessageRef } from './message';
import { MessageContainerElement } from './message-container';

let globalCounter = 0;
export abstract class NzMNService {
  protected abstract componentPrefix: string;
  protected container?: MessageContainerElement;
  protected nzSingletonService: NzSingletonService;
  constructor() {
    this.nzSingletonService = NzSingletonService.getInstance();
  }

  remove(id?: string): void {
    if (this.container) {
      if (id) {
        this.container.removeInstance(id);
      } else {
        this.container.removeAll();
      }
    }
  }

  protected getInstanceId(): string {
    return `${this.componentPrefix}-${globalCounter++}`;
  }

  protected withContainer<T extends MessageContainerElement>(ctor: ComponentType<T>): T {
    let containerInstance = this.nzSingletonService.getSingletonWithKey(this.componentPrefix);
    if (containerInstance) {
      return containerInstance as T;
    }

    const overlayRef = Overlay.getInstance();
    // const componentPortal = new ComponentPortal(ctor, null, this.injector);
    const componentRef = overlayRef.attach(ctor);
    // const overlayPane = overlayRef.overlayElement;
    // overlayPane.style.zIndex = '1010';

    if (!containerInstance) {
      this.container = containerInstance = componentRef.instance;
      this.nzSingletonService.registerSingletonWithKey(this.componentPrefix, containerInstance);
    }

    return containerInstance as T;
  }
}

export class NzMessageService extends NzMNService {
  protected override container?: MessageContainerElement;
  protected componentPrefix = 'message-';

  success(content: string, options?: NzMessageDataOptions): NzMessageRef {
    return this.createInstance({ type: 'success', content }, options);
  }

  error(content: string, options?: NzMessageDataOptions): NzMessageRef {
    return this.createInstance({ type: 'error', content }, options);
  }

  info(content: string, options?: NzMessageDataOptions): NzMessageRef {
    return this.createInstance({ type: 'info', content }, options);
  }

  warning(content: string, options?: NzMessageDataOptions): NzMessageRef {
    return this.createInstance({ type: 'warning', content }, options);
  }

  loading(content: string, options?: NzMessageDataOptions): NzMessageRef {
    return this.createInstance({ type: 'loading', content }, options);
  }

  create(
    type: 'success' | 'info' | 'warning' | 'error' | 'loading' | string,
    content: string,
    options?: NzMessageDataOptions
  ): NzMessageRef {
    return this.createInstance({ type, content }, options);
  }

  private createInstance(message: NzMessageData, options?: NzMessageDataOptions): NzMessageRef {
    this.container = this.withContainer(MessageContainerElement);

    return this.container.create({
      ...message,
      ...{
        createdAt: new Date(),
        messageId: this.getInstanceId(),
        options
      }
    });
  }
}

const msgSrc = new NzMessageService();

msgSrc.success('123123123');

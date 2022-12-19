type NzSafeAny = any;

export function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== 'false';
}

export function toBoolean(value: boolean | string): boolean {
  return coerceBooleanProperty(value);
}

function propDecoratorFactory<T, D>(
  name: string,
  fallback: (v: T) => D
): (target: NzSafeAny, propName: string) => void {
  function propDecorator(
    target: NzSafeAny,
    propName: string,
    originalDescriptor?: TypedPropertyDescriptor<NzSafeAny>
  ): NzSafeAny {
    const privatePropName = `$$__zorroPropDecorator__${propName}`;

    if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
      console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
    }

    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true
    });

    return {
      get(): string {
        return originalDescriptor && originalDescriptor.get
          ? originalDescriptor.get.bind(this)()
          : this[privatePropName];
      },
      set(value: T): void {
        if (originalDescriptor && originalDescriptor.set) {
          originalDescriptor.set.bind(this)(fallback(value));
        }
        this[privatePropName] = fallback(value);
      }
    };
  }

  return propDecorator;
}

export function InputBoolean(): any {
  return propDecoratorFactory('InputBoolean', toBoolean);
}

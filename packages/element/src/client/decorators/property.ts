import { PropertyOptions } from '../../types/index.js';
import * as Utils from '../utils/index.js';

export function Property(options?: PropertyOptions) {
  return function (target: Object, propertyKey: PropertyKey) {
    let value;
    const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};

    const set = descriptor.set;

    descriptor.configurable = true;

    descriptor.get = function () {
      return value;
    };

    descriptor.set = function (input) {
      set && set.bind(this)(input);

      if (input === value) return;

      value = input;

      const api = Utils.api(this);

      if (!api.ready) return;

      api.property(propertyKey as string, input, options);
    };

    Object.defineProperty(target, propertyKey, descriptor);
  };
}

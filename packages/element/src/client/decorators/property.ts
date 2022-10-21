import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types';
import { defineProperty, host, request, appendToMethod } from '../utils/index.js';

export interface PropertyOptions {
  /**
   * Whether property value is reflected back to the associated attribute. default is `false`.
   */
  reflect?: boolean;
}

export function Property(options?: PropertyOptions) {
  return function (target: PlusElement, propertyKey: PropertyKey) {
    const name = String(propertyKey);

    const symbol = Symbol();

    function get(this) {
      return this[symbol];
    }

    function set(this, input) {
      const value = this[symbol];

      if (input === value) return;

      this[symbol] = input;

      request(this, name, value, options);
    }

    defineProperty(target, propertyKey, { get, set });

    appendToMethod(target, CONSTANTS.LIFECYCLE_CONNECTED, function () {
      const element = host(this);

      const get = () => {
        return this[propertyKey];
      };

      const set = (input) => {
        this[propertyKey] = input;
      };

      // TODO: configurable
      defineProperty(element, propertyKey, { get, set, configurable: true });
    });
  };
}

import { camelCase, paramCase } from 'change-case';

import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types';
import { call, getMembersKey, getMemberType, isServer, parseValue, request } from '../utils/index.js';

export function Element(tag?: string) {
  return function (constructor: PlusElement) {
    if (isServer()) return;

    if (customElements.get(tag!)) return;

    class Plus extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }

      // TODO: ignore functions
      static get observedAttributes() {
        return getMembersKey(constructor).map((key) => paramCase(key));
      }

      adoptedCallback() {
        call(this[CONSTANTS.API_INSTANCE], CONSTANTS.LIFECYCLE_ADOPTED);
      }

      attributeChangedCallback(attribute, prev, next) {
        const instance = this[CONSTANTS.API_INSTANCE];

        if (!instance) {
          return (this[CONSTANTS.ATTRIBUTES_STACK] ||= []).push([attribute, prev, next]);
        }

        if (instance[CONSTANTS.ATTRIBUTE_CHANGED_CALLBACK]) return;

        const name = camelCase(attribute);

        const type = getMemberType(instance, name);

        const value = parseValue(next, type);

        if (instance[name] === value) return;

        instance[name] = value;
      }

      connectedCallback() {
        this[CONSTANTS.API_INSTANCE] = new (constructor as any)();

        const instance = this[CONSTANTS.API_INSTANCE];

        instance[CONSTANTS.API_HOST] = () => this;

        call(instance, CONSTANTS.LIFECYCLE_CONNECTED);

        this[CONSTANTS.ATTRIBUTES_STACK]?.forEach((parameters) => {
          this.attributeChangedCallback.apply(this, parameters);
        });

        request(instance);
      }

      disconnectedCallback() {
        call(this[CONSTANTS.API_INSTANCE], CONSTANTS.LIFECYCLE_DISCONNECTED);
      }
    }

    customElements.define(tag!, Plus);
  };
}

import { html, render as renderer } from 'uhtml';

import * as CONSTANTS from '../../configs/constants.js';
import { PlusElement } from '../../types/index.js';
import { isServer, parseValue, sync, updateAttribute } from '../utils/index.js';

// TODO: input type
export const proxy = (Class: PlusElement) => {
  if (isServer()) return class {};

  let host, instance, update;

  const members = Class[CONSTANTS.TOKEN_STATIC_MEMBERS] || {};

  const call = (key: string) => {
    return instance[key]?.apply(instance);
  };

  const get = (key: string) => {
    return instance[CONSTANTS.TOKEN_API][key];
  };

  const set = (key: string, value: any) => {
    instance[CONSTANTS.TOKEN_API][key] = value;
  };

  const render = (/*force?: boolean*/) => {
    if (isServer()) return;

    // TODO
    update(instance.attributes || {});

    renderer(host.shadowRoot, () => {
      const markup = call(CONSTANTS.TOKEN_METHOD_RENDER);

      const styles = Class[CONSTANTS.TOKEN_STATIC_STYLES];

      if (!styles && !markup) return html``;

      if (!styles) return markup;

      if (!markup) return html`<style>${styles}</style>`;

      return html`<style>${styles}</style>${markup}`;
    });
  };

  return class extends HTMLElement {
    constructor() {
      super();

      host = this;

      // TODO
      instance = new (Class as any)();

      // TODO
      (instance.setup || []).map((fn) => fn.bind(instance)(this));

      instance[CONSTANTS.TOKEN_API] = instance[CONSTANTS.TOKEN_API] || {};

      set(CONSTANTS.TOKEN_API_READY, false);

      set(CONSTANTS.TOKEN_API_HOST, () => this);

      set(CONSTANTS.TOKEN_API_STATE, () => render());

      set(CONSTANTS.TOKEN_API_PROPERTY, (name, value, options: any = {}) => {
        const raw = this.getAttribute(name);

        const [type] = members[name];

        const parsed = parseValue(raw, type);

        if (parsed === value) return;

        if (options.reflect) updateAttribute(this, name, value);

        render();
      });

      this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
      return Object.keys(members).filter((key) => members[key][0] != CONSTANTS.TYPE_FUNCTION);
    }

    adoptedCallback() {
      call(CONSTANTS.TOKEN_LIFECYCLE_ADOPTED);
    }

    attributeChangedCallback(name, prev, next) {
      const [type] = members[name];

      instance[name] = parseValue(next, type);

      if (!get(CONSTANTS.TOKEN_API_READY)) return;

      render();
    }

    connectedCallback() {
      update = sync(this, {});

      call(CONSTANTS.TOKEN_LIFECYCLE_CONNECTED);

      render();

      call(CONSTANTS.TOKEN_LIFECYCLE_LOADED);

      set(CONSTANTS.TOKEN_API_READY, true);
    }

    disconnectedCallback() {
      call(CONSTANTS.TOKEN_LIFECYCLE_DISCONNECTED);
    }
  };
};
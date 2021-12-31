import { html, render } from 'uhtml';
import * as CONSTANTS from '../../configs/constants.js';
import { isServer } from '../../utils/is-server.js';
import { sync } from '../../utils/sync.js';
import { toBoolean } from '../../utils/to-boolean.js';
import { updateAttribute } from '../../utils/update-attribute.js';

export { html, render } from 'uhtml';

// TODO: input type
export const define = (name: string, Class: any) => {

  if (isServer()) return;

  customElements.define(name, Class);
};

// TODO: input type
export const proxy = (Class: any) => {

  if (isServer()) return class { };

  let instance, update;

  const members = Class[CONSTANTS.TOKEN_STATIC_MEMBERS] || {};

  const styles = Class[CONSTANTS.TOKEN_STATIC_STYLES];

  const getValue = (key, value) => {

    const [type] = members[key];

    switch (type) {

      case CONSTANTS.TYPE_BOOLEAN:
        return toBoolean(value);

      case CONSTANTS.TYPE_NUMBER:
        return parseFloat(value);

      default:
        return value;
    }
  }

  return class extends HTMLElement {

    constructor() {

      super();

      instance = new Class();

      instance[CONSTANTS.TOKEN_API] = instance[CONSTANTS.TOKEN_API] || {};

      instance[CONSTANTS.TOKEN_API][CONSTANTS.TOKEN_API_READY] = false;

      instance[CONSTANTS.TOKEN_API][CONSTANTS.TOKEN_API_HOST] = () => this;

      instance[CONSTANTS.TOKEN_API][CONSTANTS.TOKEN_API_STATE] = () => this.render();

      instance[CONSTANTS.TOKEN_API][CONSTANTS.TOKEN_API_PROPERTY] = (name, value, options: any = {}) => {

        const raw = this.getAttribute(name);

        const parsed = getValue(name, raw);

        if (parsed === value) return;

        if (options.reflect)
          updateAttribute(this, name, value);

        this.render();
      }

      Object
        .keys(members)
        .map((key) => {

          const [type] = members[key];

          let get, set;

          if (type === CONSTANTS.TYPE_FUNCTION) {
            get = () => instance[key].bind(instance);
          }
          else {
            get = () => instance[key];
            set = (value) => instance[key] = value;
          }

          Object.defineProperty(this, key, { get, set })
        })

      this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
      return Object
        .keys(members)
        .filter((key) => members[key][0] != CONSTANTS.TYPE_FUNCTION)
    }

    attributeChangedCallback(name, prev, next) {

      instance[name] = getValue(name, next);

      if (!instance[CONSTANTS.TOKEN_API][CONSTANTS.TOKEN_API_READY]) return;

      this.render();
    }

    connectedCallback() {

      update = sync(this, {});

      instance[CONSTANTS.TOKEN_LIFECYCLE_MOUNT] && instance[CONSTANTS.TOKEN_LIFECYCLE_MOUNT]();

      this.render();

      instance[CONSTANTS.TOKEN_LIFECYCLE_READY] && instance[CONSTANTS.TOKEN_LIFECYCLE_READY]();

      instance[CONSTANTS.TOKEN_API][CONSTANTS.TOKEN_API_READY] = true;
    }

    disconnectedCallback() {
      instance[CONSTANTS.TOKEN_LIFECYCLE_UNMOUNT] && instance[CONSTANTS.TOKEN_LIFECYCLE_UNMOUNT]();
    }

    render() {

      // TODO
      update(instance.attributes || {});

      const fn = instance[CONSTANTS.TOKEN_METHOD_RENDER];

      render(
        this.shadowRoot as any,
        () => {

          if (!fn && !styles) return html``;

          if (!fn) return html`<style>${styles}</style>`;

          if (!styles) return fn.apply(instance);

          return html`<style>${styles}</style>${fn.apply(instance)}`;
        }
      )
    }
  }
}
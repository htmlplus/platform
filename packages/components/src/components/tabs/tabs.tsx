import { Attributes, Component, Event, EventEmitter, Property, Watch } from '@htmlplus/compiler/dist/client';
import { createLink } from '@app/services';

const { Action, Observable, reconnect } = createLink('Tabs');

/**
 * @development
 * @slot default - The default slot.
 */
@Component()
export class Tabs {

  /**
   * Provides your own value.
   */
  @Property({ mutable: true })
  value?: any;

  /**
   * You can use vertical property for vertical mode.
   */
  @Property({ reflect: true })
  vertical?: boolean;

  /**
   * Panels are not always used inside tabs.They may be used outside, in which you can use 
   * this property to connect them to their corresponding tabs.
   */
  @Property()
  connector?: string;

  /**
   * Fired when the value changes.
   */
  @Event({ cancelable: true })
  plusChange!: EventEmitter<any>;

  @Observable()
  tunnel?: any;

  @Attributes()
  get attributes() {
    return {
      // TODO
    }
  }

  /**
   * Internal Methods
   */

  broadcast(value) {
    this.tunnel = value;
  }

  @Action()
  change(value: any) {

    const event = this.plusChange(value);

    if (event.defaultPrevented) return;

    this.value = value;
  }

  initialize() {
    this.broadcast(this.value);
  }

  terminate() { }

  /**
   * Watchers
   */

  @Watch('connector', 'value')
  watcher(next, prev, name) {

    switch (name) {

      case 'connector':

        reconnect(this);

        break;

      case 'value':

        this.tunnel = next;

        break;
    }
  }

  /**
   * Lifecycles
   */

  componentDidLoad() {
    this.initialize();
  }

  unmount() {
    this.terminate();
  }

  render() {
    return (
      <slot />
    )
  }
}

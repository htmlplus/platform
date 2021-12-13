import { Attributes, Component, Property } from '@htmlplus/compiler/client';

/**
 * @development 
 */
@Component()
export class ToolbarSpacer {

  /**
   * TODO
   */
  @Property()
  grow?: number = 1;

  @Attributes()
  get attributes() {
    return {
      style: `flex-grow: ${this.grow};`
    }
  }
}

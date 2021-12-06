import { Component } from '@htmlplus/compiler/dist/client';

/**
 * @slot default - The default slot.
 */
@Component()
export class DialogFooter {
  render() {
    return (
      <slot />
    )
  }
}

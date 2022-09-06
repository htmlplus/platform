import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types/index.js';

export const getMemberType = (target: PlusElement, key: string): string => {
  return (target.constructor[CONSTANTS.STATIC_MEMBERS] || target[CONSTANTS.STATIC_MEMBERS] || {})[key]?.[0];
};

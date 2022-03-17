/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/components/dist/components/scroll-indicator/scroll-indicator';
import type { ScrollIndicatorJSX as Type } from '@htmlplus/components/dist/components/scroll-indicator/scroll-indicator';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusScroll: 'onScroll',
}>

export const ScrollIndicator = /*@__PURE__*/ proxy<HTMLScrollIndicatorElement, Renamed>(
  'plus-scroll-indicator', 
  ['disabled', 'source', ], 
  ['plusScroll', ],
);
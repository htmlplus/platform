/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/components/dist/components/card-footer/card-footer';
import type { CardFooterJSX as Type } from '@htmlplus/components/dist/components/card-footer/card-footer';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const CardFooter = /*@__PURE__*/ proxy<HTMLCardFooterElement, Renamed>(
  'plus-card-footer', 
  [], 
  [],
);
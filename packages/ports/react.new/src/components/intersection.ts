/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/components/dist/components/intersection/intersection';
import type { IntersectionJSX as Type } from '@htmlplus/components/dist/components/intersection/intersection';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusChange: 'onChange',
}>

export const Intersection = /*@__PURE__*/ proxy<HTMLIntersectionElement, Renamed>(
  'plus-intersection', 
  ['behavior', 'disabled', 'once', 'root', 'rootMargin', 'threshold', ], 
  ['plusChange', ],
);
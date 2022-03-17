/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dist/components/browse/browse';
import type { BrowseJSX as Type } from '@htmlplus/core/dist/components/browse/browse';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusChange: 'onChange',
  plusError: 'onError',
  plusSuccess: 'onSuccess',
}>

export const Browse = /*@__PURE__*/ proxy<HTMLBrowseElement, Renamed>(
  'plus-browse', 
  ['accept', 'disabled', 'droppable', 'min', 'max', 'minSize', 'maxSize', 'multiple', ], 
  ['plusChange', 'plusError', 'plusSuccess', ],
);
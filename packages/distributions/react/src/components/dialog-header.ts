/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dialog-header';
import type { DialogHeaderJSX as DialogHeaderJSX } from '@htmlplus/core/types/components/dialog-header/dialog-header';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<DialogHeaderJSX, { 
}>

export const DialogHeader = proxy<HTMLPlusDialogHeaderElement, Renamed>(
  'plus-dialog-header', 
  [], 
  [],
);
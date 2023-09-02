import { RefObject } from 'react';

export type GetIsDialogChild = (
  el: HTMLElement | Element,
  ref: RefObject<HTMLDialogElement>,
) => boolean;

export const getIsDialogChild: GetIsDialogChild = (el, ref) => {
  const refCurrent = ref.current;
  if (!refCurrent) return false;
  if (el === refCurrent) return false;

  let { parentElement } = el;

  while (parentElement && parentElement !== document.body) {
    if (parentElement === refCurrent) return true;
    parentElement = parentElement.parentElement;
  }
  return false;
};

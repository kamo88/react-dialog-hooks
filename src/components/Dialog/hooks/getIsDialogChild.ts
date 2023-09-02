import { RefObject } from 'react';

export const getIsDialogChild = (
  el: HTMLElement | Element,
  ref: RefObject<HTMLDialogElement>,
): boolean => {
  if (!ref.current) return false;
  if (el === ref.current) return false;

  let tempEl = el;
  while (tempEl !== ref.current) {
    if (tempEl.parentElement?.tagName === 'body') {
      return false;
    }
    if (tempEl.parentElement) {
      tempEl = tempEl.parentElement;
    }
  }
  return true;
};

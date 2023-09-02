export type GetIsDialogChild = (
  el: HTMLElement | Element,
  dialog: HTMLDialogElement | null,
) => boolean;

/**
 * on body-scroll-lock` s disableBodyScroll option allowTouchMove,
 * One accurate determination process.
 * Since there seems to be no problem without it, only the method is implemented for now.
 */
export const getIsDialogChild: GetIsDialogChild = (el, dialog) => {
  if (!dialog) return false;
  if (el === dialog) return false;

  let { parentElement } = el;

  while (parentElement && parentElement !== document.body) {
    if (parentElement === dialog) return true;
    parentElement = parentElement.parentElement;
  }
  return false;
};

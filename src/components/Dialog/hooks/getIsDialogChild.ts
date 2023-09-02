export type GetIsDialogChild = (
  el: HTMLElement | Element,
  dialog: HTMLDialogElement | null,
) => boolean;

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

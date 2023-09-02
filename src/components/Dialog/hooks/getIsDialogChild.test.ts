import { expect, test, describe } from 'vitest';

import { getIsDialogChild } from './getIsDialogChild';

describe('hooks/getIsDialogChild ※no use logic', () => {
  test('dialog: null', () => {
    const touchingContent = document.createElement('div');
    const isDialogChild = getIsDialogChild(touchingContent, null);
    expect(isDialogChild).toBe(false);
  });

  test('touching dialog', () => {
    const dialog = document.createElement('dialog');
    const isDialogChild = getIsDialogChild(dialog, dialog);
    expect(isDialogChild).toBe(false);
  });

  test('not child touchingContent no parent', () => {
    const touchingContent = document.createElement('div');
    const dialog = document.createElement('dialog');
    const isDialogChild = getIsDialogChild(touchingContent, dialog);
    expect(isDialogChild).toBe(false);
  });

  test('not child touchingContent parent body', () => {
    const touchingContent = document.createElement('div');
    document.body.appendChild(touchingContent);
    const dialog = document.createElement('dialog');
    const isDialogChild = getIsDialogChild(touchingContent, dialog);
    expect(isDialogChild).toBe(false);
  });

  test('is dialog`s grandchild element', () => {
    const touchingContentContainer = document.createElement('div');
    const touchingContent = document.createElement('div');
    touchingContentContainer.appendChild(touchingContent);
    const dialog = document.createElement('dialog');
    dialog.appendChild(touchingContentContainer);
    const isDialogChild = getIsDialogChild(touchingContent, dialog);
    expect(isDialogChild).toBe(true);
  });
});

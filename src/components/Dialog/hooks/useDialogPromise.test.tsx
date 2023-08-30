import { expect, test, describe } from 'vitest';
import { renderHook } from '@testing-library/react';
// import { sleep } from '@/utils/sleep';
import {
  useDialogPromise,
  // DialogResponse
} from './useDialogPromise';

// const SLEEP_MS = 50;

describe('hooks/useDialogPromise', () => {
  test('return', () => {
    const { result } = renderHook(() => useDialogPromise());
    expect(result.current.ref.current).toBeNull();
    expect(result.current.isOpen).toBe(false);
    expect(result.current.showDialog).toBeTruthy();
    expect(result.current.closeDialogMain).toBeTruthy();
    expect(result.current.closeDialogSub).toBeTruthy();
    expect(result.current.closeDialogAbort).toBeTruthy();
  });

  // describe('showDialog', () => {
  //   test('closeDialogMain', async () => {
  //     const { result } = renderHook(() => useDialogPromise());
  //     const showDialogPromise = result.current.showDialog();
  //     await sleep(SLEEP_MS);
  //     result.current.closeDialogMain();
  //     await expect(showDialogPromise).resolves.toBe(DialogResponse.main);
  //   });

  //   test('closeDialogSub', async () => {
  //     const { result } = renderHook(() => useDialogPromise());
  //     const showDialogPromise = result.current.showDialog();
  //     await sleep(SLEEP_MS);
  //     result.current.closeDialogSub();
  //     await expect(showDialogPromise).resolves.toBe(DialogResponse.sub);
  //   });

  //   test('closeDialogAbort', async () => {
  //     const { result } = renderHook(() => useDialogPromise());
  //     const showDialogPromise = result.current.showDialog();
  //     await sleep(SLEEP_MS);
  //     result.current.closeDialogAbort();
  //     await expect(showDialogPromise).resolves.toBe(DialogResponse.abort);
  //   });
  // });
});

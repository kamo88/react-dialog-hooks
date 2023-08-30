import { expect, test, describe } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useDialog } from './useDialog';

describe('hooks/useDialog', () => {
  test('return', () => {
    const { result } = renderHook(() => useDialog());

    expect(result.current.ref.current).toBeNull();
    expect(result.current.isOpen).toBe(false);
    expect(result.current.showDialog).toBeTruthy();
    expect(result.current.closeDialog).toBeTruthy();
  });

  test('showDialog', () => {
    const { result, rerender } = renderHook(() => useDialog());

    result.current.showDialog();
    rerender();

    expect(result.current.isOpen).toBe(true);
  });
});

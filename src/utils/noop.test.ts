import { expect, test, describe } from 'vitest';
import { noop } from './noop';

describe('utils/noop', () => {
  test('fire', () => {
    expect(noop()).toBeUndefined();
  });
});

export type Sleep = (ms?: number) => Promise<unknown>;

export const sleep: Sleep = (ms = 1000) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

module.exports = {
  '*.*': ['prettier --write --no-error-on-unmatched-pattern'],
  '*.{js,jsx,ts,tsx}': ['eslint --fix --no-error-on-unmatched-pattern'],
};

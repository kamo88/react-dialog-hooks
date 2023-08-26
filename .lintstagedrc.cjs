module.exports = {
  '*.{js,jsx,ts,tsx,html,css,scss,json,md}': [
    'prettier --write --no-error-on-unmatched-pattern',
  ],
  '*.{js,jsx,ts,tsx}': ['eslint --fix --no-error-on-unmatched-pattern'],
};

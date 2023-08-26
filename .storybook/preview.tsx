import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const modalPortalArea1 = document.createElement('div');
modalPortalArea1.id = 'root-modal';
document.body.appendChild(modalPortalArea1);

const modalPortalArea2 = document.createElement('div');
modalPortalArea2.id = 'root-modal-01';
document.body.appendChild(modalPortalArea2);

export default preview;

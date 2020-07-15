module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions/register',
    '@storybook/addon-links',
    '@storybook/addon-notes/register',
    '@storybook/addon-storysource',
    'storybook-addon-jsx',
  ],
};

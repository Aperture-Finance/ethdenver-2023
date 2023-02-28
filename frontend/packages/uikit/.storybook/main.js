const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "themeprovider-storybook/register",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: (config) => {
    const scopePluginIndex = config.resolve.plugins.findIndex(
      ({ constructor }) =>
        constructor && constructor.name === "ModuleScopePlugin"
    );
    config.resolve.plugins.splice(scopePluginIndex, 1);
    config.module.rules.push({
      test: /\.tsx?$/,
      use: "ts-loader",
      include: path.resolve(__dirname, "../.."),
    });
    return config;
  },
};

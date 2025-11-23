/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.stories.@(js|ts|jsx|tsx|vue)",
    "../src/**/*.mdx",                     // 👈 Enable MDX docs
  ],

  addons: [
    "@storybook/addon-docs",               // 👈 Add Docs addon
    "@storybook/addon-controls",           // (Optional but recommended)
    "@storybook/addon-actions",            // (Optional for logging events)
  ],

  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },

  viteFinal: async (config) => {
    // REQUIRED for Quasar — otherwise Vite loads wrong packages
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      "quasar",
      "quasar/src/css/index.sass",
      "@quasar/extras/material-icons/material-icons.css"
    ];

    return config;
  },
};

export default config;

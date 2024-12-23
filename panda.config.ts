import { createDreamPreset } from '@dreamy-ui/system';
import { defineConfig } from '@pandacss/dev';
import pandaPreset from '@pandacss/preset-panda';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  importMap: '@dreamy-ui/system',
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  outExtension: 'js',
  presets: [
    pandaPreset,
    createDreamPreset({
      rounded: 'sm',
      primaryColor: '#ff0000',
      secondaryColor: '#ff0000',
    }),
  ],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#ff0000' },
          secondary: { value: '#ff0000' },
        },
        fonts: {
          body: { value: 'system-ui, sans-serif' },
        },
      },
    },
  },
});

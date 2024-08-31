// babel.config.ts
import type { ConfigAPI } from '@babel/core';

export default function (api: ConfigAPI) {
  api.cache(true);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      '@babel/plugin-proposal-private-property-in-object',
      // other plugins
    ],
  };
}

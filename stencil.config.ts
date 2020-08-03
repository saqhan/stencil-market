import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-market',
  taskQueue: 'async',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};

import { defineConfig } from 'umi';
import routes from './config/routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  devServer: {
    port: 8009,
  },
  theme: {
    '@backgroundColor': '#fff',
    '@color': '#fff',
  },
});

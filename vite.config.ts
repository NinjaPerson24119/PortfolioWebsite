import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react-swc';
import { UserConfig, defineConfig } from 'vite';

function configGenerator(dev: boolean): UserConfig {
  return {
    plugins: [mdx(), react()],
    build: {
      sourcemap: dev,
    },
  };
}

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ command, mode, ssrBuild }) => {
  return configGenerator(command === 'serve');
});

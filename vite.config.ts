import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { UserConfig } from 'vite';

function configGenerator(dev: boolean): UserConfig {
  return {
    plugins: [react()],
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

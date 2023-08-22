import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    return {
      // dev specific config
      plugins: [react()],
      build: {
        sourcemap: true,
      }
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      plugins: [react()],
    }
  }
})

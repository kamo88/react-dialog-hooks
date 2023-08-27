import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@kamo88-dialog',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'react-dom',
        },
      },
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      pathsToAliases: true,
      exclude: [
        path.resolve(__dirname, 'src/**/*.test.*'),
        path.resolve(__dirname, 'src/**/*.stories.*'),
        path.resolve(__dirname, 'src/**/*.example.*'),
        path.resolve(__dirname, 'src/components/Dialog/DialogContainer.tsx'),
      ],
      include: [
        path.resolve(__dirname, 'src/index.ts'),
        path.resolve(__dirname, 'src/components/Dialog'),
      ],
      outDir: path.resolve(__dirname, 'dist/types'),
    }),
    mode === 'analyze' &&
      visualizer({
        open: true,
        filename: 'analyze/stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
  ],
  test: {
    environment: 'jsdom',
  },
}));
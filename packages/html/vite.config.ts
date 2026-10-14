import { defineConfig } from 'vite-plus'
import { tsupCompatibleExtensions } from '../../pack.config.mjs'

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://release-v1-2-0-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
  },
  pack: {
    entry: ['src/index.ts', 'src/server/index.ts'],
    tsconfig: '../../tsconfig.build.json',
    outDir: 'dist',
    dts: { sourcemap: true },
    clean: true,
    sourcemap: true,
    target: 'es2019',
    format: ['esm', 'cjs'],
    outExtensions: tsupCompatibleExtensions,
  },
})

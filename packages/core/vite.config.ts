import { defineConfig } from 'vite-plus'
import { tsupCompatibleExtensions } from '../../pack.config.mjs'

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://release-v1-0-0-rc-1-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
  },
  pack: [
    {
      deps: {
        // tsdown <0.23 compatibility: resolve external dependency subpaths.
        // Remove to preserve subpath imports as written (the new default).
        // https://tsdown.dev/options/dependencies#deps-resolvedepsubpath
        resolveDepSubpath: true,
      },
      entry: ['src/index.ts'],
      // Use a local tsconfig with a wider rootDir so monorepo-only @tiptap/pm path
      // aliases can resolve without pulling external workspace files outside the program.
      tsconfig: './tsconfig.build.json',
      outDir: 'dist',
      dts: { sourcemap: true },
      clean: true,
      sourcemap: true,
      target: 'es2019',
      format: ['esm', 'cjs'],
      outExtensions: tsupCompatibleExtensions,
    },
    {
      deps: {
        // tsdown <0.23 compatibility: resolve external dependency subpaths.
        // Remove to preserve subpath imports as written (the new default).
        // https://tsdown.dev/options/dependencies#deps-resolvedepsubpath
        resolveDepSubpath: true,
      },
      entry: ['src/jsx-runtime.ts'],
      tsconfig: '../../tsconfig.build.json',
      outDir: 'dist/jsx-runtime',
      dts: { sourcemap: true },
      clean: true,
      sourcemap: true,
      target: 'es2019',
      format: ['esm', 'cjs'],
      outExtensions: tsupCompatibleExtensions,
    },
  ],
})

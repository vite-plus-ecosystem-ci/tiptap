import { defineConfig } from 'vite-plus'
import { tsupCompatibleExtensions } from '../../pack.config.mjs'

export default defineConfig({
  pack: {
    deps: {
      // tsdown <0.23 compatibility: resolve external dependency subpaths.
      // Remove to preserve subpath imports as written (the new default).
      // https://tsdown.dev/options/dependencies#deps-resolvedepsubpath
      resolveDepSubpath: true,
    },
    entry: [
      'changeset/index.ts',
      'commands/index.ts',
      'dropcursor/index.ts',
      'gapcursor/index.ts',
      'history/index.ts',
      'inputrules/index.ts',
      'keymap/index.ts',
      'model/index.ts',
      'schema-list/index.ts',
      'state/index.ts',
      'tables/index.ts',
      'transform/index.ts',
      'view/index.ts',
    ],
    tsconfig: '../../tsconfig.build.json',
    outDir: 'dist',
    dts: { sourcemap: true },
    clean: true,
    target: 'es2019',
    format: ['esm', 'cjs'],
    outExtensions: tsupCompatibleExtensions,
  },
})

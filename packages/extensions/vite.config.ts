import { defineConfig } from 'vite-plus'
import { tsupCompatibleExtensions } from '../../pack.config.mjs'

const entries = [
  'src/character-count/index.ts',
  'src/drop-cursor/index.ts',
  'src/focus/index.ts',
  'src/gap-cursor/index.ts',
  'src/undo-redo/index.ts',
  'src/placeholder/index.ts',
  'src/selection/index.ts',
  'src/trailing-node/index.ts',
  'src/index.ts',
]

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://rfc-vitest-v5-upgrade-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
  },
  pack: entries.map(entry => ({
    entry: [entry],
    tsconfig: '../../tsconfig.build.json',
    outDir: `dist${entry.replace('src', '').split('/').slice(0, -1).join('/')}`,
    dts: { sourcemap: true },
    sourcemap: true,
    target: 'es2019',
    format: ['esm', 'cjs'],
    deps: { neverBundle: [/^[^./]/] },
    outExtensions: tsupCompatibleExtensions,
  })),
})

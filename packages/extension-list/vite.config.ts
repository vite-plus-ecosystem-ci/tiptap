import { defineConfig } from 'vite-plus'
import { tsupCompatibleExtensions } from '../../pack.config.mjs'

const entries = [
  'src/bullet-list/index.ts',
  'src/item/index.ts',
  'src/keymap/index.ts',
  'src/kit/index.ts',
  'src/ordered-list/index.ts',
  'src/task-item/index.ts',
  'src/task-list/index.ts',
  'src/index.ts',
]

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://release-v1-0-0-rc-0-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
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

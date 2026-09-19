import { defineConfig } from 'vite-plus'
import { basePackConfig } from '../../pack.config.mjs'

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
  },
  pack: {
    entry: ['src/index.ts'],
    ...basePackConfig(),
  },
})

import { defineConfig } from 'vite-plus'
import { basePackConfig } from '../../pack.config.mjs'

export default defineConfig({
  test: { clearMocks: false },
  pack: {
    entry: ['src/index.ts', 'src/streaming-reveal.ts'],
    ...basePackConfig(),
  },
})

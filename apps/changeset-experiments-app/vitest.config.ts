import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    outputFile: './junit.xml',
    coverage: {
      all: true,
      reportsDirectory: 'coverage',
      reporter: ['lcovonly', 'text-summary'],
      provider: 'istanbul',
      include: ['**/*.{ts,tsx}'],
      exclude: ['template/**/*.{ts,tsx}'],
    },
  },
})

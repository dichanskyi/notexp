const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: '.' })

const customJestConfig = {
    testEnvironment: 'jsdom',
    clearMocs: true,
    moduleDirectories: ['node_modules', 'src'],
    setupFileAfterEnv: ['<rootDir>/src/setupTests.ts '],
}

module.exports = createJestConfig(customJestConfig)

module.exports = {
	clearMocks: true,
	restoreMocks: true,
	resetModules: true,
	testEnvironment: "node",
	testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/monorepo-lambda", "<rootDir>/typescript-lambda"],
	coveragePathIgnorePatterns: ["<rootDir>/test/mocks"],
	collectCoverageFrom: ["event-handlers/**/*.js", "commands/*.js"],
	coverageReporters: ["json", "lcov", "json-summary", "text"],
	coverageThreshold: {
		global: {
			statements: 85,
			branches: 85,
			functions: 85,
			lines: 85
		}
	}
};
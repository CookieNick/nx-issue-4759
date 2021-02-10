const nxPreset = require("@nrwl/jest/preset");
module.exports = {
	...nxPreset,
	testMatch: ["**/+(*.)spec.ts?(x)"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	resolver: "@nrwl/jest/plugins/resolver",
	moduleFileExtensions: ["tsx", "ts", "js", "html"],
	reporters: [
		"default",
		[
			"jest-junit",
			{
				outputDirectory: "<rootDir>",
			},
		],
	],
	collectCoverage: true,
	collectCoverageFrom: [
		"**/*.{ts,tsx}",
		"!**/*.stories.{ts,tsx}",
		"!**/*.config.{ts,tsx}",
		"!**/src/index.{ts,tsx}",
		"!**/[Gg]enerated/**",
		"!**/*gql-generated.ts",
		"!**/*.d.ts",
		"!**/node_modules/**",
	],
	coverageReporters: ["json", "cobertura"],
};

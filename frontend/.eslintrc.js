// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const folders = fs
	.readdirSync('src', { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => !['styles', 'ui/styles'].includes(dirent.name) && dirent.name);

module.exports = {
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'airbnb-typescript',
		'prettier',
		'airbnb-typescript-prettier',
		'next/core-web-vitals'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module',
		extraFileExtensions: ['.css'],
		project: './tsconfig.json'
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'simple-import-sort',
		'import',
		'unused-imports',
		'prettier'
	],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.ts', '.tsx']
			}
		],
		'react/jsx-props-no-spreading': 'off',
		'no-underscore-dangle': 'off',
		'no-param-reassign': 'off',
		'react/function-component-definition': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'import/prefer-default-export': 'off',
		'import/no-cycle': 'off',
		'no-plusplus': 'off',
		'no-useless-escape': 'off',
		'no-restricted-exports': 'off',
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton']
			}
		],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'unused-imports/no-unused-imports': 'error',
		'react/jsx-curly-brace-presence': ['error', { props: 'always' }],
		'prettier/prettier': ['error', { usePrettierrc: true }]
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				moduleDirectory: ['node_modules', 'src/']
			}
		}
	},
	overrides: [
		{
			files: ['src/**/*.ts?(x)', 'src/**/*.js?(x)'],
			rules: {
				'simple-import-sort/imports': [
					'error',
					{
						groups: [
							['^react', '^next', '^@?\\w'],
							['^styles', '^ui/styles'],
							[`^(${folders.join('|')})(/.*|$)`, '^\\.'],
							['^[^.]']
						]
					}
				]
			}
		}
	],
	ignorePatterns: ['.eslintrc.js']
};

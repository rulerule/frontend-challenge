module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential',
		'@vue/standard'
	],
	rules: {
		'no-console': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		'indent': ['error', 'tab'],
		'no-undef': 'off',
		'standard/no-callback-literal': 'off',
		'no-unneeded-ternary': 'off',
		'no-extend-native': 'off',
		'no-new': 'off'
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['react', '@emotion'],
	rules: {
		'react/jsx-fragments': 'off',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-filename-extension': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react/jsx-props-no-spreading': 'off',

		'jsx-a11y/label-has-associated-control': 'off',
		'jsx-a11y/alt-text': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',

		'nonblock-statement-body-position': 'off',
		'object-curly-newline': 'off',
		'operator-linebreak': 'off',
		'function-paren-newline': 'off',
		'no-param-reassign': 'off',
		'import/first': 'off',
		'import/named': 'error',
		'import/namespace': 'error',
		'import/default': 'error',
		'import/export': 'error',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'prefer-promise-reject-errors': 'off',
		'prefer-destructuring': 'off',
		'no-async-promise-executor': 'off',
		'comma-dangle': ['error', 'never'],
		'no-unreachable': 'warn',
		'max-len': 0,
		'no-constant-condition': 0,
		'no-tabs': 0,
		'no-bitwise': 0,
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'arrow-parens': ['error', 'as-needed'],
		'func-names': 0,
		'implicit-arrow-linebreak': 'off',
		'template-curly-spacing': 'off',
		curly: ['error', 'multi-or-nest'],
		'no-unused-vars': 'warn',
		'no-underscore-dangle': 0,
		camelcase: 0,
		'no-continue': 0,
		'import/no-cycle': 0,
		'consistent-return': 0,
		'no-plusplus': 0
	}
};

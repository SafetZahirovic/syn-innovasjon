module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 'off',
    'max-len': ['error', 150],
    indent: ['error', 'tab'],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': 'off',
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'array-element-newline': ['error', 'consistent'],
    'space-before-function-paren': 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  overrides: [
    {
      // TODO: enable again when Prettier 1.17 launches
      files: ['*.vue'],
      plugins: ['sort-class-members'],
      rules: {
        // https://github.com/mysticatea/vue-eslint-parser#%EF%B8%8F-known-limitations
        'max-len': 'off',
        // Other
        indent: 'off',
        'vue/script-indent': ['error', 'tab', { baseIndent: 1 }],
        'vue/html-indent': ['error', 'tab'],
        'vue/no-multi-spaces': 'error',
        'vue/no-use-v-if-with-v-for': 'off',
        'sort-class-members/sort-class-members': [
          'error',
          {
            order: [
              '[properties]',
              '[accessor-kinds]',
              '[lifecycle-methods]',
              { type: 'method' },
              {
                name: 'render',
                type: 'method'
              }
            ],
            groups: {
              'accessor-kinds': [{ type: 'method', kind: 'get' }, { type: 'method', kind: 'set' }, '[accessor-pairs]'],
              'lifecycle-methods': [
                { name: 'beforeCreate', type: 'method' },
                { name: 'created', type: 'method' },
                { name: 'beforeMount', type: 'method' },
                { name: 'mounted', type: 'method' },
                { name: 'beforeUpdate', type: 'method' },
                { name: 'updated', type: 'method' },
                { name: 'activated', type: 'method' },
                { name: 'deactivated', type: 'method' },
                { name: 'beforeDestroy', type: 'method' },
                { name: 'destroyed', type: 'method' }
              ]
            }
          }
        ]
      }
    }
  ]
}

module.exports = require('@backstage/cli/config/eslint-factory')(__dirname, {
  plugins: ['jsdoc'],
  rules: {
    'jsdoc/check-access': 1,
    'jsdoc/check-alignment': 1,
    'jsdoc/check-param-names': ['warn', { checkDestructured: false }],
    'jsdoc/check-property-names': 1,
    'jsdoc/check-tag-names': ['warn', { definedTags: ['visibility'] }],
    'jsdoc/check-types': 1,
    'jsdoc/check-values': 1,
    'jsdoc/empty-tags': 1,
    'jsdoc/implements-on-classes': 1,
    'jsdoc/multiline-blocks': 1,
    'jsdoc/no-multi-asterisks': 1,
    'jsdoc/no-types': 1,
    'jsdoc/no-undefined-types': 1,
    'jsdoc/require-asterisk-prefix': 1,
    'jsdoc/require-description': 1,
    'jsdoc/require-jsdoc': [
      'warn',
      {
        publicOnly: true,
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
        contexts: ['ExportNamedDeclaration > VariableDeclaration'],
      },
    ],
    'jsdoc/require-param': ['warn', { checkDestructured: false }],
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-property': 1,
    'jsdoc/require-property-description': 1,
    'jsdoc/require-property-name': 1,
    'jsdoc/require-property-type': 1,
    'jsdoc/valid-types': 1,
  },
  settings: {
    jsdoc: {
      tagNamePreference: { 'tag constructor': 'constructor' },
    },
  },
});

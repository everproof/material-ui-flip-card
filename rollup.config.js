import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: { name: 'material-ui-flip-card' },
  plugins: [
    resolve({ extensions: ['.js', '.jsx'] }),
    commonjs({
      namedExports: {
        'node_modules/material-ui/styles/index.js': ['withStyles'],
      },
    }),
    babel({ exclude: 'node_modules/**', plugins: ['external-helpers'] }),
  ],
  external: [
    'material-ui',
    'material-ui/Card',
    'material-ui/styles',
    'prop-types',
    'react',
  ],
  globals: {
    'material-ui/Card': 'Card',
    'material-ui/styles': 'styles',
    'prop-types': 'PropTypes',
    react: 'React',
  },
}

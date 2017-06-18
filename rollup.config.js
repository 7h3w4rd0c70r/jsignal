
import babel from 'rollup-plugin-babel'

export default {
    entry: 'src/index.js',
    dest: 'dist/jsignal.js',
    format: 'cjs',
    plugins: [babel({
        exclude: 'node_modules/**',
        presets: ['es2015-rollup','stage-0']
    })]
}
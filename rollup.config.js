import pkg from './package.json'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
const formatName = 'GupoXlsxPopulate'

export default {
    input: './index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'esm',
        },
        {
            file: pkg.browser,
            format: 'umd',
            name: formatName,
        },
    ],
    plugins: [
        json(),
        commonjs(),
        resolve({
            preferBuiltins: true,
            jsnext: true,
            main: true,
            brower: true,
        }),
        babel({
            exclude: 'node_modules/**',
        }),
    ],
}

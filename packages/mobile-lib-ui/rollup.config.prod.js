/**
 * @FileName: rollup.config.prod.js
 * @Author: yexiaolong/771388996@qq.com
 * @Date: 2022/5/31 6:19 PM
 */
const path = require('path');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
import { babel } from '@rollup/plugin-babel'
const json = require('rollup-plugin-json');
const { terser } = require('rollup-plugin-terser');
const vue = require('rollup-plugin-vue');
const postcss = require('rollup-plugin-postcss');

const inputPath = path.resolve(__dirname, './lib/index.js');
const outputUmdPath = path.resolve(__dirname, './dist/index.js');
const outputEsPath = path.resolve(__dirname, './dist/index.es.js');
const outputCjsPath = path.resolve(__dirname, './dist/index.cjs.js');

module.exports = {
    input: inputPath,
    output: [
        {
            file: outputUmdPath,
            format: 'umd',
            name: 'mobile',
            globals: {
                'vue': 'vue'
            }
        },
        {
            file: outputEsPath,
            format: 'es'
        }
        // {
        //     file: outputCjsPath,
        //     format: 'cjs'
        // }
    ],
    plugins: [
        resolve(),
        // commonjs(),
        babel({
            exclude: "node_modules/**",
            babelHelpers: 'bundled'
        }),
        json(),
        vue(),
        postcss({
            plugins: []
        }),
        commonjs(),
        terser()
    ],
    external: [
        'vue'
    ]
}

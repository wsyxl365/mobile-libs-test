/**
 * @FileName: rollup.config.dev.js
 * @Author: yexiaolong/771388996@qq.com
 * @Date: 2022/5/31 6:19 PM
 */
const path = require('path');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
import { babel } from '@rollup/plugin-babel'
const json = require('rollup-plugin-json');
const vue = require('rollup-plugin-vue');
const postcss = require('rollup-plugin-postcss');

const inputPath = path.resolve(__dirname, './lib/index.js');
const outputUmdPath = path.resolve(__dirname, './dist/mobile.js');
const outputEsPath = path.resolve(__dirname, './dist/mobile.es.js');
const outputCjsPath = path.resolve(__dirname, './dist/mobile.cjs.js');

module.exports = {
    input: inputPath,
    output: [
        {
            file: outputUmdPath,
            format: 'umd',
            name: 'mobile',
            globals: {
                'vue': 'Vue'
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
            plugins: [],
            extract: true
        })
    ],
    external: [
        'vue'
    ]
}

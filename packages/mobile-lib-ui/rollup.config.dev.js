/**
 * @FileName: rollup.config.dev.js
 * @Author: yexiaolong/771388996@qq.com
 * @Date: 2022/5/31 6:19 PM
 */
const path = require('path');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const inputPath = path.resolve(__dirname, './src/index.js');
const outputUmdPath = path.resolve(__dirname, './dist/mobile.js');
const outputEsPath = path.resolve(__dirname, './dist/mobile.es.js');
const outputCjsPath = path.resolve(__dirname, './dist/mobile.cjs.js');

module.exports = {
    input: inputPath,
    output: [
        {
            file: outputUmdPath,
            format: 'umd',
            name: 'mobile'
        },
        {
            file: outputEsPath,
            format: 'es'
        },
        {
            file: outputCjsPath,
            format: 'cjs'
        }
    ],
    plugins: [
        resolve(),
        commonjs()
    ],
    external: [
        'vue'
    ]
}

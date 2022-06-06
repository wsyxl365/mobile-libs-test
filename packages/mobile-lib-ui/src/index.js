/**
 * @FileName: index.js
 * @Author: yexiaolong/771388996@qq.com
 * @Date: 2022/5/31 6:18 PM
 */
// // import { random } from 'sam-test-data';
// import data from './cjs'
// import pkg from '../package.json'
//
// console.log(pkg)
//
// const cc = () => {}
//
// // console.log(random(100), cc);
// console.log(data, cc)
//
// export default cc;

import Test from './Test.vue'

export default {
    install: (app) => {
        app.component(Test.name, Test)
    }
}

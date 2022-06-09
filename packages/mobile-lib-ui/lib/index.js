/**
 * @FileName: index.js
 * @Author: yexiaolong/771388996@qq.com
 * @Date: 2022/5/31 6:18 PM
 */
import Test from './test1'
import Test2 from './test2'
import Test3 from './test3'

function install(app) {
    app.component(Test.name, Test)
    app.component(Test2.name, Test2)
    app.component(Test3.name, Test3)
}

export {
    Test,
    Test2,
    Test3
}

export default install;

import Test1 from './Test.vue'

Test1.install = function (Vue) {
    Vue.component(Test1.name, Test1)
}

export default Test1

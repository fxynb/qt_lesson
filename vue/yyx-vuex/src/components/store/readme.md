- 先看页面，再写vuex
 focus 数据流设计
- modules 
  宏观设计一个项目
  模块  对应于vuex中的一个单元设计 四大家族构成  
  Store 单一状态树

  export default new Vuex.Store({
    小型项目中不要用vuex,很复杂，
    就用组件传值 props + emit 
    大型项目呢? vuex modules 
  })

    this.$store.products.items
    this.$store.cart.items


前后端分离
    - 传统vue 
    mouted()
    axios /api/products/:1
    this.products = 
  - vuex 
  products数据不在vuex里， []

  组件 mouted () 
  actions
  axios /api/products/:1
  mutation
  products.all
import Vue from 'vue'
import Vuex, { mapGetters, mapActions } from 'vuex'

// Vue prototype vuex功能？
// 借mapActions mapGetters this.$store this.router

Vuex.use(Vuex);

const state = {
  count:0 //状态树里的状态
}

const mutations = {
  //修改状态
}

const actions = {

}

const getters = {

}
//四大部分
// mapGetters mapActions this.$store
export default new Vuex.Store({
  state,mutations,actions,getters
})
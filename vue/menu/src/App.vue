<template>
  <div id="app">
    <!-- 菜单 -->
    <MenuList :data="menuList"></MenuList>
  </div>
</template>

<script>
import MenuList from './components/MenuList'
import MenuData from './assets/menu'
export default {
  name: 'App',
  data() {
    return {
      menuList:MenuData
    }
  },
  components:{
    MenuList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

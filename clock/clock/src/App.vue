<template>
  <div id="app">
    <Second :second="second"/>
    <Mintue />
    <Hour />
    <Apm />
    <Week />
    <Day />
    <Month />
  </div>
</template>

<script>
// @ src/ alias 短链接
import Second from "@/components/Second.vue";
import Mintue from "@/components/Mintue.vue";
import Hour from "@/components/Hour.vue";
import Apm from "@/components/Apm.vue";
import Week from "@/components/Week.vue";
import Day from "@/components/Day.vue";
import Month from "@/components/Month.vue";
export default {
  name: 'App',
  data(){
    return{
     second: ''
    }
  },
  components:{
    Second,
    Mintue,
    Hour,
    Apm,
    Week,
    Day,
    Month
  },

 methods:{
    start(){
    setInterval(()=>{
      let date = new Date();
      this.second = date.getSeconds();
    },1000);
  },
 },
  created(){
    this.start();
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

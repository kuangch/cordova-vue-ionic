<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <img alt="Vue logo" src="../../assets/dollar.png">
    <br/>
    <img alt="Vue logo" src="../../assets/plus-circle.png">

    <HelloWorld msg="Welcome"/>
    <button @click="goHome">home</button>
    <button @click="goAbout">about</button>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
import jquery from 'jquery'
import CI from 'convenience-image'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
     goHome: function () {
         window.open( 'home.html')
     },
     goAbout: function () {
         window.open( 'about.html')
     }
  }
}

if(true){
    console.log('kuangch')
}else {
    var x = 'kuangch-unreachable'
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

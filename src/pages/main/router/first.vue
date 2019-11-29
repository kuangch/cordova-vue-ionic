<template>
  <ion-tab selected="true" label="首页" icon="home">
    <div id="app">
      <img alt="Vue logo" src="@/assets/dollar.png">
      <br/>
      <img alt="Vue logo" src="@/assets/plus-circle.png">
      <br/>

      <ion-button @click="goHome">home</ion-button>
      <ion-button @click="goAbout">about</ion-button>
    </div>
  </ion-tab>
</template>

<script>

export default {
  name: 'app',
  methods: {
     goHome: function () {
         window.open( 'home.html')
     },
     goAbout: function () {
         window.open( 'about.html')
     }
  }
}

</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

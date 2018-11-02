<template>
  <ion-app>
  <ion-tabs>
    <Photo/>
    <ion-tab selected="true" label="首页" icon="home">
      <HelloWorld/>
    </ion-tab>
    <settings/>
  </ion-tabs>
  <ion-alert-controller/>
  <ion-action-sheet-controller/>
  <ion-loading-controller/>
  <ion-toast-controller/>
</ion-app>
</template>

<script>
import HelloWorld from '../../pages/first/app'
import Settings from '../../components/setting'
import Photo from '../../components/photo'

export default {
  name: "app",
  components: {
    HelloWorld,
    Settings,
    Photo
  },
};
</script>

<style>
</style>

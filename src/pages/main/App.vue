<template>
  <ion-app>
  <ion-tabs>
    <ion-tab label="发现" icon="compass">
      <Photo/>
    </ion-tab>
    <ion-tab selected="true" label="首页" icon="home">
      <HelloWorld/>
    </ion-tab>
    <ion-tab label="设置" icon="settings">
      <settings/>
    </ion-tab>
  </ion-tabs>
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

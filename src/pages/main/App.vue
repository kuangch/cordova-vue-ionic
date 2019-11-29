<template>
  <ion-app>
    <ion-tabs>
      <Photo/>
      <First/>
      <settings/>
    </ion-tabs>
    <ion-alert-controller/>
    <ion-action-sheet-controller/>
    <ion-loading-controller/>
    <ion-toast-controller/>
  </ion-app>
</template>

<script>
import First from './router/first.vue'
import Settings from './router/setting.vue'
import Photo from './router/photo.vue'

export default {
  name: "app",
  components: {
    First,
    Settings,
    Photo
  },
};
</script>

<style>
</style>

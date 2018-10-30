<template>
    <div>
        <ion-button @click="take">{{btn}}</ion-button>
        <div class="container">
            <convenience-image alignment="top-left" :src-nor="img"/>
        </div>
    </div>
</template>

<script>

import {Camera} from '@ionic-native/camera';

export default {
  name: "photo",
  data() {
    return {
      img: "",
      btn: "拍照"
    };
  },
  methods: {
    take: function() {
        const _THIS = this
        _THIS.btn = '启动相机...'
        Camera.getPicture().then(data=>{
            let base64Image = 'data:image/jpeg;base64,' + data;
            _THIS.img = base64Image
        }).catch(e=>{
            _THIS.btn = '拍照'
        })
    }
  }
};
</script>

<style scoped>
.container{
    width: 300px;
    height: 300px;
}
</style>
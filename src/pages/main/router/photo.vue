<template>
    <ion-tab label="发现" icon="compass">
        <ion-button @click="take">{{btn}}</ion-button>
        <div class="container">
            <convenience-image alignment="top-left" :src-nor="img"/>
        </div>
    </ion-tab>
</template>

<script>

// import {Camera} from '@ionic-native/camera';

export default {
  name: "photo",
  data() {
    return {
      img: "",
      btn: "拍照"
    };
  },
  methods: {
    getPicture: function(options){
        const _THIS = this

        if(!navigator.camera){
            _THIS.$toast({
                message: "设备故障",
                showCloseButton:true,
                closeButtonText:'关闭',
                duration: 4000
            })
            return;
        }
        navigator.camera.getPicture(function(image){
            let base64Image = 'data:image/jpeg;base64,' + image;
            _THIS.img = base64Image
        },function(err){
            _THIS.$toast({
                //The message is provided by the device's native code.
                message: err
            })
        },Object.assign({
            // sourceType:Camera.PictureSourceType.CAMERA,
            destinationType:Camera.DestinationType.DATA_URL,
            quality:50,
            targetWidth: 480,
            targetHeight: 640,
            saveToPhotoAlbum: false
        
        },options || {}))
    },  
    take: function() {
        const _THIS = this

        _THIS.$actionSheet({
            buttons: [{
                text: "相机",
                role: "destructive",
                icon: "camera",
                handler: () => {
                    _THIS.getPicture({
                        sourceType:1,
                        saveToPhotoAlbum: true
                    })
                }
            },
            {
                text: "相册",
                role: "destructive",
                icon: "image",
                handler: () => {
                    _THIS.getPicture({
                        sourceType:2,
                    })
                }
            },
            {
                text: "取消",
                icon: "close",
                role: "cancel",
            }]
        })
    }
  },
};
</script>

<style scoped>
.container{
    width: 300px;
    height: 300px;
}
</style>
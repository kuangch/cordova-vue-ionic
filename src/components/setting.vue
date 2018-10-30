<template>
<ion-content>
    <div id="app">
        <ion-button @click="alert" shape="round"  fill="outline">alert</ion-button>
        <ion-button @click="actionSheet" shape="round"  fill="outline">actionSheet</ion-button>
        <ion-list>
            <ion-item v-for="item of items" :key="item.id">
                <ion-avatar slot="start">
                <img src="../assets/logo.png"/>
                </ion-avatar>
                <ion-label>
                <h2>{{item.name}}</h2>
                <h3>{{item.addr}}</h3>
                <p>{{item.desc}}</p>
                </ion-label>
            </ion-item>
        </ion-list>
    </div>
    <ion-alert-controller/>
    <ion-action-sheet-controller/>
    <ion-loading-controller/>
</ion-content> 
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "kuangch",
          addr: "hubei wuhan",
          desc: "软件开发，web前端，android..."
        },
        {
          name: "kuangch2",
          addr: "hubei wuhan2",
          desc: "软件开发，web前端，ios..."
        },
        {
          name: "kuangch3",
          addr: "hubei wuhan3",
          desc: "软件开发，web前端，wp..."
        },
        {
          name: "kuangch3",
          addr: "hubei wuhan3",
          desc: "软件开发，web前端，wp..."
        },
        {
          name: "kuangch3",
          addr: "hubei wuhan3",
          desc: "软件开发，web前端，wp..."
        },
        {
          name: "kuangch3",
          addr: "hubei wuhan3",
          desc: "软件开发，web前端，wp..."
        },
        {
          name: "kuangch3",
          addr: "hubei wuhan3",
          desc: "软件开发，web前端，wp..."
        },
        {
          name: "kuangch3",
          addr: "hubei wuhan3",
          desc: "软件开发，web前端，wp..."
        },
        {
          name: "kuangch3",
          addr: "hubei wuhan3",
          desc: "软件开发，web前端，wp..."
        },
        {
          name: "kuangch3",
          addr: "hubei wuhan3",
          desc: "软件开发，web前端，wp..."
        }
      ]
    };
  },
  name: "settings",
  mounted: function() {
    var content = document.querySelector("ion-content");
    content.scrollEvents = true;
    content.fullscreen = true;
    content.addEventListener("ionScrollStart", () =>
      console.log("scroll start")
    );
    content.addEventListener("ionScroll", ev =>
      console.log("scroll", ev.detail)
    );
    content.addEventListener("ionScrollEnd", () => console.log("scroll end"));
  },
  methods: {
    alert: async function() {

      const _THIS = this  
      const alertController = document.querySelector("ion-alert-controller");
      await alertController.componentOnReady();

      const alert = await alertController.create({
        header: "Alert",
        subHeader: "加载",
        message: "下载..",
        buttons: [
          {
            text: "取消",
            handler: () => {
              console.log("Cancel clicked");
            }
          },
          {
            text: "确定",
            handler: () => {
              console.log("确定 clicked");
              _THIS.loading()
            }
          }
        ]
      });
      return await alert.present();
    },
    loading: async function() {
      const loadingController = document.querySelector(
        "ion-loading-controller"
      );
      await loadingController.componentOnReady();

      const loading = await loadingController.create({
        message: "loding",
        mode:'ios',
        duration: 2000
      });
      return await loading.present();
    },
    actionSheet: async function() {
      const actionSheetController = document.querySelector(
        "ion-action-sheet-controller"
      );
      await actionSheetController.componentOnReady();

      const actionSheet = await actionSheetController.create({
        header: "Albums",
        buttons: [
          {
            text: "Delete",
            role: "destructive",
            icon: "trash",
            handler: () => {
              console.log("Delete clicked");
            }
          },
          {
            text: "Share",
            icon: "share",
            handler: () => {
              console.log("Share clicked");
            }
          },
          {
            text: "Play (open modal)",
            icon: "arrow-dropright-circle",
            handler: () => {
              console.log("Play clicked");
            }
          },
          {
            text: "Favorite",
            icon: "heart",
            handler: () => {
              console.log("Favorite clicked");
            }
          },
          {
            text: "Cancel",
            icon: "close",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            }
          }
        ]
      });
      await actionSheet.present();
    }
  }
};
</script>

<style scoped>
#app {
  text-align: center;
}
</style>
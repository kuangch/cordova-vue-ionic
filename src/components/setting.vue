<template>
<ion-content id="app">
  <ion-button @click="alert" shape="round"  fill="outline">alert</ion-button>
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
      const _THIS = this;
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
              _THIS.loading();
            }
          }
        ]
      });
      return await alert.present();
    },
    loading: async function() {
      this.$loading({
        message: "加载中",
        mode: "md",
        duration: 2000
      })
    },
  }
};
</script>

<style scoped>
#app {
  text-align: center;
}
</style>
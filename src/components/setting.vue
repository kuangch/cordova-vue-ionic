<template>
<div id="app">
  <ion-chip>
    <ion-avatar>
      <img @click="loading" src="https://avatars0.githubusercontent.com/u/8882618">
    </ion-avatar>
    <ion-label>kuangch</ion-label>
  </ion-chip>
  <ion-content fullscreen>
  <ion-list lines="inset">
      <ion-item @click="detail(item)" detail v-for="item of items" :key="item.id">
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
</div> 
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
          name: "kuangch4",
          addr: "hubei wuhan4",
          desc: "软件开发，web前端，wp..."
        },
        {
          name: "kuangch5",
          addr: "hubei wuhan5",
          desc: "软件开发，web前端，wp..."
        },
        {
          name: "kuangch6",
          addr: "hubei wuhan6",
          desc: "软件开发，web前端，wp..."
        },
        {
          name: "kuangch7",
          addr: "hubei wuhan3",
          desc: "软件开发，web前端，wp..."
        },
        {
          name: "kuangch8",
          addr: "hubei wuhan3",
          desc: "软件开发，web前端，wp..."
        },
        {
          name: "kuangch9",
          addr: "hubei wuhan3",
          desc: "软件开发，web前端，wp..."
        },
        {
          name: "kuangch10",
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
    content.addEventListener("ionScrollStart", () =>
      console.log("scroll start")
    );
    content.addEventListener("ionScroll", ev =>
      console.log("scroll", ev.detail)
    );
    content.addEventListener("ionScrollEnd", () => console.log("scroll end"));
  },
  methods: {
    detail: function(item) {
      this.$alert({
        header: item.name,
        subHeader: item.addr,
        message: item.desc,
      })
    },
    loading: function() {
      this.$loading({
        message: 'loading',
        mode: "ios",
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
let loading
const Base = {}
Base.install = function (Vue) {

  Vue.prototype.$loading = async function (options) {

    const loadingController = document.querySelector(
      "ion-loading-controller"
    );
    await loadingController.componentOnReady();

    loading = await loadingController.create(Object.assign({
      mode: 'ios',
    }, options || {}));
    return await loading.present();
  }

  Vue.prototype.$loadingDismiss = function () {
    if (loading) {
      loading.dismiss()
    }
  }

  Vue.prototype.$actionSheet = async function (options) {
    const actionSheetController = document.querySelector(
      "ion-action-sheet-controller"
    );
    await actionSheetController.componentOnReady();

    const actionSheet = await actionSheetController.create(Object.assign({
      header: "",
      buttons: [{
        text: "取消",
        icon: "close",
        role: "cancel",
        handler: () => {
          console.log("Cancel clicked");
        }
      }]
    }, options || {}));
    await actionSheet.present();
  }

  Vue.prototype.$toast = async function (options) {
    const toastController = document.querySelector('ion-toast-controller');
    await toastController.componentOnReady();

    const toast = await toastController.create(Object.assign({
      duration: 2000,
      position:'top',
      mode:'ios'
    },options || {}));
    return await toast.present();
  }

}

export default Base
const CustomDirective = {}
CustomDirective.install = function (Vue) {
    Vue.directive('compute-padding',{

        bind: function(el,binding){
            console.log('v-compute-padding')
            el.style.paddingBottom = binding.value + 'px'
        },
        updated() {
            console.log('v-compute-padding:update')  
        
        },
    })
}

export default CustomDirective
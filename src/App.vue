<template>
  <HeaderX @swapComponent="swapComponent"/>
  <component :is="comp" :voxelsList="voxelsList"></component>
</template>

<script>
import HeaderX from './components/HeaderX.vue'
import AboutX from './components/AboutX.vue'
import VoxelX from './components/VoxelX.vue'

export default {
  name: 'App',

  components:{
    HeaderX, VoxelX, AboutX
  },

  data(){
    return{
      comp: AboutX,
      voxelsList:
      [
        {
            id:0,
            source:"/voxels/0.png",
            name:"Barcelona",
            description:"My first ever city done in the CryptoCities project. The capital of Spain with it's majestic cathedral and sophisticated street layout."
        },
        {
            id:1,
            source:"/voxels/1.png",
            name:"Beijing",
            description:"No description yet."
        }

      ]
    }
  },

  methods:{
    swapComponent(icomp){
      this.comp = icomp;
    },

  }
}
</script>

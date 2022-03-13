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
      voxelsList: this.retrieveJSON()
    }
  },

  methods:{
    swapComponent(icomp){
      this.comp = icomp;
    },

    retrieveJSON(){
      const jsonData = require('./json/voxels.json');
      const jsonObjectArray = jsonData.voxel_cities;

      return jsonObjectArray;
    },

  }
}
</script>

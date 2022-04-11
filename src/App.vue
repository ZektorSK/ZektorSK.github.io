<template>
  <HeaderX @swapComponent="swapComponent" :comp="comp" />
  <component :is="comp" :voxelsList="voxelsList"></component>
</template>

<script>
import HeaderX from './components/HeaderX.vue'
import AboutX from './components/AboutX.vue'
import VoxelX from './components/VoxelX.vue'

import img0url from './assets/0.png'
import img0urlB from './assets/0_blur.png'
import img1url from './assets/1.png'
import img1urlB from './assets/1_blur.png'
import img2url from './assets/2.png'
import img2urlB from './assets/2_blur.png'
import img3url from './assets/3.png'
import img3urlB from './assets/3_blur.png'
import img4url from './assets/4.png'
import img4urlB from './assets/4_blur.png'
import img5url from './assets/5.png'
import img5urlB from './assets/5_blur.png'
import img6url from './assets/6.png'
import img6urlB from './assets/6_blur.png'
import img7url from './assets/7.png'
import img7urlB from './assets/7_blur.png'

export default {
  name: 'App',

  components:{
    HeaderX, VoxelX, AboutX
  },

  mounted(){
    
  },

  data(){
    return{
      comp: AboutX,
      voxelsList:
      [
        {
          id:0,
          source: img0url,
          blur_source: img0urlB,
          name:"Chernobyl",
          description:"A depiction of how the nuclear catastrophy city looks like today."
        },
        {
          id:1,
          source: img1url,
          blur_source: img1urlB,
          name:"Covid-22 City",
          description:"Fictional city in the middle-east that has been infected by a zombie virus."
        },
        {
          id:2,
          source: img2url,
          blur_source: img2urlB,
          name:"Stalingrad",
          description:"A depiction of the city during the battle of Stalingrad."
        },
        {
          id:3,
          source: img3url,
          blur_source: img3urlB,
          name:"Tabriz",
          description:"A major Iranian city, almost entirely encircled by mountains."
        },
        {
          id:4,
          source: img4url,
          blur_source: img4urlB,
          name:"Gaza City",
          description:"A depiction of the Gaza strip capital soaked in conflict."
        },
        {
          id:5,
          source: img5url,
          blur_source: img5urlB,
          name:"Himeji Castle",
          description:"The magnificent japanese feudal castle."
        },
        {
          id:6,
          source: img6url,
          blur_source: img6urlB,
          name:"Kuressaare",
          description:"A peaceful little town on the island of Saaremaa in Estonia."
        },
        {
          id:7,
          source: img7url,
          blur_source: img7urlB,
          name:"Monaco",
          description:"The luxurious city that hosted the F1"
        }
      ]
    }
  },

  methods:{
    swapComponent(icomp){
      this.comp = icomp;
    },

  },
}
</script>

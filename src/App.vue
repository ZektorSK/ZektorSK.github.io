<template>
  <HeaderX @swapComponent="swapComponent" :comp="comp" />
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

  mounted(){
    
  },

  data(){
    return{
      comp: AboutX,
      voxelsList:
      [
        {
            id:0,
            source:"../assets/0.png",
            blur_source:"../assets/0_blur.png",
            name:"Chernobyl",
            description:"A depiction of how the nuclear catastrophy city looks like today."
        },
        {
            id:1,
            source:"../assets/1.png",
            blur_source:"../assets/1_blur.png",
            name:"Covid-22 City",
            description:"Fictional city in the middle-east that has been infected by a zombie virus."
        },
        {
            id:2,
            source:"../assets/2.png",
            blur_source:"../assets/2_blur.png",
            name:"Stalingrad",
            description:"A depiction of the city during the battle of Stalingrad."
        },
        {
            id:3,
            source:"../assets/3.png",
            blur_source:"../assets/3_blur.png",
            name:"Tabriz",
            description:"A major Iranian city, almost entirely encircled by mountains."
        },
        {
            id:4,
            source:"../assets/4.png",
            blur_source:"../assets/4_blur.png",
            name:"Gaza City",
            description:"A depiction of the Gaza strip capital soaked in conflict."
        },
        {
            id:5,
            source:"../assets/5.png",
            blur_source:"../assets/5_blur.png",
            name:"Himeji Castle",
            description:"The magnificent japanese feudal castle."
        },
        {
            id:6,
            source:"../assets/6.png",
            blur_source:"../assets/6_blur.png",
            name:"Kuressaare",
            description:"A peaceful little town on the island of Saaremaa in Estonia."
        },
        {
          id:7,
          source:"../assets/7.png",
          blur_source:"../assets/7_blur.png",
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

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

  data(){
    return{
      comp: AboutX,
      voxelsList:
      [
        {
            id:0,
            source:"/0.png",
            name:"Chernobyl",
            description:"A depiction of how the nuclear catastrophy city looks like today."
        },
        {
            id:1,
            source:"/1.png",
            name:"Covid-22 City",
            description:"Fictional city in the middle-east that has been infected by a zombie virus."
        },
        {
            id:2,
            source:"/2.png",
            name:"Stalingrad",
            description:"A depiction of the city during the battle of Stalingrad."
        },
        {
            id:3,
            source:"/3.png",
            name:"Tabriz",
            description:"A major Iranian city, almost entirely encircled by mountains."
        },
        {
            id:4,
            source:"/4.png",
            name:"Gaza City",
            description:"A depiction of the Gaza strip capital soaked in conflict."
        },
        {
            id:5,
            source:"/5.png",
            name:"Himeji Castle",
            description:"The magnificent japanese feudal castle."
        },
        {
            id:6,
            source:"/6.png",
            name:"Kuressaare",
            description:"A peaceful little town on the island of Saaremaa in Estonia."
        },
        {
          id:7,
          source:"/7.png",
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

  }
}
</script>

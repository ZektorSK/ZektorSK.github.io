<template>
    <header class="flex max-width h-16 backdrop-blur-[90px] border-b-2 drop-shadow-lg bg-slate-900">

        <img src="../assets/avatar.png" class="m-2 ml-20 border-2">
        <h1 class="text-slate-100 m-2 ml-20 mt-5 text-3xl font-serif font-medium">Voxel Art Portfolio Site</h1>

        <ul class="inline-flex gap-5 p-2 m-[0.3px] ml-auto mr-60 text-slate-100">
          <li>
            <button @click="$emit('swapComponent', 'VoxelX')" class="p-2 font-mono shadow-md text-3xl font-bold uppercase hover:bg-slate-50 hover:text-slate-800 cursor-pointer border-2" :class="{'bg-slate-50' : comp==='VoxelX', 'text-slate-800' : comp==='VoxelX'}">Voxel</button>
          </li>
          <li>
            <button @click="$emit('swapComponent', 'AboutX'), changeBGtoDefault()" class="p-2 font-mono shadow-md text-3xl font-bold uppercase hover:bg-slate-50 hover:text-slate-800 cursor-pointer border-2" :class="{'bg-slate-50' : comp==='AboutX', 'text-slate-800' : comp==='AboutX'}">About</button>
          </li>
        </ul>

    </header>
</template>

<script>
export default {
  props: ['comp'],
  methods:{
    changeBGtoDefault(){
      document.querySelector('body').setAttribute('style', 'background-image: url(/bg_blur.png);');
    }
  }
}
</script>


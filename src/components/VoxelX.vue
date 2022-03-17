<template>
    <div class="flex justify-center justify-items-center h-screen grow-0 shrink-0">
        <div id="image" class="mr-[100px] pb-[60px] flex justify-center justify-items-center items-center h-screen">
            <img :src="voxel.source" class="w-[650px] h-[650px] rounded-full">
        </div>
        <div id="description" class="h-[300px] w-[700px] flex justify-center justify-items-center items-center">
            <img id="arrow-left" class="w-8 h-8 reverse-arrow" src="../assets/arrow.png">
            <h1 class="font-serif text-7xl font-bold text-center">{{voxel.name}}</h1>
            <img id="arrow-right" class="w-8 h-8" src="../assets/arrow.png">
            <hr>
            <p>{{voxel.description}}</p>
        </div>
    </div>
</template>

<script>
export default {

    props:['voxelsList'],

    data(){
        return{
            voxel: this.getRandomVoxel()
        }
    },

    methods:{
        getRandomVoxel(){
            const randIndex = Math.floor(Math.random() * Object.keys(this.voxelsList).length);
            const randObject = this.voxelsList[randIndex];

            return randObject;
        },
    }

}
</script>

<style scoped>
.reverse-arrow{
    transform: scaleX(-1);
}
</style>

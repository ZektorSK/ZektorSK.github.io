<template>
    <div class="flex justify-center justify-items-center">
        <div id="image w-80 h-80">
            <img :src="voxel.source">
        </div>
        <div id="text-container">
            <div id="description">
                <img id="arrow-left">
                <h1>{{voxel.name}}</h1>
                <img id="arrow-right">
                <p>{{voxel.description}}</p>
            </div>
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

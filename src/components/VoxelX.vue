<template>
    <div class="flex justify-center justify-items-center h-screen grow-0 shrink-0 text-white">

        <div id="image" class="mr-[80px] pb-[60px] flex justify-center justify-items-center items-center h-screen">
            <img src="../assets/arrow.png" class="reverse-arrow h-[70px] w-[100px] cursor-pointer" @click="removeCircle(this.voxel.id); goLeft(this.voxel.id); changeBG(this.voxel); changeCircle(this.voxel.id)">
            <img :src="voxel.source" class="w-[650px] h-[650px] border-4 border-white">
            <img src="../assets/arrow.png" class="h-[70px] w-[100px] cursor-pointer" @click="removeCircle(this.voxel.id); goRight(this.voxel.id); changeBG(this.voxel); changeCircle(this.voxel.id)">
        </div>

        <div id="description" class="h-[500px] w-[700px] mt-[200px] p-3 flex justify-center justify-items-center items-center shadow-md flex-col">

            <ul class="flex justify-center flex-row gap-2 mb-6">
                <li v-for="(voxl, index) in voxelsList" :key="voxl.id">
                    <img src="../assets/circle_empty.png" class="w-[20px] h-[20px] cursor-pointer" :id="index" @click="removeCircle(this.voxel.id); changePosition(voxl); changeCircle(voxl.id); changeBG(voxl)">
                </li>
            </ul>

            <div id="head" class="flex justify-center justify-items-center items-center flex-row underline decoration-4 underline-offset-8">
                <h1 class="font-serif text-8xl font-bold text-center">{{voxel.name}}</h1>
            </div>
            <p class="text-center mt-6 text-lg font-mono font-medium">{{voxel.description}}</p>
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

            this.changeBG(randObject);
            return randObject;
        },
        goLeft(i_id){
            if(i_id < this.voxelsList.length && i_id > 0){
                i_id -= 1;
                this.voxel = this.voxelsList[i_id];

                console.log("I moved left!");
            }else{
                i_id = (this.voxelsList.length) - 1;
                this.voxel = this.voxelsList[i_id];
                console.log("I went to the end!");
            }
        },
        goRight(i_id){
            if(i_id < this.voxelsList.length-1 && i_id >= 0){
                i_id += 1;
                this.voxel = this.voxelsList[i_id];
                console.log("I moved right!");
            }else{
                this.voxel = this.voxelsList[0];
                console.log("I went to the beginning!");
            }
        },
        changeBG(i_voxel){
            document.body.setAttribute('style', `background-image: url(${CSS.escape(i_voxel.blur_source)});`);
        },
        changeCircle(id){
            document.getElementById(id).setAttribute('src', '../assets/circle_full.png');
        },
        removeCircle(id){
            document.getElementById(id).setAttribute('src', '../assets/circle_empty.png');
        },
        changePosition(voxl){
            this.voxel = voxl;
        }
    },

    mounted(){
        this.changeCircle(this.voxel.id);

    }
}
</script>

<style scoped>
.reverse-arrow{
    transform: scaleX(-1);
}
</style>

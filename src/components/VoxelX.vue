<template>
    <div class="flex justify-center justify-items-center h-screen grow-0 shrink-0 text-white">

        <div id="image" class="mr-[100px] pb-[60px] flex justify-center justify-items-center items-center h-screen">
            <img :src="voxel.source" class="w-[650px] h-[650px] border-4 border-white">
        </div>

        <div id="description" class="h-[500px] w-[700px] mt-[200px] p-3 flex justify-center justify-items-center items-center shadow-md flex-col">

            <ul class="flex justify-center flex-row gap-2 mb-6">
                <li v-for="(voxl, index) in voxelsList" :key="voxl">
                    <img src="../assets/circle_empty.png" class="w-[20px] h-[20px] inverted" :id="index">
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
            this.changeCircle(randObject.id);
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
            if(i_id < this.voxelsList.length && i_id > 0){
                i_id += 1;
                this.voxel = this.voxelsList[i_id];
                console.log("I moved right!");
            }else{
                this.voxel = this.voxelsList[0];
                console.log("I went to the beginning!");
            }
        },
        changeBG(i_voxel){
            const url_toblur = i_voxel.source.slice(0, 7) + '/blur' + i_voxel.source.slice(7);
            document.querySelector('body').setAttribute('style', `background-image: url(${CSS.escape(url_toblur)});`);
        },
        changeCircle(id){
            document.querySelector('#'+id).attr('src', '../assets/circle_full.png');
        }
    }

}
</script>

<style scoped>
.reverse-arrow{
    transform: scaleX(-1);
}

.inverted{
    filter: invert(100%);
}
</style>

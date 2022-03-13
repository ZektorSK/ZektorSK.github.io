<template>
    <header class="flex max-width h-16 shadow-lg">

        <img src="../assets/avatar.png" class="m-2 ml-20 border-2">
        <img src="../assets/discord.png" class="m-2 ml-2 mt-4 w-8 h-8 grayscale">
        <a href="" class="m-2 ml-0 mt-4 text-lg text-neutral-600 font-semibold font-mono underline">Zektor#9367</a>

        <ul class="inline-flex gap-5 p-2 m-1 ml-auto mr-60 text-slate-900">
          <li>
            <button @click="$emit('swapComponent', 'VoxelX')" class="p-2 font-mono shadow-md text-3xl font-bold uppercase hover:bg-slate-50 hover:text-slate-500 cursor-pointer" >Voxel</button>
          </li>
          <li>
            <button @click="$emit('swapComponent', 'AboutX')" class="p-2 font-mono shadow-md text-3xl font-bold uppercase hover:bg-slate-50 hover:text-slate-500 cursor-pointer">About</button>
          </li>
        </ul>

        <div class="mt-5 m-5 flex justify-center">
        <img src="../assets/logo.png" class="w-12 h-12">
        <img src="../assets/tailwind.png" class="w-12 h-12">
        </div>

    </header>
</template>

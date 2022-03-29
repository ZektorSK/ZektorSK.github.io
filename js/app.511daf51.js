(function(){"use strict";var e={396:function(e,t,o){var n=o(9242),s=o(3396);function i(e,t,o,n,i,r){const l=(0,s.up)("HeaderX");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l,{onSwapComponent:r.swapComponent,comp:i.comp},null,8,["onSwapComponent","comp"]),((0,s.wg)(),(0,s.j4)((0,s.LL)(i.comp),{voxelsList:i.voxelsList},null,8,["voxelsList"]))],64)}var r=o(7139),l=o(8308);const c={class:"flex max-width h-16 backdrop-blur-[90px] border-b-2 drop-shadow-lg bg-slate-900"},a=(0,s._)("img",{src:l,class:"m-2 ml-20 border-2"},null,-1),u=(0,s._)("h1",{class:"text-slate-100 m-2 ml-20 mt-5 text-3xl font-serif font-medium"},"Voxel Art Portfolio Site",-1),p={class:"inline-flex gap-5 p-2 m-[0.3px] ml-auto mr-60 text-slate-100"};function d(e,t,o,n,i,l){return(0,s.wg)(),(0,s.iD)("header",c,[a,u,(0,s._)("ul",p,[(0,s._)("li",null,[(0,s._)("button",{onClick:t[0]||(t[0]=t=>e.$emit("swapComponent","VoxelX")),class:(0,r.C_)(["p-2 font-mono shadow-md text-3xl font-bold uppercase hover:bg-slate-50 hover:text-slate-800 cursor-pointer border-2",{"bg-slate-50":"VoxelX"===o.comp,"text-slate-800":"VoxelX"===o.comp}])},"Voxel",2)]),(0,s._)("li",null,[(0,s._)("button",{onClick:t[1]||(t[1]=t=>(e.$emit("swapComponent","AboutX"),l.changeBGtoDefault())),class:(0,r.C_)(["p-2 font-mono shadow-md text-3xl font-bold uppercase hover:bg-slate-50 hover:text-slate-800 cursor-pointer border-2",{"bg-slate-50":"AboutX"===o.comp,"text-slate-800":"AboutX"===o.comp}])},"About",2)])])])}var x={props:["comp"],methods:{changeBGtoDefault(){document.querySelector("body").setAttribute("style","background-image: url(./voxels/blur/bg_blur.png);")}}},f=o(89);const m=(0,f.Z)(x,[["render",d]]);var h=m,g=o(5878),v=o(1602),b=o(9698);const w={class:"flex justify-center items-center h-screen gap-[100px]"},y=(0,s.uE)('<figure><img src="'+g+'" class="w-[500px] h-[500px] border-4 border-gray-300"><figcaption class="text-white font-mono font-light">A Cyberpunk inspired street</figcaption></figure><div class="text-center text-white w-[700px] shadow-lg"><h1 class="text-5xl font-serif underline underline-offset-4">Hello There!</h1><br><p class="font-mono text-xl font-light">My name is Daniel and I make voxel art for 2 years now.</p><br><p class="font-mono text-xl font-light">I made this site to display my skills as a voxel artist and also as an aspiring web developer.</p><br><p class="font-mono text-xl font-light">The projects shown here come from the CryptoCities collection which I have worked on as an artist.</p><br><br><div class="flex shadow-lg"><p class="font-mono text-xl font-light text-left text-white">Contact:</p><img src="'+v+'" class="w-8 h-8 ml-2"><p class="font mono text-sm mt-1 text-indigo-200 font-semibold">Zektor#9367</p><img src="'+b+'" class="w-8 h-8 ml-2"><p class="font mono text-sm mt-1 text-white font-bold">dankomajchrak423@gmail.com</p></div></div>',2),A=[y];function C(e,t){return(0,s.wg)(),(0,s.iD)("div",w,A)}const j={},k=(0,f.Z)(j,[["render",C]]);var S=k;const z={class:"flex justify-center justify-items-center h-screen grow-0 shrink-0 text-white"},B={id:"image",class:"mr-[80px] pb-[60px] flex justify-center justify-items-center items-center h-screen"},G=["src"],K={id:"description",class:"h-[500px] w-[700px] mt-[200px] p-3 flex justify-center justify-items-center items-center shadow-md flex-col"},L={class:"flex justify-center flex-row gap-2 mb-6"},I=["id","onClick"],O={id:"head",class:"flex justify-center justify-items-center items-center flex-row underline decoration-4 underline-offset-8"},V={class:"font-serif text-8xl font-bold text-center"},E={class:"text-center mt-6 text-lg font-mono font-medium"};function T(e,t,o,n,i,l){return(0,s.wg)(),(0,s.iD)("div",z,[(0,s._)("div",B,[(0,s._)("img",{src:"/arrow.png",class:"reverse-arrow h-[70px] w-[100px] cursor-pointer",onClick:t[0]||(t[0]=e=>{l.removeCircle(this.voxel.id),l.goLeft(this.voxel.id),l.changeBG(this.voxel),l.changeCircle(this.voxel.id)})}),(0,s._)("img",{src:i.voxel.source,class:"w-[650px] h-[650px] border-4 border-white"},null,8,G),(0,s._)("img",{src:"/arrow.png",class:"h-[70px] w-[100px] cursor-pointer",onClick:t[1]||(t[1]=e=>{l.removeCircle(this.voxel.id),l.goRight(this.voxel.id),l.changeBG(this.voxel),l.changeCircle(this.voxel.id)})})]),(0,s._)("div",K,[(0,s._)("ul",L,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.voxelsList,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:e},[(0,s._)("img",{src:"/circle_empty.png",class:"w-[20px] h-[20px] cursor-pointer",id:t,onClick:t=>{l.removeCircle(this.voxel.id),l.changePosition(e),l.changeCircle(e.id),l.changeBG(e)}},null,8,I)])))),128))]),(0,s._)("div",O,[(0,s._)("h1",V,(0,r.zw)(i.voxel.name),1)]),(0,s._)("p",E,(0,r.zw)(i.voxel.description),1)])])}var Z={props:["voxelsList"],data(){return{voxel:this.getRandomVoxel()}},methods:{getRandomVoxel(){const e=Math.floor(Math.random()*Object.keys(this.voxelsList).length),t=this.voxelsList[e];return this.changeBG(t),t},goLeft(e){e<this.voxelsList.length&&e>0?(e-=1,this.voxel=this.voxelsList[e],console.log("I moved left!")):(e=this.voxelsList.length-1,this.voxel=this.voxelsList[e],console.log("I went to the end!"))},goRight(e){e<this.voxelsList.length-1&&e>=0?(e+=1,this.voxel=this.voxelsList[e],console.log("I moved right!")):(this.voxel=this.voxelsList[0],console.log("I went to the beginning!"))},changeBG(e){const t=e.source.slice(0,7)+"/blur"+e.source.slice(7);document.querySelector("body").setAttribute("style",`background-image: url(${CSS.escape(t)});`)},changeCircle(e){document.getElementById(e).setAttribute("src","/circle_full.png")},removeCircle(e){document.getElementById(e).setAttribute("src","/circle_empty.png")},changePosition(e){this.voxel=e}},mounted(){this.changeCircle(this.voxel.id)}};const D=(0,f.Z)(Z,[["render",T],["__scopeId","data-v-394d44c6"]]);var H=D,P={name:"App",components:{HeaderX:h,VoxelX:H,AboutX:S},data(){return{comp:S,voxelsList:[{id:0,source:"/voxels/0.png",name:"Chernobyl",description:"A depiction of how the nuclear catastrophy city looks like today."},{id:1,source:"/voxels/1.png",name:"Harran",description:"Fictional city in the middle-east that has been infected by a zombie virus."},{id:2,source:"/voxels/2.png",name:"Stalingrad",description:"A depiction of the city during the battle of Stalingrad."},{id:3,source:"/voxels/3.png",name:"Tabriz",description:"A major Iranian city, almost entirely encircled by mountains."},{id:4,source:"/voxels/4.png",name:"Gaza City",description:"A depiction of the Gaza strip capital soaked in conflict."},{id:5,source:"/voxels/5.png",name:"Himeji Castle",description:"The magnificent japanese feudal castle."},{id:6,source:"/voxels/6.png",name:"Kuressaare",description:"A peaceful little town on the island of Saaremaa in Estonia."}]}},methods:{swapComponent(e){this.comp=e}}};const X=(0,f.Z)(P,[["render",i]]);var Q=X;(0,n.ri)(Q).mount("#app")},8308:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFfElEQVRogb2ZW2gUVxjHf1sbqEnLLMuszYrZkGKNVYgpxQqraFLaVSStxLJR0QexglBUEKptpWADJYgWpOBLSqitVCoxNKVoocFoGutKG2pDejFZiRuNuMbYmAkxKV3C9GGd8czu7GUu8f8yZ87lO//vNnvOt/AEEZRl1aztBE+7IaQQBGVZraiqgb4uV4hrcKxAoZasqKoxtJXEAIB66/59j5P9bSugEff5A0iByoxxJTGQ0a8kBgyKiLLsKmJ5kUbcjIiIRxbOqhzA2GhC77OrgCUP6HGcB2bWF8dE+PwBgyJWUbACQVlWa+s/BGBo8EpWciIZMyWyKWYXcwqZJJIHuPl3J4ur38TrK8PrK9PfS4PVTPwzyNyS51i2ajteXxnjD26byhTDyEkiP1UIeTFshgavsGzVdsN7OrTxXJ5yCzk1Tycf7+vSk1dsm5GTApUZbbPwifd1ZfRZ8UheD4gbZSNvRgJSxM3Iix6oqKqhoqoGnz9gmTzkSOKgLKs+f8CwWXpbClQS7+vSN4dUTGvrsiWs6B1tjR3yORUQoZFKb4uWN4vrbH1SoNIgB+z/DhQcQmZQkknD+9hoQu/L9W1XEgOOv/8abCsQv3OL5rowkCKrkV/q95oSM/OGG0pYUkDbTCSfjrP7ttHbuAslmdTna0+zI4RTZFVAJGAgkUyyKbSCC2OKYa6STNJcF+aDsz3UHfuapX6vHk7poeYm8iaxqIRGMhxaBEBHNKaTizftxlvfQMOjueq9uyiXu6k4eJzmujCHr/ZnyBWT2C6yZr4kSapUVKQTB3Ty0srV+jzfmgbGfmrFM6/UsF69dze19nI3AK8d/14nrsnT5Ds5SmT1gKIoHgQlpKIiDl/t5/DVfsov/su3H4V10tqzfu9Jbv7VAUBxcoJLbZ+byl7q93J7/KFdzgYUnMQ+f4D3mz6jODnBaG8bGz9JEX1wLWXh+r0nGe1tozg5QXFygj1HT/DKlvf09WOjCeJ3bnFkbS1n921jgbcEcGb9vAooiuLR3P3bN5+yacPj40N761HD3BO1z/BzLK6/b9pQwxvvHnksK5kk3rSbyP6dhhB0ioK0lyRJ1ZK0EKTHP6QSPrJ/p95ffajZsfWhwBDS8sANuEkeLNzIOqIxGurtbdIRjXFhTOHA61sB53EvomBBQVlW4+dPZXwuzSCGUEc0xoEfLwIp4mIZxg1FLF3qlcvdSCtX45lXynh7Kx3RGADh0CI9P8zIa0SDsqxu3rKOtzdGiETeccodsFhWCcqy2tu4S1ciHdksr2HzlnWUl5dxofsSPdF+Vzxgqy50ZG2tfpwQoXkknbh26lweWszgdcXxRV6ELSH5yoni5UfD8tBieqKp85CbSWz7PuDzB/D5Awz1dTLU10lv4y69T5yjPXui/a4c3tJhK4SsEkk//7vpgVkrr5e++DIA05NTgPMCVjbYqo3mK0y5eePKB8se0Oqf+cJI8wDA3eu/W2dWICwVd5eE1jM9OaVbWCQ5PTnlasmwUFjyQLolc1l2enKKuc8W22NlAVaSSj29NUI4tIjqQ80sCa3PmCB6wSzMZiORrXjAs/nUGfU0EdNBsxB6EslsxxpqUJbzJrE8+Cetxw7qh7zx9lYa9jVx/j/VVQ/YFaYGZTnvpAXeEvaueBWAljNtrpMHBwq8tKOReSXlANx7eJOZkWHmPF8GwMzIMLFzLW7tlRO2f4lF8gCxcy2s2fNlavCFcubsKGNmZJjiG7/Qe+2PWSEPNg9zQVlmfuVC/X1mZFhvz69cqI9pHplNOAohMISLR+zXcO2LQ072yQtH/w+IljfrMxt3G7Zz4Ku3UrH/Q/sNPn7c7Ymda1F//W6H2diswHYI5ZBjdlubtRD6H1jw2BY45u/yAAAAAElFTkSuQmCC"},5878:function(e,t,o){e.exports=o.p+"img/bg.db8ac867.png"},1602:function(e,t,o){e.exports=o.p+"img/discord.f6e2450b.png"},9698:function(e,t,o){e.exports=o.p+"img/mail.5583bb9d.png"}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,i){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],i=e[u][2];for(var l=!0,c=0;c<n.length;c++)(!1&i||r>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(l=!1,i<r&&(r=i));if(l){e.splice(u--,1);var a=s();void 0!==a&&(t=a)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,s,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/voxels/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,r=n[0],l=n[1],c=n[2],a=0;if(r.some((function(t){return 0!==e[t]}))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(c)var u=c(o)}for(t&&t(n);a<r.length;a++)i=r[a],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=self["webpackChunkmodal_project"]=self["webpackChunkmodal_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(396)}));n=o.O(n)})();
//# sourceMappingURL=app.511daf51.js.map
<template>
    <div id="root">
      <video id="mp4" autoplay muted loop>
<!--        <source src="https://lf3-cdn-tos.bytescm.com/obj/eden-cn/lmeh7pfuho/campus/campus_intro_20200522.mp4" type="video/mp4">-->
        <source src="@/assets/imgs/hombg.mp4" type="video/mp4">
      </video>
<!--      <background-particles/>-->
      <div id="title1">
        <h1>《绿箱循》</h1>
        <h2>——基于“绿色革命”政策的快递行业发展及包装回收数据可视化平台</h2>
      </div>
      <img id="icon1" src="@/assets/imgs/homicon.png" alt="">
      <div id="title2">
        <h1>开 启 属 于 你 的 “绿 箱 之 循” ！</h1>
        <h2>Let’s start your own journey of Express package recycling </h2>
        <div class="options">
            <div @click="go('policy')" class="opti">
              <img id="icon2" src="@/assets/imgs/hom边框.png" alt="">
            <span>政策展示</span>
            </div>
          <div @click="go('info')" class="opti">
            <img id="icon2" src="@/assets/imgs/hom边框.png" alt="">
            <span>数据展示</span>
          </div>
          <div @click="go('process')" class="opti">
            <img id="icon2" src="@/assets/imgs/hom边框.png" alt="">
           <span>知识科普</span>
          </div>
        </div>
        </div>
      </div>


</template>
<script>
import {WOW} from 'wowjs'
import { defineAsyncComponent, defineComponent, onMounted } from "vue";
import { particles } from "./config/particles"
export default defineComponent({
  name:"Homepage",
  components: {
    BackgroundParticles: defineAsyncComponent(() => import('../components/Particles')),

  },
  setup(){
    onMounted(()=>{
      var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: -10, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
      });
      wow.init();
    })

    function go(target){
      this.$router.push('/'+target)
    }
    return{
      particles,go
    }
  }})
</script>
<style lang="less" scoped>
*{
  //border: 2px solid red!important;
  font-family: "华文中宋";
  color: #FFFFFF;
}
video{
  position: fixed;
  z-index: -999;
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 800px;
  object-fit: fill;
}
#icon1{
  position: absolute;
  top: 22%;
  width: 400px;
  height: 400px;
  transform: rotateY(180deg);
}
#root{
  /*width: 100%;*/
  /*min-height: 100%;*/
  /*height: 100vh;*/
  /*overflow: hidden;*/
  /*background-color: #0F2133;*/
  position: relative;
}
body{
  margin: 0;
  padding: 0;
}
.options{
  width: 900px;
  height: 150px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  img{
    width: 340px;
    //height: 250px;
  }
  span{
    position: relative;
    top:-170px;
    font-size: 48px;
    &:hover{
      cursor: pointer;
    }
  }
  .opti{
    margin-left: 30px;
  }

}
#title1{
  height: 700px;
  text-align: center;
  h1{
    animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 3s; /* don't forget to set a duration! */
    font-size: 80px;
    color: #FFFFFF;
    margin-top: 0;
    padding-top:150px;;
  }
  h2{
    font-size: 60px;
  }
}

#title2{
  height: 700px;
  text-align: center;
  h1{
    margin-top: 200px;
    font-size: 75px;
  }
  h2{
    font-size: 40px;
  }
}

</style>

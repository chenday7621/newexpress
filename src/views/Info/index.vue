<template >
    <div id="main">
      <div class="title">
      <span>快递行业发展数据可视化</span>
    </div>
      <div class="btn">
        <BackHome/>
      </div>

      <ul>
        <li @click="change(0)" :class="{active:num===0}">快递行业发展</li>
        <li @click="change(1)" :class="{active:num===1}">快递包装回收现状与碳排放分析</li>
        <li @click="change(2)" :class="{active:num===2}">预测</li>
      </ul>
      <div v-if="num==0">
        <info-industry/>
      </div>
      <div v-else-if="num==1">
        <info-zero/>
      </div>
      <div v-else>
        <info-forecast/>
      </div>

    </div>
</template>
<script>
import BackHome from "@/components/BackHome";
import {ref} from "vue";
import infoIndustry from "@/views/Info/infoIndustry";
import infoForecast from "@/views/Info/infoForecast";
import infoZero from "@/views/Info/infoZero";
import router from "@/router";
export default {
  components:{
    BackHome,infoIndustry,infoForecast,infoZero
  },
  setup(){
    console.log(router.pramas);
    let num=ref(0)
    function change(n){
      num.value=n
      console.log(num.value);
    }
    return{
      num,change
    }
  }
}
</script>
<style scoped lang="less">
#main{
  background-image: url("@/assets/imgs/bg4.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  position : absolute;
  width : 100%;
  height : 100%;
  margin: 0;
  padding: 0;
}
.title{
  color: aliceblue;
  height: 65px;
  text-align: center;
position: relative;
  font-weight: 400;
  font-size: 2rem;
  background-image: url("@/assets/imgs/顶部栏.png");
  background-size:  100% auto;
  background-attachment: fixed;
}
.btn{
  position: fixed;
  top: 10px;
}
ul{
  color: white;
  display: flex;
  flex-direction: row;
  list-style: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  align-items: center;
  padding: 0;
  margin: 0;
  position: absolute;
  right: 5%;
  top: 3%;
  li{
    display: inline-block;
    margin-left: 10px;
    max-width: 200px;
    &:hover{
      color: rgb(126, 172, 186);
      cursor: pointer;
    }
  }
}
.active{
  color: rgb(126, 172, 186);
}
*{
  border: 1px solid red;
}
</style>

<template>
  <div id="main">
    <BackHome/>
    <div class="pbody">
      <WordCloud/>
      <PolicyList/>
    </div>
  </div>
</template>
<script>
import BackHome from "@/components/BackHome";
import WordCloud from "@/components/WordCloud";
import PolicyList from "@/components/PolicyList";
export default {
  components:{
    BackHome,WordCloud,PolicyList
  }
};
</script>


<style  scoped>
*{
  border: 1px solid red;
}
.pbody{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
#main{
  background-image: url("@/assets/imgs/bg2.jpg");

  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>

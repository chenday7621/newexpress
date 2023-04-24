<template>
  <leftTop/>
  <left-mid/>
  <left-bot/>
  <infoNext/>
</template>

<script>
import leftTop from "@/components/myRecycle/leftTop";
import leftMid from "@/components/myRecycle/leftMid";
import infoNext from "@/components/infoNext";
import leftBot from "@/components/myRecycle/leftBot";
export default {
  name: "infoRecycle",
  components:{
    leftTop,leftMid,leftBot,infoNext
  }
};
</script>

<style scoped>
* {
  color: white;
}
</style>

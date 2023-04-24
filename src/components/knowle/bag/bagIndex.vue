<template>
  <div id="mid">
    <div id="left">
      <img src="@/assets/imgs/knowle/塑料包装袋.png">
      <div class="ch">塑 料 袋</div>
      <div class="en">plastic bag</div>
    </div>
    <div id="right">
      <div class="title">
        <img src="@/assets/imgs/knowle/9.png" alt="">
        <span>基 本 信 息</span>
      </div>
      <div class="content">
        塑料包装材料是指各种塑料——可塑性高分子，主要成分是树脂和添加剂——为原料制成各种形式商品包装的材料。
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="less">

#mid{
  display: flex;
  flex-direction: row;
}
*{
  //border: 1px solid red;
  margin: 0;
  padding: 0;
}
#nav{
  display: inline-block;
}
#left{
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 90px;
  margin-left: 140px;
  color: #f1f1f1;
  img{
    width: 320px;
    height: 320px;
  }
  .ch{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
  }
  .en{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    margin-top: 10px;
  }
}
#right{
  margin-left: 20px;
  margin-top: 40px;
  color: #f1f1f1;
  .title{
    width: 230px;
    height: 80px;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 30px;

    img{
      width: 220px;
      height: 80px;
    }
    span{
      position: absolute;
      top: 16%;
      left: 35%;
    }
    line-height: 80px;
    text-align: center;
  }
  .content{
    margin-top: 30px;
    background: rgba(255, 255, 255, 0.35);
    width: 700px;
    height: 350px;
    padding: 30px 80px;
    display: flex;
    align-items: center;
    font-family: '宋体';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 44px;

    text-indent: 2em;
  }
}
</style>

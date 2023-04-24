<template>
  <div>
    <div class="nav">
      <div @click="change(1)" :class="{active:num==1,'antiactive':num!=1}"></div>
      <div @click="change(2)" :class="{active:num==2,'antiactive':num!=2}"></div>
      <div @click="change(3)" :class="{active:num==3,'antiactive':num!=3}"></div>
    </div>
    <div class="content" v-if="num==1">
      <table>
        <tr>
          <th>态度</th>
          <th>强制回收</th>
          <th>强制建立可循环回收体系</th>
          <th>强制使用绿色包装</th>
        </tr>
        <tr>
          <td>应该</td>
          <td>78.72%</td>
          <td>91.68%</td>
          <td>71.68%</td>
        </tr>
        <tr>
          <td>不应该</td>
          <td>11.52%</td>
          <td>3.84%</td>
          <td>14.56%</td>
        </tr>
        <tr>
          <td>无所谓</td>
          <td>9.76%</td>
          <td>4.48%</td>
          <td>13.76%</td>
        </tr>
      </table>
    </div>
    <div class="content" v-else-if="num==2">
      <table>
        <tr>
          <th>标准</th>
          <th>无任何效果</th>
          <th>有一点点效果</th>
          <th>效果一般</th>
          <th>效果明显</th>
          <th>效果非常显著</th>
        </tr>
        <tr>
          <td>《快递封装用品》国家标准</td>
          <td>0.0256</td>
          <td>0.0752</td>
          <td>0.4752</td>
          <td>0.3312</td>
          <td>0.0928</td>
        </tr>
        <tr>
          <td>《快件集装容器》行业标准</td>
          <td>0.0208</td>
          <td>0.08</td>
          <td>0.4928</td>
          <td>0.3056</td>
          <td>0.1008</td>
        </tr>
        <tr>
          <td>《邮件快件包装填充物技术要求》行业标准</td>
          <td>0.0192</td>
          <td>0.0848</td>
          <td>0.4592</td>
          <td>0.3328</td>
          <td>0.104</td>
        </tr>
        <tr>
          <td>《邮政业封装用胶带》行业标准</td>
          <td>0.0192</td>
          <td>0.0752</td>
          <td>0.4784</td>
          <td>0.3328</td>
          <td>0.0944</td>
        </tr>
        <tr>
          <td>《快递电子运单》行业标准</td>
          <td>0.0192</td>
          <td>0.0752</td>
          <td>0.4208</td>
          <td>0.3568</td>
          <td>0.128</td>
        </tr>
        <tr>
          <td>《快递业温室气体排放测量方法》</td>
          <td>0.0224</td>
          <td>0.0624</td>
          <td>0.4928</td>
          <td>0.3232</td>
          <td>0.0992</td>
        </tr>
        <tr>
          <td>平均值</td>
          <td>0.0211</td>
          <td>0.0755</td>
          <td>0.4699</td>
          <td>0.3304</td>
          <td>0.1032</td>
        </tr>
      </table>
    </div>
    <div class="content" v-else>
      <table>
        <tr>
          <th>政策法规</th>
          <th>毫无作用</th>
          <th>基本无作用</th>
          <th>一般</th>
          <th>有明显的作用</th>
          <th>有很大作用</th>
        </tr>
        <tr>
          <td>2016年8月国家邮政局颁布的《推进快递业绿色包装工作实施方案》</td>
          <td>0.0224</td>
          <td>0.088</td>
          <td>0.504</td>
          <td>0.2624</td>
          <td>0.1232</td>
        </tr>
        <tr>
          <td>2016年12月工信部、商务部《关于加快我国包装产业转型发展的指导意见》</td>
          <td>0.016</td>
          <td>0.0704</td>
          <td>0.5312</td>
          <td>0.2672</td>
          <td>0.1152</td>
        </tr>
        <tr>
          <td>2017年11月国家10部委《关于协同推进快递业绿色包装工作的指导意见》</td>
          <td>0.016</td>
          <td>0.0688</td>
          <td>0.5008</td>
          <td>0.2944</td>
          <td>0.12</td>
        </tr>
        <tr>
          <td>2018年1月国务院办公厅《关于推进电子商务与快递物流协同发展的意见》</td>
          <td>0.0176</td>
          <td>0.0576</td>
          <td>0.4976</td>
          <td>0.3088</td>
          <td>0.1184</td>
        </tr>
        <tr>
          <td>2018年5月国务院《快递暂行条例》</td>
          <td>0.0192</td>
          <td>0.0576</td>
          <td>0.4864</td>
          <td>0.3168</td>
          <td>0.12</td>
        </tr>
        <tr>
          <td>2018年9月《快递封装用品》国家标准(修订版)</td>
          <td>0.0128</td>
          <td>0.0624</td>
          <td>0.4672</td>
          <td>0.3168</td>
          <td>0.1408</td>
        </tr>
        <tr>
          <td>2020年2月《邮政业寄递安全监督管理办法》</td>
          <td>0.016</td>
          <td>0.0608</td>
          <td>0.4448</td>
          <td>0.3424</td>
          <td>0.136</td>
        </tr>
        <tr>
          <td>平均值</td>
          <td>0.0171</td>
          <td>0.0665</td>
          <td>0.4903</td>
          <td>0.3013</td>
          <td>0.1248</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
setup(){
  let num=ref(1)
  function change(n){
    num.value=n;
  }
  return{
    num,change
  }
}
};
</script>

<style scoped lang="less">
.active{
  background-color: whitesmoke;
}
.antiactive{
  background-color: slategray;
}
.nav div{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 5px;
  &:hover{
  cursor: pointer;
   }
}
.nav{
  display: flex;
  flex-direction: row;
}
</style>

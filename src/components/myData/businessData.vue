<template>
  <div class="echarts-box">
    <div id="buschart" :style="{ width: '500px', height: '300px' }"></div>
    <button  @click="changeBtn">{{text}}</button>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {onMounted,onUnmounted} from "vue";
import {ref} from 'vue'
import incomeJson from '@/assets/data/income.json'
export default {
  setup() {
    /// 声明定义一下echart
    let echart = echarts;
    const selects=['全国业务收入','邮政业务收入']
    console.log(incomeJson);
    let text=ref(selects[1])

    function changeBtn(e){
      console.log(e.target.innerText);
      let newData
      let newText
      if(e.target.innerText==='邮政业务收入'){
        newData=incomeJson[1].data
        newText='邮政快递业务收入发展'
        text.value=selects[0]
      }else{
        newData=incomeJson[0].data
        newText='全国快递业务收入发展'
        text.value=selects[1]
      }
      let chart = echart.init(document.getElementById("buschart"));
      chart.setOption({
        series:[
          {data:newData}
        ],
        title:{
          text:newText
        }
      })
    }
    onMounted(() => {
      initChart();
    });

    onUnmounted(() => {
      echart.dispose;
    });

    // 基础配置一下Echarts
    function initChart() {
      let chart = echart.init(document.getElementById("buschart"));
      // 把配置和数据放这里
      chart.setOption({
        title: {
            text: '全国快递业务收入发展',
            textStyle: {
              fontSize: 23,
              color: "#fff"
            },
            subtextStyle: {
              fontSize: 12,
              color: "rgba(255,250,255,0.6)"
            },
            subtext: '单位：亿元',
            // right:120,
            top: 10,
            left: "center",
          },
        xAxis: {
          type: 'category',
          data: incomeJson[2].data,
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          axisLabel: {
            color: '#d5d2d2',
            interval: 0,
            rotate: 40, // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠；旋转的角度从-90度到90度
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            data: [2045.4, 2769.6, 3974.4, 4957.1, 6038.4, 7497.8, 8795.4],
            type: 'line',
            color: "rgb(115, 165, 204)"
          }
        ],
        tooltip: {
          trigger: 'axis'
        }
    });
      window.onresize = function() {
        //自适应大小
        chart.resize();
      };
    }

    return { initChart ,text,changeBtn};
  }
};
</script>

<style scoped>
.echarts-box{
  display: inline-block;
}
button{
  background-color: transparent;
  border: 1px solid #b2ecf6;
  /*position: absolute;*/
  color: #dddddd;
  position: absolute;
  left: 20%;
}
button:hover{
  background-color:rgba(124, 165, 207,0.3) ;
}
</style>

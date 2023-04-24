<template>
  <div class="echarts-box">
    <div id="areachart" :style="{ width: '500px', height: '300px' }"></div>
<!--    <div class="btns">-->
    <select v-model="mySelect" @change="changeSelect">
      <option value="0">同城</option>
      <option value="1">异地</option>
    </select>
      <ul>
        <li v-for="item in options" @click="changeBtn" data-name="item">{{item}}</li>
      </ul>
<!--    </div>-->
  </div>
</template>

<script>
import * as echarts from "echarts";
import {onMounted,onUnmounted} from "vue";
import {ref} from 'vue'
import areaJson from '@/assets/data/areaData.json'
export default {
  setup() {
    const areaList=areaJson
    console.log(areaList);
    const dataX=areaList[2].data
    // console.log(dataX);
    let mySelect=ref(0)
    let myOption=ref(0)
    /// 声明定义一下echart
    let echart = echarts;

    let selects=['同城','异地']
    let options=['快递量','累计值','同比增长率']

    function changeTitle(){
      let chart = echart.init(document.getElementById("areachart"));
      chart.setOption({
        title:{
          text: "全国"+selects[mySelect.value]+options[myOption.value]+"数据"
        }
      })
    }

    function changeSelect() {
      // console.log(mySelect.value);
      let newData=areaList[mySelect.value].data[myOption.value].data
      // console.log(newData);
      let chart = echart.init(document.getElementById("areachart"));
      chart.setOption({
        series:[
          {data:newData}
        ]
      })
      changeTitle()
    }
    function changeBtn(e){
      console.log(e.target.innerText);
      myOption.value=options.indexOf(e.target.innerText)
      console.log(myOption.value);
      let newData=areaList[mySelect.value].data[myOption.value].data
      let chart = echart.init(document.getElementById("areachart"));
      chart.setOption({
        series:[
          {data:newData}
        ]
      })
      changeTitle()
    }


    onMounted(() => {
      initChart();
    });

    onUnmounted(() => {
      echart.dispose;
    });

    // 基础配置一下Echarts
    function initChart() {
      let chart = echart.init(document.getElementById("areachart"));
      // 把配置和数据放这里
      // let dataAxis = dataX;
// prettier-ignore
      let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
      let yMax = 500;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      chart.setOption({
        title: {
          text: "全国"+selects[mySelect.value]+options[myOption.value]+"数据",
          textStyle: {
            fontSize: 23,
            color: "#fff",
          },
          subtextStyle: {
            fontSize: 12,
            color: "rgba(255,250,255,0.6)"
          },top: 10,
          left: "center",
          subtext: ''
        },
        xAxis: {
          data:dataX,
          // nameTextStyle:{
          //   color:"#fff"
          // },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#d5d2d2',
            interval: 0,
            rotate: 40, // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠；旋转的角度从-90度到90度
            // inside: false, // 刻度标签是否朝内，默认朝外
            // margin: 6, // 刻度标签与轴线之间的距离
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#d5d2d2'
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        tooltip:{
          trigger:'axis',
          axisPointer:{
            type:'shadow'
          }
        },
        series: [
          {
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(93, 194, 208)' },
                { offset: 0.5, color: 'rgba(93, 194, 208,0.5)' },
                { offset: 1, color: 'rgba(93, 194, 208,0.2)' }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgb(122,230,246)' },
                  { offset: 0.7, color: 'rgb(79,160,171)' },
                  { offset: 1, color: '#83bff6' }
                ])
              }
            },
            data: areaList[mySelect.value].data[myOption.value].data
          }
        ]
      });
      window.onresize = function() {
        //自适应大小
        chart.resize();
      };
      const zoomSize = 6;
      chart.on('click', function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        chart.dispatchAction({
          type: 'dataZoom',
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue:
            dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
      });
    }

    return { initChart, mySelect,options,changeSelect,changeBtn};
  }
};
</script>

<style scoped>
.echarts-box{
  display: inline-block;
  position: relative;
  left:32%;
}
ul{
  position: absolute;
  bottom: -15%;
}
li{
  list-style: none;
  color: #262626;
  display: inline-block;
  height: 30px;
  background-color: rgb(136, 222, 239,0.8);
  text-align: center;
  line-height: 30px;
  padding:7px;

  margin-left: 40px;
}
li:hover{
  background-color: rgba(80, 216, 243, 0.8);
  cursor: pointer;
}
select{
  background: rgba(0,0,0,0);
  width: 64px;
  height: 32px;
  font-size: 14px;
  color: white;
  text-align: center;
  border: 1px #817e7e solid;
  border-radius: 5px;
  position: absolute;
  left: 85%;
  top: 2%;
}
option{
  color: black;
  background: #A6E1EC;
  line-height: 20px;
}
select:focus{
  border: 2px #ddd solid;
  box-shadow: 0 0 5px 1px #869c9f;
}
option:hover{
  background: #EBCCD1;
}
</style>

<template>
  <div id="consuchart1" style="width:75vw; height:75vh" v-show="myOption===0"></div>
  <div id="consuchart2" style="width:75vw; height:75vh" v-show="myOption===1"></div>
  <div id="consuchart3" style="width:75vw; height:75vh" v-show="myOption===2"></div>
  <div class="myoptions">
    <div @click="change(0)" :class="{active:myOption===0,'antiactive':myOption!=0}"></div>
    <div @click="change(1)" :class="{active:myOption===1,'antiactive':myOption!=1}"></div>
    <div @click="change(2)" :class="{active:myOption===2,'antiactive':myOption!=2}"></div>
  </div>
<!--  <div class="selecting"  v-show="myOption===2">-->
<!--    <select v-model="mySelect" @change="selectChange" >-->
<!--      <option v-for="o in options" :key="o.index">{{o}}</option>-->
<!--    </select>-->
<!--  </div>-->
</template>

<script>
import * as echarts from "echarts";
import { onMounted } from "vue";
import { ref } from "vue";

export default {
  setup() {
    let options=['强制回收','强制建立可循环回收体系','强制使用绿色包装']
    let myOption = ref(0);
    // let mySelect=ref(0)

    function change(n) {
      myOption.value = n;
    }

    // function selectChange(){
    //   let chart3 = echarts.init(document.getElementById("consuchart3"));
    //   chart3.setOption({
    //
    //   })
    // }

    function initChart() {
      let chart1 = echarts.init(document.getElementById("consuchart1"));
      chart1.setOption({
        title: {
          text: '消费者对于现行标准的执行效果的评价',
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: 35
          },
          top: "5%"
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}\n{c}%"
        },
        legend: {
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          textStyle: {
            color: "rgb(166, 166, 166)",
            fontSize: 20
          }
        },
        color:[ 'rgb(149, 186, 255)','#5470c6', 'rgb(126, 131, 251)','rgb(138, 255, 247)', 'rgb(126, 237, 254)' ],
       series: [
          {
            // name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [{ "value": "2.11", "name": "无任何效果" },
              { "value": "7.55", "name": "有一点点效果" },
              { "value": "7.55", "name": "效果一般" },
              { "value": "33.04", "name": "效果明显" }, { "value": "10.32", "name": "效果非常显著" }]
          }
        ]
      });


      let chart2 = echarts.init(document.getElementById("consuchart2"));
      chart2.setOption({
        title: {
          text: '消费者对于快递包装绿色治理的态度',
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: 35
          },
          top: "5%"
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}\n{c}%"

        },
        legend: {
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          textStyle: {
            color: "rgb(166, 166, 166)",
            fontSize: 20
          }
        },
        color:[ 'rgb(149, 186, 255)','#5470c6', 'rgb(126, 131, 251)','rgb(138, 255, 247)', 'rgb(126, 237, 254)' ],
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [{ "value": "1.71", "name": "毫无作用" }, { "value": "6.65", "name": "基本无作用" }, {
              "value": "49.03",
              "name": "一般"
            }, { "value": "30.13", "name": "有明显的作用" }, { "value": "12.48", "name": "有很大作用" }]
          }
        ]
      });


      let chart3 = echarts.init(document.getElementById("consuchart3"));
      chart3.setOption({
        title: {
          text: '消费者对于相关政策的执行效果的评价',
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: 35
          },
          top: "5%"
        },
        legend: {
          textStyle: {
            color: "rgb(166, 166, 166)",
            fontSize: 20
          },
          top:'15%'
        },
        tooltip: {
          trigger:'item',
          axisPointer:{
            type:'shadow'
          }
        },
        grid: {
          top: "25%"
        },
        color:[ 'rgb(149, 186, 255)','#5470c6', 'rgb(126, 131, 251)','rgb(138, 255, 247)', 'rgb(126, 237, 254)' ],
        dataset: {
          source: [
            ['product', '强制回收', '强制建立可循环回收体系', '强制使用绿色包装'],
            ['应该', 78.72, 91.68, 71.68],
            ['不应该', 11.52, 3.84, 14.56],
            ['无所谓', 9.76, 4.48, 13.76]
          ]
        },
        xAxis: { type: 'category',
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          }, },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      });

      window.addEventListener("resize", function() {
        chart1.resize();
      });
      window.addEventListener("resize", function() {
        chart2.resize();
      });
      window.addEventListener("resize", function() {
        chart3.resize();
      });
    }

    onMounted(() => {
      initChart();
    });
    return {
      myOption, change,
    };
  }
};
</script>

<style scoped lang="less">
.myoptions {
  div {
    width: 3vh;
    height: 3vh;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }

    margin-top: 20vh;
  }

  position: absolute;
  left: 15%;
  top: 8%;
}

.active {
  background-color: rgb(160, 183, 247);
}

.antiactive {
  background-color: rgb(120, 124, 126);
}

#consuchart1, #consuchart2, #consuchart3 {
  margin: 5vh auto;
}

//* {
//  border: 1px solid red;
//}
</style>

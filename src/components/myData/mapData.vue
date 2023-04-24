<template>
<div id="mapchart" style="width:600px; height:600px"></div>
</template>
<script>
import * as echarts from 'echarts'
import china from '../../../public/map/china.json'
import { onMounted } from "vue";
echarts.registerMap('china',china)
export default {
  setup(){
    onMounted(()=>{
      initCharts()
    })
    function randomData() {
      return Math.round(Math.random() * 500);
    }
    function initCharts(){
      let charts = echarts.init(document.querySelector(`#mapchart`));
      charts.setOption({
        tooltip: {
          trigger: 'item'
        },

        visualMap: {//颜色的设置  dataRange
          textStyle: { color: '#fff' },
          x: '100',
          y: '420',
          splitList: [
            { start: 2000000 }, { start: 500000, end: 2000000 },
            { start: 200000, end: 500000 }, { start: 10000, end: 200000 },
            { start: 10000, end: 100000 }, { start: 0, end: 10000 },
          ],
          // text:['高','低'],// 文本，默认为数值文本
          // color: ['#65A2D9', '#E09107', '#A3E00B']
          // color: ['rgb(109, 31, 148)', 'rgb(96, 51, 182)', 'rgb(96, 51, 182)', 'rgb(121, 95, 250)', 'rgb(102, 139, 255)', 'rgb(88, 203, 255)']
          // color: [
          //   '#c3d7df',
          //   '#5cb3cc',
          //   '#8abcd1',
          //   '#66a9c9',
          //   '#2f90b9',
          //   '#1781b5',
          // ],
          inRange: {
            color: ["rgba(147, 235, 248, 0)", "rgba(147, 235, 248, .3)"], //取值范围的颜色
          },
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺为 false
          },
        },
        series: [
          {
            name: '全国数据',
            type: 'map',
            mapType: 'china',
            zoom: 1.1,
            roam: false,//是否开启鼠标缩放和平移漫游
            itemStyle: {
              // borderColor: 'rgba(147, 235, 248, .8)',
              borderWidth: 1,
              backgroundColor: 'rgba(0,0,0,.6)',
              borderColor: 'rgba(147, 235, 248, .8)',
              textStyle: {
                color: '#FFF',
              },
              areaColor: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺为 false
              },
              shadowColor: 'rgba(137,218,246,0.3)',
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10,
              emphasis: {
                areaColor: '#389BB7',
                borderWidth: 1,
              },
            },
            /*itemStyle: {//地图区域的多边形 图形样式
              normal: {//是图形在默认状态下的样式
                label: {
                  show: true,
                  textStyle: { color: "rgb(249, 249, 249)" }
                }
              },
              emphasis: {//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                label: {
                  show: true,
                  // textStyle: {color: "#000"}
                },
                // areaColor:"rgba(229, 190, 94,0.85)",
                areaColor: "rgb(239,215,140)",

                shadowColor: "#000",
                shadowOffsetX: 5,
                shadowBlur: 5

                // itemStyle:{areaColor:"rgba(251, 255, 0)"}
              }
            },*/
            top: "100",//组件距离容器的距离
            data: [
              { name: '北京', value: '221030' }, { name: '天津', value: '123390' },
              { name: '上海', value: '374137' }, { name: '重庆', value: '97936' },
              { name: '河北', value: '506015' }, { name: '河南', value: '435552' },
              { name: '云南', value: '84190' }, { name: '辽宁', value: '164328' },
              { name: '黑龙江', value: '60491' }, { name: '湖南', value: '197803' },
              { name: '安徽', value: '312664' }, { name: '山东', value: '559785' },
              { name: '新疆', value: '16185' }, { name: '江苏', value: '860653' },
              { name: '浙江', value: '2278148' }, { name: '江西', value: '160091' },
              { name: '湖北', value: '269341' }, { name: '广西', value: '102758' },
              { name: '甘肃', value: '18457' }, { name: '山西', value: '78131' },
              { name: '内蒙古', value: '26086' }, { name: '陕西', value: '111806' },
              { name: '吉林', value: '62197' }, { name: '福建', value: '415012' },
              { name: '贵州', value: '39787' }, { name: '广东', value: '2945749' },
              { name: '青海', value: '3686' }, { name: '西藏', value: '1485' },
              { name: '四川', value: '278269' }, { name: '宁夏', value: '9963' },
              { name: '海南', value: '14503' }, { name: '台湾', value: randomData() },
              { name: '香港', value: randomData() }, { name: '澳门', value: randomData() }
            ]
          }
        ],
      });
    }
    // window.addEventListener("resize", function() {
    //   let charts = echarts.init(document.querySelector(`#mapchart`));
    //   charts.resize();
    // });
  }

}

</script>

<style scoped>
#mapchart{
  display: inline-block;
  position: absolute;
  top: 100px;
  left: 420px;
}
</style>


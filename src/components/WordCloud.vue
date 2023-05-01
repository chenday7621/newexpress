<template>
  <div class="gycyt"></div>
</template>

<script>
import { onMounted } from "vue";

export default {
setup(){
  var words=[
    '绿色',
    '快递',
    '包装',
    '快递包装',
    '推进',
    '标准',
    '工作',
    '回收',
    '循环',
    '国家邮政局',
    '治理',
    '推动',
    '行业',
    '企业',
    '意见',
    '关于',
    '发展',
    '指导',
    '减量化',
    '联合',
    '标准化',
    '体系',
    '利用',
    '产品认证',
    '邮政',
    '总局',
    '产品',
    '部门',
    '近日',
    '电商',
    '实现',
    '环保',
    '发布',
    '我国',
    '市场监管',
    '加快',
    '使用',
    '快件',
    '亿件',
    '如何',
    '新华社',
    '开展',
    '加强',
    '召开',
    '应用',
    '记者',
    '实施',
    '包装材料',
    '创新',
    '管理局',
    '要求',
    '建立',
    '成为',
    '简称',
    '指南',
    '根据',
    '制定',
    '通知',
    '调研',
    '进行',
    '北京',
    '日电',
    '重要',
    '印发',
    '方面',
    '明确',
    '问题',
    '生态',
    '污染',
    '防治',
    '委员',
    '转型',
    '可降解',
    '协同',
    '深入',
    '突出',
    '江苏',
    '过度',
    '会议',
    '日均',
    '贯彻落实',
    '积极',
    '制度',
    '助力',
    '相关',
    '提出',
    '邮政局',
    '材料',
    '试行',
    '业务',
    '暂行条例',
    '有关',
    '外卖',
    '鼓励',
    '行动',
    '绿色物流',
    '全国',
    '胶带',
    '公告',
    '建议',
    '通过',
    '加速',
    '提高',
    '处理',
    '升级',
    '管理',
    '环节',
    '认证',
    '数量',
    '计划',
    '家门口',
    '菜鸟',
    '条例',
    '邮件',
    '座谈会',
    '组织',
    '节约',
    '市场',
    '指示',
    '批示',
    '精神',
    '配套',
    '全面',
    '支撑',
    '改革',
    '未来',
    '重点',
    '研制',
    '任务',
    '提速',
    '表示',
    '文明',
    '思想',
    '攻坚战',
    '做好',
    '日起',
    '施行',
    '明确提出',
    '起来',
    '探索',
    '提案',
    '全国政协',
    '试点',
    '围绕',
    '国家',
    '研究',
    '标识',
    '进一步',
    '研发',
    '设计',
    '生产',
    '支持',
    '促进',
    '扎实',
    '按照',
    '目标',
    '废弃物',
    '垃圾',
    '解决',
    '推广',
    '上海',
    '回箱',
    '首批',
    '铺设',
    '重庆',
    '全市',
    '试点工作',
    '县级',
    '发改委',
    '推广应用',
    '情况',
    '交流',
    '研讨',
    '业务量',
    '服务',
    '当前',
    '监督管理',
    '推行',
    '新闻',
    '发布会',
    '总书记',
    '增加',
    '供给',
    '作用',
    '政协委员',
    '社会',
    '力争',
    '严格'
  ]
  function randomNum(min,max){
    var num = (Math.random() * (max - min +1 )+min).toFixed(2);
    return num;
  }
  function init(){
    var f = document.createDocumentFragment();//创建文档片段对象
    var container = document.querySelector(".gycyt");

    words.forEach(w =>{
      var word_box=document.createElement('div');
      var word = document.createElement('div');

      word.innerText=w;
      word.classList.add('word');

      // 随机生成色相值（0为红色、120为绿色、240为蓝色、360为红色）
      var hue = randomNum(0,240);
      word.style.color='hsl('+hue+',100%,65%)';

      word_box.classList.add("word-box");
      // 生成随机数值，并赋值给自定义属性
      word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
      word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
      word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
      word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');

      word_box.appendChild(word);
      f.appendChild(word_box);
    })
    container.appendChild(f);
  }
  onMounted(()=>{
    // init()
    window.addEventListener('load',init)
  })

  return{}
}
};
</script>

<style scoped>
div{
  width: 48vw;
  height: 75vh;
  background: rgba(226, 231, 236, 0.5);
  position: absolute;
  left: 7%;
  top: 10%;
}
*{
  margin: 0;
  padding: 0;
}

:root{
  /* 自定义属性，这几个属性等会是通过js随机生成，通过var函数可对其调用 */
  /* 上外边距 */
  --margin-top:0;
  /* 左外边距 */
  --margin-left:0;
  /* 动画时长 */
  --animation-duration: 0s;
  /* 动画延迟时间 */
  --animation-delay: 0s;
}

body{
  /* 100%的窗口高度 */
  height: 100vh;
  /* 弹性布局 水平+垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffedff;
  /* 溢出隐藏 */
  overflow: hidden;
  /* 设置视觉距离 */
  perspective: 1300px;
}
.jycyt{
  height: 300px;
  width: 300px;
}
.jycyt div{
  /* 所有div默认开启3D属性 */
  transform-style: preserve-3d;
}
.word-box,
.word-box .word{
  /* 绝对定位 */
  position: absolute;
  /* 执行动画：动画名 时长 线性的 无限次播放 */
  animation: rotY 20s linear infinite;
  /* 设置动画时长 */
  animation-duration: var(--animation-duration);
  /* 设置动画延迟 */
  animation-delay: var(--animation-delay);
}

.word-box{
  margin-top: var(--margin-top);
}
.word-box .word{
  margin-left: var(--margin-left);
}
.word-box .word{
  /* 反向动画 */
  animation-direction: alternate;
}

/* 定义动画 */
@keyframes rotY{
  to{
    /* 1turn表示一圈 */
    transform: rotateY(1turn);
  }
}

</style>



<!--&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--<!DOCTYPE html>-->
<!--<html lang="en">-->

<!--<head>-->
<!--  <title>three.js webgl - effects - anaglyph</title>-->
<!--  <meta charset="utf-8">-->
<!--  <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">-->
<!--  <style>-->
<!--    body {-->
<!--      background: #777;-->
<!--      padding: 0;-->
<!--      margin: 0;-->
<!--      font-weight: bold;-->
<!--      overflow: hidden;-->
<!--    }-->

<!--    #info {-->
<!--      position: absolute;-->
<!--      top: 0px;-->
<!--      width: 100%;-->
<!--      color: #ffffff;-->
<!--      padding: 5px;-->
<!--      font-family: Monospace;-->
<!--      font-size: 13px;-->
<!--      text-align: center;-->
<!--      z-index: 1000;-->
<!--    }-->

<!--    a {-->
<!--      color: #ffffff;-->
<!--    }-->

<!--    #oldie a {-->
<!--      color: #da0-->
<!--    }-->
<!--  </style>-->
<!--</head>-->

<!--<body>-->
<!--<div id="info"><a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> - effects - anaglyph. skybox-->
<!--  by <a href="http://ict.debevec.org/~debevec/" target="_blank" rel="noopener">Paul Debevec</a></div>-->

<!--<script src="../build/three.js"></script>-->

<!--<script src="js/effects/AnaglyphEffect.js"></script>-->

<!--<script src="js/Detector.js"></script>-->

<!--<script>-->

<!--  if (!Detector.webgl) Detector.addGetWebGLMessage();-->

<!--  var container;-->

<!--  var camera, scene, renderer, effect;-->

<!--  var mesh, lightMesh, geometry;-->
<!--  var spheres = [];-->

<!--  var directionalLight, pointLight;-->

<!--  var mouseX = 0;-->
<!--  var mouseY = 0;-->

<!--  var windowHalfX = window.innerWidth / 2;-->
<!--  var windowHalfY = window.innerHeight / 2;-->

<!--  document.addEventListener('mousemove', onDocumentMouseMove, false);-->

<!--  init();-->
<!--  animate();-->

<!--  function init() {-->

<!--    container = document.createElement('div');-->
<!--    document.body.appendChild(container);-->

<!--    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 100);-->
<!--    camera.position.z = 3;-->
<!--    camera.focalLength = 3;-->

<!--    var path = "textures/cube/pisa/";-->
<!--    var format = '.png';-->
<!--    var urls = [-->
<!--      path + 'px' + format, path + 'nx' + format,-->
<!--      path + 'py' + format, path + 'ny' + format,-->
<!--      path + 'pz' + format, path + 'nz' + format-->
<!--    ];-->
<!--    console.log(11);-->
<!--    console.log(urls);-->

<!--    var textureCube = new THREE.CubeTextureLoader().load(urls);-->

<!--    scene = new THREE.Scene();-->
<!--    scene.background = textureCube;-->

<!--    var geometry = new THREE.SphereBufferGeometry(0.1, 32, 16);-->
<!--    var material = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: textureCube });-->

<!--    for (var i = 0; i < 500; i++) {-->

<!--      var mesh = new THREE.Mesh(geometry, material);-->

<!--      mesh.position.x = Math.random() * 10 - 5;-->
<!--      mesh.position.y = Math.random() * 10 - 5;-->
<!--      mesh.position.z = Math.random() * 10 - 5;-->

<!--      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;-->

<!--      scene.add(mesh);-->

<!--      spheres.push(mesh);-->

<!--    }-->

<!--    //-->

<!--    renderer = new THREE.WebGLRenderer();-->
<!--    renderer.setPixelRatio(window.devicePixelRatio);-->
<!--    container.appendChild(renderer.domElement);-->

<!--    var width = window.innerWidth || 2;-->
<!--    var height = window.innerHeight || 2;-->

<!--    effect = new THREE.AnaglyphEffect(renderer);-->
<!--    effect.setSize(width, height);-->

<!--    //-->

<!--    window.addEventListener('resize', onWindowResize, false);-->

<!--  }-->

<!--  function onWindowResize() {-->

<!--    windowHalfX = window.innerWidth / 2;-->
<!--    windowHalfY = window.innerHeight / 2;-->

<!--    camera.aspect = window.innerWidth / window.innerHeight;-->
<!--    camera.updateProjectionMatrix();-->

<!--    effect.setSize(window.innerWidth, window.innerHeight);-->

<!--  }-->

<!--  function onDocumentMouseMove(event) {-->

<!--    mouseX = (event.clientX - windowHalfX) / 100;-->
<!--    mouseY = (event.clientY - windowHalfY) / 100;-->

<!--  }-->

<!--  //-->

<!--  function animate() {-->

<!--    requestAnimationFrame(animate);-->

<!--    render();-->

<!--  }-->

<!--  function render() {-->

<!--    var timer = 0.0001 * Date.now();-->

<!--    camera.position.x += (mouseX - camera.position.x) * .05;-->
<!--    camera.position.y += (- mouseY - camera.position.y) * .05;-->

<!--    camera.lookAt(scene.position);-->

<!--    for (var i = 0, il = spheres.length; i < il; i++) {-->

<!--      var sphere = spheres[i];-->

<!--      sphere.position.x = 5 * Math.cos(timer + i);-->
<!--      sphere.position.y = 5 * Math.sin(timer + i * 1.1);-->

<!--    }-->

<!--    effect.render(scene, camera);-->

<!--  }-->

<!--</script>-->

<!--</body>-->

<!--</html>-->

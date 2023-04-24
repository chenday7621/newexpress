<template>
<div id="main">

</div>
</template>

<script>
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { onMounted } from "vue";
export default {
  name: "ThreeBox2",
  setup(){
    const scene = new THREE.Scene();
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    const light = new THREE.PointLight(0xffffff, 1);//点光源，color:灯光颜色，intensity:光照强度

    scene.add(ambient);
    light.position.set(200,300,400);
    scene.add(light);

    const loader = new GLTFLoader();
    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 3000);
    camera.position.set(300,300,300);
    //设置相机方向
    camera.lookAt(0,0,0);


    loader.load( '/model/box1.glb', function ( gltf ) {
      console.log('控制台查看加载gltf文件返回的对象结构',gltf);
      console.log('gltf对象场景属性',gltf.scene);
      // 返回的场景对象gltf.scene插入到threejs场景中
      scene.add( gltf.scene );
    })
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth,window.innerHeight)//设置渲染区尺寸
    renderer.render(scene, camera)
    const controls = new OrbitControls(camera, renderer.domElement)//创建控件对象
    controls.addEventListener('change',()=>{
      renderer.render(scene, camera)//监听鼠标，键盘事件
    })

    onMounted(()=>{
      document.getElementById('main')?.appendChild(renderer.domElement)
    })
    requestAnimationFrame(function(){
      renderer.render(scene, camera)
    })
    return{

    }
  }
};
</script>

<style scoped>

</style>

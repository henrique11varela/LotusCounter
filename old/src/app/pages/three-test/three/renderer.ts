import * as THREE from "three";
import { camera } from "./camera";
import { scene } from "./scene";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


class Renderer extends THREE.WebGLRenderer {
  constructor() {
    super()
    const resize = () => {
      this.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', resize)
    resize()
  }
}

let lastFrameTimeStamp: number = 0

function animate(time: number) {
  const deltaTime = (time - lastFrameTimeStamp)
  renderer.render(scene, camera)
}

const renderer: Renderer = new Renderer()

renderer.setAnimationLoop(animate)

const controls = new OrbitControls(camera, renderer.domElement)

export {
  Renderer,
  renderer,
}

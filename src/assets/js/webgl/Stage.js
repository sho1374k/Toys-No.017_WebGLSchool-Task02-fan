// --------------------------

// lib

// --------------------------
import * as THREE from "three";

// --------------------------

// module

// --------------------------
import { NormalizeCoords } from "./utility/NormalizeCoords";

export class Stage {
  constructor(params, bool) {
    this.params = params;
    this.bool = bool;

    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.controls = null;
    this.stats = null;

    this.vector = {
      x: {
        current: 0,
        target: 0,
      },
      y: {
        current: 0,
        target: 0,
      },
      ease: 0.1,
      coefficient: 0.2,
    };

    this.init();
  }

  init() {
    this.setRenderer();
    this.setScene();
    this.setCamera();

    if (this.bool.isMatchMediaHover) {
      window.addEventListener("mousemove", this.onMouseMove.bind(this), {
        passive: true,
      });
    }
  }

  updateRenderer() {
    this.renderer.setSize(this.params.w, this.params.h);
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
  }

  setRendererLight() {
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.needsUpdate = true;
    this.renderer.shadowMap.autoUpdate = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // this.renderer.shadowMap.type = THREE.BasicShadowMap;
    // this.renderer.shadowMap.type = THREE.PCFShadowMap;
    // this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // this.renderer.shadowMap.type = THREE.VSMShadowMap;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    // this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMapping = THREE.CineonToneMapping;
    this.renderer.toneMappingExposure = 1;
    // this.renderer.physicallyCorrectLights = true;
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.setRendererLight();
    this.updateRenderer();

    const wrap = document.getElementById("world");
    wrap.appendChild(this.renderer.domElement);
  }

  setScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#161616");
    // if (GUI != null) {
    //   const scene = GUI.addFolder("scene");
    //   // scene.close();
    //   scene
    //     .addColor(this.scene, "background")
    //     .name("background")
    //     .onChange((value) => {
    //       this.scene.background = new THREE.Color(value);
    //     });
    // }

    // SceneHelper
    if (MODE) {
      this.scene.add(new THREE.GridHelper(1000, 100));
      this.scene.add(new THREE.AxesHelper(100));
    }
  }

  updateCamera() {
    this.camera.aspect = this.params.aspect;
    this.camera.updateProjectionMatrix();
  }

  setCamera() {
    this.camera = new THREE.PerspectiveCamera(60, this.params.aspect, 0.1, 100);
    this.camera.position.z = this.bool.isMatchMediaWidth ? 13 : 10;
    if (this.bool.isMatchMediaWidth) {
      this.camera.rotation.y = Math.PI * -0.01;
    }
    this.updateCamera();
  }

  onMouseMove(e) {
    const data = {
      x: e.clientX,
      y: e.clientY,
      w: this.params.w,
      h: this.params.h,
    };
    const coords = NormalizeCoords(data);

    const COEFFICIENT = this.vector.coefficient;
    this.vector.x.target = (coords.x / this.params.w) * COEFFICIENT;
    this.vector.y.target = (coords.y / this.params.h) * COEFFICIENT;
  }

  raf() {
    this.vector.x.current = G.lerp(
      this.vector.x.current,
      this.vector.x.target,
      this.vector.ease
    );
    this.vector.y.current = G.lerp(
      this.vector.y.current,
      this.vector.y.target,
      this.vector.ease
    );

    this.camera.position.x = this.vector.x.current;
    this.camera.position.y = this.vector.y.current;

    // this.renderer.render(this.scene, this.camera);
  }

  resize(props) {
    this.params.w = props.w;
    this.params.h = props.h;
    this.params.aspect = props.aspect;

    this.updateRenderer();
    this.updateCamera();
  }
}

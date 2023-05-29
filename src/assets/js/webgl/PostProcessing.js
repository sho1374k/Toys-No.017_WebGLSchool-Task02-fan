// --------------------------

// lib

// --------------------------
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

// --------------------------

// shaders

// --------------------------
import effectFragmentShader from "../../shaders/frag/effect.glsl";
import effectVertexShader from "../../shaders/vert/effect.glsl";

export class PostProcessing {
  constructor(stage, params) {
    this.stage = stage;
    this.params = params;

    this.composer = null;
    this.customPass = null;
  }

  setComposer() {
    this.renderPass = new RenderPass(this.stage.scene, this.stage.camera);

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(this.params.w, this.params.h),
      0.0,
      1.0,
      0.0
    );
    this.bloomPass.threshold = 0;
    this.bloomPass.radius = 3;
    this.bloomPass.strength = 0.25;

    if (GUI != null) {
      const bloom = GUI.addFolder("bloom");
      // bloom.close();
      bloom
        .add(this.bloomPass, "enabled")
        .name("enabled")
        .onChange((value) => {
          this.bloomPass.enabled = value;
        });
      bloom
        .add(this.bloomPass, "threshold", 0.0, 5.0)
        .name("threshold")
        .onChange((value) => {
          this.bloomPass.bloomPass = value;
        });
      bloom
        .add(this.bloomPass, "radius", 0.0, 5.0)
        .name("radius")
        .onChange((value) => {
          this.bloomPass.radius = value;
        });
      bloom
        .add(this.bloomPass, "strength", 0.0, 5.0)
        .name("strength")
        .onChange((value) => {
          this.bloomPass.strength = value;
        });
      bloom
        .add(this.stage.renderer, "toneMappingExposure", 0.0, 5.0)
        .name("exposuregth")
        .onChange((value) => {
          this.stage.renderer.strentoneMappingExposuregth = value;
        });
    }

    const custom = {
      uniforms: {
        uTexture: {
          type: "t",
          value: null,
        },
        uTime: {
          type: "f",
          value: 0.0,
        },
      },
      fragmentShader: effectFragmentShader,
      vertexShader: effectVertexShader,
    };
    this.customPass = new ShaderPass(custom, "uTexture");

    // -------------------------

    this.composer = new EffectComposer(this.stage.renderer);
    this.composer.renderToScreen = true;
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(this.customPass);
  }

  raf(time) {
    if (this.composer != null) {
      this.composer.render();
      this.customPass.material.uniforms.uTime.value = time;
    } else {
      this.stage.renderer.render(this.stage.scene, this.stage.camera);
    }
  }

  setEnterAnimation() {
    this.bloomPass.strength = 5; // 0.25
    this.stage.renderer.strentoneMappingExposuregth = 5; // 1
  }

  toEnterAnimation() {
    const DURATION = 1;
    GSAP.to(this.bloomPass, {
      duration: DURATION,
      strength: 0.25,
    });
    GSAP.to(this.stage.renderer, {
      duration: DURATION,
      strentoneMappingExposuregth: 1,
    });
  }

  init() {
    this.setComposer();
    this.setEnterAnimation();
  }
}

// --------------------------

// lib

// --------------------------
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";

// --------------------------

// module

// --------------------------
import { PostProcessing } from "./PostProcessing";
import { Color } from "./utility/Color";

const PI = Math.PI;
const MAX_WING_POWER = 0.2;

export class Mesh {
  constructor(body, params, bool, stage) {
    this.body = body;
    this.stage = stage;
    this.params = params;
    this.bool = bool;

    this.isPageEnter = false;
    this.isOnced = false;

    // 羽の回転力設定(弱、中、強)
    this.wingPower = {
      value1: MAX_WING_POWER,
      value2: MAX_WING_POWER,
      value3: 0,
    };

    // 扇風機
    this.fanGroup = null;
    this.fanUpperGroup = null;
    this.fanBody = null;
    this.fanWing = null;
    this.fanFoundation = null;

    // 建物空間
    this.world = null;

    // 座布団
    this.cushion1 = null;
    this.cushion2 = null;
    this.cushion3 = null;

    // 掛軸
    this.kakejiku = null;

    this.pp = new PostProcessing(this.stage, this.params);

    this.glbLoader = new GLTFLoader();
    this.glbLoader.setMeshoptDecoder(MeshoptDecoder);

    this.init();
  }

  /**
   * オイラー角からクォータ二オンに変換する
   * @param {number} x 角度
   * @param {number} y 角度
   * @param {number} z 角度
   * @returns
   */
  getEuler2Quaternion(x = 0, y = 0, z = 0) {
    const quaternion = new THREE.Quaternion();
    quaternion.setFromEuler(
      new THREE.Euler(
        THREE.MathUtils.degToRad(x),
        THREE.MathUtils.degToRad(y),
        THREE.MathUtils.degToRad(z)
      )
    );
    return quaternion;
  }

  /**
   * モデル読み込み
   * @param {path} path // モデルのパス情報
   * @returns
   */
  getLoadGlb(path) {
    return this.glbLoader.loadAsync(path);
  }

  updateLoadingText(text) {
    this.loadingText.innerHTML = text;
  }

  async init() {
    this.loadingText = document.getElementById("js-loadingText");

    this.setLight();
    this.setFanGroup();

    this.world = await this.getLoadGlb("assets/model/world-meshopt.glb");
    this.setWorld();
    this.updateLoadingText("Loading... 1/6");

    this.fanBody = await this.getLoadGlb("assets/model/fan_body-meshopt.glb");
    this.setFanBody();
    this.updateLoadingText("Loading... 2/6");

    this.fanWing = await this.getLoadGlb("assets/model/fan_wing-meshopt.glb");
    this.setFanWing();
    this.updateLoadingText("Loading... 3/6");

    this.fanFoundation = await this.getLoadGlb(
      "assets/model/fan_foot-meshopt.glb"
    );
    this.setFanFoundation();
    this.updateLoadingText("Loading... 4/6");

    this.setFanAnimation();

    this.kakejiku = await this.getLoadGlb("assets/model/kakejiku-meshopt.glb");
    this.setKakejiku();
    this.updateLoadingText("Loading... 5/6");

    this.cushion1 = await this.getLoadGlb("assets/model/cushion-meshopt.glb");
    this.setCushion();
    this.updateLoadingText("Loading... 6/6");

    this.pp.init();

    this.setDom();

    this.isPageEnter = true;
  }

  setDom() {
    const POWER_LIMIT_MAX = 3;
    this.powerCount = 2;
    this.isPowerOn = true;

    // + ボタン
    this.wingPowerPlusBtn = document.getElementById("js-wingPowerPlusBtn");
    this.wingPowerPlusBtn.addEventListener("click", (e) => {
      if (this.isPowerOn) {
        this.powerCount++;
        if (this.powerCount > POWER_LIMIT_MAX)
          this.powerCount = POWER_LIMIT_MAX;
        this.body.setAttribute("data-power", this.powerCount);

        switch (this.powerCount) {
          case 1:
            GSAP.to(this.wingPower, {
              duration: 1,
              value1: MAX_WING_POWER,
            });
            break;
          case 2:
            GSAP.to(this.wingPower, {
              duration: 1,
              value2: MAX_WING_POWER,
            });
            break;
          case 3:
            GSAP.to(this.wingPower, {
              duration: 1,
              value3: MAX_WING_POWER,
            });
            break;
        }
      }
    });

    // - ボタン
    this.wingPowerMinusBtn = document.getElementById("js-wingPowerMinusBtn");
    this.wingPowerMinusBtn.addEventListener("click", (e) => {
      if (this.isPowerOn) {
        this.powerCount--;
        if (this.powerCount < 1) this.powerCount = 1;
        this.body.setAttribute("data-power", this.powerCount);

        switch (this.powerCount) {
          case 1:
            GSAP.to(this.wingPower, {
              duration: 1,
              value1: MAX_WING_POWER,
            });
            break;
          case 2:
            GSAP.to(this.wingPower, {
              duration: 1,
              value2: 0.0,
            });
            break;
          case 3:
            GSAP.to(this.wingPower, {
              duration: 1,
              value3: 0.0,
            });
            break;
        }
      }
    });

    // 電源ボタン
    this.electricityPowerBtn = document.getElementById(
      "js-electricityPowerBtn"
    );
    this.electricityPowerBtn.addEventListener("click", (e) => {
      if (this.isPowerOn) {
        this.isPowerOn = false;
        GSAP.to(this.wingPower, {
          duration: 3,
          value1: 0.0,
          value2: 0.0,
          value3: 0.0,
        });
        this.fanWingTl.pause();
      } else {
        this.isPowerOn = true;
        switch (this.powerCount) {
          case 1:
            GSAP.to(this.wingPower, {
              duration: 1,
              value1: MAX_WING_POWER,
            });
            break;
          case 2:
            GSAP.to(this.wingPower, {
              duration: 1,
              value1: MAX_WING_POWER,
              value2: MAX_WING_POWER,
            });
            break;
          case 3:
            GSAP.to(this.wingPower, {
              duration: 1,
              value1: MAX_WING_POWER,
              value2: MAX_WING_POWER,
              value3: MAX_WING_POWER,
            });
            break;
        }
        this.fanWingTl.resume();
      }
    });
  }

  setWorld() {
    this.world.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    this.world.scene.rotation.y = PI + PI * 0.25;
    this.world.scene.position.y = -2;

    this.stage.scene.add(this.world.scene);
  }

  setFanGroup() {
    const SIZE = 1.2;
    this.fanGroup = new THREE.Group();
    this.fanGroup.position.set(-2, 1, 1);
    this.fanGroup.rotation.y = PI + PI * 0.25;
    this.fanGroup.scale.set(SIZE, SIZE, SIZE);
    this.stage.scene.add(this.fanGroup);

    this.fanUpperGroup = new THREE.Group();
    this.fanGroup.add(this.fanUpperGroup);
  }

  setFanBody() {
    this.fanBody.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    this.fanUpperGroup.add(this.fanBody.scene);
  }

  setFanWing() {
    this.fanWing.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    this.fanUpperGroup.add(this.fanWing.scene);
  }

  setFanFoundation() {
    this.fanFoundation.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    this.fanGroup.add(this.fanFoundation.scene);
  }

  setCushion() {
    this.cushion1.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    this.cushion1.scene.position.set(0, -1.75, -3);

    this.cushion2 = this.cushion1.scene.clone();
    this.cushion2.position.set(2.5, -1.75, -2.8);
    this.cushion2.rotation.y = PI * 0.25;

    this.cushion3 = this.cushion1.scene.clone();
    this.cushion3.position.set(1, -1.6, -2);
    this.cushion3.rotation.y = PI * 0.1;
    this.cushion3.rotation.x = PI * 0.1;

    this.stage.scene.add(this.cushion1.scene);
    this.stage.scene.add(this.cushion2);
    this.stage.scene.add(this.cushion3);
  }

  setKakejiku() {
    this.kakejiku.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    this.kakejiku.scene.rotation.y = PI + PI * 0.25;
    this.kakejiku.scene.position.x = 8;
    this.kakejiku.scene.position.y = 3;
    this.kakejiku.scene.position.z = -16;

    this.stage.scene.add(this.kakejiku.scene);
  }

  setFanAnimation() {
    const THRESHOLD = this.getEuler2Quaternion(0, 120, 0);
    const DURATION = 10;
    const EASE = "power1.inOut";

    GSAP.set(this.fanUpperGroup.rotation, {
      y: THRESHOLD.y * -1,
    });

    this.fanWingTl = GSAP.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
    });
    this.fanWingTl
      .to(
        this.fanUpperGroup.rotation,
        {
          duration: DURATION,
          y: THRESHOLD.y,
          ease: EASE,
        },
        "<"
      )
      .to(this.fanUpperGroup.rotation, {
        duration: DURATION,
        y: THRESHOLD.y * -1,
        ease: EASE,
      });
  }

  toFanAnimation() {
    if (this.fanWing != null) {
      this.fanWing.scene.rotation.z +=
        this.wingPower.value1 + this.wingPower.value2 + this.wingPower.value3;
    }
  }

  setLight() {
    const MAP_SIZE = 2048;

    // スポットライト1
    this.spotLight1 = new THREE.SpotLight(Color("#a6ff80"), 1.0);
    this.spotLight1.angle = PI / 6;
    this.spotLight1.penumbra = 1;
    this.spotLight1.decay = 2;
    this.spotLight1.castShadow = true;
    this.spotLight1.shadow.mapSize.width = MAP_SIZE;
    this.spotLight1.shadow.mapSize.height = MAP_SIZE;
    this.spotLight1.shadow.camera.near = 1;
    this.spotLight1.shadow.focus = 1;
    this.spotLight1.shadow.bias = -0.0001; // シャドウアクネ対策
    this.spotLight1.position.set(10, 12.25, 25);
    this.spotLight1.distance = 160;
    this.spotLight1.shadow.camera.far = 160;
    this.stage.scene.add(this.spotLight1);
    if (MODE) {
      const spotLightHelper = new THREE.SpotLightHelper(this.spotLight1);
      this.stage.scene.add(spotLightHelper);
    }

    // スポットライト2
    this.spotLight2 = new THREE.SpotLight(Color("#ff8a9b"), 1.0);
    this.spotLight2.angle = PI / -6;
    this.spotLight2.penumbra = 1;
    this.spotLight2.decay = 2;
    this.spotLight2.castShadow = true;
    this.spotLight2.shadow.mapSize.width = MAP_SIZE;
    this.spotLight2.shadow.mapSize.height = MAP_SIZE;
    this.spotLight2.shadow.camera.near = 1;
    this.spotLight2.shadow.focus = 1;
    this.spotLight2.shadow.bias = -0.0001; // シャドウアクネ対策
    this.spotLight2.position.set(20, 15, 35);
    this.spotLight2.distance = 160;
    this.spotLight2.shadow.camera.far = 160;
    this.stage.scene.add(this.spotLight2);
    if (MODE) {
      const spotLightHelper2 = new THREE.SpotLightHelper(this.spotLight2);
      this.stage.scene.add(spotLightHelper2);
    }

    // アンビエントライト
    this.ambientLight = new THREE.AmbientLight(Color("#ff773d"), 0.2);
    this.stage.scene.add(this.ambientLight);

    if (GUI != null) {
      // アンビエントライト
      if (this.ambientLight) {
        const ambientlight = GUI.addFolder("ambientlight");
        ambientlight.close();
        ambientlight
          .addColor(this.ambientLight, "color")
          .name("color")
          .onChange((value) => {
            this.ambientLight.color = Color(value);
          });
        ambientlight
          .add(this.ambientLight, "intensity", 0.0, 1.0)
          .name("intensity")
          .onChange((value) => {
            this.ambientLight.intensity = value;
          });
      }

      // スポットライト1
      if (this.spotLight1) {
        const spotligth = GUI.addFolder("spotligth");
        spotligth.close();
        spotligth
          .addColor(this.spotLight1, "color")
          .name("color")
          .onChange((value) => {
            this.spotLight1.color = Color(value);
          });
        spotligth
          .add(this.spotLight1, "intensity", 0.0, 20.0)
          .name("intensity")
          .onChange((value) => {
            this.spotLight1.intensity = value;
          });
        spotligth
          .add(this.spotLight1, "penumbra", 0.0, 10.0)
          .name("penumbra")
          .onChange((value) => {
            this.spotLight1.penumbra = value;
          });
        spotligth
          .add(this.spotLight1, "decay", 0.0, 10.0)
          .name("decay")
          .onChange((value) => {
            this.spotLight1.decay = value;
          });
        spotligth
          .add(this.spotLight1.shadow, "focus", 0.0, 10.0)
          .name("focus")
          .onChange((value) => {
            this.spotLight1.shadow.focus = value;
          });
        spotligth
          .add(this.spotLight1, "distance", 0.0, 200.0)
          .name("distance")
          .onChange((value) => {
            this.spotLight1.distance = value;
          });
        spotligth
          .add(this.spotLight1.shadow.camera, "far", 0.0, 200.0)
          .name("far")
          .onChange((value) => {
            this.spotLight1.shadow.camera.far = value;
          });
        spotligth
          .add(this.spotLight1.position, "x", 0.0, 100.0)
          .name("position.x")
          .onChange((value) => {
            this.spotLight1.position.x = value;
          });
        spotligth
          .add(this.spotLight1.position, "y", 0.0, 100.0)
          .name("position.y")
          .onChange((value) => {
            this.spotLight1.position.y = value;
          });
        spotligth
          .add(this.spotLight1.position, "z", 0.0, 100.0)
          .name("position.z")
          .onChange((value) => {
            this.spotLight1.position.z = value;
          });
      }

      // スポットライト2
      if (this.spotLight2) {
        const spotlight2 = GUI.addFolder("spotlight2");
        spotlight2.close();
        spotlight2
          .addColor(this.spotLight2, "color")
          .name("color")
          .onChange((value) => {
            this.spotLight2.color = Color(value);
          });
        spotlight2
          .add(this.spotLight2, "intensity", 0.0, 20.0)
          .name("intensity")
          .onChange((value) => {
            this.spotLight2.intensity = value;
          });
        spotlight2
          .add(this.spotLight2, "penumbra", 0.0, 10.0)
          .name("penumbra")
          .onChange((value) => {
            this.spotLight2.penumbra = value;
          });
        spotlight2
          .add(this.spotLight2, "decay", 0.0, 10.0)
          .name("decay")
          .onChange((value) => {
            this.spotLight2.decay = value;
          });
        spotlight2
          .add(this.spotLight2.shadow, "focus", 0.0, 10.0)
          .name("focus")
          .onChange((value) => {
            this.spotLight2.shadow.focus = value;
          });
        spotlight2
          .add(this.spotLight2, "distance", 0.0, 200.0)
          .name("distance")
          .onChange((value) => {
            this.spotLight2.distance = value;
          });
        spotlight2
          .add(this.spotLight2.shadow.camera, "far", 0.0, 200.0)
          .name("far")
          .onChange((value) => {
            this.spotLight2.shadow.camera.far = value;
          });
        spotlight2
          .add(this.spotLight2.position, "x", -100, 100.0)
          .name("position.x")
          .onChange((value) => {
            this.spotLight2.position.x = value;
          });
        spotlight2
          .add(this.spotLight2.position, "y", -100, 100.0)
          .name("position.y")
          .onChange((value) => {
            this.spotLight2.position.y = value;
          });
        spotlight2
          .add(this.spotLight2.position, "z", -100, 100.0)
          .name("position.z")
          .onChange((value) => {
            this.spotLight2.position.z = value;
          });
      }
    }
  }

  resize(props) {
    // this.bool.isMatchMediaWidth = props.isMatchMediaWidth;
    // this.params.w = props.w;
    // this.params.h = props.h;
    // this.params.aspect = props.aspect;
    // this.params.shorter = props.shorter;
    // this.params.longer = props.longer;
  }

  raf(time) {
    this.toFanAnimation();
    this.pp.raf(time);
    if (this.isPageEnter && !this.isOnced) {
      this.isOnced = true;

      !(async () => {
        await G.delay(300);
        this.body.setAttribute("data-status", "enter");

        await G.delay(0);
        if (this.pp != null) {
          this.pp.toEnterAnimation();
        }
      })();
    }
    // this.stage.renderer.render(this.stage.scene, this.stage.camera);
  }
}

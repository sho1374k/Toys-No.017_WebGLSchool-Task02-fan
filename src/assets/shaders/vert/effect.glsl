varying vec2 vUv;
varying float vTime;
uniform float uTime;

void main(){
  vUv = uv;
  vTime = uTime;

  float x = position.x;
  float y = position.y;
  float z = position.z;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(vec3(x, y, z), 1.0);
}

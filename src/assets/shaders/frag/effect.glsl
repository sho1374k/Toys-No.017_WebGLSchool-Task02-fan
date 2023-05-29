varying vec2 vUv;
varying float vTime;
uniform sampler2D uTexture;

float rand (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}
float anime(float f){
  float speed = 5.;
  return sin(f * 10. + vTime * speed) * .5;
}
float whiteNoise(vec2 uv){
  float o = anime(rand(vUv));
  return o;
}

void main( void ) {
  vec2 uv = vUv;

  float r = texture2D(uTexture, uv).r;
  float g = texture2D(uTexture, uv + 0.0025).g;
  float b = texture2D(uTexture, uv + 0.0025).b;
  vec4 t = vec4(r,g,b,1.0);

  float n = whiteNoise(uv) * .15;

  gl_FragColor = vec4(t.rgb + abs(vec3(n)), 1.0);
}

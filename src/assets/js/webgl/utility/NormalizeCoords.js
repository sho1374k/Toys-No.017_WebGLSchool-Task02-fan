/**
 * @param {object} props
 * @param {number} props.x // e.clientX
 * @param {number} props.y // e.clientY
 * @param {number} props.w // window.innerWidth
 * @param {number} props.h // window.innerHeight
 * @returns // 正規化した座標
 */
export function NormalizeCoords(props) {
  const coords = {
    x: props.x - props.w * 0.5,
    y: props.h * 0.5 - props.y,
  };

  return coords;
}

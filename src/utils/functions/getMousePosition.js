export const getMousePosition = (e)=>{
  e = e || window.event;

  const posX = e.clientX;
  const posY = e.clientY;

  return {
    x: posX,
    y: posY,
  }
}
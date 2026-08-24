let bee,rot=0;
function setup() {
  bee = select("#bee");
  bee.size(26,26);
}
function draw() {
  let x = windowWidth/2 * noise(frameCount * 0.002)
  let y = windowHeight/2 * noise(frameCount * 0.005)
  rot+=random(-2,2);
  bee.style('transform','rotate('+rot+'deg)');
    bee.position(x,y)
}

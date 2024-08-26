//

let flipH = true;
// let video;

// Create the webcam video and hide it
function video_init() {
  my.video = createCapture(VIDEO, { flipped: flipH });
  my.video.size(640, 480);
  // video.size(1920, 1080);
  my.video.hide();
}

function video_maskInit() {
  let { width, height } = my.video;
  my.videoMask = createGraphics(width, height);
  my.videoMask.clear();
  // my.videoMask.fill(255,255,255,255);
  // my.videoMask.rect(100,100,200,200);
  my.videoBuff = createGraphics(width, height);
}

function overlayEyesMouth() {
  if (my.face1) {
    draw_shape_layer(my.face1, my.videoMask);
    video.mask(my.videoMask);

    let { x: x0, y: y0 } = faceMesh_outputPtToInput({ x: 0, y: 0 });
    my.videoBuff.clear();
    my.videoBuff.image(video, 0, 0, my.xlen, my.ylen, x0, y0, my.xlen, my.ylen);

    // image(my.videoBuff, 0, 0);

    let w = my.xlen * my.rx;
    let h = my.ylen * my.ry;
    image(my.videoBuff, 0, 0, w, h, 0, 0, my.xlen, my.ylen);

    // console.log('x0, y0, w, h', x0, y0, w, h);
  }
}

// image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight]

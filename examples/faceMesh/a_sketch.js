// https://editor.p5js.org/jht9629-nyu/sketches/xxx
// faceMesh v9 photo

let my = {};
let colorPalette = ['red', 'green', 'gold', 'black'];

function setup() {
  // createCanvas(640, 480);

  pixelDensity(1);

  my_init();

  let nh = Math.floor(windowHeight * (my.top_percent / 100));
  my.canvas = createCanvas(windowWidth, nh);

  video_init(function () {
    my.bars = new eff_bars({ width: my.video.width, height: my.video.height });

    my.input = my.video;

    faceMesh_init();

    my.bestill = new eff_bestill({ factor: 10, input: my.output });
  });

  ui_init();

  dbase_app_init({ completed: startup_completed });
}

function draw() {
  if (!my.faces) return;

  let str = my.photo_list.length + ' ' + my.photo_index;
  my.photo_count_span.html(str);

  my.output.background(my.avg_color);

  // Draw all the tracked face points
  for (let face of my.faces) {
    draw_face_mesh(face);
    draw_mouth_shape(face);
    draw_lips_line(face);
    draw_eye_shape(face);
    draw_eye_lines(face);
    // draw_face_circle(face);
    my.face1 = face;
  }

  my.bestill.prepareOutput();
  image(my.bestill.output, 0, 0);

  let phase = my.lipsOpenCount % 3;
  // let phase = 2;
  if (phase == 1) {
    overlayEyesMouth();
  } else if (phase == 2) {
    overlayEyesMouthBars();
  }

  trackLipsDiff();
}

function trackLipsDiff() {
  //
  if (my.lipsDiff > 0.05) {
    if (my.lipsOpenState == 0) {
      my.lipsOpenCount++;
      // console.log('my.lipsOpenCount', my.lipsOpenCount);
      // add_action();
      let delay = 0.5 * 1000;
      setTimeout(add_action, delay);
    }
    my.lipsOpenState = 1;
  } else {
    my.lipsOpenState = 0;
  }
}

// https://editor.p5js.org/ml5/sketches/lCurUW1TT
// faceMesh-keypoints --ml5
/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates face tracking on live video through ml5.faceMesh.
 */

// https://editor.p5js.org/jht9629-nyu/sketches/9fOM25TRl
// faceMesh-keypoints --ml5 copy

// https://editor.p5js.org/jht9629-nyu/sketches/PrJvjyxb6
// faceMesh mesh_nits

// https://editor.p5js.org/jht9629-nyu/sketches/7y2gqHeZz
// faceMesh mesh_nits v2
// scale to height

// https://editor.p5js.org/jht9629-nyu/sketches/hFnQmY-Jy
// faceMesh mesh_nits v3
// fit to width

// frameRate()
// 36.63003701391713

// https://editor.p5js.org/jht9629-nyu/sketches/p4Uu0B2sk
// faceMesh mesh_nits v4
// fill to width and height

// https://editor.p5js.org/jht9629-nyu/sketches/nDEtGRehq
// faceMesh mesh_nits v5

// https://editor.p5js.org/jht9629-nyu/sketches/fsOAbI6SJ
// faceMesh mesh_nits v6 -- stray mask

// https://editor.p5js.org/jht9629-nyu/sketches/PuoF9-3xy
// faceMesh mesh_nits v7 mask

// https://editor.p5js.org/jht9629-nyu/sketches/_3QMiI-fM
// faceMesh mesh_nits v8 bestill

function draw_cross() {
  //
  my.xRight += 1;
  if (my.xRight > my.width) {
    my.hitEdge += 1;
    my.xRight = my.x0;
  }
  strokeWeight(my.brushSize);
  stroke(lineColor(0));
  line(my.x0, my.y0, my.xRight, my.y0);

  my.yBottom += 1;
  if (my.yBottom > my.height) {
    my.hitEdge += 1;
    my.yBottom = my.y0;
  }
  stroke(lineColor(1));
  line(my.x0, my.y0, my.x0, my.yBottom);

  my.xLeft -= 1;
  if (my.xLeft < 0) {
    my.hitEdge += 1;
    my.xLeft = my.x0;
  }
  stroke(lineColor(2));
  line(my.x0, my.y0, my.xLeft, my.y0);

  my.yTop -= 1;
  if (my.yTop < 0) {
    my.hitEdge += 1;
    my.yTop = my.y0;
  }
  stroke(lineColor(3));
  line(my.x0, my.y0, my.x0, my.yTop);

  if (my.hitEdge >= 4) {
    my.hitEdge = 0;
    next_lineColor();
  }
}

function next_lineColor() {
  my.colorIndex = (my.colorIndex + 1) % my.colors.length;
}

function lineColor() {
  return my.colors[my.colorIndex];
}
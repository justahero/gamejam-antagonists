const window_width  = 600.0;
const window_height = 600.0;

var board_cols = 30;
var board_rows = 30;

var cell_width  = window_width / board_cols;
var cell_height = window_height / board_rows;

let board = new Board(board_cols, board_rows, cell_width, cell_height);
let p1;
let p2;

function setup() {
  createCanvas(window_width, window_height);
  frameRate(30);
  noStroke();
  loop();

  p1 = new Player("Green", color(255, 0, 0));
  p2 = new Player("Red", color(0, 255, 0));

  // set up boards / players
  generateBoard(board);
  initialize();
}

function initialize() {
  board.addPlayer(p1, 0, 0);
  board.addPlayer(p2, 29, 29);
}

function draw() {
  clear();
  background(224);

  updateAnimation();

  renderGrid();

  if (p1 != undefined) {
    p1.show();
    p1.update(window_width, window_height);
  }
  if (p2 != undefined) {
    p2.show();
    p2.update(window_width, window_height);
  }
}

function renderGrid() {
  board.draw();
}

function updateAnimation() {
  // TODO
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    p1.move(Direction.NORTH, board);
  } else  if (keyCode == DOWN_ARROW) {
    p1.move(Direction.SOUTH, board);
  } else  if (keyCode == LEFT_ARROW) {
    p1.move(Direction.WEST, board);
  } else  if (keyCode == RIGHT_ARROW) {
    p1.move(Direction.RIGHT, board);
  }
  if (keyCode == 87) {
    p2.xSpeed = 0;
    p2.ySpeed = -1;
  } else  if (keyCode == 83) {
    p2.xSpeed = 0;
    p2.ySpeed = 1;
  } else  if (keyCode == 65) {
    p2.xSpeed = -1;
    p2.ySpeed = 0;
  } else  if (keyCode == 68) {
    p2.xSpeed = 1;
    p2.ySpeed = 0;
  } 
}

function keyReleased() {
  if (keyCode == 87 || keyCode == 83 || keyCode == 65 || keyCode == 68) {
    p2.xSpeed = 0;
    p2.ySpeed = 0;
  } else {
    p1.xSpeed = 0;
    p1.ySpeed = 0;
  }
  return false;
}

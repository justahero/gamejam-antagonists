const window_width  = 600.0;
const window_height = 600.0;

var board_cols = 30;
var board_rows = 30;

var cell_width  = window_width / board_cols;
var cell_height = window_height / board_rows;

var board = new Board(board_cols, board_rows, cell_width, cell_height);
var maze  = new Maze(board).generate();

function setup() {
  createCanvas(window_width, window_height);
  frameRate(30);
  noStroke();
}

function draw() {
  clear();
  background(224);

  renderGrid();

  updateAnimation();
}

function renderGrid() {
  board.draw();
}

function updateAnimation() {
  // TODO
}

const window_width  = 600.0;
const window_height = 600.0;

var board_cols = 30;
var board_rows = 30;

var cell_width  = window_width / board_cols;
var cell_height = window_height / board_rows;

var board = new Board(board_cols, board_rows, cell_width, cell_height);
let players = []

function setup() {
  createCanvas(window_width, window_height);
  frameRate(30);
  noStroke();
  loop();

  // set up boards / players
  initialize();
  generateBoard(board);
}

function initialize() {
  players.push(new Player("Green", color(255, 0, 0))),
  players.push(new Player("Red", color(0, 255, 0))),

  board.addPlayer(players[0], 0, 0);
  board.addPlayer(players[1], 20, 20);
}

function draw() {
  clear();
  background(224);

  updateInput();
  updateAnimation();

  renderGrid();
}

function renderGrid() {
  board.draw();
}

function updateAnimation() {
  // TODO
}

function updateInput() {

}

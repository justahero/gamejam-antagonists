const window_width  = 600.0;
const window_height = 600.0;

var board_cols = 20;
var board_rows = 20;

var cell_width  = window_width / board_cols;
var cell_height = window_height / board_rows;

let board   = new Board(board_cols, board_rows, cell_width, cell_height);
let player1 = null;
let player2 = null;

function setup() {
  createCanvas(window_width, window_height);
  frameRate(15);
  noStroke();
  loop();

  player1 = new Player("Blue", chroma(0, 0, 255), board.getCell(0, 0));
  player2 = new Player("Red", chroma(200, 0, 0), board.getCell(board_rows - 1, board_cols - 1));

  // set up boards / players
  generateBoard(board);
  initialize();
}

function initialize() {
  board.addPlayer(player1);
  board.addPlayer(player2);
}

function draw() {
  clear();
  background(224);

  board.update();
  board.draw();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    player1.move(Direction.NORTH, board);
  } else if (keyCode == DOWN_ARROW) {
    player1.move(Direction.SOUTH, board);
  } else if (keyCode == LEFT_ARROW) {
    player1.move(Direction.WEST, board);
  } else if (keyCode == RIGHT_ARROW) {
    player1.move(Direction.EAST, board);
  }
  if (keyCode == 87) {
    player2.move(Direction.NORTH, board);
  } else if (keyCode == 83) {
    player2.move(Direction.SOUTH, board);
  } else if (keyCode == 65) {
    player2.move(Direction.WEST, board);
  } else if (keyCode == 68) {
    player2.move(Direction.EAST, board);
  } 
}

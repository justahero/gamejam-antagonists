var generateBoard = function(board) {

  // create sets
  _.times(20, function() {
    let x = 1 + _.random(board.columns - 1);
    let y = 1 + _.random(board.rows - 1);

    board.getCell(x, y).setSolid(true);
  });
}

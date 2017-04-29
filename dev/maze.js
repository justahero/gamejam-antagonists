var generateBoard = function(board) {
  // create sets
  _.times(50, function() {
    let x = 1 + _.random(board.columns - 3);
    let y = 1 + _.random(board.rows - 3);

    let cell = board.getCell(x, y);
    if (cell != undefined) {
      cell.setSolid(true);
    }
  });
}

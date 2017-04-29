var generateBoard = function(board) {
  // create obstacles
  _.times(50, function() {
    let x = 1 + _.random(board.columns - 3);
    let y = 1 + _.random(board.rows - 3);

    let cell = board.getCell(x, y);
    if (cell != undefined) {
      cell.setSolid(true);
    }
  });

  // set food closer to center
  let foods = 0;
  let maxFoods = 4;
  while (foods < maxFoods) {
    let x = (_.floor(board.columns / 2)) - 5 + _.random(10);
    let y = (_.floor(board.rows / 2)) - 5 + _.random(10);

    let cell = board.getCell(x, y);
    if (cell != undefined && !cell.isSolid()) {
      cell.setFood();
      foods += 1;
    }
  }
}

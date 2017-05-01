let maxFoods = 6;

var generateBoard = function(board) {
  // create obstacles
  _.times(30, function() {
    let x = 1 + _.random(board.columns - 3);
    let y = 1 + _.random(board.rows - 3);

    let cell = board.getCell(x, y);
    if (cell != undefined) {
      cell.setSolid(true);
    }
  });

  // set food closer to center
  let foods = 0;
  while (foods < maxFoods) {
    let x = (_.floor(board.columns / 2)) - 5 + _.random(10);
    let y = (_.floor(board.rows / 2)) - 5 + _.random(10);

    let cell = board.getCell(x, y);
    if (cell != undefined && !cell.isSolid() && cell.food <= 0) {
      cell.setFood(85 + _.random(15));
      foods += 1;
    }
  }
}

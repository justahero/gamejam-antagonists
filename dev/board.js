const backgroundColor = 128;

function createCells(columns, rows) {
  let cells = new Array();
  _.times(columns, function(x) {
    _.times(rows, function(y) {
      cells.push(new Cell(x, y));
    });
  });
  return cells;
}

var Board = function(columns, rows, cellWidth, cellHeight) {
  this.columns    = columns;
  this.rows       = rows;

  this.cellWidth  = cellWidth;
  this.cellHeight = cellHeight;
  this.cells      = createCells(columns, rows)

  this.players    = [];

  this.linkCells = function() {
    for (x = 0; x < this.columns - 1; x++) {
      for (y = 0; y < this.rows; y++) {
        this.getCell(x, y).setNeighbor(Direction.EAST, this.getCell(x + 1, y));
      }
    }

    for (y = 0; y < this.rows - 1; y++) {
      for (x = 0; x < this.columns; x++) {
        this.getCell(x, y).setNeighbor(Direction.SOUTH, this.getCell(x, y + 1));
      }
    }
  }

  this.getCell = function(column, row) {
    return this.cells[column * this.rows + row];
  }

  this.addPlayer = function(player) {
    this.players.push(player);
  }

  this.update = function() {
    _.each(this.players, function(player, index) {
      player.update();
    });
  }

  this.draw = function() {
    let that = this;
    _.times(this.columns, function(column) {
      _.times(that.rows, function(row) {
        that.drawCell(column, row);
      });
    });

    this.drawPlayers();
  }

  this.drawCell = function(x, y) {
    const cell = this.getCell(x, y);
    cell.draw(this.cellWidth, this.cellHeight);
  }

  this.drawPlayers = function() {
    let that = this;
    let cw   = this.cellWidth;
    let ch   = this.cellHeight;

    _.each(this.players, function(player) {
      player.draw(cw, ch);
    });
  }

  this.linkCells();
};

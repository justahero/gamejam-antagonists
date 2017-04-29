const backgroundColor = 128;
const wallColor       = 0;

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

  this.ants       = [];
  this.players    = [];

  this.linkCells = function() {
    const that = this;

    _.times(this.columns - 1, function(x) {
      _.times(that.rows, function(y) {
        that.getCell(x, y).setNeighbor(Direction.EAST, that.getCell(x + 1, y));
      });
    })

    _.times(this.rows - 1, function(y) {
      _.times(this.columns, function(x) {
        that.getCell(x, y).setNeighbor(Direction.SOUTH, that.getCell(x, y + 1));
      });
    });
  }

  this.getCell = function(column, row) {
    return this.cells[column * this.rows + row];
  }

  this.addPlayer = function(player, x, y) {
    this.players.push(player);
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

    const cw = this.cellWidth;
    const ch = this.cellHeight;

    // render cells
    cell.draw(cw, ch);
  }

  this.drawPlayers = function() {
    _.each(this.players, function(player) {
      // fill(player.color);
      fill(0);
      ellipse(50, 50);
    });
  }

  this.linkCells();
};

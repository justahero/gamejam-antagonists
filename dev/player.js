var Player = function(name, color) {
  this.name  = name;
  this.color = color;
  this.cell  = null;

  this.setCell = function(cell) {
    this.cell = cell;
  }

  this.move = function(direction, board) {
    let neighbor = this.cell.getNeighbor(direction);
    if (neighbor != undefined && !neighbor.isSolid()) {
      this.cell = neighbor;
    }
  }
}

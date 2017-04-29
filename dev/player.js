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

  this.draw = function(cellWidth, cellHeight) {
    if (this.cell != null) {
      const x = this.cell.x;
      const y = this.cell.y;
      fill(255, 0, 0);
      rect(x * cellWidth + 1, y * cellHeight + 1, cellWidth - 2, cellHeight - 2);
    }
  }
}

const MAX_FOOD = 10;

var Player = function(name, color) {
  this.name  = name;
  this.color = color;
  this.cell  = null;
  this.food  = 0;

  this.setCell = function(cell) {
    this.cell = cell;
  }

  this.move = function(direction, board) {
    if (this.cell != null) {
      let neighbor = this.cell.getNeighbor(direction);
      if (neighbor) {
        if (!neighbor.isSolid()) {
          this.cell = neighbor;
        }

        // pick up food
      }
    }
  }

  this.draw = function(cellWidth, cellHeight) {
    if (this.cell != null) {
      const x = this.cell.x;
      const y = this.cell.y;
      fill(this.color);
      rect(x * cellWidth + 1, y * cellHeight + 1, cellWidth - 2, cellHeight - 2);
    }
  }
}

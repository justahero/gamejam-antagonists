var Player = function(name, color) {
  this.name  = name;
  this.color = color;
  this.cell  = null;

  this.setCell = function(cell) {
    this.cell = cell;
  }

  this.move = function(direction, board) {
    let neighbor = cell.getNeighbor(direction);

    if (neighbor != undefined && !neighbor.isSolid()) {
      this.cell = neighbor;
    }
  }

  this.show = function(width, height) {
    if (this.cell != null) {
      fill(255, 0, 0);
      rect(this.cell.x * width + 1, this.cell.y * height + 1, width - 2, height - 2);
    }
  }
}

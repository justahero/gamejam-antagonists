var Ant = function(color, cell) {
  this.color = color;
  this.cell  = cell;

  this.setCell = function(cell) {
    this.cell = cell;
  }

  this.draw = function(cellWidth, cellHeight) {
    if (this.cell != null) {
      const x = this.cell.x;
      const y = this.cell.y;
      // push();
      fill(color.rgb());
      // stroke();
      ellipse(x * cellWidth + cellWidth / 2.0, y * cellHeight + cellHeight / 2.0, 5.0);
      // pop();
    }
  }
}

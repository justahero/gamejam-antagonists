const MAX_FOOD = 10;

var Player = function(name, color) {
  this.name  = name;
  this.color = color.saturate(1);
  this.cell  = null;
  this.food  = 0;
  this.ants  = [];

  this.setCell = function(cell) {
    this.cell = cell;
  }

  this.spawnAnt = function() {
    this.ants.push(new Ant(this.cell));
  }

  // TODO change the location of the first ant only!
  this.move = function(direction, board) {
    if (this.cell != null) {
      let neighbor = this.cell.getNeighbor(direction);
      if (neighbor) {
        if (!neighbor.isSolid()) {
          this.cell = neighbor;
        }
      }
    }
  }

  // update all ants, except first one?
  this.update = function() {
    // TODO
  }

  // draw hive and all ants!
  this.draw = function(cellWidth, cellHeight) {
    // draw hive
    if (this.cell != null) {
      const x = this.cell.x;
      const y = this.cell.y;
      fill(this.color.rgb());
      rect(x * cellWidth + 1, y * cellHeight + 1, cellWidth - 3, cellHeight - 3, 5);
    }

    // draw all ants
    _.each(this.ants, function(ant, index) {
      ant.draw(cellWidth, cellHeight);
    });
  }

  this.spawnAnt();
}

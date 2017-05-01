const MAX_FOOD = 10;

var Player = function(name, color, cell) {
  this.name  = name;
  this.color = color;
  this.cell  = cell;
  this.food  = 0;
  this.ants  = [];

  this.spawnAnt = function() {
    this.ants.push(new Ant(this.color, this.cell));
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
    if (frameCount % 15 === 0) {
      const shuffledAnts = _.tail(this.ants);
    }
  }

  // draw hive and all ants!
  this.draw = function(cellWidth, cellHeight) {
    // draw hive
    if (this.cell != null) {
      const x = this.cell.x;
      const y = this.cell.y;
      fill(this.color.saturate(1).rgb());
      rect(x * cellWidth + 1, y * cellHeight + 1, cellWidth - 2, cellHeight - 2, 5);
    }

    // draw all ants
    _.each(this.ants, function(ant, index) {
      ant.draw(cellWidth, cellHeight);
    });
  }

  this.spawnAnt();
}

var Direction = Object.freeze({NORTH: 0, EAST: 1, SOUTH: 2, WEST: 3});
var State     = Object.freeze({FREE: 0, SOLID: 1});

var Cell = function(x, y) {
  this.x = x;
  this.y = y;

  this.neighbors = [null, null, null, null];

  this.state = 0;
  this.solid = false;
  this.food  = 0;

  this.getNeighbor = function(direction) {
    return this.neighbors[direction];
  }

  this.setState = function(state) {
    this.state = state;
  }

  this.setNeighbor = function(direction, cell) {
    this.neighbors[direction] = cell;
    cell.neighbors[(direction + 2) % 4] = this;
  }

  this.getNeighbor = function(direction) {
    let neighbor = this.neighbors[direction];
    if (neighbor == undefined) {
      return null;
    }
    return neighbor;
  }

  this.setSolid = function(solid) {
    this.solid = solid;
  }

  this.isSolid = function() {
    return this.solid;
  }

  this.setFood = function(food = MAX_FOOD) {
    this.food = 100;
  }

  this.draw = function(width, height) {
    // render background
    if (this.solid) {
      fill(64);
    } else {
      fill(255);
    }
    rect(this.x * width + 1, this.y * height + 1, width - 2, height - 2);

    // renbder objects, e.g. food
    if (this.food > 0) {
      const centerx = this.x * width + width / 2;
      const centery = this.y * width + height / 2;

      let col = chroma(50, 150, 0).brighten(this.food / 100.0);
      // TODO
      // debugger;
      fill(col.rgb());
      ellipse(centerx, centery, width - 2, height - 2);
    }
  }

  this.setAnt = function(ant) {
    this.ant = ant;
  }

  this.removeAnt = function() {
    this.ant = null;
  }

  this.setPheromone = function(ant) {
    this.state = 1;
  }
}

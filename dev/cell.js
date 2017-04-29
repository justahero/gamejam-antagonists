var Direction = Object.freeze({NORTH: 0, EAST: 1, SOUTH: 2, WEST: 3});
var State     = Object.freeze({FREE: 0, SOLID: 1});

var Cell = function(x, y) {
  this.x         = x;
  this.y         = y;
  this.visited   = false;

  this.walls     = [true, true, true, true];
  this.neighbors = [null, null, null, null];

  this.state = 0;

  this.getNeighbor = function(direction) {
    return this.neighbors[direction];
  }

  this.setWall = function(direction) {
    this.walls[direction] = true;
  }

  this.removeWall = function(direction) {
    this.walls[direction] = false;
  }

  this.setState = function(state) {
    this.state = state;
  }

  this.setNeighbor = function(direction, cell) {
    this.neighbors[direction] = cell;
    cell.neighbors[(direction + 2) % 4] = this;
  }

  this.setWalls = function(enable) {
    let that = this;
    _.each(walls, function(direction) {
      that.walls[direction] = enable;
    });
  }

  this.isSolid = function(direction) {
    return this.walls[direction];
  }

  this.visit = function() {
    this.visited = true;
  }

  this.univiset = function() {
    this.visited = false;
  }

  this.isVisited = function() {
    return this.visited;
  }

  this.draw = function(width, height) {
    if (this.state === State.FREE) {
      color(255);
    } else if (this.state === State.SOLID) {
      color(64, 64, 0);
    }

    rect(this.x * width + 1, this.y * height + 1, width - 2, height - 2);
  }
}

var Direction = Object.freeze({NORTH: 0, EAST: 1, SOUTH: 2, WEST: 3});
var State     = Object.freeze({FREE: 0, SOLID: 1});

var Cell = function(x, y) {
  this.x         = x;
  this.y         = y;

  this.neighbors = [null, null, null, null];

  this.state = 0;
  this.solid = false;

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

  this.setSolid = function(solid) {
    this.solid = solid;
  }

  this.isSolid = function() {
    return this.solid;
  }

  this.draw = function(width, height) {
    if (this.solid) {
      color(64);
    } else {
      color(255);
    }

    rect(this.x * width + 1, this.y * height + 1, width - 2, height - 2);
  }
}

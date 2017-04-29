var Node = function(parent = null) {
  this.parent = parent;

  this.root = function() {
    return (this.parent != null) ? this.parent.root() : this;
  }

  this.isConnected = function(node) {
    return this.root() == node.root();
  }

  this.connect = function(node) {
    node.root().parent = this;
  }
}

var Edge = function(x, y, direction) {
  this.x         = x;
  this.y         = y;
  this.direction = direction;
}

var Maze = function(board) {
  this.board = board;

  this.generate = function() {
    let sets = [];
    let that = this;

    // create sets
    _.times(20, function() {
      let x = random(1, that.columns - 1);
      let y = random(1, that.rows - 1);

      that.board.getCell(x, y).setSolid();
    });
  }
}

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
    _.times(that.board.columns, function() {
      _.times(that.board.rows, function() {
        sets.push(new Node());
      });
    });

    // create edges
    let edges = _.shuffle(buildEdges());
  }

  this.buildEdges = function() {
    let edges = [];
    let that  = this;

    _.times(that.columns, function(x) {
      _.times(that.columns, function(x) {
        if (x > 0) {
          edges.push(new Edge(x, y, Direction.WEST));
        }
        if (y > 0) {
          edges.push(new Edge(x, y, Direction.NORTH));
        }
      });
    });

    return edges;
  }
}

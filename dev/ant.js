var Ant = function(player, cell) {
  this.player = player;
  this.cell   = cell;

  this.setCell = function(cell) {
    this.cell = cell;
  }

  this.getCell = function() {
    return this.cell;
  }
}

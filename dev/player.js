var Player = function(name, color, posx, posy, width, height) {
  this.name   = name;
  this.x      = posx;
  this.y      = posy;
  this.xSpeed = 0;
  this.ySpeed = 0;

  this.update = function(){
    this.x += this.xSpeed * width;
    this.y += this.ySpeed * height;
  }

  this.show = function(){
    fill(255, 0, 0);
    rect(this.x, this.y, width, height);
    // fill(255);
  }
}

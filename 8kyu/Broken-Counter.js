function conter() {
    this.value = 0;
  }
  
  conter.prototype.increase = function() {
    this.value++;
  };
  
  conter.prototype.getValue = function() {
    return this.value;
  };
  
  conter.prototype.reset = function() {
    this.value = 0;
  };
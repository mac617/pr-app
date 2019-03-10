function a(x,y){
    this.x = x;
    this.y =y;
}

a.prototype.toString = function() {
    return '(' + this.x + ',' + this.y + ')';
}

let newb = new a(2,3)

console.log(newb.toString())
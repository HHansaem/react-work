function Calculator(x,y) {
    this.x = x;
    this.y = y;

    this.sum = () => x+y;  //{} 없을 때 -> return 쓰면 안됨 (자동 return)
    this.mul = () => x*y;
    // this.sum = () => {
    //     return x+y;  //{} 있을 때 -> return 필요
    // }
}

let calc = new Calculator(20,10);
console.log(calc.sum());
console.log(calc.mul());
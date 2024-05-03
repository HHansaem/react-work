class Colck {
    constructor({templete}) {
        this.templete = templete;
    }

    render() {
        let date = new Date();
        let hour = date.getHours();
        if(hour < 10) hour = '0' + hour;
        let mins = date.getMinutes();
        if(mins < 10) mins = '0' + mins;
        let second = date.getSeconds();
        if(second < 10) second = '0' + second;
        let output = this.templete.replace('h',hour).replace('m',mins).replace('s',second);
        console.log(output);
    }

    start() {
        this.render();
        this.timer = setInterval(()=>this.render(), 1000);  //1초마다 render함수 반복적으로 호출
    }

    stop() {
        clearInterval(this.timer);  //반복적으로 호출되던 setInterval함수의 반복 끝내기
    }
}

let clock = new Colck({templete:'h-m-s'});
clock.start();
setTimeout(()=>clock.stop(), 10000);  //10초 시나면 stop 함수를 호출시켜 반복 멈추기





//함수 사용 방법 (포맷)
function func() {console.log('hello')}

let f1 = function() {
    console.log('hello');
}

let f2 = ()=>console.log('hello');
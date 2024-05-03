class User {
    //생성자
    constructor(name) {
        this.name = name;
    }
    //멤버함수
    sayHello() {
        console.log(`Hello!, ${this.name}`);  //this를 붙여야 지역변수 사용하는 것
    }
}

let user = new User('hong');
user.sayHello();
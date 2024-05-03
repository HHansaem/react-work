function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.info = () => {  //함수가 아니라 변수임
        return `이름:${this.name}, 나이:${this.age}`;
    }
}

let person = new Person('hong', 20);
console.log(person.info());
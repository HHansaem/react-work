let user = {id:10, name:'John', age:30}
// let props = user;  //user 객체를 같이 쓰는 것 (user 변경하면 props도 변경)
let props = {...user};  //user 객체의 내용을 복사해서 가져감 (user 변경해도 props는 그대로)

user.name = 'Song';
console.log(props.name);

//user객체의 속성에 담아줄 변수를 선언(속성이랑 변수랑 이름 같아야 함)
// let {id} =  user; =  user;  //let id = user.id;
let {id,name, age} =  user;
let {templete} = {templete:'h-m-s'}


let [a,b,c] = [10,20,30];  //배열 각각의 변수를 풀어해쳐서 담을 때

let arr1 = [1,2,3];
let arr2 = arr1;
let arr3 = [...arr1];
arr1[0] = 100;
console.log(arr2[0]);
console.log(arr3[0]);

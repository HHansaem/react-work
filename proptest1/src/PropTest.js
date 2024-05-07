import React, {Component} from 'react';

// class PropTest extends Component {
//     render() {
//         let name = this.props.name;
//         let age = this.props.age;

//         return(
//             <div>
//                 <h1>{name}</h1>
//                 <h1>{age}</h1>
//             </div>
//         )
//     }
// }

//props = {name:'hong', age:30}
// let {name, age} = props
//정석
// function PropTest(props) {
//     return(
//         <div>
//             <h1>{props.name}</h1>
//             <h1>{props.age}</h1>
//         </div>
//     )
// }
//근데 얘를 더 많이 씀
function PropTest({name, age}) {
    return(
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    )
}

export default PropTest;
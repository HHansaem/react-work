// import React, {Component} from 'react';

// class Department extends Component {
//     render(){
//         let depts = [...this.props.depts];
//         return(
//             depts.map(dept=> (
//                 <option key={dept.id} value={dept.id}>{dept.name}</option>
//             ))
//         )
//     }
// }

const Department = ({depts}) => {
    return(
        depts.map(dept=> (
            <option key={dept.id} value={dept.id}>{dept.name}</option>
        ))
    )
}

export default Department;
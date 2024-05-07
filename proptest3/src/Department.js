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

// export default Department;

//하나만 export하면 App.js에서 import {Department} 로 적어줘야 함
export const Department = ({depts}) => {
    return(
        <select name="department">
            {
                depts.map(dept=> (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))
            }
        </select>
    )
}
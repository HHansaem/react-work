// import React, {Component} from 'react';

// class Subject extends Component {
//     render() {
//         let subjects = [...this.props.subjects];
//         return(
//             subjects.map(subject=> (
//                 <option key={subject.key} value={subject.key}>{subject.text}</option>
//             ))
//         )
//     }
// }

const Subject = ({subjects}) => {
    return(
            subjects.map(subject=> (
                <option key={subject.key} value={subject.key}>{subject.text}</option>
            ))
    )
}

export default Subject;
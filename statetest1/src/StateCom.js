import React, {Component} from 'react';

//state변수 : setStatue함수를 통해 변경시 태그가 다시 그려짐
class StateCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str:this.props.str,
            num:100
        }
    }

    render() {
        return(
            //<>: 하나로 묶는 용도
            <>
                <div>
                    {this.state.str}:{this.state.num}
                </div>
                <button onClick={()=>this.setState({num:200})}>200</button>
                <button onClick={()=>this.setState({str:"React"})}>React</button>
            </>
        )
    }
}

export default StateCom;
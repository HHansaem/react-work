import {useState} from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useNavigate} from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const [mem, setMem] = useState({id:'', password:''});

    const changeValue = (e) => {
        setMem({...mem, [e.target.name]:e.target.value});
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8090/login", mem)
            .then(res=> {
                navigate("/");
            })
            .catch(err=> {
                alert(err.response.data);
            })
    }

    return(
        <div className='route'>
            <h4>로그인</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>아이디</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" id="id" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={3}>비밀번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="password" id="password" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <Button onClick={submit}>로그인</Button>
            </Form>
        </div>
    )
}
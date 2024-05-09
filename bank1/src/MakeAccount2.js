import { useState } from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


export const MakeAccount2 = () => {
    const [acc, setAcc] = useState({ id: '', name: '', balance: '', type: 'normal', grade: '' });
    const changeValue = (e) => {
        setAcc({ ...acc, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8090/makeAccount', acc)
            .then(res => {
                alert(res.data);
            })
    }

    return (
        <>
            <div className='route'>
                <h3>계좌개설</h3>
                <Form>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend" className='label'>
                            <InputGroupText className='label-text'>계좌번호</InputGroupText>
                        </InputGroupAddon>
                        <Input name="id" onChange={changeValue} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend" className='label'>
                            <InputGroupText className='label-text'>이름</InputGroupText>
                        </InputGroupAddon>
                        <Input name="name" onChange={changeValue} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend" className='label'>
                            <InputGroupText className='label-text'>입금액</InputGroupText>
                        </InputGroupAddon>
                        <Input name="balance" onChange={changeValue} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend" className='label'>
                            <InputGroupText className='label-text'>종류</InputGroupText>
                        </InputGroupAddon>
                        <Input type='radio' name="type" value='normal' onChange={changeValue} />일반
                        <Input type='radio' name="type" value='special' onChange={changeValue} />특수
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend" className='label'>
                            <InputGroupText className='label-text'>등급</InputGroupText>
                        </InputGroupAddon>
                        <Input name="grade" onChange={changeValue} />
                    </InputGroup>
                    <Button onClick={submit}>계좌개설</Button>
                </Form>
            </div>
        </>
    )
}
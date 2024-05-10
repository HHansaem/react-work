import { useState } from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const BoardWrite = () => {
    const [board, setBoard] = useState({ writer: '', subject: '', content: '' });

    const changeValue = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value });
    }

    const fileChange = (e) => {

    }

    const submit = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div className='header-text'>게시판 글 등록</div>
            <Form>
                <FormGroup row>
                    <Label for='writer' sm={3}>글쓴이</Label>
                    <Col sm={9}>
                        <Input type="text" name="writer" id="writer" onChange={changeValue} required />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='subject' sm={3}>제목</Label>
                    <Col sm={9}>
                        <Input type="text" name="subject" id="subject" onChange={changeValue} required/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='content' sm={3}>내용</Label>
                    <Col sm={9}>
                        <Input type="textarea" name="content" id="content" cols="40" rows="15" onChange={changeValue} required/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='file' sm={3}>이미지 파일 첨부</Label>
                    <Col sm={9}>
                        <img src='plus.png' style={{ width: "15%" }} 
                            onClick={()=>document.getElementById('file').click()}/><br/><br/>
                        <Input type="file" name="file" id="file"accept='image/*' hidden onChange={fileChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='content' sm={3}></Label>
                    <Col sm={9}>
                        <Button color='primary' onClick={submit}>등록</Button>&nbsp;&nbsp;
                        <Button type='reset' color='secondary'>다시쓰기</Button>
                    </Col>
                </FormGroup>
            </Form>
        </>
    )
}

export default BoardWrite;
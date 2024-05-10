import { useState, useEffect } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {url} from '../config';

const BoardWrite = () => {
    const divStyle = {margin:"0 auto", padding:'20px', width: '650px', border:'1px solid lightgray', borderRadius: '10px'};
    const [board, setBoard] = useState({ writer: '', subject: '', content: '' });
    const [fileList, setFileList] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        let loginUser = JSON.parse(sessionStorage.getItem("user"));
        loginUser && setBoard({...board, writer:loginUser.id});
    }, [])  //[]안에 들어가는 useState변수가 변경될 때마다 해당 useEffect가 호출됨

    const changeValue = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value });
    }

    const fileChange = (e) => {
        if(e.target.files.length > 0) {  //선택한 파일이 있다면
            setFileList([...fileList, e.target.files[0]]);
        }
    }

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("subject", board.subject);
        formData.append("content", board.content);
        formData.append("writer", board.writer);
        for(let file of fileList) {
            formData.append("file", file);
        }
        axios.post(`${url}/boardWrite`, formData)
            .then(res=> {
                console.log(res.data);
                navigate("/");
            })
            .catch(err=> {
                console.log(err);
            })
    }

    return (
        <>
            <div className='header-text'>게시판 글 등록</div>
            <Form style={divStyle}>
                <FormGroup row>
                    <Label for='writer' sm={3}>글쓴이</Label>
                    <Col sm={9}>
                        <Input type="text" name="writer" id="writer" disabled value={board.writer}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='subject' sm={3}>제목</Label>
                    <Col sm={9}>
                        <Input type="text" name="subject" id="subject" required onChange={changeValue}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='content' sm={3}>내용</Label>
                    <Col sm={9}>
                        <Input type="textarea" name="content" id="content" cols="40" rows="15" required onChange={changeValue}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='file' sm={3}>이미지 파일 첨부</Label>
                    <Col sm={9}>
                        <img src='plus.png' width="100px" height="100px"
                            onClick={()=>document.getElementById('file').click()}/><br/><br/>
                        <Input type="file" name="file" id="file"accept='image/*' hidden onChange={fileChange}/>
                        {
                            fileList.map((file, index)=>
                                <span key={index}>
                                    <img src={URL.createObjectURL(file)} width="100px" alt='' style={{marginRight:"10px"}}/>
                                        {(index + 1) % 3 === 0? <><br/><br/></>:''}
                                </span>
                            )
                        }
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
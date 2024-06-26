import { Col, Button, FormGroup, Input, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { url } from '../config';

const BoardList = () => {

    const formStyle = {width:'600px', textAlign:'center', margin:'0 auto'};
    const [pageBtn, setPageBtn] = useState([1,2,3,4,5]);
    const [boardList, setBoardList] = useState([]);
    const [pageInfo, setPageInfo] = useState({});
    const [word, setWord] = useState('');
    const [type, setType] = useState('');
    const user = useSelector(state=>state.persistedReducer.user);

    useEffect(()=>{
        let loginUser = JSON.parse(sessionStorage.getItem("user"));
        // loginUser && setUser({...loginUser});
        submit(1);
    }, [])

    const submit = (page) => {
        const listUrl = `${url}/boardList?page=${page}&type=${type}&word=${word}`; 
        axios.get(listUrl)
            .then(res=> {
                let pageInfo = res.data.pageInfo;
                setBoardList([...res.data.boardList]);
                let page = [];
                for(let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
                    page.push(i);
                }
                setPageBtn([...page]);
                setPageInfo({...pageInfo});
            })
            .catch(err=> {
                
            })
    }

    const deleteBoard = (num) => {
        const deleteUrl = `${url}/deleteBoard?num=${num}`;
        axios.get(deleteUrl)
            .then(res=> {
                let modBoardList = boardList.filter(board=>board.num!==num);
                setBoardList([...modBoardList]);
            })
            .catch(err=> {
                console.log(err);
            })
    }

    return(
        <div>
            <div className="header-text">게시글 목록</div>
            <br/>
            <FormGroup row style={formStyle}>
                <Col sm={3}>
                    <Input type='select' name="type" onChange={(e)=>setType(e.target.value)}>
                        <option value="">선택하세요</option>
                        <option value="subject">제목</option>
                        <option value="writer">작성자</option>
                        <option value="content">내용</option>
                    </Input>
                </Col>
                <Col sm={3}>
                    <Input type='text' name='word' onChange={(e)=>setWord(e.target.value)}/>
                </Col>
                <Col sm={3}>
                    <Button onClick={()=>submit(1)}>검색</Button>
                </Col>
                <Col sm={3}>
                    {user.id !== '' && <Button tag="a" href="/boardWrite" color='success'>글쓰기</Button>}
                </Col>
            </FormGroup>
            <Table bordered style={{margin:"0 auto", width:"900px"}}>
                <thead>
                    <tr key="0">
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>날짜</td>
                        <td>조회수</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map(board=>(
                        <tr key={board.num}>
                            <td>{board.num}</td>
                            <td><a href={`/boardDetail/${board.num}`}>{board.subject}</a></td>
                            <td>{board.writer}</td>
                            <td>{board.writeDate}</td>
                            <td>{board.viewCount}</td>
                            {/* 파라미터 없을 때는 그냥 함수 이름만, 파라미터 넘길 때는 아래와 같이 함수 구현 */}
                            <td><Button onClick={()=>deleteBoard(board.num)}>삭제</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <br/>
            <Pagination style={{margin:"0 auto", width:"900px", justifyContent:"center"}}>
                <PaginationItem disabled={pageInfo.curPage===1?true:false}>
                    <PaginationLink previous onClick={()=>submit(pageInfo.curPage-1)}/>
                </PaginationItem>
                {pageBtn.map(page=>(<PaginationItem key={page} className={page===pageInfo.curPage? 'active':''}>
                                        <PaginationLink onClick={()=>submit(page)}>{page}</PaginationLink>
                                    </PaginationItem>))}
                <PaginationItem disabled={pageInfo.curPage===pageInfo.endPage?true:false}>
                    <PaginationLink next onClick={()=>submit(pageInfo.curPage+1)}/>
                </PaginationItem>
            </Pagination>
        </div>
    )
}

export default BoardList;
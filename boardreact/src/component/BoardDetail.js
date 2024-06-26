import { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Button, Label, Input, Table } from 'reactstrap';
import {url} from '../config';
import { useSelector } from 'react-redux';

const BoardDetail = () => {
    const divStyle = {margin:"0 auto", padding:'20px', width: '650px', border:'1px solid lightgray', borderRadius: '10px'};
    const [board, setBoard] = useState({num:'', subject:'', content:'', writer:'', likeCount:0});
    const [imageList, setImageList] = useState([]);
    const [heart, setHeart] = useState(false);
    const user = useSelector(state=>state.persistedReducer.user);
    const {num} = useParams();

    // 뜨자마자 요청해서 가져오니까 useEffect 사용
    useEffect(()=> {
        let detailUrl = `${url}/boardDetail/${num}`;
        if(user.id !== '') {
            detailUrl += `/${user.id}`;
        }
        axios.get(detailUrl)
            .then(res=> {
                let resBoard = res.data.board;
                setBoard({...resBoard});
                setHeart(res.data.like);

                let fileNums = resBoard.fileNums.split(",");
                setImageList([...fileNums]);
                console.log(res.data);
                console.log(fileNums);
            })
            .catch(err=> {
                console.log(err);
            })
    }, [])

    return(
        <>
            <div className='header-text'>게시판 상세</div>
            <br/>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label>글쓴이</Label></td>
                            <td><Input type='text' disabled value={board.writer}/></td>
                        </tr>
                        <tr>
                            <td><Label>제목</Label></td>
                            <td><Input type='text' disabled value={board.subject}/></td>
                        </tr>
                        <tr>
                            <td><Label>내용</Label></td>
                            <td><Input type='textarea' disabled value={board.content} cols="40" rows="15"/></td>
                        </tr>
                        <tr>
                            <td>이미지</td>
                            <td>
                                { imageList.length !== 0 &&
                                    imageList.map(num=> 
                                        <img key={num} src={`${url}/image/${num}`} width="100px" alt='' style={{marginRight:'10px'}}/>
                                    )
                                }
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                {user.id === board.writer &&
                                    <Button color='primary'>수정</Button>
                                }&nbsp;&nbsp;
                                <Button color='secondary' tag='a' href="/">목록</Button>&nbsp;&nbsp;
                                {user.id !== '' && <img src={heart===true? '/redheart.png':'/blackheart.png'} alt='' width='30px'/>}
                                &nbsp;<span>{board.likeCount}</span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default BoardDetail;
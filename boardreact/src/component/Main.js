import {NavbarToggler, NavbarBrand, Navbar, Nav, NavItem, NavLink} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import {initState} from '../reducer';

const Main = () => {
    const user = useSelector(state=>state.persistedReducer.user);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({type:'user', payload:initState.user})
    }

    return(
        <Navbar color='light' light expand='md'>
            <NavbarBrand href='/' className='mr-auto'><i><b>kosta.com</b></i></NavbarBrand>
            <NavbarToggler className='mr-auto' />
            <Nav navbar>
                {
                    user.name !== '' ?
                    (<><NavItem>
                            <NavLink href='#'><b>{user.name}</b></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#' onClick={logout}>로그아웃</NavLink>
                        </NavItem>
                    </>):
                        <NavItem>
                            <NavLink href='/login'>로그인</NavLink>
                        </NavItem>
                }
                <NavItem>
                    <NavLink href='/join'>회원가입</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/'>게시판</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Main;
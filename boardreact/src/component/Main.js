import {NavbarToggler, NavbarBrand, Navbar, Nav, NavItem, NavLink} from 'reactstrap';
import {useState, useEffect} from 'react';

const Main = () => {
    const [user, setUser] = useState(null);

    useEffect(()=> {
        let loginUser = JSON.parse(sessionStorage.getItem("user"));
        loginUser && setUser({...loginUser});  //loginUser가 null이 아닐 때만 setUser
    }, [])

    const logout = () => {
        sessionStorage.removeItem("user");
        setUser(null);
    }

    return(
        <Navbar color='light' light expand='md'>
            <NavbarBrand href='/' className='mr-auto'><i><b>kosta.com</b></i></NavbarBrand>
            <NavbarToggler className='mr-auto' />
            <Nav navbar>
                {
                    user !== null ?
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
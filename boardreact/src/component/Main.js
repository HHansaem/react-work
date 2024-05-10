import {NavbarToggler, NavbarBrand, Navbar, Nav, NavItem, NavLink} from 'reactstrap';

const Main = () => {
    return(
        <Navbar color='light' light expand='md'>
            <NavbarBrand href='/' className='mr-auto'><i><b>kosta.com</b></i></NavbarBrand>
            <NavbarToggler className='mr-auto' />
            <Nav navbar>
                <NavItem>
                    <NavLink href='/'>로그인</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/join'>회원가입</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/list'>게시판</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Main;
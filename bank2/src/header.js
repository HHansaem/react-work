import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { initUser, userAtom } from './atoms';
import {NavbarToggler, NavbarBrand, Navbar, Nav, NavItem, NavLink, 
        UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useAtom(userAtom);
    const navigate = useNavigate();

    const divStyle = {
        backgroundColor : '#ebe3b7',
        width : '100%',
        position : 'fixed',
        left : '0px',
        top : '0px',
        zIndex : 10
    };

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const logout = () => {
        setUser(initUser);
        navigate("/");
    }

    return(
        <Navbar color='light' light expand="md">
            <NavbarBrand><i><b>코스타 은행</b></i></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Nav className='ml-auto' navbar>
                {
                    user.id !== '' ?
                    (
                        <>
                        <NavItem>
                            <NavLink href="#"><b>{user.name}</b></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={logout}>로그아웃</NavLink>
                        </NavItem>
                        </>
                    ) :
                    <NavItem>
                        <NavLink href="/">로그인</NavLink>
                    </NavItem>
                }
                <NavItem>
                    <NavLink href="/join">회원가입</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle tag="a" className='nav-link' caret>계좌</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag="a" href='/makeAccount'>계좌계설</DropdownItem>
                        <DropdownItem tag="a" href='/deposit'>입금</DropdownItem>
                        <DropdownItem tag="a" href='/withdraw'>출금</DropdownItem>
                        <DropdownItem tag="a" href='/accountInfo'>계좌조회</DropdownItem>
                        <DropdownItem tag="a" href='/allAccountInfo'>전체계좌조회</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
        // <div style={divStyle}>
        //     <ul className="nav-items">
        //         <li className="nav-item"><i><b>코스타 은행</b></i></li>
        //         <li className="nav-item"><Link to="/">계좌개설</Link></li>
        //         <li className="nav-item"><Link to="/deposit">입금</Link></li>
        //         <li className="nav-item"><Link to="/withdraw">출금</Link></li>
        //         <li className="nav-item"><Link to="/accountInfo">계좌조회</Link></li>
        //         <li className="nav-item"><Link to="/allAccountInfo">전체계좌조회</Link></li>
        //         <li className="nav-item"><Link to="/join">회원가입</Link></li>
        //         <li className="nav-item"><Link to="/login">로그인</Link></li>
        //     </ul>
        // </div>
    )
}

export default Header;
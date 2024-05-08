import { useState } from 'react';
import {ButtonDropdown, Button, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
const ButtonDropdownEx = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [isLeftOpen, setIsLeftOpen] = useState(false);
    const [isRightOpen, setIsRightOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    const toggleLeft = () => {
        setIsLeftOpen(!isLeftOpen);
    }
    const toggleRight = () => {
        setIsRightOpen(!isRightOpen);
    }
    
    return(
        <>
            <ButtonDropdown isOpen={isOpen} toggle={toggle}>
            <Button id="caret" color="primary">DropDown</Button>
            <DropdownToggle caret color="primary" />
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown direction="left" isOpen={isLeftOpen} toggle={toggleLeft}>
            <DropdownToggle caret color="success">
                Dropleft
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown direction="right" isOpen={isRightOpen} toggle={toggleRight}>
            <DropdownToggle caret color="info">
                Dropright
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem tag="a" href='http://naver.com'>Naver</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
        </>
    )
}

export default ButtonDropdownEx;
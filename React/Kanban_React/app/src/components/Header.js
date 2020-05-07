import React, { useState } from 'react';
import { 
    Nav, 
    Navbar,
    Collapse,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from 'reactstrap';
import './Header.scss';


export default function Header(props){    
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Navbar id="navbar-center" expand="lg">
                <NavbarBrand href="" className="mx-auto">
                    <img src="/images/tilst.png" className="img-fluid img-responsive" alt=""/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav>
                        <NavItem>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
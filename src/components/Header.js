import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem } from 'reactstrap';

function Header() {
    return (
        <div>
            <Navbar color='primary'>
                <div className="container">
                    <NavbarBrand>
                        <img src="assets/images/logo.png" width='40' alt="LOGO"></img>
                    </NavbarBrand>
                    <Nav>
                        <NavItem><span className="fa fa-users fa-lg"></span> Nhan Vien </NavItem>
                        <NavItem><span className="fa fa-users fa-lg"></span> Phong Ban </NavItem>
                        <NavItem><span className="fa fa-users fa-lg"></span> Bang Luong </NavItem>
                    </Nav>
                </div>
                
           </Navbar>
        </div>
    );
}

export default Header;
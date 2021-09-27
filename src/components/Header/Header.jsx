import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Sports Mania</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Nahid</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

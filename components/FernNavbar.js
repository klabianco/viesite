import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

const FernNavbar = () => {

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='mb-4'>
    <Container>
      <Navbar.Brand href="/">Vienna Labianca</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/fern-leopard-books">Fern The Leopard</Nav.Link>
          <Nav.Link href="/dragon-drawings">Dragon Drawings</Nav.Link>
          <Nav.Link href="/about">About Vienna</Nav.Link>
          {/*
          
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
  */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default FernNavbar;
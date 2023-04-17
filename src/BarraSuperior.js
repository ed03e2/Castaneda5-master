import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BarraSuperior() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="/vallejo" >Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Carrusel">Carrusel</Nav.Link>
            <Nav.Link href="/maps">Maps</Nav.Link>
            <Nav.Link href="/alumno">Alumno</Nav.Link>
            <Nav.Link href="/carrera">Carrera</Nav.Link>
            <Nav.Link href="/universidad">Universidad</Nav.Link>
            <Nav.Link href="/logo">Logo</Nav.Link>
            <Nav.Link href="/foto">Foto</Nav.Link>
            <Nav.Link href="/mockup">Mockup</Nav.Link>
            <Nav.Link href="/Login_form">Login</Nav.Link>
            <Nav.Link href="/CerrarSesion">Cerrar Sesion</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraSuperior;
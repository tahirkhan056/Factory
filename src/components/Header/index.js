import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./style.scss";

function Header() {
  return (
    <Navbar className="header" expand="lg">
      <Container>
        <Navbar.Brand className="logo" href="#home">
          My Logo
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;

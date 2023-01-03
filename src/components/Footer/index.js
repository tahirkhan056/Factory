import React from "react";
import Container from "react-bootstrap/Container";
require("./style.scss");

const Footer = () => (
  <div className="footer">
    <Container>
      <p>This is some content in sticky footer</p>
    </Container>
  </div>
);

export default Footer;

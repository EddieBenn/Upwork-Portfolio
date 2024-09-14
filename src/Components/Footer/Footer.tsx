import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import logo from "../../assets/images/Ebn.jpeg";
import NewsLetter from "../NewsLetter/NewsLetter";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <NewsLetter />
          <Col sm={6}>
            <img
              src={logo}
              alt="logo"
              style={{ borderRadius: "25%" }}
              width={100}
            />
          </Col>
          <Col
            sm={6}
            className="text-center text-sm-end"
            style={{ alignContent: "center" }}
          >
            <p>CopyRight 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

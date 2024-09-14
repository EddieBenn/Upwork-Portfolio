import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import contactImage from "../../assets/images/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  src={contactImage}
                  alt="contact us"
                  className={isVisible ? 'animate__animated animate__swing' : ""}
                />
              )}
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`text-center ${isVisible ? 'animate__animated animate__swing' : ""}`}
                >
                  <h2>Let's Talk Business on Upwork!</h2>
                  
                  <a
                    href="https://www.upwork.com/freelancers/your-profile" // Replace with your actual Upwork URL
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button type="button" className="contact-us">
                      <span>Connect with me</span>
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

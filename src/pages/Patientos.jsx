import "./Patientos.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Patientos () {
    return ( <>
    <div className="hero">
    <Container>
      <Row>
        <Col md={12}>
        <h1 className="hero_text">The Bautista Maternal Clinic</h1>
        </Col>
        <Col md={12}>
        <p class="desc">Look for your doctor, choose your preferred date of appointment and wait for the confirmation.</p>
        </Col>
        <Col md={2} className="login_button">
        <a href="./Login" style={{textDecoration:"none"}}>
          <div className="login_text">
          <p><ion-icon name="log-in-sharp"></ion-icon>Log In</p>  
          </div>  
          </a>
        </Col>
        <Col md={2}  className="signup_button">
            <a href="./Signup" style={{textDecoration:"none"}}>
          <div className="login_text">
          <p><ion-icon name="reader-sharp"></ion-icon>Sign Up</p>
          </div>
          </a>
        </Col>
      </Row>
    </Container>
    </div>
    </> );
};

export default Patientos
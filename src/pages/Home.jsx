import "./Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
      <>
      <div className="hero1">
    <Container fluid >
      <Row>
      <Col xs={12}><h1 className="hero_font text-center">Bautista RHU - Municipal Maternal Clinic <br />
          Helping you prepare for your baby. <br />
          </h1>
          <div className=" text-center">
          <button className="hero_button">See more &#8594</button>
          </div>
          </Col>
      </Row>
    </Container>
    </div>
    <div>
      <Container>
      <Row>
        <Col md={12}>
        <h1 className="services_title">Our Services</h1>
        </Col>
      </Row>
      </Container>
    </div>
    <div>
      <Container>
      <Row>
        <Col md={3}>
        <div className="card">
          <img src="/images/services1.jpg" className="card-img-top img-fluid" />
          <div className="card-body">
            <h5 className="card-title">Birthing Care</h5>
            <p className="card-text">Labor is a unique experience. Sometimes it's over in a matter of hours. In other cases, labor tests a mother's physical and emotional stamina.You won't know how labor and childbirth will unfold until it happens...
            </p>
            <a href="#" className="btn services_button">See more &#8594</a>
          </div>
        </div>
        </Col>
        <Col md={3}>
        <div className="card">
          <img src="/images/services2.jpg" className="card-img-top img-fluid" />
          <div className="card-body">
            <h5 className="card-title">Immunization</h5>
            <p className="card-text">Disease prevention is crucial to your health. Getting vaccinated is one of the best ways to maintain good health, and protect you and those you care about against infectious diseases. Vaccinations offer protection against serious diseases by ...
            </p>
            <a href="#" className="btn services_button">See more &#8594</a>
          </div>
        </div>
        </Col>
        <Col md={3}>
        <div className="card">
          <img src="/images/services3.jpg" className="card-img-top img-fluid" />
          <div className="card-body">
            <h5 className="card-title">Family Medicine</h5>
            <p className="card-text">People turn to Family Medicine for a wide range of medical, health and wellness concerns, including well-child exams, behavioral health care, minor illnesses, chronic conditions such as diabetes and high blood pressure, and routine health exams...
            </p>
            <a href="#" className="btn services_button">See more &#8594</a>
          </div>
        </div>
        </Col>
        <Col md={3}>
        <div className="card">
          <img src="/images/services4.jpg" className="card-img-top img-fluid" />
          <div className="card-body">
            <h5 className="card-title">Family Planning</h5>
            <p className="card-text">Considering having another child? Pregnancy spacing is an essential part of family planning. It can affect more than how close your children are in age. Here's what you need to know.Knowing whether you do or don't want to have children in the...
            </p>
            <a href="#" className="btn services_button">See more &#8594</a>
          </div>
        </div>
        </Col>
      </Row>
      </Container>
      </div>

      <div className="about_container">
        <Col md={12}>
        <h1 className="about_us">ABOUT US</h1>
        </Col>
        <Container>
        <Row>
          <Col md={6}>
          <img style={{display: "block", marginLeft: "auto", marginRight: "auto", width:"90%", borderRadius: "20px", 
          boxShadow: "2px, 2px, 15px, #000000"}} src="/images/certificate.jpg" className="img-fluid"/>
          </Col>
          <Col md={6}>
          <p className="about_desc">Hello Bautistanians! We are proud to share that our NewBorn Screening Facility is One of the TOP Performing NewBorn Screening Facilities - Under Primary Care - Government Category..
        "You Bear, We Care" 
        </p>
          </Col>
        </Row>
        </Container>
      </div>
      <div className="about1">
        <Container>
          <Row>
            <Col md={3}>
            <img src="/images/about1.jpg" className="about_images img-fluid"  />
            </Col>
            <Col md={3}>
            <p className="about2_desc">Emotions run high during the birth of a baby, and that can lead to feelings of stress, fear, and anxiety. When we designed our new Birthing Center, we wanted to create a calming environment, where mothers-to-be can find comfort knowing they are receiving the care and support they need in a soothing atmosphere.
        </p>
            </Col>
            <Col md={3}>
            <img src="/images/about2.jpg" className="about_images img-fluid" />
            </Col>
            <Col md={3}>
            <p className="about2_desc">Bautista Maternity Clinic is committed to providing top quality primary care close to home for patients, including infants and children. For non-emergency medical care, primary care providers are an essential part of our healthcare team. They specialize in diagnosing, treating, and preventing a wide variety of conditions.
        </p>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div  className="why_us">
        <Container>
          <Row>
            <Col>
            <h1 className="content_main_title">Why Choose Bautista Maternity Clinic</h1>
            </Col>
          </Row>
          <Row>
            <Col md={4}  className="content_icon">
            <ion-icon name="fitness-sharp" ></ion-icon>
        <h1 className="content_title">Bautista Maternal Care</h1>
        <p className="content_desc">By working together and sharing the knowledge and expertise that only Bautista Maternity Clinic can provide, we bring the experience and specialized care of Bautista Maternity Clinic to you.
        </p>
            </Col>
            <Col md={4} className="content_icon">
            <ion-icon name="ribbon-sharp" ></ion-icon>
        <h1 className="content_title">Convenient</h1>
        <p className="content_desc">
          Every aspect of your care is coordinated, and teams of experts work together to provide exactly the right care at the right time in the right place.
        </p>
            </Col>
            
            <Col md={4} className="content_icon">
            <ion-icon name="home-sharp"></ion-icon>
        <h1 className="content_title">Close to Home</h1>
        <p className="content_desc">
          With the center location, you won’t have to travel far to get the care you need; some care can even be delivered through virtual appointments.
        </p>
            </Col>
          </Row>
        </Container>

      </div>
      <div className="joinfoot">
        <Container>
          <Row>
            <Col md={4}>
            <h1 className="joinus_title">JOIN US IN <span style={{color: "#0d6efd"}}>FACEBOOK</span> !</h1>
        <h2 className="joinus_desc">For more updates!</h2>
            </Col>
            <Col md={8}>
              <Row>
                <Col md={3}><img src="/images/events1.jpg" className="joinus_img img-fluid" /></Col>
                <Col md={3}><img src="/images/events2.jpg" className="joinus_img img-fluid" /></Col>
                <Col md={3}><img src="/images/events3.jpg" className="joinus_img img-fluid" /></Col>
                <Col md={3}><img src="/images/events4.jpg" className="joinus_img img-fluid" /></Col>
              </Row>
              <Row>
                <Col md={3}><img src="/images/events5.jpg" className="joinus_img img-fluid" /></Col>
                <Col md={3}><img src="/images/events6.jpg" className="joinus_img img-fluid" /></Col>
                <Col md={3}><img src="/images/events7.jpg" className="joinus_img img-fluid" /></Col>
                <Col md={3}><img src="/images/events8.jpg" className="joinus_img img-fluid" /></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    
    </>
    
    

      
    );
}

export default Home;
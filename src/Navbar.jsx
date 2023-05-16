import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand href="./Home"><img style={{width: 100}} src="./images/logo.jpg" size='sm' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./About"><span className='nav_right'>About</span></Nav.Link>
            <NavDropdown className='navdrop' title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="./halaman">./halaman</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="./Wellness"><span className='nav_right'>Wellness</span></Nav.Link>
            <Nav.Link href="./Faqs"><span className='nav_right'>FAQ's</span></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="./Reqapp"><span className='nav_left1'>REQUEST AN APPOINTMENT</span></Nav.Link>
            <Nav.Link href="./Patientos"><span className='nav_left1'>PATIENT ONLINE SERVICES</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

// import "./Navbar.css";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import {Link, useMatch, useResolvedPath} from "react-router-dom"

// function Navbar() {
//     return (
//         <div className="row">
//         <div className="col-md-1">
//           <img className="imglogo" src="./images/logo.jpg" />
//         </div>
//         <div className="col-md-11">
//           <nav className="navbar navbar-expand-lg">
//             <div className="container-fluid">
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                 <ul className="navbar-nav">
//                   <li className="nav-item">
//                     <CustomLink className="nav-link nav_right" aria-current="page" to="./Home"><ion-icon name="home-sharp" className="header_icon"></ion-icon> Home</CustomLink>
//                   </li>
//                   <li className="nav-item">
//                     <CustomLink className="nav-link nav_right" to="/about"><ion-icon name="information-circle-sharp" className="header_icon"></ion-icon>About</CustomLink>
//                   </li>
//                   <li className="nav-item dropdown">
//                   <NavDropdown className="nav-link navdrop" title="Dropdown" id="collasible-nav-dropdown">
//                   <NavDropdown.Item href="./Login">Action</NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.2">
//                     Another action
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item href="#action/3.4">
//                     Separated link
//                   </NavDropdown.Item>
//                 </NavDropdown>
//                   </li>
//                   <li className="nav-item">
//                     <CustomLink className="nav-link nav_right" to="./Wellness"><ion-icon name="heart-circle-sharp" className="header_icon"></ion-icon> Wellness</CustomLink>
//                   </li>
//                   <li className="nav-item">
//                     <CustomLink className="nav-link nav_right" to="./Faqs"><ion-icon name="help-circle-sharp" className="header_icon"></ion-icon> FAQ'S</CustomLink>
//                   </li>
//                   <li className="nav-item">
//                     <CustomLink className="nav-link nav_left"></CustomLink>
//                   </li>
//                   <li className="nav-item">
//                     <CustomLink className="nav-link nav_left1" to="./Reqapp"><ion-icon name="calendar-sharp" className="header_icon"></ion-icon> REQUEST AN APPOINTMENT</CustomLink>
//                   </li>
//                   <li className="nav-item">
//                     <CustomLink className="nav-link nav_left1" to="./Patientos"><ion-icon name="person-sharp" className="header_icon"></ion-icon> PATIENT ONLINE SERVICES</CustomLink>
//                   </li>
//                 </ul>
//               </div>
//             </div> 
//           </nav>
//         </div>
//     </div>

//          )
//     }
// export default Navbar

//     function CustomLink({ to,children, ...props}) {
//         const resolvedPath = useResolvedPath(to)
//         const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
//         return (
//             <li className={isActive ? "active" : ""}>
//                 <Link to={to} {...props}>
//                     {children}
//                 </Link>
//             </li>
//         )

//     }




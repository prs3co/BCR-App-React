import { useState } from 'react'
import { Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg py-4 bg--smoke">
      <div className="container-fluid">
        <a className="navbar-brand bg--primary text--primary" href="#">CARRENT.CO</a>
        <div className="d-flex">
          <NavbarToggler onClick={toggle} className="me-2" />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className='gap-3'>
              <NavItem>
                <NavLink href="/components/">
                  Our Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Why Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Testimonial
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  FAQ
                </NavLink>
              </NavItem>
              <NavItem>
                <button type="button" className="btn btn--primary h-100">Register</button>
              </NavItem>
            </Nav>
          </Collapse>
          {/* <Offcanvas
            isOpen={isOpen}
            toggle={toggle}
            direction='end'
            className='navbar-expand-lg collapse navbar-collapse'
            
          >
            <OffcanvasHeader toggle={toggle} className='w-100'>
              BCR CAR
            </OffcanvasHeader>
            <OffcanvasBody className='w-100'>
            <div className="navbar-nav gap-3">
              <a className="nav-link" href="#">Our Services</a>
              <a className="nav-link" href="#">Why Us</a>
              <a className="nav-link" href="#">Testimonial</a>
              <a className="nav-link" href="#">FAQ</a>
              <button type="button" className="btn btn--primary">Register</button>
            </div>
            </OffcanvasBody>
          </Offcanvas>
          <div className="navbar-nav gap-3">
            <a className="nav-link" href="#">Our Services</a>
            <a className="nav-link" href="#">Why Us</a>
            <a className="nav-link" href="#">Testimonial</a>
            <a className="nav-link" href="#">FAQ</a>
            <button type="button" className="btn btn--primary">Register</button>
          </div> */}
        </div>
      </div>
    </nav>
  )
}

export default Header
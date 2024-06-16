import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, Navbar, NavbarBrand, NavbarText, NavbarToggler, UncontrolledDropdown } from 'reactstrap'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar fixed='top'>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className='nav-link'>home</Link>
            </NavItem>
            <NavItem>
              <Link to="/why" className='nav-link'>why</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      {/* <nav className="navbar navbar-expand-lg py-4 bg--smoke">
        <div className="container-fluid">
          <a className="navbar-brand bg--primary text--primary" href="#">BCRCAR.CO</a>
          <div className="d-flex">
            <button className="navbar-toggler border border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end w-50" data-bs-scroll="true" data-bs-backdrop="true" tabIndex={-1} id="offcanvas" aria-labelledby="offcanvasLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasLabel">BCR</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <div className="navbar-nav gap-3">
                  <a className="nav-link" href="#services">Our Services</a>
                  <a className="nav-link" href="#why">Why Us</a>
                  <a className="nav-link" href="#testimony">Testimonial</a>
                  <a className="nav-link" href="#faq">FAQ</a>
                  <button type="button" className="btn btn--primary">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
    </header>
  )
}

export default Header

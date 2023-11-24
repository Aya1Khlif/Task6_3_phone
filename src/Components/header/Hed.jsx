import React from "react";
import "./Hed.css";
import Container from "react-bootstrap/Container";
import logo from '../../assets/img/logo.png'
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import imgdropdown from "./../../assets/img/phonea.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const countriesSelect = document.getElementById('countries');

             
                data.forEach(country => {
                    const option = document.createElement('option');
                    option.value = country.name.common;
                    option.text = country.name.common;

                
                    if (country.flags) {
                        const flagImg = document.createElement('img');
                        flagImg.src = country.flags.svg;
                        flagImg.alt = `${country.name.common} Flag`;
                        flagImg.style.width = '20px'; 
                        option.appendChild(flagImg);
                    }
                    const countryAbbreviation = document.createElement('span');
                    countryAbbreviation.textContent = ` (${country.cca2})`;
                    option.appendChild(countryAbbreviation);

                    countriesSelect.appendChild(option);
                });
            })
            .catch(error => console.error('Error fetching countries:', error));
            
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="text-logo">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" className="ak-home">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#about">
                <Link to="/task_phone/src/Components/About/About.jsx">about</Link>
              </Nav.Link>
              <Nav.Link href="#service">
                <Link to="/service">service</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">Shop</Nav.Link>
              <Nav.Link href="#pricing">Android</Nav.Link>   
              <NavDropdown title="Pages" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Contact us
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Faq's</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Collection" id="collapsible-nav-dropdown">
                <div className="inner-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Action
                    <div>
                      <hr />
                      <p className="px-1">Affinity M20</p>
                      <p className="px-1 ">Affinity P40</p>
                      <p>PO V40 THinQ</p>
                      <p className="px-1">TENCHO 7.3</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                    <div>
                      <hr />
                      <p className="px-1">SPOTS 8Lights</p>
                      <p className="px-1">SPOTS ERA 5X</p>
                      <p className="px-1"> TENCHO 8.1</p>
                      <p className="px-1">PHONELINK</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                    <div>
                      <hr />
                      <p className="px-1">T-BLAST</p>
                      <p className="px-1">ALCATEL</p>
                      <p className="px-1"> AMPY</p>
                      <p className="px-1">CRYSTAL CELL</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                    <div>
                      <hr />
                      <p className="px-1">TENCHO 10 Lite</p>
                      <p className="px-1">TENCHO 7.3</p>
                      <p class="px-1"> SPECTRUM</p>
                      <p className="px-1">HISENSE</p>
                    </div>
                  </NavDropdown.Item>
                  <div className="innerimg">
                      <img src={imgdropdown} alt="a" />
                  </div>
                </div>
              </NavDropdown>
              <Nav.Link href="#">
                <FontAwesomeIcon icon={faUser} />
              </Nav.Link>
              <Nav.Link href="#">
                <FontAwesomeIcon icon={faCartShopping} />
              </Nav.Link>
              <Nav.Link href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <select name="" id="countries">
          </select>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

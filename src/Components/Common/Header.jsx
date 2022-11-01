/** @format */
import "./Header.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
	return (
		<>
			<Navbar bg="light" expand="md" sticky="top">
				<Container>
					<Navbar.Brand href="/">
						<img
							src="/logo.png"
							width="50"
							height="40"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
					<Form className="d-flex search-form">
						<Form.Control
							type="search"
							placeholder="🔍 Search free high-resolution photos"
							className="me-2 rounded-pill "
							aria-label="Search"
						></Form.Control>
					</Form>
				</Container>
				<Container fluid>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<Nav.Link href="#action1">Advertise</Nav.Link>
							<Nav.Link href="#action2">Blog</Nav.Link>
							<Nav.Link href="#action3">Unspash+</Nav.Link>
							<Button variant="outline-secondary submit-img-btn">
								Submit a photo
							</Button>
							<Nav.Link href="#action3">
								<i className="bi bi-bell fa-lg  "></i>
							</Nav.Link>
							<Nav.Link href="#action5">
								<i className="bi bi-person-circle"></i>
							</Nav.Link>
							<Nav.Link href="#action6">
								<i className="bi bi-list bi-5x"></i>
							</Nav.Link>
							{/* 
						<NavDropdown title="Link" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action4">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">
								Something else here
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#" disabled>
							Link
						</Nav.Link> */}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Navbar bg="light" expand="md" sticky="top">
				<Container fluid>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0 d-inline-flex myNav"
							style={{
								maxHeight: "100px",
								maxWidth: "100vw",
								overflowX: "auto",
								scrollSnapType: "x",
								fontWeightL: "500",
								fontSize: "14px",
								whiteSpace: "nowrap",
							}}
							navbarScroll
						>
							<Nav.Link href="#">Editorial</Nav.Link>
							<Nav.Link href="#action2">Following</Nav.Link>
							<Nav.Link href="#action3" className="v-line mx-3"></Nav.Link>

							<Nav.Link href="#action4" className="food_drink_item">
								<sup>Featured</sup>
								Food & Drink
							</Nav.Link>
							<Nav.Link href="#action5">Current Events</Nav.Link>
							<Nav.Link href="#action6">Wallpapers</Nav.Link>
							<Nav.Link href="#action7">3D Renders</Nav.Link>
							<Nav.Link href="#action8">Textures & Patterns</Nav.Link>
							<Nav.Link href="#action9">Experimental</Nav.Link>
							<Nav.Link href="#action10">Architecture</Nav.Link>
							<Nav.Link href="#action11">Nature</Nav.Link>
							<Nav.Link href="#action12">Business & Work</Nav.Link>
							<Nav.Link href="#action13">Fashion</Nav.Link>
							<Nav.Link href="#action13"> Film</Nav.Link>
							<Nav.Link href="#action13">Health & Wellness</Nav.Link>
							<Nav.Link href="#action13">People</Nav.Link>
							<Nav.Link href="#action13">Interiors</Nav.Link>
							<Nav.Link href="#action13">Street Photography</Nav.Link>
							<Nav.Link href="#action13">Animals</Nav.Link>
							<Nav.Link href="#action13">Spirituality</Nav.Link>
							<Nav.Link href="#action13">Travel</Nav.Link>
							<Nav.Link href="#action13">Arts & Culture </Nav.Link>
							<Nav.Link href="#action13">History </Nav.Link>
							<Nav.Link href="#action13">Athletics</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;

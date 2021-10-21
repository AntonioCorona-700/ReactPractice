import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

function MyNavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="xl">
            <Container>
                <Navbar.Brand href="root"> <img src="https://hackernoon.com/images/1*KBGdMaU_emZX4XR1AvkD4A.gif"
                    alt="" width="100" height="30"class="d-inline-block align-text-top"></img> Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <nav class="navbar navbar-dark bg-dark">
                        <div class="container-fluid">
                            <a class="navbar-brand">
                            <div class="d-flex justify-content-end">My interests</div>
                            </a>
                        </div>
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}

export default MyNavBar
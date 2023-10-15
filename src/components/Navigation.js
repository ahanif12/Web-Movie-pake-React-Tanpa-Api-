import {Navbar, Container, Nav, NavbarBrand} from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <div>
        <Navbar>
            <Container>
                <NavbarBrand href ="/" className='text-white'>ABUFILMS</NavbarBrand>
                <Nav>
                    <Nav.Link href='#trending' className='text-white'>TRENDING</Nav.Link>
                    <Nav.Link href='#superhero' className='text-white'>SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar
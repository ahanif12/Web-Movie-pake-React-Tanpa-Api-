import { Card, Image, Container, Row, Col } from 'react-bootstrap'
import spiderman from '../assets/images/superhero/spiderman.jpg'
import hulk from '../assets/images/superhero/hulk.jpg'
import avenger from '../assets/images/superhero/marvel avenger.jpg'
import superman from '../assets/images/superhero/superman return.jpg'

const Superhero  = () => {
    return (
        <div>
            <Container>
                <br />
                    <h1 className='text-white font-bold bg-dark'>SUPERHERO</h1>
                    <br />
                <Row>
                    <Col md={3} className='movieWrapper' id='superhero'>
                        <Card className='bg-dark moviesuperehro'>
                            <Image variant="top" src={spiderman} alt='spiderman' className='images' />
                                <div className=' text-white p-4 m-3'>
                                    <Card.Title className='text-center'>Spiderman</Card.Title>
                                    <Card.Text className='text-left'>
                                    Some quick example text to build on the card 
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={3} className='movieWrapper'>
                        <Card className='bg-dark moviesuperhero'>
                            <Image variant="top" src={hulk} alt='spiderman' className='images' />
                                <div className=' text-white p-4 m-2'>
                                    <Card.Title className='text-center'>Incredible Hulk</Card.Title>
                                    <Card.Text className='text-left'>
                                    Some quick example text to build on the card 
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={3} className='movieWrapper'>
                        <Card className='bg-dark moviesuperhero'>
                            <Image variant="top" src={superman} alt='spiderman' className='images' />
                                <div className=' text-white p-4 m-2'>
                                    <Card.Title className='text-center'>Superman Return</Card.Title>
                                    <Card.Text className='text-left'>
                                    Some quick example text to build on the card 
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={3} className='movieWrapper'>
                        <Card className='bg-dark moviesuperhero'>
                            <Image variant="top" src={avenger} alt='spiderman' className='images' />
                                <div className=' text-white p-4 m-2'>
                                    <Card.Title className='text-center'>Marvel Avenger</Card.Title>
                                    <Card.Text className='text-left'>
                                    Some quick example text to build on the card 
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
    </div>
    )
}

export default Superhero
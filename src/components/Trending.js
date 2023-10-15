import { Card, Image, Container, Row, Col } from 'react-bootstrap'
import kiamat from '../assets/images/trending/2012.jpg'
import buya from '../assets/images/trending/buya.jpg'
import highway from '../assets/images/trending/highway.jpg'
import parasyte from '../assets/images/trending/parasyte.jpg'

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                    <h1 className='text-white font-bold bg-dark'>TRENDING</h1>
                    <br />
                <Row>
                    <Col md={3} className='movieWrapper' id='trending'>
                        <Card className='bg-dark moviesuperehro'>
                            <Image variant="top" src={kiamat} alt='' className='images' />
                                <div className=' text-white p-4 m-2'>
                                    <Card.Title className='text-center'>2012</Card.Title>
                                    <Card.Text className='text-left'>
                                    Some quick example text to build on the card 
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={3} className='movieWrapper'>
                        <Card className='bg-dark moviesuperhero'>
                            <Image variant="top" src={buya} alt='' className='images' />
                                <div className=' text-white p-4 m-2'>
                                    <Card.Title className='text-center'>Buya Hamka</Card.Title>
                                    <Card.Text className='text-left'>
                                    Some quick example text to build on the card 
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={3} className='movieWrapper'>
                        <Card className='bg-dark moviesuperhero'>
                            <Image variant="top" src={highway} alt='' className='images' />
                                <div className=' text-white p-4 m-2'>
                                    <Card.Title className='text-center'>Highway</Card.Title>
                                    <Card.Text className='text-left'>
                                    Some quick example text to build on the card 
                                    </Card.Text>
                                </div>
                        </Card>
                    </Col>
                    <Col md={3} className='movieWrapper'>
                        <Card className='bg-dark moviesuperhero'>
                            <Image variant="top" src={parasyte} alt='' className='images' />
                                <div className=' text-white p-4 m-2'>
                                    <Card.Title className='text-center'>Parasyte</Card.Title>
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

export default Trending
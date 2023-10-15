import { Container, Row, Col, Button } from 'react-bootstrap'

const Intro = () => {
    return (
        <div className='intro'>
            <Container className='d-flex justify-content-center'>
                <Row>
                    <Col>
                        <div className='title fs-sm-3 fs-md-2'>NONTON FILM GRATIS</div>
                        <div className='title text-center fs-md-2 fs-sm-3'>GA PAKE KARCIS</div>
                        <div className='introButton text-center mt-5'>
                            <Button>Lihat Semua List</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro
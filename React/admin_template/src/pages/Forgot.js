import React from 'react';
import {Link} from 'react-router-dom';
import useClass from '../hooks/add-class-body';
import {
    Container,
    Col,
    Row,
    Form,
    Input,
    Card,
    CardBody,
    InputGroup,
    Button,
} from 'reactstrap'

export default function Forgot(){
    useClass('bg-blue');
   
    const handleSandEmail = () => {
        console.log('Make http request here...')
    }

    return (
        <div className="login mt-5 flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="6">
                        <Card>
                            <CardBody>
                                <Form>
                                    <h1>Forgot Password?</h1>
                                    <p>Enter e-mail.You will receive a email with link to reset your password.</p>
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="E-mail"/>
                                    </InputGroup>
                                    <InputGroup className="mb-3 justify-content-center">
                                        <Button className="btn-lg" outline color="primary" onClick={handleSandEmail}>Go!</Button>
                                    </InputGroup>
                                    <InputGroup className="mb-3 justify-content-center">
                                        <Link to="/login">
                                            <Button color="link">To Login</Button>
                                        </Link>
                                    </InputGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
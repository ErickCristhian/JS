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

export default function Login(){
    useClass('bg-blue');
   
    const handleLogin = () => {
        console.log('Make http request here...')
    }

    return (
        <div className="mt-5 flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="6">
                        <Card>
                            <CardBody>
                                <Form>
                                    <h1>Login</h1>
                                    <p>Enter e-mail and password to access. New? <Link to="/register">Sign-up</Link></p>
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="E-mail"/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="password" placeholder="Password"/>
                                    </InputGroup>
                                    <InputGroup className="mb-3 justify-content-center">
                                        <Button className="btn-lg" outline color="primary" onClick={handleLogin}>Go!</Button>
                                    </InputGroup>
                                    <InputGroup className="mb-3 justify-content-center">
                                        <Link to="/forgot">
                                            <Button color="link">Forgot Password?</Button>
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
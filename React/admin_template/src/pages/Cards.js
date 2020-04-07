import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Row,
    Col,
    Collapse
} from 'reactstrap';

library.add(faArrowDown);

export default function Cards() {
    const [cardOpen, setCardOpen] = useState(true);

    function toggleCard(e){
        e.preventDefault();
        setCardOpen(!cardOpen);
    }

    return (
        <div>
            <Row>
                <Col xs="12" sm="6" md="4">
                    <Card>
                        <CardHeader>
                            <h4>Card Title</h4>
                        </CardHeader>

                        <CardBody>
                            Text
                        </CardBody>

                        <CardFooter>
                            Footer
                        </CardFooter>
                    </Card>
                </Col>

                <Col xs="12" sm="6" md="4">
                    <Card>
                        <CardHeader className="text-right">
                            <a href="#" onClick={toggleCard}>
                                <FontAwesomeIcon icon="arrow-down"/>
                            </a>
                        </CardHeader>

                        <Collapse isOpen={cardOpen}>
                            <CardBody>
                                Text
                            </CardBody>    
                        </Collapse>
                    </Card>
                </Col>
            </Row>
        </div>            
    )
}

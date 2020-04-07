import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
} from 'reactstrap';
import { Bar, Pie } from 'react-chartjs-2';

const dataBar = {
    labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
    datasets: [
        {
            label: 'First',
            backgroundColor: ['#2c9f28', '#fd7e13', '#023498', '#ee1f9a', '#fd9801'],
            borderColor: '#ccc',
            borderWidth: 1,
            data: [15, 20, 30, 70, 80]
        }
    ]
}

const dataPie = {
    labels: ['Item 1', 'Item 2', 'Item 3'],
    datasets: [
        {
            data: [90, 100, 110],
            backgroundColor: ['#4040b2', '#f05928', '#eb3f67']
        }
    ]
}
export default function Charts() {
    return (
        <div>
            <Row>
                <Col xs="12" sm="6" md="6">
                    <Card>
                        <CardHeader>
                            <h4>Charts Bar</h4>
                        </CardHeader>

                        <CardBody>
                            <Bar data={dataBar} width={60} height={40} />
                        </CardBody>
                    </Card>
                </Col>

                <Col xs="12" sm="6" md="6">
                    <Card>
                        <CardHeader>
                            <h4>Charts Pie</h4>
                        </CardHeader>

                        <CardBody>
                            <Pie data={dataPie} width={100} height={80} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>            
    )
}

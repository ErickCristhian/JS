import React, { useState, useEffect } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
    
} from 'reactstrap';
import BootstrapDataTables from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const columns = [{ dataField: 'id', text: 'ID' },
{ dataField: 'title', text: 'Title' },
{ dataField: 'price', text: 'Price'},
];

export default function DataTables() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const dataset = [{ id: 1, title: 'Product 1', price: 10 },
                        { id: 2, title: 'Product 2', price: 20 },
                        { id: 3, title: 'Product 3', price: 30 },
                        { id: 4, title: 'Product 4', price: 40 },
                        { id: 5, title: 'Product 5', price: 50 },
                        { id: 6, title: 'Product 6', price: 60 },
                        { id: 7, title: 'Product 7', price: 70 },
                        { id: 8, title: 'Product 8', price: 80 },
                        { id: 9, title: 'Product 9', price: 90 },
                        { id: 10, title: 'Product 10', price: 10 },
                        { id: 11, title: 'Product 11', price: 11 },
        
    ];
    setData(dataset);
    }, [])

    return (
        <div>
            <Row>
                <Col xs="12" sm="6" md="6">
                    <Card>
                        <CardHeader>
                            <h4>DataTables</h4>
                        </CardHeader>

                        <CardBody>
                            <BootstrapDataTables 
                                keyField='id'
                                data={data}
                                columns={columns}
                                hover
                                condensed
                                bordered={false}
                                pagination={paginationFactory()}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>            
    )
}

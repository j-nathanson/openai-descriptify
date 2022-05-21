import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function ResponseCard({ item }) {

    const [isCopied, setIsCopied] = useState(false);
    const { productName, basicDescription, idealUsers, benefits, features, engine } = item.prompt;

    const copy = async () => {
        const text = item.response;
        await navigator.clipboard.writeText(text);
        setIsCopied(!isCopied);
    }

    if (isCopied) {
        setTimeout(() => {
            setIsCopied(!isCopied);
        }, 5000)
    }
    return (
        <div className="container border p-2 ">
            <Row className='mb-2'>
                <Col xs={12} sm={3}><h5>Prompt</h5></Col>
                <div className="col prompt">
                    <p className='mb-1'>Write a product description</p>

                    <p><strong>Basic Description: </strong>{basicDescription}</p>
                    <p><strong>Product Name: </strong>{productName}</p>
                    <p><strong>Ideal Users: </strong>{idealUsers}</p>
                    <p><strong>Features: </strong>{features}</p>
                    <p><strong>Benefits: </strong>{benefits}</p>
                    <p><strong>Engine: </strong>{engine}</p>
                </div>
            </Row>

            <div className='row'>
                <Col xs={12} sm={3}><h5>Response</h5></Col>
                <div className="col"><p>{item.response}</p></div>
            </div>

            <div className="row">
                <Button
                    aria-label='Copy response to clipboard'
                    variant={isCopied ? 'success' : 'primary'}
                    onClick={copy}>
                    {isCopied ? 'Successfully Copied!' : 'Copy response to  clipboard'}
                </Button>

            </div>


        </div>
    )
}

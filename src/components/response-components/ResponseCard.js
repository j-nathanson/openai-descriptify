import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function ResponseCard({ item }) {

    const [isCopied, setIsCopied] = useState(false);
    const { productName, basicDescription, idealUsers, benefits, features, engine } = item.prompt;

    const copy = async () => {
        const text = item.response;
        await navigator.clipboard.writeText(text);
        setIsCopied(!isCopied);
    }

    // reset button
    if (isCopied) {
        setTimeout(() => {
            setIsCopied(!isCopied);
        }, 5000)
    }
    return (
        <div className='container responseCard pt-2 mb-2'>
            <Row className='mb-2'>
                <Col xs={12} sm={3}><h5>Prompt</h5></Col>
                <Col>
                    <p className='mb-1'>Write a product description</p>
                    <p><strong>Basic Description: </strong>{basicDescription}</p>
                    <p><strong>Product Name: </strong>{productName}</p>
                    <p><strong>Ideal Users: </strong>{idealUsers}</p>
                    <p><strong>Features: </strong>{features}</p>
                    <p><strong>Benefits: </strong>{benefits}</p>
                    <p><strong>Engine: </strong>{engine}</p>
                </Col>
            </Row>

            <Row>
                <Col xs={12} sm={3}><h5>Response</h5></Col>
                <div className='col'><p className='response-text'>{item.response}</p></div>
            </Row>

            <Row>
                <Button
                    aria-label='Copy response to clipboard'
                    variant={isCopied ? 'success' : 'primary'}
                    onClick={copy}>
                    {isCopied ? 'Successfully Copied!' : 'Copy response to  clipboard'}
                </Button>

            </Row>


        </div>
    )
}

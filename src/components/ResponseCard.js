import React, { useState } from 'react';
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
        <div className="container border">
            <div className="row">
                <div className="col-2">Prompt:</div>
                <div className="col prompt">
                    <p>Write a product description for an item: </p>
                    <p>Basic Description: {basicDescription}</p>
                    <p>Product Name: {productName}</p>
                    <p>Ideal Users: {idealUsers}</p>
                    <p>Features: {features}</p>
                    <p>Benefits: {benefits}</p>
                    <p>Engine: {engine}</p>
                </div>
            </div>

            <div className='row'>
                <div className="col-2">Response:</div>
                <div className="col"><p>{item.response}</p></div>
            </div>

            <div className="row">
                <Button
                    aria-label='Copy response to clipboard'
                    variant={isCopied ? 'success' : 'primary'}
                    onClick={copy}>
                    {isCopied ? 'Successfully Copied!' : ' Copy the response to your clipboard!'}
                </Button>

            </div>


        </div>
    )
}

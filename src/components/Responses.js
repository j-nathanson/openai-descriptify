import React from 'react'
import { useSelector } from 'react-redux'
import BenefitsPage from './form-pages/BenefitsPage';


export default function Responses() {

    const responses = useSelector(state => state.responses.totalResponses);

    const reversedResponses = [...responses].reverse();

    console.log(reversedResponses)
    return (
        <div>
            {reversedResponses.map(item => {
                const { productName, basicDescription, idealUsers, benefits, features,engine } = item.prompt;
                return (
                    <div className="container">
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

                                {/* ideal users, features, benefits, engine */}

                            </div>
                        </div>

                        <div className='row'>
                            <div className="col-2">Response:</div>
                            <div className="col"><p>{item.response}</p></div>
                        </div>

                    </div>

                )
            })}
        </div>
    )
}

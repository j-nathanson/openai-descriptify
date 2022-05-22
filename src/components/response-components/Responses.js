import React from 'react';
import { useSelector } from 'react-redux';
import ResponseCard from './ResponseCard';

export default function Responses() {

    const responses = useSelector(state => state.responses.totalResponses);

    const reversedResponses = [...responses].reverse();
    return (
        <div className='container'>
            {reversedResponses.map((item, index) => <ResponseCard key={index} item={item} />)}
        </div>
    )
}

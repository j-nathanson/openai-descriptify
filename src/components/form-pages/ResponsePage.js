import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ResponsePage({ percentage }) {
    return (
        <div>
            <ProgressBar animated now={percentage} />
        </div>
    )
}

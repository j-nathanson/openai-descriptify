import React from 'react'
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import PageDisplay from './form-pages/PageDisplay';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Form() {

    const index = useSelector((state) => state.pageInfo.index);
    const titles = useSelector((state) => state.pageInfo.titles);
    const percent = useSelector((state) => state.pageInfo.percent);
    const isLoading = useSelector(state => state.responses.isLoading);

    return (
        <div className='container'>
            <h3 className='mb-5'>{titles[index]}</h3>
            <PageDisplay />
            <ProgressBar className='mb-4' animated now={percent} />

            {/* move spinner out of form? */}
            {isLoading && (
                <Spinner
                    animation="border"
                    variant='primary'
                    role="status">
                    <span className="visually-hidden">Loading Spinner</span>
                </Spinner>
            )}
        </div>
    )
}

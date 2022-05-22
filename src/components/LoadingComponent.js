import Spinner from 'react-bootstrap/Spinner';
import React from 'react';
import { useSelector } from 'react-redux';
export default function LoadingComponent() {
    const isLoading = useSelector(state => state.responses.isLoading);
    return (
        <div className='container text-center mb-2'>
            {
                isLoading && (
                    <Spinner
                        animation='border'
                        variant='primary'
                        role='status'>
                        <span className='visually-hidden'>Loading Spinner</span>
                    </Spinner>
                )}
        </div>
    )
}

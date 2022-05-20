import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementIndex, incrementIndex, resetIndex } from '../redux/pageInfoSlice';
import { pushNewResponse, setIsLoading } from '../redux/responseSlice';
import { resetValues } from '../redux/formDataSlice';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import postData from '../api/generate';
import PageDisplay from './form-pages/PageDisplay';

export default function Form() {

    const index = useSelector((state) => state.pageInfo.index);
    const titles = useSelector((state) => state.pageInfo.titles);
    const formData = useSelector(state => state.formData);
    const isLoading = useSelector(state => state.responses.isLoading)

    const dispatch = useDispatch();

    async function handleSubmit(event) {
        event.preventDefault();

        dispatch(setIsLoading(true));

        try {
            const response = await postData(formData);
            dispatch(pushNewResponse({ response, prompt: formData }));
        } catch (error) {
            console.log(error)
        }
        dispatch(setIsLoading(false));
    }

    const resetForm = () => {
        dispatch(resetIndex());
        dispatch(resetValues());
    }

    const handleClick = (e) => {
        if (index <= 5) {
            dispatch(incrementIndex());
        }
        if (index >= 5) {
            handleSubmit(e);
        }
    }
    return (
        <div className='container'>
            <h2>{titles[index]}</h2>
            <PageDisplay />

            <Button
                aria-label="Previous Page"
                onClick={() => dispatch(decrementIndex())}
                disabled={index === 0}
            >Prev
            </Button>
            <Button
                aria-label="Next Page"
                onClick={handleClick}
            >{index === 5 ? 'Submit' : index === 6 ? 'Submit Again' : 'Next'}
            </Button>
            {
                index === 6 && (
                    <Button
                        aria-label="Next Page"
                        onClick={resetForm}>
                        Start Over
                    </Button>
                )
            }
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

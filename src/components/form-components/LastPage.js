import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { previousPage, resetIndexAndPercent } from '../../redux/pageInfoSlice';
import { resetForm } from '../../redux/formDataSlice';
import { pushNewResponse, setIsLoading } from '../../redux/responseSlice';
import { postData } from '../../api/generate';
import { ButtonGroup } from 'react-bootstrap';

export default function LastPage() {
    const formData = useSelector(state => state.formData);

    const handleSubmit = async () => {
        dispatch(setIsLoading(true));
        try {
            const response = await postData(formData);
            dispatch(pushNewResponse({ response, prompt: formData }));
        } catch (error) {
            console.log(error)
        }
        dispatch(setIsLoading(false));
    }

    const dispatch = useDispatch();
    const startOver = () => {
        dispatch(resetIndexAndPercent())
        dispatch(resetForm());
    }
    return (
        <div className='mb-2 container d-flex justify-content-center align-items-start form-group'>
            <ButtonGroup className='row w-100'>
                <Button
                    variant="outline-light"
                    className='col-4'
                    size='sm'
                    onClick={() => dispatch(previousPage())}
                >
                    Prev
                </Button>
                <Button
                    variant="outline-success"
                    className='col-4'
                    size='sm'
                    onClick={handleSubmit}
                >
                    Submit Again
                </Button>
                <Button
                    variant="outline-warning"
                    size='sm'
                    onClick={startOver}
                    className='col-4'
                >
                    Start Over
                </Button>
            </ButtonGroup >
        </div>

    )
}

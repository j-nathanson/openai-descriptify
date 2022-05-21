import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { previousPage, resetIndexAndPercent } from '../../redux/pageInfoSlice';
import { resetForm } from '../../redux/formDataSlice';
import { pushNewResponse, setIsLoading } from '../../redux/responseSlice';
import { postData } from '../../api/generate';

export default function ResponsePage() {
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
        <div className='mb-4'>
            <Button
                variant="outline-primary"
                size='sm'
                onClick={() => dispatch(previousPage())}
            >
                Prev
            </Button>
            <Button
                variant="outline-primary"
                size='sm'
                onClick={handleSubmit}
            >
                Submit Again
            </Button>


            <Button
                onClick={startOver}
                size='sm'
            >
                Start Over
            </Button>
        </div>
    )
}

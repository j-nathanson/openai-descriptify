import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setEngine } from '../../redux/formDataSlice';
import { decrementIndex, decrementPercent, incrementIndex, incrementPercent } from '../../redux/pageInfoSlice';
import { pushNewResponse, setIsLoading } from '../../redux/responseSlice';
import { postData } from '../../api/generate';

export default function EnginePage() {
    const dispatch = useDispatch();
    const engine = useSelector(state => state.formData.engine);
    const step = useSelector((state) => state.pageInfo.step);
    const formData = useSelector(state => state.formData);

    async function handleSubmit() {
       
        dispatch(incrementPercent(step))
        dispatch(setIsLoading(true));


        try {
            const response = await postData(formData);
            dispatch(pushNewResponse({ response, prompt: formData }));
            dispatch(incrementIndex());
        } catch (error) {
            console.log(error)
        }
        dispatch(setIsLoading(false));
    }

    const decrementValues = () => {
        dispatch(decrementIndex());
        dispatch(decrementPercent(step));
    }

    return (
        <InputGroup className='mb-5'>
            <Form.Select
                onChange={(e) => dispatch(setEngine(e.target.value))}
                aria-label="Select which of GTP's engine to use"
                value={engine}
            >
                <option value="text-davinci-002">"text-davinci-002" - Most Capable</option>
                <option value="text-curie-001">"text-curie-001" - Very Capable (default)</option>
                <option value="text-babbage-001">"text-babbage-001" - Less Capable</option>
                <option value="text-ada-001">"text-ada-001"- Least Capable</option>
            </Form.Select>
            <Button
                variant="outline-primary"
                size='sm'
                onClick={() => decrementValues()}
            >
                Prev</Button>
            <Button
                variant="outline-success"
                size='sm'
                onClick={handleSubmit}
            >
                Submit</Button>
        </InputGroup>

    )
}

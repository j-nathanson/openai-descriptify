import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setBasicDescription } from '../../redux/formDataSlice';
import { increment } from '../../redux/pageInfoSlice';

export default function BasicDescriptionPage() {
    const dispatch = useDispatch();
    const basicDescription = useSelector(state => state.formData.basicDescription);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(increment());
        }
    }
    return (
        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label visuallyHidden>What is your product?</Form.Label>
            <Form.Control
                type="text"
                placeholder="A cat necklace"
                value={basicDescription}
                onChange={(e) => dispatch(setBasicDescription(e.target.value))}
                onKeyDown={handleKeyDown}
            />
            <Form.Text className="text-muted">
                Give a basic description of what your product is.
            </Form.Text>
        </Form.Group>
    )
}

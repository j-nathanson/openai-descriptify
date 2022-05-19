import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setBasicDescription } from '../../redux/formDataSlice';

export default function BasicDescriptionPage() {
    const dispatch = useDispatch();
    const basicDescription = useSelector(state => state.formData.basicDescription);

    return (
        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Control
                type="text"
                placeholder="A cat necklace"
                value={basicDescription}
                onChange={(e) => dispatch(setBasicDescription(e.target.value))}
            />
            <Form.Text className="text-muted">
                Give a basic description of what your product is.
            </Form.Text>
        </Form.Group>
    )
}

import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setProductName } from '../../redux/formDataSlice';
import { increment } from '../../redux/pageInfoSlice';

export default function ProductNamePage() {
    const dispatch = useDispatch();
    const productName = useSelector(state => state.formData.productName);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(increment());
        }
    }

    return (
        <Form.Group className="mb-3" controlId="formProductName">
            <Form.Label visuallyHidden>What is your product's name?</Form.Label>
            <Form.Control
                type="text"
                placeholder="Sweet Dreams Kitty Pendant"
                value={productName}
                onChange={(e) => dispatch(setProductName(e.target.value))}
                onKeyDown={handleKeyDown}
            />
            <Form.Text className="text-muted">
                Give your product a unique name
            </Form.Text>
        </Form.Group>
    )
}

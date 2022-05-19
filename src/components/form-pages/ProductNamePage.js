import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setProductName } from '../../redux/formDataSlice';

export default function ProductNamePage() {
    const dispatch = useDispatch();
    const productName = useSelector(state => state.formData.productName);


    return (
        <Form.Group className="mb-3" controlId="formProductName">
            <Form.Control
                type="text"
                placeholder="Sweet Dreams Kitty Pendant"
                value={productName}
                onChange={(e) => dispatch(setProductName(e.target.value))}
            />
            <Form.Text className="text-muted">
                Give your product a unique name
            </Form.Text>
        </Form.Group>
    )
}

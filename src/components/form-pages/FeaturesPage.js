import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setFeatures } from '../../redux/formDataSlice';
import { increment } from '../../redux/pageInfoSlice';

export default function FeaturesPage() {
    const dispatch = useDispatch();
    const features = useSelector(state => state.formData.features);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(increment());
        }
    }

    return (
        <Form.Group className="mb-3" controlId="formIdealUsers">
            <Form.Control
                as="textarea"
                rows={3}
                placeholder="Made of sterling silver, 11-inch chain, gemstone encrusted pendant, handcrafted"
                value={features}
                onChange={(e) => dispatch(setFeatures(e.target.value))}
                onKeyDown={handleKeyDown}

            />
            <Form.Text className="text-muted">
                List some of the unique features and technical specifications of this product.
            </Form.Text>
        </Form.Group>
    )
}

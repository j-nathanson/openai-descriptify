import React from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setBenefits } from '../../redux/formDataSlice';

export default function BenefitsPage() {
    const dispatch = useDispatch();
    const benefits = useSelector(state => state.formData.benefits);

    return (
        <Form.Group className="mb-3" controlId="formIdealUsers">
            <Form.Control
                as="textarea"
                rows={3}
                placeholder="It will show everyone how much you love cats, will add a bit of fun to any outfit"
                value={benefits}
                onChange={(e) => dispatch(setBenefits(e.target.value))}
            />
            <Form.Text className="text-muted">
                List some of ways users will benefit from using your product
            </Form.Text>
        </Form.Group>
    )
}

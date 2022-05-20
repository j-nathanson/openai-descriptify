import React from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setIdealUsers } from '../../redux/formDataSlice';
import { increment } from '../../redux/pageInfoSlice';

export default function IdealUserPage() {
    const dispatch = useDispatch();
    const idealUsers = useSelector(state => state.formData.idealUsers);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(increment());
        }
    }
    return (
        <Form.Group className="mb-3" controlId="formIdealUsers">
            <Form.Label visuallyHidden>Who are your ideal users?</Form.Label>
            <Form.Control
                as="textarea"
                rows={3}
                placeholder="Cat lovers, children, fine crafts enthusiasts."
                value={idealUsers}
                onChange={(e) => dispatch(setIdealUsers(e.target.value))}
                onKeyDown={handleKeyDown}

            />
            <Form.Text className="text-muted">
                Who is your target audience for this product?
            </Form.Text>
        </Form.Group>
    )
}

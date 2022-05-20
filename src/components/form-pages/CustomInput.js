import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { increment, setProgressPercent } from '../../redux/pageInfoSlice';

export default function CustomInput({ percentage, rows, placeholder, controlId, storeKey, actionCB, instruction }) {

    const dispatch = useDispatch();
    const titles = useSelector((state) => state.pageInfo.titles);
    const index = useSelector((state) => state.pageInfo.index);
    const value = useSelector(state => state.formData[storeKey]);

    dispatch(setProgressPercent(percentage));

    // add index position as condition
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(increment());
        }
    }
    return (
        <Form.Group className="my-3" controlId={controlId}>
            <Form.Label visuallyHidden>{titles[index]}</Form.Label>
            <Form.Control
                type='text'
                rows={rows}
                placeholder={placeholder}
                value={value}
                onChange={(e) => dispatch(actionCB(e.target.value))}
                onKeyDown={handleKeyDown}
            />
            <Form.Text className="text-muted">
                {instruction}
            </Form.Text>
        </Form.Group>
    )
}

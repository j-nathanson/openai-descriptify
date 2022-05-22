import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, previousPage } from '../../redux/pageInfoSlice';

export default function CustomInput({ placeholder, controlId, storeKey, actionCB, instruction }) {

    const dispatch = useDispatch();

    const titles = useSelector((state) => state.pageInfo.titles);
    const index = useSelector((state) => state.pageInfo.index);
    const value = useSelector(state => state.formData[storeKey]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(nextPage());
        }
    }

    return (
        <>
            <Form.Group className="mb-2 form-group" controlId={controlId}>
                <InputGroup>
                    <Form.Control
                        type='text'
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => dispatch(actionCB(e.target.value))}
                        onKeyDown={handleKeyDown}
                        aria-label={titles[index]}
                    />
                    <Button
                        variant="outline-light"
                        size='sm'
                        onClick={() => dispatch(previousPage())}
                        disabled={index === 0}
                        aria-label="Previous Page"
                    >
                        Prev
                    </Button>
                    <Button
                        variant="outline-light"
                        size='sm'
                        onClick={() => dispatch(nextPage())}
                        aria-label="Next Page"
                    >
                        Next
                    </Button>
                </InputGroup>
                <Form.Text className="text-muted">
                    {instruction}
                </Form.Text>
            </Form.Group >
        </>
    )
}

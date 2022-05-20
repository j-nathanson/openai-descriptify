import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrementIndex, decrementPercent, incrementIndex, incrementPercent } from '../../redux/pageInfoSlice';

export default function CustomInput({ percentage, rows, placeholder, controlId, storeKey, actionCB, instruction }) {

    const dispatch = useDispatch();
    const titles = useSelector((state) => state.pageInfo.titles);
    const index = useSelector((state) => state.pageInfo.index);
    const value = useSelector(state => state.formData[storeKey]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(incrementIndex());
        }
    }

    const decrementValues = () => {
        dispatch(decrementIndex())
        dispatch(decrementPercent( percentage))
    }
    const incrementValues = () => {
        dispatch(incrementIndex())
        dispatch(incrementPercent( percentage))
    }
    return (
        <div>
            {/* <ProgressBar animated now={percentage} /> */}
            <Form.Group className="my-3" controlId={controlId}>
                <InputGroup>
                    <Form.Control
                        type='text'
                        rows={rows}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => dispatch(actionCB(e.target.value))}
                        onKeyDown={handleKeyDown}
                        aria-label={titles[index]}
                    />
                    <Button
                        variant="outline-primary"
                        size='sm'
                        onClick={() => decrementValues()}
                        disabled={index === 0}
                    >Prev
                    </Button>
                    <Button
                        variant="outline-primary"
                        size='sm'
                        onClick={() => incrementValues()}
                    >Next</Button>
                </InputGroup>
                <Form.Text className="text-muted">
                    {instruction}
                </Form.Text>
            </Form.Group >
        </div>
    )
}

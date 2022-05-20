import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch, useSelector } from 'react-redux';
import { setEngine } from '../../redux/formDataSlice';
import { setProgressPercent } from '../../redux/pageInfoSlice';

export default function EnginePage({ percentage }) {
    const dispatch = useDispatch();
    const engine = useSelector(state => state.formData.engine);
    const [title, setTitle] = useState('text-curie-001');

    dispatch(setProgressPercent(percentage));

    const handleSelect = (value) => {
        setTitle(value)
        dispatch(setEngine(value))
    }

    return (
        <Form.Select
            size="lg"
            onChange={(e) => dispatch(setEngine(e.target.value))}
            aria-label="Select which of GTP's engine to use">
            <option value="text-curie-001">text-curie-001</option>
            <option value="text-davinci-002">text-davinci-002</option>
            <option value="text-babbage-001">text-babbage-001</option>
            <option value="text-ada-001">text-ada-001</option>
        </Form.Select>
    )
}

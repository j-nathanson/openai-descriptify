import React, { useState } from 'react';
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
        <DropdownButton
            id="dropdown-engine-button"
            title={title}
            onSelect={handleSelect}
            defaultValue={engine}
            aria-label="Select GPT-3 Engine"
        >
            <Dropdown.Item eventKey="text-curie-001">text-curie-001</Dropdown.Item>
            <Dropdown.Item eventKey="text-davinci-002">text-davinci-002</Dropdown.Item>
            <Dropdown.Item eventKey="text-babbage-001">text-babbage-001</Dropdown.Item>
            <Dropdown.Item eventKey="text-ada-001">text-ada-001</Dropdown.Item>
        </DropdownButton>
    )
}

import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch, useSelector } from 'react-redux';
import { setEngine } from '../../redux/formDataSlice';

export default function EnginePage() {
    const dispatch = useDispatch();
    const engine = useSelector(state => state.formData.engine);

    const handleSelect = (e) => {
        dispatch(setEngine(e))
    }

    return (
        <DropdownButton id="dropdown-engine-button" title="Select Engine" onSelect={handleSelect} defaultValue={engine}>
            <Dropdown.Item eventKey="text-curie-001">text-curie-001</Dropdown.Item>
            <Dropdown.Item eventKey="text-davinci-002">text-davinci-002</Dropdown.Item>
            <Dropdown.Item eventKey="text-babbage-001">text-babbage-001</Dropdown.Item>
            <Dropdown.Item eventKey="text-ada-001">text-ada-001</Dropdown.Item>
        </DropdownButton>
    )
}

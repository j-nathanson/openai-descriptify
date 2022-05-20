import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setEngine } from '../../redux/formDataSlice';
import { setProgressPercent } from '../../redux/pageInfoSlice';

export default function EnginePage({ percentage }) {
    const dispatch = useDispatch();
    const engine = useSelector(state => state.formData.engine);

    dispatch(setProgressPercent(percentage));

    return (
        <Form.Select
            size="lg"
            value={engine}
            onChange={(e) => dispatch(setEngine(e.target.value))}
            aria-label="Select which of GTP's engine to use">
            <option value="text-curie-001">text-curie-001</option>
            <option value="text-davinci-002">text-davinci-002</option>
            <option value="text-babbage-001">text-babbage-001</option>
            <option value="text-ada-001">text-ada-001</option>
        </Form.Select>
    )
}

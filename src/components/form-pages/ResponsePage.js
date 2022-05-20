import React from 'react'
import { useDispatch } from 'react-redux';
import { setProgressPercent } from '../../redux/pageInfoSlice';

export default function ResponsePage({ percentage }) {
    const dispatch = useDispatch()
    dispatch(setProgressPercent(percentage));
    return (
        <div>ResponsePage</div>
    )
}

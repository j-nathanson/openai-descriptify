import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Form() {

    const index = useSelector((state) => state.pageInfo.index);
    const titles = useSelector((state) => state.pageInfo.titles);

    const dispatch = useDispatch();


    return (
        <div>Formyyy</div>
    )
}

import React from 'react'
import { useSelector } from 'react-redux';
import PageDisplay from './PageDisplay';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Form() {

    const index = useSelector((state) => state.pageInfo.index);
    const titles = useSelector((state) => state.pageInfo.titles);
    const percent = useSelector((state) => state.pageInfo.percent);

    return (
        <main className='container'>
            <Row>
                <h3 className='mb-2'>{titles[index]}</h3>
            </Row>
            <Row>
                <PageDisplay />
            </Row>
            <Row>
                <Col>
                    <ProgressBar className='mb-2' animated now={percent} />
                </Col>
            </Row>
        </main>
    )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/pageInfoSlice';
import BasicDescriptionPage from './form-pages/BasicDescriptionPage';
import BenefitsPage from './form-pages/BenefitsPage';
import EnginePage from './form-pages/EnginePage';
import FeaturesPage from './form-pages/FeaturesPage';
import IdealUsersPage from './form-pages/IdealUsersPage';
import ProductNamePage from './form-pages/ProductNamePage';
import Button from 'react-bootstrap/Button';
import ResponsePage from './form-pages/ResponsePage';
import ProgressBar from 'react-bootstrap/ProgressBar';
import postData from '../api/generate';
import { pushNewResponse } from '../redux/responseSlice';

export default function Form() {

    const index = useSelector((state) => state.pageInfo.index);
    const titles = useSelector((state) => state.pageInfo.titles);
    const formData = useSelector(state => state.formData);
    let progressPercent = 0;

    const dispatch = useDispatch();

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await postData(formData);

        dispatch(pushNewResponse({
            response,
            prompt: formData
        }))
    }

    const PageDisplay = () => {
        switch (index) {
            case 0:
                progressPercent = 10;
                return <BasicDescriptionPage />;
            case 1:
                progressPercent = 20;
                return <ProductNamePage />;
            case 2:
                progressPercent = 40;
                return <IdealUsersPage />;
            case 3:
                progressPercent = 60;
                return <FeaturesPage />;
            case 4:
                progressPercent = 80;
                return <BenefitsPage />;
            case 5:
                progressPercent = 95;
                return <EnginePage />;
            case 6:
                progressPercent = 100;
                return <ResponsePage />;
            default:
                break;
        }
    };

    const handleClick = (e) => {
        if (index <= 5) {
            dispatch(increment());
        }
        if (index >= 5) {
            handleSubmit(e);
        }
    }
    return (
        <div>
            <h2>{titles[index]}</h2>
            {PageDisplay()}
            <ProgressBar animated now={progressPercent} />
            <Button
                aria-label="Previous Page"
                onClick={() => dispatch(decrement())}
                disabled={index === 0}
            >Prev
            </Button>
            <Button
                aria-label="Next Page"
                onClick={handleClick}
            >{index === 5 ? 'Submit' : index === 6 ? 'Submit Again' : 'Next'}
            </Button>
            {
                index === 6 && (
                    <Button
                        aria-label="Next Page"
                        onClick={() => dispatch(reset())}>
                        Start Over
                    </Button>
                )
            }
        </div>
    )
}

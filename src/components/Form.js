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
import postData from '../api/generate';
import { pushNewResponse } from '../redux/responseSlice';

export default function Form() {

    const index = useSelector((state) => state.pageInfo.index);
    const titles = useSelector((state) => state.pageInfo.titles);
    const formData = useSelector(state => state.formData);

    const dispatch = useDispatch();

    async function handleSubmit(event) {
        event.preventDefault();
        const response= await postData(formData);

        dispatch(pushNewResponse({
            response,
            prompt:formData
        }))
    }

    const PageDisplay = () => {
        switch (index) {
            case 0:
                return <BasicDescriptionPage />;
            case 1:
                return <ProductNamePage />;
            case 2:
                return <IdealUsersPage />;
            case 3:
                return <FeaturesPage />;
            case 4:
                return <BenefitsPage />;
            case 5:
                return <EnginePage />;
            case 6:
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

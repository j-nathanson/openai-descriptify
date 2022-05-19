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

export default function Form() {

    const index = useSelector((state) => state.pageInfo.index);
    const titles = useSelector((state) => state.pageInfo.titles);

    const dispatch = useDispatch();


    const PageDisplay = () => {
        switch (index) {
            case 0:
                return <BasicDescriptionPage />;
            case 1:
                return <ProductNamePage />;
            case 2:
                return <IdealUsersPage />;
            case 3:
                return <BenefitsPage />;
            case 4:
                return <FeaturesPage />;
            case 5:
                return <EnginePage />;
            case 6:
                return <ResponsePage />;
            default:
                break;
        }
    };

    const handleClick = () => {
        if (index <= 5) {
            dispatch(increment());
        }
        if (index >= 5) {
            alert("submitted data");
        }
    }
    return (
        <div>
            <h1>{titles[index]}</h1>
            {PageDisplay()}
            <Button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                disabled={index === 0}
            >Prev
            </Button>
            <Button
                aria-label="Increment value"
                onClick={handleClick}
            >{index === 5 ? 'Submit' : index === 6 ? 'Submit Again' : 'Next'}
            </Button>
            {
                index === 6 && (
                    <Button
                        aria-label="Increment value"
                        onClick={() => dispatch(reset())}>
                        Start Over
                    </Button>
                )
            }
        </div>
    )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, resetIndex } from '../redux/pageInfoSlice';
import { pushNewResponse, setIsLoading } from '../redux/responseSlice';
import { setBasicDescription, setBenefits, setFeatures, setIdealUsers, setProductName, resetValues } from '../redux/formDataSlice';
import EnginePage from './form-pages/EnginePage';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import ResponsePage from './form-pages/ResponsePage';
import ProgressBar from 'react-bootstrap/ProgressBar';
import postData from '../api/generate';
import CustomInput from './form-pages/CustomInput';

export default function Form() {

    const index = useSelector((state) => state.pageInfo.index);
    const progressPercent = useSelector(state => state.pageInfo.progressPercent);
    const titles = useSelector((state) => state.pageInfo.titles);
    const formData = useSelector(state => state.formData);
    const isLoading = useSelector(state => state.responses.isLoading)

    const dispatch = useDispatch();

    async function handleSubmit(event) {
        event.preventDefault();

        dispatch(setIsLoading(true));
        const response = await postData(formData);

        dispatch(setIsLoading(false));

        dispatch(pushNewResponse({ response, prompt: formData }));
    }

    const resetForm = () => {
        dispatch(resetIndex());
        dispatch(resetValues());
    }

    const PageDisplay = () => {
        switch (index) {
            case 0:
                return (
                    <CustomInput
                        percentage={10}
                        hiddenLabel={titles[index]}
                        rows={1}
                        placeholder='A cat necklace'
                        controlId='formBasicDescription'
                        storeKey='basicDescription'
                        actionCB={setBasicDescription}
                        instruction='Give a basic description of what your product is.'
                    />)
            case 1:
                return (
                    <CustomInput
                        percentage={30}
                        hiddenLabel={titles[index]}
                        rows={1}
                        placeholder='Sweet Dreams Kitty Pendant'
                        controlId='formProductName'
                        storeKey='productName'
                        actionCB={setProductName}
                        instruction='Give your product a unique name'
                    />
                )
            case 2:
                return (
                    <CustomInput
                        percentage={40}
                        hiddenLabel={titles[index]}
                        rows={2}
                        placeholder='Cat lovers, children, fine crafts enthusiasts.'
                        controlId='formIdealUsers'
                        storeKey='idealUsers'
                        actionCB={setIdealUsers}
                        instruction='Who is your target audience for this product?'
                    />
                )
            case 3:
                // return <FeaturesPage />;
                return (
                    <CustomInput
                        percentage={60}
                        hiddenLabel={titles[index]}
                        rows={2}
                        placeholder='Sterling silver, 11-inch chain, handcrafted'
                        controlId='formFeatures'
                        storeKey='features'
                        actionCB={setFeatures}
                        instruction='List some of the unique features and technical specifications of this product.'
                    />
                )
            case 4:
                return (
                    <CustomInput
                        percentage={75}
                        hiddenLabel={titles[index]}
                        rows={2}
                        placeholder='fashionable, quirky, shows you are a cat person'
                        controlId='formBenefits'
                        storeKey='benefits'
                        actionCB={setBenefits}
                        instruction='List some of ways users will benefit from using your product.'
                    />
                )
            case 5:
                return <EnginePage percentage={95} />;
            case 6:
                return <ResponsePage percentage={100} />;
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
        <div className='container'>
            <h2>{titles[index]}</h2>
            <ProgressBar animated now={progressPercent} />
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
                        onClick={resetForm}>
                        Start Over
                    </Button>
                )
            }
            {isLoading && (
                <Spinner
                    animation="border"
                    variant='primary'
                    role="status">
                    <span className="visually-hidden">Loading Spinner</span>
                </Spinner>
            )}
        </div>
    )
}

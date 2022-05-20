import React from 'react'
import { setBasicDescription, setBenefits, setFeatures, setIdealUsers, setProductName } from '../../redux/formDataSlice'
import CustomInput from './CustomInput'
import EnginePage from './EnginePage'
import ResponsePage from './ResponsePage'

export default function PageDisplay({ index }) {
    switch (index) {
        case 0:
            return (
                <CustomInput
                    percentage={10}
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
                    rows={2}
                    placeholder='Cat lovers, children, fine crafts enthusiasts.'
                    controlId='formIdealUsers'
                    storeKey='idealUsers'
                    actionCB={setIdealUsers}
                    instruction='Who is your target audience for this product?'
                />
            )
        case 3:
            return (
                <CustomInput
                    percentage={60}
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


import React from 'react'
import { useSelector } from 'react-redux'
import { setBasicDescription, setBenefits, setFeatures, setIdealUsers, setProductName } from '../../redux/formDataSlice'
import CustomInput from './CustomInput'
import EnginePage from './EnginePage'
import LastPage from './LastPage'

export default function PageDisplay() {
    const index = useSelector((state) => state.pageInfo.index);
    
    switch (index) {
        case 0:
            return (
                <CustomInput
                    placeholder='A cornball maker'
                    controlId='formBasicDescription'
                    storeKey='basicDescription'
                    actionCB={setBasicDescription}
                    instruction='Give a basic description of what your product is.'
                />)
        case 1:
            return (
                <CustomInput
                    placeholder='The CornBaller'
                    controlId='formProductName'
                    storeKey='productName'
                    actionCB={setProductName}
                    instruction='Give your product a unique name'
                />
            )
        case 2:
            return (
                <CustomInput
                    placeholder='families, foodies, corn enthusiasts'
                    controlId='formIdealUsers'
                    storeKey='idealUsers'
                    actionCB={setIdealUsers}
                    instruction='Who is your target audience for this product?'
                />
            )
        case 3:
            return (
                <CustomInput
                    placeholder='4-inch fry basket, 3,5 liter fryer'
                    controlId='formFeatures'
                    storeKey='features'
                    actionCB={setFeatures}
                    instruction='List some of the unique features and technical specifications of this product.'
                />
            )
        case 4:
            return (
                <CustomInput
                    placeholder='Totally safe to use, makes a delicious and healthy snack'
                    controlId='formBenefits'
                    storeKey='benefits'
                    actionCB={setBenefits}
                    instruction='List some of ways users will benefit from using your product.'
                />
            )
        case 5:
            return (<EnginePage />);
        case 6:
            return (<LastPage />);
        default:
            break;
    }
};


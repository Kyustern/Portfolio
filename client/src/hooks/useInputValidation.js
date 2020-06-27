import { useState } from 'react';

const useInputValidation = (verifierFunc, initialValue) => {

    const [currentValue, setCurrentValue] = useState(initialValue)
    const [isValid, setIsValid] = useState(false)

    const binding = {
        value: currentValue,
        onChange: e => { verifierFunc(e.target.value, setCurrentValue, setIsValid) }
    }

    return [
        isValid,
        binding,
        setCurrentValue,
        setIsValid
    ]
}

export default useInputValidation

    // const verifierFunc = condition.typeof == 'function' ? 
    //     condition 
    //     : 
    //     (input) => {
    //         setCurrentValue(input)
    //         console.log('lelelelel');

    //         if (condition.test(input)) {
    //             console.log('condition verified');

    //             reverseRegex ? setIsValid(false) : setIsValid(true)
    //         } else {
    //             reverseRegex ? setIsValid(true) : setIsValid(true)
    //         }
    //     }

// 05 61 28 71 34
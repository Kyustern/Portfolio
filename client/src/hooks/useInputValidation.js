import { useState, useEffect } from 'react';

const useInputValidation = (condition, initialValue, reverseRegex) => {

    const [currentValue, setCurrentValue] = useState(initialValue)
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        
    }, [])

    // const isRegex = () => condition.typeof == 'function' ? false : true

    const verifierFunc = condition.typeof == 'function' ? 
        condition 
        : 
        (input) => {
            setCurrentValue(input)
            if (condition.test(input)) {
                console.log('condition verified');
                
                reverseRegex ? setIsValid(false) : setIsValid(true)
            } else {
                reverseRegex ? setIsValid(true) : setIsValid(true)
            }
        }

    const binding = {
        currentValue,
        onChange: e => {verifierFunc(e.target.value, setCurrentValue, setIsValid)}
    }

    return [
        isValid,
        binding
    ]
}

export default useInputValidation



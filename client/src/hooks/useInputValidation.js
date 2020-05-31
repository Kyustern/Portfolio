import { useState } from 'react';

const useInputValidation = (validationCallback, initialValue, regex, reverseRegex) => {

    const [currentValue, setCurrentValue] = useState(initialValue)
    const [isValid, setIsValid] = useState(false)

    const regexValidation = (input) => {
        if (regex.test(input)) {
            
        }
    }

    const binding = {
        currentValue,
        onChange: e => {
            if (regex) {
                regexValidation(e.target.value)
            } else {
                validationCallback(e.target.value, setCurrentValue, setIsValid)
            }
        }
    }

    return [
        isValid,
        binding
    ]
}

export default useInputValidation



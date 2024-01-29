import React from "react";
import '../stylesheets/LabelOneField.css'

function LabelTwoFields( {labelText, inputId, inputType, inputPlaceholder,
    labelText2, inputId2, inputType2, inputPlaceholder2,
    readOnly, required, required2} ){

    const handleKeyDown = (event) => {
        // Permite solo caracteres numéricos (0-9)
        if (!/[0-9]/.test(event.key)
            && event.key !== 'Backspace') {
            event.preventDefault();
        }
    };

    const shouldPreventKeyDown = (type1, type2) => {
        return (type1 === 'number' && type2 === 'text') || (type1 === 'text' && type2 === 'number');
    };

    return(
        <div className="two-field-container">
            <div className="one-field-container">
                <label htmlFor={inputId}>{labelText}</label>
                <input id={inputId} type={inputType} placeholder={inputPlaceholder} required={required}
                readOnly={readOnly} min={inputType === 'number' ? '0' : undefined}
                onKeyDown={!shouldPreventKeyDown(inputType, inputType2) ? handleKeyDown : undefined}/>
            </div>
            <div className="one-field-container">
                <label htmlFor={inputId2}>{labelText2}</label>
                <input id={inputId2} type={inputType2} placeholder={inputPlaceholder2}
                readOnly={readOnly} required={required2}
                min={inputType2 === 'number' ? '0' : undefined}
                onKeyDown={!shouldPreventKeyDown(inputType2, inputType) ? handleKeyDown : undefined}/>
            </div>
        </div>
    );
}

export default LabelTwoFields;

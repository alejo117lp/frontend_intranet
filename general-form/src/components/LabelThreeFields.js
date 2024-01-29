import React from "react";
import '../stylesheets/LabelOneField.css'

function LabelThreeFields( {labelText, inputId, inputType, inputPlaceholder,
    labelText2, inputId2, inputType2, inputPlaceholder2,
    labelText3, inputId3, inputType3, inputPlaceholder3, readOnly, 
    required, required2, required3} ){

        const handleKeyDown = (event) => {
            // Permite solo caracteres numéricos (0-9)
            if (inputType === 'number' && !/[0-9]/.test(event.key)
            && event.key !== 'Backspace') {
                event.preventDefault();
            }
        };

    return(
        <div className="three-field-container">
            <div className="one-field-container">
                <label htmlFor={inputId}>{labelText}</label>
                <input id={inputId} type={inputType} placeholder={inputPlaceholder}
                readOnly={readOnly} required={required}
                min={inputType === 'number' ? '0' : undefined}
                onKeyDown={handleKeyDown}/>
            </div>
            <div className="one-field-container">
                <label htmlFor={inputId2}>{labelText2}</label>
                <input id={inputId2} type={inputType2} placeholder={inputPlaceholder2}
                readOnly={readOnly} required={required2}
                min={inputType === 'number' ? '0' : undefined}
                onKeyDown={handleKeyDown}/>
            </div>
            <div className="one-field-container">
                <label htmlFor={inputId3}>{labelText3}</label>
                <input id={inputId3} type={inputType3} placeholder={inputPlaceholder3}
                readOnly={readOnly} required={required3}
                min={inputType === 'number' ? '0' : undefined}
                onKeyDown={handleKeyDown}/>
            </div>
        </div>
    );
}

export default LabelThreeFields;
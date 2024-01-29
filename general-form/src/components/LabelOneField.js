import React from "react";
import '../stylesheets/LabelOneField.css'


function LabelOneField( {readOnly, labelText, inputId, inputType, inputPlaceholder, required } ){
    
    const handleKeyDown = (event) => {
        // Permite solo caracteres numéricos (0-9)
        if (inputType === 'number' && !/[0-9]/.test(event.key) 
            && event.key !== 'Backspace') {
            event.preventDefault();
        }
    };

    return(
        <div className="one-field-container">
            <label htmlFor={inputId}>{labelText}</label>
            <input readOnly={readOnly} id={inputId} type={inputType} 
                placeholder={inputPlaceholder}
                required={required}
                min={inputType === 'number' ? '0' : undefined}
                onKeyDown={handleKeyDown}/>
        </div>
    );
}

export default LabelOneField;
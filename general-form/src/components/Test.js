import React from "react";
import '../stylesheets/LabelOneField.css'
import '../stylesheets/test.css'


function TestCode( {labelText0,labelText, inputId, inputType, inputPlaceholder,
    labelText2, inputId2, inputType2, inputPlaceholder2, 
    labelText3, inputId3, inputType3, inputPlaceholder3, readOnly} ){
    return(
        <div className="two-field-container">
            <div className="two-field-container">
                <div className="label-checkbox-double">
                    <label>{labelText0}</label>
                </div>
                <div className="checkbox-double">
                    <label htmlFor={inputId}>{labelText}</label>
                    <input id={inputId} type={inputType} placeholder={inputPlaceholder}
                    readOnly={readOnly}/>

                    <label htmlFor={inputId2}>{labelText2}</label>
                    <input id={inputId2} type={inputType2} placeholder={inputPlaceholder2}
                    readOnly={readOnly}/>
                </div>
            </div>
            <div className="one-field-container">
                <label htmlFor={inputId3}>{labelText3}</label>
                <input id={inputId3} type={inputType3} placeholder={inputPlaceholder3}/>
            </div>
        </div>

    );
}

export default TestCode;
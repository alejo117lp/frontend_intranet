import React, { useState } from 'react';
import '../stylesheets/LabelOneSelect.css';



const LabelOneSelect = ({ initialOptions, labelText, selectText, required, selectId, onChange }) => {

  //useState para verificar la opción elegida por el usuario
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
      if (onChange) {
          onChange(e.target.value);
      }
    };
  
    return (
      <div className='select-label-container'>
        <div>
            <label>{labelText}</label>
        </div>
        <div className='select-container'>
          <select id={selectId} value={selectedOption} onChange={handleSelectChange} required={required}>
              <option value="" disabled>{selectText}</option>
              {initialOptions.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
              ))}
            </select>
        </div>
      </div>
    );
  };
  
  export default LabelOneSelect;
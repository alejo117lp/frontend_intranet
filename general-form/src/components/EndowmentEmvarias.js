import React, {useState} from "react";
import LabelOneSelect from "./LabelOneSelect";


function EndowmentEmvariasForm( {nameBox} ){
  //Tallas Pantalones Hombre/Mujer
  const pantManSize = ['28', '30', '32', '34', '36', '38','40', '42', '44', '46', '48'];
  const pantWomanSize = ['8', '10', '12', '14', '16', '18','20', '22', '24'];
  //Tallas Camisas Hombre/Mujer
  const shirtManSize = ['30', '32', '36', '38','40', '42', '44', '46', '52'];
  const shirtWomanSize = ['8', '10', '12', '14', '16', '18','20', '22', '24'];
  //Hook useState para verificar la elección en estilo y talla de camisa
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedShirtSize, setSelectedShirtSize] = useState('');

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
  };

  const convertShirtSize = (size) => {
    const sizeMap = {
      '8': 'S',
      '10': 'M',
      '12': 'L',
      '14': 'XL',
      '16': '2XL',
      '18': '3XL',
      '20': '4XL',
      '22': '5XL',
      '24': '6XL',
      '30': '3XS',
      '32': '2XS',
      '36': 'S',
      '38': 'M',
      '40': 'L',
      '42': 'XL',
      '44': '2XL',
      '46': '3XL',
      '52': '6XL',
    }
    return sizeMap[size] || '';
    
  }
  

  const handleShirtSizeChange = (size) => {
    const convertedSize = convertShirtSize(size);
    setSelectedShirtSize(convertedSize);
    
  };

  console.log(selectedShirtSize);

  return(
    <div className='form-box'>
      <h3>{nameBox}</h3>  
      <div>
        <LabelOneSelect 
          labelText={'Estilo vestimenta:'}
          selectText={'Elija su estilo de dotación'}
          initialOptions={['Hombre', 'Mujer']}
          onChange={handleStyleChange}
        />

        {selectedStyle === 'Hombre' ? (
          <div> 
            <LabelOneSelect 
              labelText={"Talla Pantalón: "}
              selectText={"Seleccione su talla de Pantalón"}
              initialOptions= {pantManSize}
            />

            <LabelOneSelect 
              labelText={"Talla Camisa: "}
              selectText={"Seleccione su talla de Camisa"}
              initialOptions= {shirtManSize}
              onChange={handleShirtSizeChange}
            />
          </div>
          
        ): (
          <div>
            <LabelOneSelect 
              labelText={"Talla Pantalón: "}
              selectText={"Seleccione su talla de Pantalón"}
              initialOptions= {pantWomanSize}
            />
            <LabelOneSelect 
              labelText={"Talla Camisa: "}
              selectText={"Seleccione su talla de Camisa"}
              initialOptions= {shirtWomanSize}
              onChange={handleShirtSizeChange}
            />
          </div>
        )}


      </div>

    </div>
  );
}

export default EndowmentEmvariasForm;
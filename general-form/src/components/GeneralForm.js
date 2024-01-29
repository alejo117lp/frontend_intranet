import React, { useState } from 'react';
import FormBox from './FormBox';
import PersonalInformation from './PersonalInfo';
import HomeInformation from './HomeInfo';
import SocialSecurity from './SocialSecurity';
import ExclusiveInitInfo from './ExclusiveInitInfo';
import EndowmentInformation from './Endowment';
import EndowmentEmvariasForm from './EndowmentEmvarias';

function GeneralForm( {projectEmployee} ){
  const manSize = ['28', '30', '32', '34', '36', '38'];
  const womanSize = ['6', '8', '10', '12', '14', '16', '18'];

  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (gender) => {
    //console.log("Género seleccionado:", gender); // Debería mostrar 'Masculino' o 'Femenino'
    setSelectedGender(gender);
  };

  const sizeOptions = selectedGender === 'Masculino' ? manSize : womanSize;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
        //console.log('Formulario válido. Procesando envío...');
        // Aquí puedes procesar los datos del formulario
    } else {
        //console.log('Formulario inválido. Por favor, completa todos los campos requeridos.');
    }
  };


  return(
    <div>
      <form onSubmit={handleSubmit}>
          <div className='principal-container'>
            <h1>Datos Generales</h1>
            <ExclusiveInitInfo 
              nameBox={"Información Administrativa"}
              project={projectEmployee}
            />
            <br/>
            <PersonalInformation 
              nameBox={"Información Personal"}
              onGenderChange={handleGenderChange}
            />
            <br />
            <HomeInformation 
              nameBox={"Información Domicilio"}
            />
            <br/>
            <SocialSecurity 
              nameBox={"Información  Seguridad Social"}
            />
            <br/>
           
           {projectEmployee === 'ASEO' ? (
              <EndowmentEmvariasForm 
              nameBox={'Dotación Emvarias'}
            />
           ): (
            <EndowmentInformation
            nameBox={"Información Dotación"}
            gender={selectedGender}
            sizeOptions={sizeOptions}
            />
           )}
            
            <br/>
            <button className='principal-button' type="submit">Enviar</button>
          </div>
          <br/>
        </form>
        <br/>
    </div>
  );
}

export default GeneralForm;
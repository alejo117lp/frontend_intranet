import React, { useState } from 'react';
import DateTime from "react-datetime";
import LabelOneField from "./LabelOneField";
import LabelTwoFields from "./LabelTwoFields";
import LabelThreeFields from "./LabelThreeFields";
import "react-datetime/css/react-datetime.css";
import LabelOneSelect from "./LabelOneSelect";
import UploadPicture from './UploadPicture';

function PersonalInformation( {nameBox, onGenderChange} ){

    const [selectedGender, setSelectedGender] = useState('');
    
    const handleGenderChange = (value) => {
        setSelectedGender(value);
        onGenderChange(value); // Asegúrate de que esta línea esté llamando correctamente a la función pasada desde donde se esté usando el componente
    };

    return(
        <div className="form-box">
            <h3>{nameBox}</h3>

            <UploadPicture 
                labelText={'Foto tipo documento:'}
            />

            <div className="box-date">
                <div className="one-field-container">
                <label>Fecha de nacimiento: </label>
                    <DateTime className="date-time-props"
                    id="birth_date"
                    inputProps={{ placeholder: "aaaa/mm/dd" }}
                    dateFormat="YYYY/MM/DD"
                    timeFormat={false}
                    />
                </div>
                <div className="one-field-container">
                <label>Lugar de Nacimiento:</label>
                    <input id="birth_place" type="text" placeholder="Lugar de nacimiento"
                    required={true}></input>
                </div>  
            </div>
            
            <LabelTwoFields
                labelText="Documento de Identidad:"
                inputPlaceholder="Número de documento"
                inputId={"id_document"}
                inputType={"text"}
                required={true}

                labelText2={"De: "}
                inputPlaceholder2={"Lugar de expedición"}
                inputId2={"city-id-document"}
                inputType2={"text"}
                required2={true}
            />

            <LabelOneSelect
                labelText={"Género:"} 
                selectText={"Seleccione su género"}
                initialOptions={['Masculino', 'Femenino']}
                required={true}
                onChange={handleGenderChange}
                selectId={"gender-select"}
            />

            {selectedGender === 'Masculino' && (
                <div className="male-info">
                    <LabelThreeFields 
                        labelText="Libreta Militar:"
                        inputPlaceholder="Número Libreta Militar"
                        inputId={"military_document"}
                        inputType={"number"}

                        labelText2={"Clase:"}
                        inputPlaceholder2={"Primera/Segunda"}
                        inputId2={"military_document_class"}
                        inputType2={"text"}

                        labelText3={"Distrito:"}
                        inputPlaceholder3={" ## "}
                        inputId3={"military_document_district"}
                        inputType3={"number"}
                    />
                </div>
            )}

            <div className="two-field-container">
                <LabelOneField
                    labelText={"No. Cuenta Bancaria:"}
                    inputPlaceholder={"No. Cuenta"}
                    inputId={"bank_account_number"}
                    inputType={"number"}
                    required={true}
                />

                <LabelOneSelect 
                    labelText={"Entidad Bancaria:"} 
                    selectText={"Seleccione Entidad Bancaria"}
                    initialOptions={['BANCAMIA S.A.', 'BANCO AGRARIO', 'BANCO AV VILLAS', 'BANCO CAJA SOCIAL BCSC SA', 
                    'BANCO COOPERATIVO COOPCENTRAL', 'BANCO CREDIFINANCIERA SA.', 'BANCO DAVIVIENDA SA', 'BANCO DE BOGOTA', 
                    'BANCO DE OCCIDENTE', 'BANCO FALABELLA S.A.', 'BANCO FINANDINA S.A.', 'BANCO GNB SUDAMERIS', 
                    'BANCO J.P. MORGAN COLOMBIA S.A', 'BANCO MUNDO MUJER', 'BANCO PICHINCHA', 'BANCO POPULAR', 
                    'BANCO SANTANDER DE NEGOCIOS CO', 'BANCO SERFINANZA S.A', 'BANCO W S.A.', 'BANCOLDEX S.A.', 
                    'BANCOLOMBIA', 'BANCOOMEVA', 'BBVA COLOMBIA', 'CITIBANK', 'COLTEFINANCIERA S.A', 'CONFIAR', 
                    'COOFINEP COOPERATIVA FINANCIER', 'COOPERATIVA FINANCIERA DE ANTIOQUIA', 
                    'COOTRAFA COOPERATIVA FINANCIERA', 'DAVIPLATA', 'FINANCIERA JURISCOOP S.A. COMP', 
                    'GIROS Y FINANZAS CF', 'IRIS', 'ITAU', 'LULO BANK S.A.', 'MIBANCO S.A.', 'MOVII', 'NEQUI', 
                    'RAPPIPAY', 'SCOTIABANK COLPATRIA S.A', 'BANKIA', 'COPRUDEA', 'COOPRUDEA', 'Cooprudea']}
                    required={true}
                />
            </div>
           

            <LabelTwoFields 
                labelText={"Código (Si aplica):"}
                inputPlaceholder={"Código de tripulación"}
                inputId={"code-number"}
                inputType={"number"}

                labelText2={"RH: "}
                inputPlaceholder2={"RH"}
                inputId2={"blood_type"}
                inputType2={"text"}
                required2={true}
            />
        </div>
    
    );
}

export default PersonalInformation;
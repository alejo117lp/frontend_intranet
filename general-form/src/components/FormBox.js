import React from "react";
import "react-datetime/css/react-datetime.css";
import '../stylesheets/PersonalInfo.css';
import LabelOneField from "./LabelOneField";
import LabelTwoFields from "./LabelTwoFields";
import LabelThreeFields from "./LabelThreeFields";

function FormBox( {nameBox} ){
   return(
    <div className="">
        <h3>{nameBox}</h3>
        <div className="form-box">
          <LabelOneField 
            labelText={"Campo1"}
            inputPlaceholder={"PruebaDeInput"}
          />
          <LabelTwoFields
            labelText="Campo11"
            inputPlaceholder="PruebaDeInput11"
            labelText2={"Campo22"}
            inputPlaceholder2={"Pruebainput22"}
          />
          <LabelThreeFields 
             labelText="Campo111"
             inputPlaceholder="PruebaDeInput111"
             labelText2={"Campo222"}
             inputPlaceholder2={"Pruebainput222"}
             labelText3={"Campo333"}
             inputPlaceholder3={"Pruebainput333"}
          />
        </div>
    </div>
   );
}

export default FormBox;
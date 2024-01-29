import React from "react";
import LabelOneSelect from "./LabelOneSelect";

function EndowmentInformation( {nameBox, sizeOptions} ){
  //console.log("Opciones de talla:", sizeOptions);
  return(
    <div className="form-box">
        <h3>{nameBox}</h3>
        <div className="three-fields-container">
          <LabelOneSelect 
            labelText={"Talla Pantalón: "}
            selectText={"Seleccione su talla de Pantalón"}
            initialOptions= {sizeOptions}
          />

          <LabelOneSelect 
            labelText={"Talla Camisa: "}
            selectText={"Seleccione su talla Camisa"}
            initialOptions={['XS', 'S', 'M', 'L', 'XL', 'M', 'XXL', '40', '16', '10',
             '12', '38', '8', '14', '42', '36', '20', '18', '44', '34', '30', '24', 
             '52', '22', '32', '46', '54', '50', '48', '4XL', '41', '37', '39', '35', '43']}
          />

          <LabelOneSelect 
            labelText={"No. Calzado: "}
            selectText={"Seleccione su talla de Calzado"}
            initialOptions={['34', '35', '36', '37', '38', '39', '40', '41', '42',
             '43', '44', '45']}
          />
        </div>
    </div>
  );
}

export default EndowmentInformation;
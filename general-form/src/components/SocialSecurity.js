import React from "react";
import LabelOneSelect from "./LabelOneSelect";

function SocialSecurity( {nameBox} ){
    return(
        <div className="form-box">
            <h3>{nameBox}</h3>

            <LabelOneSelect 
                labelText="EPS: "
                selectText= "Seleccione su EPS"
                selectId={'eps'}
                required={true}
                initialOptions={['EPS COLMEDICA', 'EPS HUMANA VIVIR', 'EPS COMPENSAR', 'EPS SANITAS SA', 
                'ADRESS', 'EPS SURA', 'EPS SALUD TOTAL', 'EPS SALUD COLPATRIA SA', 'EPS COOMEVA', 
                'EPS FAMISANAR', 'SER OCCIDENTAL DE SALUD SOS', 'EPS CRUZ BLANCA', 'EPS SOLSALUD', 
                'EPS SALUDVIDA SA', 'NUEVA EPS', 'EPS SAVIA SALUD', 'EPS MEDIMAS', 'EPS MALLAMAS', 
                'EPS COOSALUD', 'COMFACHOCO', 'CAJACOPI', 'ASOCIACION INDGENA DEL CAUCA', 'MUTUAL SER', 
                'EPS EMDISALUD', 'EPS ECOOPSOS', 'Comfenalco del Valle', 'ASOCIACION INDIGENA DEL CAUCA', 
                'REGIMEN ESPECIAL MAGISTERIO', 'REGIMEN ESPECIAL POLICIA', 'REGIMEN ESPECIAL FUERZAS MILITARES', 
                'EPS FOSYGA', 'EPS UNISALUD']}
            />

            <LabelOneSelect 
                labelText="Pensiones: "
                selectText= "Seleccione su Fondo de Pensiones"
                selectId={'pension'}
                required={true}
                initialOptions={['AFP PROTECCION', 'COLFONDOS', 'AFP SKANDIA', 'AFP HORIZONTE', 'AFP PORVENIR', 
                'AFP COLPENSIONES', 'COLPFONDOS']}
            />

            <LabelOneSelect 
                labelText="Cesantías: "
                selectText= "Seleccione su Fondo de Cesantías"
                selectId={'layoffs'}
                required={true}
                initialOptions={['PROTECCION', 'PORVENIR', 'HORIZONTE', 'COLFONDOS', 'SKANDIA', 
                'FONDO NACIONAL DEL AHORRO', 'COLPENSIONES']}
            />
            
        </div>
    );
}

export default SocialSecurity;


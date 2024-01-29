import React from "react";
import LabelOneField from "./LabelOneField";
import LabelThreeFields from "./LabelThreeFields";
import LabelOneSelect from "./LabelOneSelect";

function HomeInformation( {nameBox} ){
    return (
        <div className="form-box">
            <h3>{nameBox}</h3>
            <LabelOneField 
                labelText={"Dirección de residencia:"}
                inputId={"home_address"}
                inputPlaceholder={"Dirección de residencia"}
                inputType={"text"}
                required={true}
            />

            <div className="two-field-container">
                <LabelOneField
                    labelText={"Barrio:"}
                    inputId={"home_neighborhood"}
                    inputPlaceholder={"Nombre Barrio"}
                    inputType={"text"}
                    required={true}
                />

                <LabelOneSelect 
                    labelText={"Municipio:"} 
                    selectText={"Seleccione municipio de residencia"}
                    selectId={'home_city'}
                    initialOptions={['MEDELLÍN', 'ABEJORRAL', 'ABRIAQUÍ', 'ACHÍ', 'ALEJANDRÍA', 'ALTOS DEL ROSARIO', 'AMAGÁ', 
                    'AMALFI', 'ANDES', 'ANGELÓPOLIS', 'ANGOSTURA', 'ANORÍ', 'ANZA', 'APARTADÓ', 'ARBOLETES', 'ARGELIA', 'ARMENIA', 
                    'ARROYOHONDO', 'BARANOA', 'BARBOSA', 'BARRANCO DE LOBA', 'BARRANQUILLA', 'BELLO', 'BELMIRA', 'BETANIA', 'BETULIA', 
                    'BOAVITA', 'BOGOTÁ', 'BRICEÑO', 'BURITICÁ', 'CÁCERES', 'CAICEDO', 'CALAMAR', 'CALDAS', 'CAMPAMENTO', 'CANTAGALLO', 
                    'CAÑASGORDAS', 'CARACOLÍ', 'CARAMANTA', 'CAREPA', 'CARTAGENA', 'CAUCASIA', 'CERINZA', 'CHIGORODÓ', 'CHINAVITA', 'CHISCAS', 
                    'CHITA', 'CHITARAQUE', 'CHIVATÁ', 'CICUCO', 'CISNEROS', 'CIUDAD BOLÍVAR', 'CLEMENCIA', 'COCORNÁ', 'CONCEPCIÓN', 'CONCORDIA', 
                    'COPER', 'COPACABANA', 'CORRALES', 'COVARACHÍA', 'CUBARÁ', 'CUCAITA', 'CUÍTIVA', 'DABEIBA', 'DON MATÍAS', 'DUITAMA',
                     'EBÉJICO', 'EL BAGRE', 'EL CARMEN DE BOLÍVAR', 'EL CARMEN DE VIBORAL', 'EL COCUY', 'EL ESPINO', 'EL GUAMO', 'EL PEÑÓN',
                      'ENTRERRIOS', 'ENVIGADO', 'FIRAVITOBA', 'FLORESTA', 'FREDONIA', 'FRONTINO', 'GACHANTIVÁ', 'GAMEZA', 'GARAGOA', 'GIRALDO', 
                      'GIRARDOTA', 'GÓMEZ PLATA', 'GRANADA', 'GUACAMAYAS', 'GUADALUPE', 'GUARNE', 'GUATAPE', 'GUATEQUE', 'GUAYATÁ', 'GÜICÁN', 
                      'HATILLO DE LOBA', 'HELICONIA', 'HISPANIA', 'ITAGUI', 'ITUANGO', 'IZA', 'JARDÍN', 'JENESANO', 'JERICÓ', 'LA CAPILLA', 
                      'LA CEJA', 'LA ESTRELLA', 'LA PINTADA', 'LA UVITA', 'LA VICTORIA', 'LABRANZAGRANDE', 'LIBORINA', 'MACEO', 'MAGANGUÉ', 
                      'MAHATES', 'MARINILLA', 'MARGARITA', 'MARÍA LA BAJA', 'MONTEBELLO', 'MONTECRISTO', 'MOMPÓS', 'MORALES', 'MURINDÓ', 
                      'MUTATÁ', 'NARIÑO', 'NECHÍ', 'NECOCLÍ', 'OLAYA', 'PEÑOL', 'PEQUE', 'PUEBLORRICO', 'PUERTO BERRÍO', 'PUERTO COLOMBIA', 
                      'PUERTO NARE', 'PUERTO TRIUNFO', 'REGIDOR', 'REMEDIOS', 'RETIRO', 'RIONEGRO', 'RÍO VIEJO', 'SABANALARGA', 'SABANETA', 
                      'SALGAR', 'SAN ANDRÉS DE CUERQUÍA', 'SAN CARLOS', 'SAN CRISTÓBAL', 'SAN ESTANISLAO', 'SAN FERNANDO', 'SAN FRANCISCO', 
                      'SAN JACINTO', 'SAN JACINTO DEL CAUCA', 'SAN JERÓNIMO', 'SAN JOSÉ DE LA MONTAÑA', 'SAN JUAN DE URABÁ', 'SAN JUAN NEPOMUCENO', 
                      'SAN LUIS', 'SAN MARTÍN DE LOBA', 'SAN PABLO', 'SAN PEDRO', 'SAN PEDRO DE URABA', 'SAN RAFAEL', 'SAN ROQUE', 'SAN VICENTE', 
                      'SANTA BÁRBARA', 'SANTA CATALINA', 'SANTA ROSA', 'SANTA ROSA DE OSOS', 'SANTAFÉ DE ANTIOQUIA', 'SANTO DOMINGO', 'SEGOVIA', 
                      'SIMITÍ', 'SOPLAVIENTO', 'SONSON', 'SOPETRÁN', 'TALAIGUA NUEVO', 'TÁMESIS', 'TARAZÁ', 'TARSO', 'TIBIRIBÍ', 'TIQUISIO', 
                      'TOLEDO', 'TUNJA', 'TURBACO', 'TURBANÁ', 'TURBO', 'URAMITA', 'URRAO', 'VALDIVIA', 'VALPARAÍSO', 'VEGACHÍ', 'VENECIA', 
                      'VIGÍA DEL FUERTE', 'VILLANUEVA', 'YALÍ', 'YARUMAL', 'YOLOMBÓ', 'YONDÓ', 'ZAMBRANO', 'ZARAGOZA']}
                    required={true}
                />
            </div>

            <LabelThreeFields 
                labelText={"Teléfono 1:"}
                inputId={"telephone1"}
                inputPlaceholder={"Teléfono 1"}
                inputType={"number"}

                labelText2={"Teléfono 2:"}
                inputId2={"telephone2"}
                inputPlaceholder2={"Teléfono 2"}
                inputType2={"number"}

                labelText3={"Celular:"}
                inputId3={"cellphone"}
                inputPlaceholder3={"Celular"}
                inputType3={"number"}
                required3={true}
            />

            <LabelOneField 
                labelText={"Correo Electrónico Personal:"}
                inputId={"email"}
                inputPlaceholder={"Correo Electrónico Personal"}
                inputType={"text"}
                required={true}
            />
        </div>
    );
}

export default HomeInformation;
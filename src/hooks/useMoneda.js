import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';


const Label = styled.label`
    display: block;
    margin-top: 2rem;
    
    color: #FFF;
    font-family: 'Bebas Neue', cursive;
    font-size: 2.4rem;
    font-weight: bold;
    text-transform: uppercase;
`;

const Select = styled.select`
    display: block;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
    padding: 1rem;
    width: 100%;
    --webkit-appearance: none;
`;

const useMoneda = ( label, stateInicial, opciones ) => {

    const [ state, setState ] = useState( stateInicial );

    const Seleccionar = () => (

        <Fragment>
            <Label>{ label }</Label>
            <Select
                value={ state }
                onChange={ (e) => setState(e.target.value) }
            >
                <option value="">-- Seleccione --</option>
                {
                    opciones.map( opcion => (
                        <option
                            key={ opcion.codigo }
                            value={ opcion.codigo }
                        >
                            { opcion.nombre }
                        </option>
                    ))
                }
            </Select>
        </Fragment>
    )

    return [ state, Seleccionar, setState ];
}

export default useMoneda;

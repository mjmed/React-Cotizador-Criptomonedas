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

const useCriptomoneda = ( label, stateInicial, opciones ) => {

    const [ state, setState ] = useState( stateInicial );

    const SelectCripto = () => (

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
                            key={ opcion.CoinInfo.Id }
                            value={ opcion.CoinInfo.Name }
                        >
                            { opcion.CoinInfo.FullName }
                        </option>
                    ))
                }
            </Select>
        </Fragment>
    )

    return [ state, SelectCripto, setState ];
}

export default useCriptomoneda;

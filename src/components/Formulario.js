import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import axios from 'axios';

import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import { Error } from './Error';


const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

export const Formulario = ({ setMoneda, setCriptomoneda }) => {

    const [ listaCrypto, setListaCrypto ] = useState([]);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dólar estadounidense' },
        { codigo: 'ARS', nombre: 'Peso argentino' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra esterlina' }
    ]

    const [ error, setError ] = useState( false );
    
    const [ moneda, SelectMoneda ] = useMoneda('Elige tu moneda', '', MONEDAS);
    const [ criptomoneda, SelectCripto ] = useCriptomoneda('Elige tu criptomoneda', '', listaCrypto);
    
    useEffect(() => {
        
        const consultarAPI = async () => {

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);

            setListaCrypto(resultado.data.Data);
        }

        consultarAPI();

    }, []);

    const cotizarMoneda = ( e ) => {
        
        e.preventDefault();

        if ( moneda === '' || criptomoneda === '' ) {
            
            setError( true );
            return;
        }

        setError( false );

        setMoneda( moneda );
        setCriptomoneda( criptomoneda );
    }

    return (
        <form onSubmit={ cotizarMoneda }>

            { (error)
                ? <Error mensaje="Todos los campos son obligatorios" />
                : null }

            <SelectMoneda />

            <SelectCripto />

            <Boton
                type="submit"
                value="Calcular"
            />

        </form>
    )
}

Formulario.propTypes = {
    setMoneda: PropTypes.func.isRequired,
    setCriptomoneda: PropTypes.func.isRequired
}
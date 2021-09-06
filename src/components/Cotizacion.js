import React from 'react';
import styled from '@emotion/styled';


const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #FFF;
    border-radius: 10px;
    padding: 20px;
    margin-top: 2rem;

    p {
        span {
            font-weight: bold;
        }
    }

`;

const Info = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    color: #333;
`;

const Precio = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 30px;
    color: #333;
`;

export const Cotizacion = ({ cotizacion }) => {

    // si el objeto llega vacío no ejecuto el código
    if ( Object.keys(cotizacion).length === 0 ) return null;

    console.log(cotizacion);

    return (
        <Contenedor>
            <Precio>Precio: <span>{ cotizacion.PRICE }</span></Precio>
            <Info>Precio más alto del día: <span>{ cotizacion.HIGHDAY }</span></Info>
            <Info>Precio más bajo del día: <span>{ cotizacion.LOWDAY }</span></Info>
            <Info>Variación últimas 24 horas: <span>{ cotizacion.CHANGEPCT24HOUR }</span></Info>
            <Info>Última actualización: <span>{ cotizacion.LASTUPDATE }</span></Info>
        </Contenedor>
    )
}

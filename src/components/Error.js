import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color: #B7322C;
    color: #FFF;
    font-family: 'Bebas Neue', cursive;
    font-size: 30px;
    font-weight: bold;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
`;

export const Error = ({ mensaje }) => {
    return (
        <MensajeError>
            { mensaje }
        </MensajeError>
    )
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

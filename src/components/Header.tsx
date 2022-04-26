import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Div = styled.div `
    display: flex;
    background-color: white;
    color: #425468;
`

const H1 = styled.h1`
    font-size: 19px;
    margin: auto 10px;
`
function Header() {
    return (
        <Div>
            <Logo />
            <H1>Planned Test</H1>
        </Div>
    )
}

export default Header;

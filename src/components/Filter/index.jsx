import React from 'react';
import styled from 'styled-components';
import FilterInput from './FilterInput';
import RetrieveUserButton from './RetrieveUserButton';

const Div = styled.div `
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    border-radius: 10px;
`
const H4 = styled.h4`
    color: red;
    margin: 0.5em;
    text-align: center;
`
function Filter(props) {
    return (
        <Div>
            <H4>{props.state.errorMsg}</H4>
            <FilterInput
                name= {"minAge"}
                value = {"0"}
                filterType = {"Min"}
            />
            <FilterInput
                name= {"maxAge"}
                value = {"100"}
                filterType = {"Max"}
            />
            <RetrieveUserButton
                state={props.state}
                filterUsers={props.filterUsers}
                setErrorMsg = {props.setErrorMsg}
            />
        </Div>
    )
}

export default Filter;




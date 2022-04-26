import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
    border: 1px solid rgba(0, 0, 0, 0.5);
    width: 70%;
    display: flex;
    border-radius: 5px;
    height: 40px;   
    margin 1em 0; 
`

const Label = styled.label`
    color: rgba(0, 0, 0, 0.5);
    margin: auto 1em;
    font-size: medium;
`
const Input = styled.input`
    width: 80%;
    border: 0;
    outline: 0;
    font-size: medium;
`

function FilterInput(props: {name: string, value: string, filterType: string}) {

    //Validate that the user does not enter negative numbers
    const validateMin = (event: any) => {
        if(event.target.value < 0) {
            event.target.value = 0;
        }
    }

    return (
        <Div>
            <Label>{props.filterType}</Label>
            <Input id={props.filterType} name={props.name} placeholder={props.value} min="0" type="number" onBlur={(e) => validateMin(e)}/>
        </Div>
    )
}

export default FilterInput;
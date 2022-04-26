import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
    border-radius: 30px;
    border: 1px solid #52a27e;
    width: 40%;
    height: 6vh;
    align-items: left;
    background-color: #52a27e;
    color: white;
    cursor: pointer;
    margin: 1em 0;
    margin-right: 8em;
`

function RetrieveUserButton(props: {state: {errorMsg: string}, filterUsers: Function, setErrorMsg: Function}) {
    const executeFilter = () => {
        //get current value of input fields
        let minInput: string;
        let maxInput: string;
        minInput = (document.getElementById("Min") as HTMLInputElement).value
        maxInput = (document.getElementById("Max") as HTMLInputElement).value;

        let minValue = parseInt(minInput);
        let maxValue = parseInt(maxInput);

        //validate the range of min - max
        if(minValue && maxValue && minValue > maxValue) {
            props.setErrorMsg("Invalid Range - Max must be >= Min");
            return;
        }
        
        //If range is valid remove error
        props.setErrorMsg("");
        props.filterUsers(minValue, maxValue);
    }
    return (
        <Button type="button" onClick= {() => executeFilter()}>Retrieve Users</Button>
    )
}

export default RetrieveUserButton;

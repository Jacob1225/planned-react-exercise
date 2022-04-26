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

function RetrieveUserButton(props) {
    const executeFilter = () => {
        //get current value of input fields
        const minInput = document.getElementById("Min");
        const maxInput = document.getElementById("Max");

        let minValue = parseInt(minInput.value);
        let maxValue = parseInt(maxInput.value);

        //validate the range of min - max
        if(minValue && maxValue && minValue > maxValue) {
            props.setErrorMsg("Invalid Range - Max must be >= Min");
            return;
        }

        const users = props.filterUsers(minValue, maxValue);

        //If range is valid remove error
        props.setErrorMsg("");
        console.log('users', users);
        console.log(props.state);
    }
    return (
        <Button type="button" onClick= {() => executeFilter()}>Retrieve Users</Button>
    )
}

export default RetrieveUserButton;

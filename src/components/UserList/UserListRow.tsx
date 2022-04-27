import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: 1em 0;
    border-bottom: 1px solid #d4d4da;
    display: flex;
    justify-content: space-between;
`

const Name = styled.div`
    display: flex;
    margin-left: 3em;
    margin-bottom: 1em;
`

const Input = styled.input`
    margin-right: 2em;
`

const NameSpan = styled.span`
    color: #364558;
    font-size: 18px;
`

const Age = styled.span`
    margin-right: 9em;
    color: #364558;
    font-size: 18px;
`


function UserListRow(props: {key: string, name: string, age: number}) {
    return (
        <Div>
            <Name>
                <Input type="checkbox"></Input>
                <NameSpan>{props.name}</NameSpan>
            </Name>
            <Age>{props.age}</Age>
        </Div>
    )
};

export default UserListRow;
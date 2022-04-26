import React from 'react';
import styled from 'styled-components';
import UserListRow from './UserListRow';
import { ReactComponent as Arrows } from '../../assets/sort-arrows.svg';


const Div = styled.div`
    display: flex;
    flex-direction: column;
`

const RowHeader = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1em 0;
`
const ColumnHeader = styled.div`
    display: flex; 
    color: #364558; 
`

const H3 = styled.h3`
    margin: 0 0.5em;
`


function UserListTable(props) {
    //order users
    const orderedUsers = props.orderUsers(props.users);
    return (
        <Div>
            <RowHeader>
                <ColumnHeader>
                    <H3>Name</H3>
                    <Arrows />
                </ColumnHeader>
                <ColumnHeader>
                    <H3>Age</H3>
                    <Arrows/>
                </ColumnHeader>
            </RowHeader>
            {orderedUsers.map(user => 
                <UserListRow 
                    key={user.email}
                    name={user.name.firstName + " " + user.name.lastName}
                    age={user.age}
                    
                />    
            )}
        </Div>
    )
};

export default UserListTable;
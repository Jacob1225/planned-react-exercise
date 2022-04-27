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

const ArrowStyle = { marginTop: "0.3em", cursor: "pointer"}


function UserListTable(props: {orderUsers: Function, users: any[]}) {
    //order users
    const orderedUsers = props.orderUsers(props.users);
    return (
        <Div>
            <RowHeader>
                <ColumnHeader>
                    <H3>Name</H3>
                    <Arrows id="name-arrow" style={ArrowStyle}/>
                </ColumnHeader>
                <ColumnHeader>
                    <H3>Age</H3>
                    <Arrows id="age-arrow" style={ArrowStyle}/>
                </ColumnHeader>
            </RowHeader>
            {orderedUsers.map((user: {email: string, name: {firstName: string, lastName: string}, age: number}, index: number) =>
                <UserListRow 
                    key={user.email}
                    position={orderedUsers.length -1 === index ? -1 : index}
                    name={user.name.firstName + " " + user.name.lastName}
                    age={user.age}
                    
                />    
            )}
        </Div>
    )
};

export default UserListTable;
import React from 'react';
import styled from 'styled-components';
import UserListTable from './UserListTable';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    width: 60%;
`

const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #d4d4da;

`
const Input = styled.input` 
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 19px;
    width: 80%;
    height: 5vh;
    margin: 2em auto;
`

function UserList(props: {orderUsers: Function, users: any[]}) {
    //Search functionality 
    const searchUser = (event: any) => {
        console.log(event.target);
    }
    return (
        <Div>
            <SearchBar>
                <Input placeholder="Search Users" type="text" onChange={(e) => searchUser(e)}/>
            </SearchBar>
            <UserListTable 
                orderUsers={props.orderUsers}
                users={props.users}
            />
        </Div>
    )
}

export default UserList;
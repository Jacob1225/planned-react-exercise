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

function UserList(props) {
    return (
        <Div>
            <UserListTable 
                state={props.state}
                orderUsers={props.orderUsers}
                users={props.users}
            />
        </Div>
    )
}

export default UserList;
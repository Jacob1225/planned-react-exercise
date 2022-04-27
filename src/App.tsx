import React from 'react';
import styled from 'styled-components';
import useApplicationData from "./hooks/useApplicationData";
import Header from './components/Header'
import Filter from './components/Filter';
import UserList from './components/UserList';

const AppDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const H2 = styled.h2`
    margin: 1em 8em;
    color: #364558;

`

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
`

function App() {
  const {
    state,
    filterUsers,
    orderUsers,
    setErrorMsg
  } = useApplicationData()
  
  return (
    <AppDiv>
        <Header />
        <H2>Users</H2>
        <Div>
            <Filter 
            state={state}
            filterUsers={ filterUsers }
            setErrorMsg = { setErrorMsg }
            />
           
            <UserList 
                orderUsers={orderUsers}
                users={state.filteredUsers.length ? state.filteredUsers : (state.users.kids.concat(state.users.adults)).concat(state.users.seniors)}
            />
        </Div>
    </AppDiv>
  );
}

export default App;

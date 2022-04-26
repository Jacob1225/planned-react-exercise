import React from 'react';
import styled from 'styled-components';
import useApplicationData from "./hooks/useApplicationData";
import Header from './components/Header'
import Filter from './components/Filter';

const H2 = styled.h2`
  color: #364558;
`

function App() {
  const {
    state,
    filterUsers,
    setErrorMsg
  } = useApplicationData()
 
  return (
    <div className="App">
      <Header />
      <H2>Users</H2>
      <Filter 
        state={state}
        filterUsers={ filterUsers }
        setErrorMsg = { setErrorMsg }
      />
    </div>
  );
}

export default App;

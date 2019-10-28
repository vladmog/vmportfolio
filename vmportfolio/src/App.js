import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components"

import Landing from "./components/landing/Landing"
import Nav from "./Nav";

const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  width: width: calc(100vw - (100vw - 100%));
  align-items: center;
`


function App() {
  return (
    <S.Container className="App">
      <Nav />
      <Landing />
    </S.Container>
  );
}

export default App;

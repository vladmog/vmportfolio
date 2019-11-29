import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components"

import Landing from "./components/landing/Landing"
import Blog from "./components/blog/Blog";
import Portfolio from "./components/portfolio/Portfolio";
import Nav from "./components/nav/Nav";

const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - (100vw - 100%));
  align-items: center;
  box-sizing: border-box;
  background-color: #F2F2F2;
`


function App() {
  return (
    <S.Container className="App">
      <Nav />
      <Router>
        <Switch>
          <Route path = "/" exact component = {Landing}/>
          <Route path = "/blog" exact component = {Blog}/>
          <Route path = "/portfolio" exact component = {Portfolio}/>
        </Switch>
      </Router>
    </S.Container>
  );
}

export default App;

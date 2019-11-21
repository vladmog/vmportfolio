import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components"

import Landing from "./components/landing/Landing"
import Nav from "./Nav";
import Blog from "./components/blog/Blog";
import Portfolio from "./components/portfolio/Portfolio";

const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - (100vw - 100%));
  align-items: center;
  box-sizing: border-box;
`


function App() {
  return (
    <S.Container className="App">
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

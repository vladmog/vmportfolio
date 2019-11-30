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
  // width: 100vw;
  align-items: center;
  box-sizing: border-box;
  background-color: #F2F2F2;

  // @media (min-width: 320px) {
  //   background-color: yellow;
  // }
  // @media (min-width: 380px) {
  //   background-color: #ed998c; 
  //   // pink
  // }
  // @media (min-width: 480px) {
  //   background-color: #b5b5b5;
  //   // grey
  // }
  // @media (min-width: 600px) {
  //   background-color: #ffce63;
  //   // orange
  // }
  // @media (min-width: 768px) {
  //   background-color: #91e698;
  //   // green
  // }
  // @media (min-width: 900px) {
  //   background-color: #d77cf2;
  //   // purple
  // }
  // @media (min-width: 1024px) {
  //   background-color: #7595ff;
  //   // blue
  // }
  // @media (min-width: 1200px) {
  //   background-color: #46f2b6;
  //   // blue green
  // }

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

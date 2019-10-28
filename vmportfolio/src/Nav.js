import React from "react";
import styled from "styled-components";

const S = {};

S.Container = styled.div`
    display: flex;
    position: fixed;
    top: 0px;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
    width: 95%;
    height: 0vh;
    align-items: center;
    // justify-content: space-around;
    div {
        font-size: 50px;
    }
    span {
        color: red;
    }
`

function Nav(props){

    return(
        <S.Container>
        </S.Container>
    )
}

export default Nav;
import React from "react";
import styled from "styled-components";
const S = {};

S.Container = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-around;
    font-family: 'Work Sans', sans-serif;
    font-size: 65px;
    font-weight: bold;
    width: 50%;
    height: 100%;
    align-items: flex-start;
`

function MainNav(props){

    return(
        <S.Container>
            <div style = {{color: "#9e2b2b"}}>Word</div>
            <div>Image</div>
            <div>Build</div>
        </S.Container>
    )
}

export default MainNav;
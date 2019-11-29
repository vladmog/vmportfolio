import React from "react";
import styled from "styled-components";

const S = {}

S.Container = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0px;
    right: 0px;
    left: 0px;
    font-family: acumin-pro-wide, sans-serif;
    font-weight: 700;
    font-style: normal;
    box-sizing: border-box;
    background-color: white;
    

    span {
        font-size: 72px;
        margin-left: 10px;
    }

    ul {
        font-size: 24px;
        width: 45%;
        display: flex;
        justify-content: space-around;
    }
`

function Nav(){
    return(
        <S.Container>
            <span>VLAD</span>
            <ul>
                <a>Journal</a>
                <a>Portfolio</a>
                <a>Contact</a>
            </ul>
            
        </S.Container>
    )
}

export default Nav;
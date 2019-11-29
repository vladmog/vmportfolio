import React from 'react';
import styled from "styled-components";

const S = {}

S.Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    left: 0px;
    right: 0px;
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 100px;

    h1 {
        margin-top: 15vh;
        font-size: 48px;
        text-align: left;
    }
`

S.BlockContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    // border: solid green 1px;
    width: 100%;
    height: 30vh;
`

S.Block = styled.div`
    height: 63px;
    width: 63px;
    background-color: black;
`

function Quadrant1(){
    return(
        <S.Container>
            <h1>Los Angeles based Full Stack web developer, visual artist, and node in the universe</h1>
            <S.BlockContainer>
                <S.Block />
            </S.BlockContainer>
        </S.Container>
    )
}

export default Quadrant1;
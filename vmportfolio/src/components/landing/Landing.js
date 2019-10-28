import React from "react";
import styled from "styled-components";

import MainNav from "./MainNav";
import SubNav from "./SubNav";
import TextBody from "./TextBody";

const S = {};

S.Container = styled.div`
    padding-top: 3px;
    display: flex;
    font-family: 'Work Sans', sans-serif;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    width: 97%;
    height: 94vh;
    // margin-top: 6vh;
    // border: solid red 1px;
    font-size: 55px;
    font-weight: bold;
`

S.TopHalf = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 30vh;
    margin-top: 2vh;
`

S.BottomDiv = styled.div`

`



function Landing(props){

    return(
        <S.Container>
            <S.TopHalf>
                <MainNav />
                <SubNav />
            </S.TopHalf>
            <TextBody />            
        </S.Container>
    )
}

export default Landing;
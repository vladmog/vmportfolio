import React from "react";
import styled from "styled-components";
const S = {};

S.Container = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    font-family: 'Work Sans', sans-serif;
    font-size: 24px;
    font-weight: bold;
    width: 50%;
    height: 100%;
    align-items: flex-start;
    border-left: solid black 1px;
    max-height: 100%;
    overflow:   scroll;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
`

function SubNav(props){

    return(
        <S.Container>
            <div>On lust</div>
            <div style = {{color: "#9e2b2b"}}>On tragedy</div>
            <div>On the macabre</div>
            <div>Love</div>
            <div>On lust</div>
            <div>On tragedy</div>
            <div>On the macabre</div>
            <div>Love</div>
            <div>On lust</div>
            <div>On tragedy</div>
            <div>On the macabre</div>
            <div>Love</div>
            <div>On lust</div>
            <div>On tragedy</div>
            <div>On the macabre</div>
            <div>Love</div>
            <div>On lust</div>
            <div>On tragedy</div>
            <div>On the macabre</div>
            
        </S.Container>
    )
}

export default SubNav;
import React from "react";
import styled from "styled-components";

const S = {};

S.Container = styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    border-bottom: solid black 3px;

    span {
        text-align: left;
        // border: solid black 1px;
        width: 20%;

    }

    span:nth-child(1) {
        width: 50%;
    }

    span:nth-child(3) {
        text-align: right;
        margin-right: 2%;
    }
`

function Entry(props){
    return(
        <S.Container>
            <span>{props.entry.title}</span>
            <span>{props.entry.category}</span>
            <span>{props.entry.date}</span>
            
        </S.Container>
    )
}

export default Entry;
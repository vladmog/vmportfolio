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
    // border: solid green 1px;

    span {
        text-align: left;
        // border: solid black 1px;
        width: 20%;
    }

    span {
        width: 50%;
    }

    div {
        width: 40%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        // border: solid purple 1px;

        span {
            text-align: left;
            // border: solid black 1px;
            width: 50%;
    
        }
        span:nth-child(2) {
            text-align: right;
        }
    }

`

function Entry(props){
    return(
        <S.Container>
            <span>{props.entry.title}</span>
            <div>
                <span>{props.entry.category}</span>
                <span>{props.entry.date}</span>
            </div>
            
        </S.Container>
    )
}

export default Entry;
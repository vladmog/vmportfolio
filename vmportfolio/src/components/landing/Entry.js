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
    @media (max-width: 380px) {
        flex-direction: column;
        // height: 12vh;
        height: auto;
        padding: 5px 0px 5px 0px;
    }

    span {
        text-align: left;
        // border: solid black 1px;
        width: 50%;
        @media (max-width: 380px) {
            width: 100%;
            font-size: 18px;
        }
    }

 

    div {
        width: 40%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        // border: solid purple 1px;

        @media (max-width: 380px) {
            width: 100%;
            justify-content: flex-start;
            color: #515151;
        }

        span {
            text-align: left;
            // border: solid black 1px;
            width: 50%;

            @media (max-width: 380px) {
                text-align: left;
                font-size: 14px;
            }
    
        }
        span:nth-child(2) {
            text-align: right;

            @media (max-width: 380px) {
                text-align: left;
                font-size: 14px;
            }
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
import React from 'react';
import styled from "styled-components";

import Entry from "./Entry";

const S = {};

S.Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 100px;
    // border: solid green 1px;
    margin-top: 10vh;

    
    @media (max-width: 1024px) {
  
    }
    @media (max-width: 768px) {
        padding: 0px 40px;
        margin-top: 10vh;
    }
    @media (max-width: 480px) {
        padding: 0px 20px;
        margin-top: 10vh;
    }


    h2 {
        font-size: 72px;
        align-self: flex-start;
        margin: 0px 0px 8vh 0px;
        
        @media (max-width: 1024px) {
            font-size: 48px;
            margin-bottom: 3vh;
        }
        @media (max-width: 768px) {
            font-size: 48px;
            margin-bottom: 3vh;
        }
        @media (max-width: 480px) {
            font-size: 48px;
            margin-bottom: 3vh;
        }
    }

    a {
        align-self: flex-end;
        font-size: 24px;
        margin-top: 3%;
        
        
        @media (max-width: 1024px) {
        }
        @media (max-width: 768px) {
            font-size: 18px;
        }
        @media (max-width: 480px) {
            font-size: 18px;
        }
    }
`

S.Block = styled.div`
    height: 63px;
    width: 63px;
    background-color: black;
    align-self: flex-start;
    margin-top: 5%;
    
    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`



const entries = [
    {
        title: "An exploration of shape and form",
        category: "Technology",
        date: "11/23/2019"
    },
    {
        title: "An exploration of shape and form",
        category: "Photography",
        date: "11/23/2019"
    },
    {
        title: "An exploration of shape and form",
        category: "Philosophy",
        date: "11/23/2019"
    },
    {
        title: "An exploration of shape and form",
        category: "Technology",
        date: "11/23/2019"
    },
    {
        title: "An exploration of shape and form",
        category: "Art",
        date: "11/23/2019"
    },
]

function Quadrant2(props){
    return(
        <S.Container>
            <h2>JOURNAL</h2>
            {entries.map((entry) => {
                return (
                    <Entry entry = {entry}/>
                )
            })}
            <a onClick = {(e) => props.goToJournal(e)}>MORE</a>
            <S.Block />
        </S.Container>
    )
}

export default Quadrant2;
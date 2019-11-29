import React from 'react';
import styled from "styled-components";

import Entry from "./Entry";

const S = {};

S.Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 100px;


    h2 {
        font-size: 72px;
        align-self: flex-start;
        margin: 1% 0px;
    }

    a {
        align-self: flex-end;
        font-size: 24px;
        margin-top: 3%;
    }
`

S.Block = styled.div`
    height: 63px;
    width: 63px;
    background-color: black;
    align-self: flex-start;
    margin-top: 5%;
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
            <a>MORE</a>
            <S.Block />
        </S.Container>
    )
}

export default Quadrant2;
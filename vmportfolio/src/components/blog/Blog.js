import React from 'react';
import styled from "styled-components";

import Banner from "./Banner";
import Entry from "../landing/Entry";


const S = {};

S.Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 100px;
    // border: solid green 5px;
    font-family: acumin-pro-wide, sans-serif;
    font-weight: 700;
    left 0px;
    right 0px;
    margin-bottom: 30px;


    @media (max-width: 1024px) {

    }
    @media (max-width: 768px) {
        padding: 0px 40px;
    }
    @media (max-width: 480px) {
        padding: 0px 20px;
    }
`


function Blog(props){

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


    return(
        <S.Container>
            <Banner />
            
            {entries.map((entry) => {
                return (
                    <Entry entry = {entry}/>
                )
            })}
            
            
        </S.Container>
    )
}

export default Blog;
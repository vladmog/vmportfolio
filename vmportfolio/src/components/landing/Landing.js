import React from "react";
import styled from "styled-components";


const S = {};

S.Container = styled.div`
    border: solid black 1px;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    background-color: black;

`

S.List = styled.ul`
    list-style-type: none;
    text-align: left;
    // border: solid black 1px;
    padding: 0px;
    font-size: 45px;
    width: 100%;
    font-weight: 600;
    padding-left: 10px;
    color: #828282;

    li {
        margin-bottom: 25px;
        
        span {
            color: white;
            
            span {
                color:red;
            }
        }
    }

    li:last-child {
        margin-top: 50px;
        color: white
        font-size: 65px;

        span {
            color: red;
        }
    }
`




function Landing(props){

    return(
        <S.Container>
            <S.List>
                <li>
                    I'm not <div>what <span>I say...</span></div>
                </li>
                <li>
                    I'm not <div>what <span>I show...</span></div>
                </li>
                <li>
                    I'm not <div>what <span>I build...</span></div>
                </li>
                <li>
                    I'm not <div>what <span>I know...</span></div>
                </li>
                <li>I am<span>.</span></li>
            </S.List>
        </S.Container>
    )
}

export default Landing;
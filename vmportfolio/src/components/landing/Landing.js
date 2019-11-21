import React from "react";
import styled from "styled-components";
import MePic from "../../img/me.jpg"


const S = {};

S.Container = styled.div`
    // border: solid black 1px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;

    h1 {
        font-size: 60px;
        margin: 5px 0px 20px 0px;
    }

    div {
        margin-top: 5px;
        font-size: 12px;
        font-weight: 900;

        span {
            font-weight: normal;
        }
    }

`

S.MePic = styled.img`
    width: 100vw;
    object-fit: contain;
`

S.List = styled.ul`
    list-style-type: none;
    text-align: center;
    // border: solid black 1px;
    padding: 0px;
    font-size: 40px;
    width: 100%;
    font-weight: 600;
    padding-left: 10px;
    margin-top: 40px;

    li {
        margin-bottom: 10px;
    }


`


function Landing(props){

    const goToPortfolio = (e) => {
        e.preventDefault()
        console.log("Go to portfolio")
        props.history.push("/portfolio")
    }

    const goToBlog = (e) => {
        e.preventDefault()
        console.log("Go to blog")
        props.history.push("/blog")
    }

    return(
        <S.Container>
            <h1>Vlad</h1>
            <S.MePic src = {MePic}></S.MePic>
            <div>Fig. 7-23 <span>Dev at rest</span></div>
            <S.List>
                <li onClick = {e => goToPortfolio(e)}>work</li>
                <li onClick = {e => goToBlog(e)}>thoughts</li>
            </S.List>
        </S.Container>
    )
}

export default Landing;
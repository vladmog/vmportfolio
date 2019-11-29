import React from "react";
import styled from "styled-components";

import Quadrant1 from "./Quadrant1";
import Quadrant2 from "./Quadrant2";
import Quadrant3 from "./Quadrant3";
import Quadrant4 from "./Quadrant4";

const S = {};

S.Container = styled.div`
    top: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: acumin-pro-wide, sans-serif;
    font-weight: 700;
    font-style: normal;
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
            <Quadrant1 />
            <Quadrant2 />
            <Quadrant3 />
            <Quadrant4 />    
        </S.Container>
    )
}

export default Landing;
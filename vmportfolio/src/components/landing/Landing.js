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
    background-color: white;

    footer {
        align-self: center;
    
        @media (max-width: 480px) {
            font-size: 12px;
        }
    }
    
`



function Landing(props){

    const goToPortfolio = (e) => {
        e.preventDefault()
        console.log("Go to portfolio")
        props.history.push("/portfolio")
    }

    const goToJournal = (e) => {
        e.preventDefault()
        console.log("Go to journal")
        props.history.push("/journal")
    }

    return(
        <S.Container>
            <Quadrant1 />
            <Quadrant2 goToJournal = {goToJournal} />
            <Quadrant3 />
            <Quadrant4 />  
            <footer>
                Icons made by Freepik from www.flaticon.com
            </footer>  
        </S.Container>
    )
}

export default Landing;
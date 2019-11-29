import React from "react";
import styled from "styled-components";

const S = {};

S.Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0px 100px;
    height: 92vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
        font-size: 72px;
        margin: 10% 0px 0px 0px;
    }

    ul {
        list-style-type: none;
        li {
            font-size: 36px;
            text-align: left;
        }
    }
`



function Quadrant4(props){
    return(
        <S.Container>
            <h2>CONTACT</h2>
            <ul>
                <li>email: vladmog@gmail.com</li>
                <li>Instagram: lightcatch</li>
                <li>LinkedIn: vladmog</li>
            </ul>
        </S.Container>
    )
}

export default Quadrant4;
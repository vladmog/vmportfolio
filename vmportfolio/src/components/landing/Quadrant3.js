import React from "react";
import styled from "styled-components";

const S = {};

S.Container = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 92vh;
    padding: 0px 100px;
    @media (max-width: 380px) {
        padding: 0px 20px;
    }

    h2 {
        font-size: 72px;
        align-self: flex-start;
        // border: solid black 1px;
        margin: 1% 0px;

        @media (max-width: 380px) {
            font-size: 43px;
        }
    }
`

S.Grid = styled.div`
    display: grid;
    height: 70%;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: (2, 1fr);
    grid-gap: 45px;

    @media (max-width: 380px) {
        margin-top: 10%;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: (3, 1fr);
        grid-gap: 36px;
        height: 60%;
    }

    div {
        background-color: black;
    }
`

S.Block = styled.div`
    height: 63px;
    width: 63px;
    background-color: black;
    align-self: center;;
    margin-top: 5%;

    @media (max-width: 380px) {
        width: 50px;
        height: 50px;
        margin-top: 15%;
    }
`

    
function Quadrant3(){
    return(
        <S.Container>
            <h2>PORTFOLIO</h2>
            <S.Grid>
                <div>
                    
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </S.Grid>
            <S.Block />


        </S.Container>
    )
}

export default Quadrant3;
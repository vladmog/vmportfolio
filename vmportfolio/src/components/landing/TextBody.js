import React from "react";
import styled from "styled-components";
const S = {};

S.Container = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding-top: 10px;
    flex-direction: column;
    font-family: 'Work Sans', sans-serif;
    font-size: 18px;

`
S.RightAlign = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    `
S.LeftAlign = styled.div`
    display: flex;
    width: 100%;
`
S.Title = styled.h2`
    align-self: flex-start;
    margin: 0px;    
    font-size: 24px;
`
S.Date = styled.h2`
    justify-self: flex-end;
    margin: 0px;    
    font-size: 18px;
    align-self: flex-start;
`
S.Body = styled.div`
    text-align: left;
`


function TextBody(props){
    console.log(window.screen)

    return(
        <S.Container>
                <div style = {{alignSelf: "center"}}>
                    <S.Title>10/25/2019</S.Title>
                </div>
                <S.Body>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </S.Body>
            
        </S.Container>
    )
}

export default TextBody;
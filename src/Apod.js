import React from "react";
import styled from "styled-components";

const Baslik = styled.h2`
    font-size: 24px;
`;

const Date = styled.div`
    font-style: italic;
    color: #555;
    font-weight: bold;
`;

const BaslikKutusu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


function Apod({dopa}){

    const {url , date, title, explanation} = dopa
    
    return(
        <div className="photo">
            <div className="photo-img">
            <img src={url} alt={`A visual of the day - ${date}`}/>
           </div>
           <div className="photo-info">
            <BaslikKutusu>
            <Baslik>{title}</Baslik>
            <Date>{date}</Date>
            </BaslikKutusu>
            <p>{explanation}</p>
            </div>
         </div>
    )
}

export default Apod;
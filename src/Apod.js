import React from "react";

function Apod({dopa}){
    const {url,date,title,explanation}=dopa;
    return (
        <div className="photo">
        <div className="photo-img">
          <img src={url} alt={`A visual of the day - ${date}`}></img>
        </div>
        <div className="photo-info">
          <h2>{title}</h2>
          <div>{date}</div>
          <p>{explanation}</p>
        </div>
      </div>
    )
}

export default Apod;

import React, { useState, useEffect } from "react";
import webimg from './../asset/web.svg'
import './Card.css'

const Card = (props) => {

    const [color, setColor] = useState(false)

    //random comment

    const changeColor = () => {
        setColor(true)
    }

    return(
        <div className ={`${!color ? 'web-dev-card':"web-dev-card-alt"}`} >
            <div className = 'image'>
                <img src = {webimg}></img>
            </div>
            <div className = 'heading'>
                <h2>{props.name}</h2>
            </div>
            <div className = 'details'>
                <p>{props.discipline}</p>
            </div>
            <button className="btn btn-warning" onMouseEnter={changeColor} 
            onMouseOut={()=> {setColor(false)}} onClick={props.click}>Change</button>
        </div>
    )
}

export default Card
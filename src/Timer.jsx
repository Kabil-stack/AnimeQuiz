import { useEffect, useState } from "react"

function Timer({secondsRemaining,dispatch,totPoints,points}) {
    const min = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    
    useEffect(()=>{
        
        if(secondsRemaining === 0){
                dispatch({type:"completed",payload:totPoints,totscore:points})
    }
        if(secondsRemaining > 0){
            const timerId = setInterval(()=>{
                dispatch({type:"timer"})
            },1000)
            return ()=> clearInterval(timerId)
        }        
        
    },[secondsRemaining])
    return (
        <div className="timer">
          <i class="fa-regular fa-clock"></i> {min < 10 && "0"}{min} : {seconds < 10 && "0"}{seconds}
        </div>
    )
}

export default Timer

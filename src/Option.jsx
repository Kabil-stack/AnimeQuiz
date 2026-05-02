import { useEffect, useState } from "react"

function Option({option,index,correctOption,answerPoints,points,dispatch,answer,isAnswered}) {
    
    
    
    
    function handlePoints(){
        dispatch({type:"Selectedanswer",payload:option})
        if(index + 1 === correctOption){
           dispatch({type:'correctAnswer',payload:answerPoints})
           
        }
        
    }
    
    return (
        <li><button onClick={handlePoints} disabled={isAnswered} className={`btn ${isAnswered ? (index + 1 === correctOption) ? "right" : 'wrong' : ''}`}>{option}</button>
            
        </li>
    )
}

export default Option

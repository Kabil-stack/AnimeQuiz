function Finish({points,totalScore,highScore,dispatch}) {
    
    return (
        <div className="final">
            <h2>You scored {points} out of {totalScore}</h2>
            <h2>High Score : {highScore}</h2>
            
            <button onClick={()=>dispatch({type:"restart"})}>Restart</button>
           
        </div>
    )
}

export default Finish

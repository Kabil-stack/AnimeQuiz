function Begin({dispatch}) {
    return (
        <div className="begin">
            <h2>Welcome to Anime Quiz</h2>
            <h3>Here is your 15 questions</h3>
            <button onClick={()=>dispatch({type:"start"})}>Let's Start</button>

        </div>
    )
}

export default Begin

function Next({dispatch ,index,totPoints,points}) {
    const btnContent = index === 14 ? "Finish" : "Next"
    function nextQuestion(){
        if(index === 14){
            dispatch({type:"completed",payload:totPoints,totscore:points})
            return
        }
        dispatch({type:"nextQuestion"})
    }
    return (
        <button onClick={nextQuestion} className={`nextBtn ${btnContent === 'Finish' ? 'finish' : ''}`}>
            {btnContent}
        </button>
    )
}

export default Next

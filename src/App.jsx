import { useEffect, useReducer, useState } from "react"
import Begin from "./components/Begin"
import Header from "./components/Header"
import Questions from "./Questions"
import Loader from "./Loader"
import Finish from "./Finish"
import Timer from "./Timer"

const initialstate ={
  questions:[],
  status:"loading",
  answer:null,
  points:0,
  index:0,
  isAnswered:false,
  totalScore:0,
  secondsRemaining:0,
  isTimestarted:false
  
}

function reducer(state,action){
  switch(action.type){
    case "datareceived":
      
      return {...state,questions:action.payload,status:"questionReceived"
      }
    case "start":
      const totalSeconds = state.questions.length * 30;
      
      return {...state,status:"questionStart",secondsRemaining:state.secondsRemaining + totalSeconds,isTimestarted:true}
    case 'correctAnswer':
    
      return{...state,points:state.points + action.payload}
    case 'Selectedanswer':
      return{...state,answer:action.payload,isAnswered:true}

    
    case 'nextQuestion':
     
      return{...state,index:state.index + 1,answer:null,isAnswered:false}
    case 'completed':
      
      return {...state,status:"finish",totalScore:action.payload,points:action.totscore,isTimestarted:false,secondsRemaining:0,isTimestarted:false}
    case 'restart':
      return {...state,status:"questionReceived",points:0,index:0,answer:null,isAnswered:false}
    case "timer":
      
      
      return {...state,secondsRemaining:state.secondsRemaining - 1}
    default:
      throw new Error('unknown Action')
   
  }
}

function App() {

  const [{questions,answer,points,index,status,isAnswered,totalScore,secondsRemaining,isTimestarted},dispatch] = useReducer(reducer,initialstate)
  const totPoints = questions?.reduce((pre,cur)=>pre + cur.points,0) || 0;
 const [highScore,setHighScore] = useState(()=>{
  const saved =localStorage.getItem("score");
  return saved ? parseInt(saved,10) : 0
 })
    
 useEffect(()=>{
  if(points > highScore){
      setHighScore(points);
    }
 },[highScore,points])
 useEffect(()=>{
  
    
    localStorage.setItem("score",JSON.stringify(highScore));
  
 },[highScore])
  
 
  
  useEffect(()=>{
    async function datafetch(){
      const res = await fetch('/AnimeQuiz/questions.json');
      const data = await res.json();
      
      dispatch({type:"datareceived",payload:data.questions})
    }
    datafetch()
    
  },[])
  return (
    <div className="app">
      <Header/>
      {isTimestarted &&
      <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} totPoints={totPoints} points={points}/>
     }
     
      {status === "loading" && <Loader/>}
      {status === "questionReceived" &&
      <Begin dispatch={dispatch}/>}
      {status ==="questionStart" &&
      <Questions questions={questions} index={index} points={points} dispatch={dispatch} answer={answer} isAnswered={isAnswered} totPoints={totPoints}/>
      }
      {status === "finish" && <Finish points={points}  totalScore={totalScore} highScore={highScore} dispatch={dispatch}/>}
     
    
    </div>
  )
}

export default App


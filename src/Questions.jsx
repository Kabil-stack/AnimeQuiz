import { useState } from 'react';
import Next from './components/Next';
import Option from './Option'
import Progress from './Progress';
function Questions({questions,index,points,dispatch,answer,isAnswered,totPoints}) {
    const quest = questions[index];
    const answerPoints = quest.points;
    const correctOption = quest.correctOption;
    
    
        
    return (
        <div className='quiz-app'>
        <div  className='questions'>
            <Progress total={questions.length} index={index}/>
            <h2>{quest.question}</h2>
            <p className='points'><strong>Points :</strong> <span>{points}</span></p>
            <ul className='options'>
            {quest.options.map((option,index) =><Option key={option} option={option} index={index} correctOption={correctOption} answerPoints={answerPoints} points={points} dispatch={dispatch}  answer={answer} isAnswered={isAnswered}
            
            />)}
            </ul>
            </div>
            {isAnswered &&
                <div className='next'>
              <Next dispatch={dispatch} index={index} totPoints={totPoints} points={points} />  
              </div>
            }
            
        
        </div>
    )
}

export default Questions

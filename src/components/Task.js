import React from 'react';
import "./Task.css"

const Task  = (props) => {
    const style = {
        color: 'rgb(255,100,100)'
    }
    
    if(props.task.active){
    return ( 
        <div className='task'>
            <div className='text'>
                <p><strong style={props.task.important ? style : null}>{props.task.text}</strong></p>
                <p>Planowana data zakończenia - <b>{props.task.planEndDate}</b></p>
            </div>
            <div className='buttons'>
                <button className='end' onClick={() => props.done(props.task.id)}>Zadanie zakończone</button>
                <button className='delete' onClick={() => props.delete(props.task.id)}>Usuń zadanie</button>
            </div>
        </div>
     );
    }else{
        return ( 
            <div className='done task'>
                <div className='doneText'>
                    <p><strong>{props.task.text}</strong></p>
                    <p>Zakończono - {props.task.finishDate}</p>
                    <p>Planowana data zakończenia - <b>{props.task.planEndDate}</b></p>
                </div>
                <div className='doneButtons'>
                    <button className='doneDelete' onClick={() => props.delete(props.task.id)}>Usuń zadanie</button>
                </div>
            </div>
         );
    }
}

export default Task;
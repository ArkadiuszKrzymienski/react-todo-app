import React, { Component } from 'react';
import './AddTask.css'

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10);

    state = { 
        task: '',
        important: false,
        date: this.minDate,
        error: false,
    }

    handleTask = (e) => {
        const task = e.target.value;
        this.setState({
            task
        })
    }
    
    handleCheck = () => {
        this.setState({
            important: !this.state.important,
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value,
        })
    }

    handleConfirm = () => {
        const {task, important, date} = this.state;
        if(this.state.task.length > 0){
            this.props.add(task, important, date);
            this.setState({
                task: '',
                important: false,
                date: this.minDate,
                error: false,
            })
        }else{
            this.setState({
                error: true,
            })
        }
    }

    render() { 
        const maxDate = this.minDate.slice(0,4) * 1 + 2 + '-12-31';
        
        return ( 
            <div className='addTask'>
                <h2>Dodaj Zadanie</h2>
                <div className='inputs'>
                    <input type="text" name="task" id="task"    placeholder='Wpisz zadanie' value={this.state.task} onChange={this.handleTask}/>
                    <label htmlFor="important">
                    <input type="checkbox" id='important' name='important' checked={this.state.important} onChange={this.handleCheck}/> Ważne
                    </label>
                    <label className='date' htmlFor="date">
                    Wybierz datę: <input type="date" id='date' name='date' value={this.state.date} onChange={this.handleDate} min={this.minDate} max={maxDate}/>
                    </label>
                    <button onClick={this.handleConfirm}>Dodaj</button>
                    {this.state.error && <p className='red'>Wpisz nazwę zadania</p>}
                </div>
            </div>
         );
    }
}
 
export default AddTask;
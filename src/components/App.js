import React, { Component } from 'react';
import AddTask from './AddTask'
import TaskList from './TaskList'
// import './App.css'

class App extends Component {
  counter = 10;

  state = { 
    tasks: [
      {
        id: 0,
        text: 'zagrać',
        active: true,
        important: true,
        finishDate: null,
        planEndDate: '2020-07-06',
      },
      {
        id: 1,
        text: 'złamać',
        active: true,
        important: true,
        finishDate: null,
        planEndDate: '2020-05-06',
      },
      {
        id: 2,
        text: 'wygrać',
        active: true,
        important: false,
        finishDate: null,
        planEndDate: '2020-05-20',
      },
      {
        id: 3,
        text: 'jeździć',
        active: false,
        important: true,
        finishDate: '2020-05-16',
        planEndDate: '2020-05-15',
      },
    ]
  }

  handleAddTask = (text, important, date) => {
    const newTask = {
        id: this.counter,
        text,
        active: true,
        important,
        finishDate: null,
        planEndDate: date,
    }
    let tasks = [...this.state.tasks, newTask]
    this.setState({
      tasks
    })
    this.counter++
  }
  
  handleDoneTask = (id) => {
    let date = new Date().toISOString();
    date = date.slice(0,10);
    let tasks = [...this.state.tasks];
    tasks.filter(task => {
      if(task.id === id){
        task.active = false;
        task.finishDate = date;
      }
    })
    this.setState({
      tasks,
    })
  }

  handleDeleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    })
  }

  render() { 
    return ( 
      <>
        <h1>Aplikacja - ToDo</h1>
        <AddTask add={this.handleAddTask}/>
        <TaskList tasksactive={this.state.tasks.filter(task => task.active===true)} tasksdone={this.state.tasks.filter(task => task.active===false)} delete={this.handleDeleteTask} done={this.handleDoneTask}/>
      </>
    );
  }
}
 
export default App;
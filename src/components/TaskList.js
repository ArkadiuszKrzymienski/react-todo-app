import React, { Component } from 'react';
import Task from './Task'
import './App.css'

class TaskList extends Component {
    state = {
        active: this.props.tasksactive, 
        done: this.props.tasksdone,

        filterActive: 'endDate',
        activeAlphabetGrow: true,
        activeImportantGrow: true,
        activeEndDateGrow: true,

        filterDone: 'endDate',
        doneAlphabetGrow: true,
        donePlanEndGrow: true,
        doneEndDateGrow: true,
    }

    activeTask = this.state.active.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
    doneTask = this.state.done.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.handleDelete}/>);

    componentWillUpdate(prevProps){
        this.activeTask = this.state.active.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
        this.doneTask = this.state.done.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.handleDelete}/>);
        if(prevProps.tasksactive !== this.state.active){
            this.setState({
                active: this.props.tasksactive,
            })
            this.activeTask = this.state.active.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
        }
        if(prevProps.tasksdone !== this.state.done){
            this.setState({
                done: this.props.tasksdone,
            })
            this.doneTask = this.state.done.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.handleDelete}/>);
        }
    }
        
    handlefilter = (e) => {
        const filterActive = e.target.name;
        this.setState({
            filterActive,
        })

        if(filterActive === 'alphabet'){
            if(this.state.activeAlphabetGrow){
            const active = this.state.active.sort((a,b) => {
            a = a.text;
            b = b.text;
            if(a < b) return -1;
            if(b < a) return 1;
            return 0;
        })
        this.activeTask = active.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
        this.setState({
            activeAlphabetGrow: !this.state.activeAlphabetGrow
        })
        }else{
            const active = this.state.active.sort((a,b) => {
                a = a.text;
                b = b.text;
                if(a > b) return -1;
                if(b > a) return 1;
                return 0;
            })
            this.activeTask = active.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
            this.setState({
                activeAlphabetGrow: !this.state.activeAlphabetGrow
            })
        }
        }
        
        if(filterActive === 'important'){
            if(this.state.activeImportantGrow){
                const active = this.state.active.sort((a,b) => {
                a = a.important;
                b = b.important;
                if(a > b) return -1;
                if(b > a) return 1;
                return 0;
                })
                this.activeTask = active.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
                this.setState({
                activeImportantGrow: !this.state.activeImportantGrow,
                })}
            else{
                const active = this.state.active.sort((a,b) => {
                    a = a.important;
                    b = b.important;
                    if(a < b) return -1;
                    if(b < a) return 1;
                    return 0;
                })
                this.activeTask = active.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
                this.setState({
                activeImportantGrow: !this.state.activeImportantGrow,
            })
        }}

        if(filterActive === 'endDate'){
            if(this.state.activeEndDateGrow){
            const active = this.state.active.sort((a,b) => {
            a = a.planEndDate;
            b = b.planEndDate;
            if(a < b) return -1;
            if(b < a) return 1;
            return 0;
        })
        this.activeTask = active.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
        this.setState({
            activeEndDateGrow: !this.state.activeEndDateGrow,
        })
        }else{
            const active = this.state.active.sort((a,b) => {
                a = a.planEndDate;
                b = b.planEndDate;
                if(a > b) return -1;
                if(b > a) return 1;
                return 0;
            })
            this.activeTask = active.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
            this.setState({
            activeEndDateGrow: !this.state.activeEndDateGrow,
        })
        }
    }}

    handleDonefilter = (e) => {
        const filterDone = e.target.name;
        this.setState({
            filterDone,
        })

        if(filterDone === 'alphabet'){
            if(this.state.doneAlphabetGrow){
            const done = this.state.done.sort((a,b) => {
            a = a.text;
            b = b.text;
            if(a < b) return -1;
            if(b < a) return 1;
            return 0;
        })
        this.doneTask = done.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
        this.setState({
            doneAlphabetGrow: !this.state.doneAlphabetGrow
        })
        }else{
            const done = this.state.done.sort((a,b) => {
                a = a.text;
                b = b.text;
                if(a > b) return -1;
                if(b > a) return 1;
                return 0;
            })
            this.doneTask = done.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
            this.setState({
                doneAlphabetGrow: !this.state.doneAlphabetGrow
            })
        }
        }

        
        if(filterDone === 'planEnd'){
            if(this.state.donePlanEndGrow){
                const done = this.state.done.sort((a,b) => {
                a = a.finishDate;
                b = b.finishDate;
                if(a > b) return -1;
                if(b > a) return 1;
                return 0;
                })
                this.doneTask = done.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
                this.setState({
                donePlanEndGrow: !this.state.donePlanEndGrow,
                })}
            else{
                const done = this.state.done.sort((a,b) => {
                    a = a.finishDate;
                    b = b.finishDate;
                    if(a < b) return -1;
                    if(b < a) return 1;
                    return 0;
                })
                this.doneTask = done.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
                this.setState({
                donePlanEndGrow: !this.state.donePlanEndGrow,
            })
        }}

        if(filterDone === 'endDate'){
            if(this.state.doneEndDateGrow){
            const done = this.state.done.sort((a,b) => {
            a = a.planEndDate;
            b = b.planEndDate;
            if(a < b) return -1;
            if(b < a) return 1;
            return 0;
        })
        this.doneTask = done.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
        this.setState({
            doneEndDateGrow: !this.state.doneEndDateGrow,
        })
        }else{
            const done = this.state.done.sort((a,b) => {
                a = a.planEndDate;
                b = b.planEndDate;
                if(a > b) return -1;
                if(b > a) return 1;
                return 0;
            })
            this.doneTask = done.map(task => <Task task={task} key={task.id} delete={this.props.delete} done={this.props.done}/>);
            this.setState({
            doneEndDateGrow: !this.state.doneEndDateGrow,
        })
        }
    }}

    render() {
    return (
        <> 
            <div className='container-tasks'>
                <div className='container-active'>
                    <h3>Zadania do wykonania</h3>
                    <div className='tasks'>
                        <div className='filter'>
                            <p>Sortuj według: </p>
                            <button name='endDate' style={this.state.filterActive === 'endDate' ? {background: 'rgb(255,150,150)'} : null} onClick={this.handlefilter}>daty zakończenia {this.state.filterActive==='endDate' ? <span style={!this.state.activeEndDateGrow ? null : {transform: 'rotate(180deg)'}}>^</span> : null}</button>
                            <button name='important' style={this.state.filterActive === 'important' ? {background: 'rgb(255,150,150)'} : null} onClick={this.handlefilter}>ważnośći {this.state.filterActive==='important' ? <span style={!this.state.activeImportantGrow ? null : {transform: 'rotate(180deg)'}}>^</span> : null}</button>
                            <button name='alphabet' style={this.state.filterActive === 'alphabet' || this.state.filterActive === 'alphabet decrease'  ? {background: 'rgb(255,150,150)'} : null} onClick={this.handlefilter}>alfabetycznie {this.state.filterActive==='alphabet' ? <span style={!this.state.activeAlphabetGrow ? null : {transform: 'rotate(180deg)'}}>^</span> : null}</button>
                        </div>
                        {this.activeTask}
                        {this.activeTask.length < 1 ? <p className='noTask'>Brak aktywnych zadań</p> : null}
                    </div>
                </div>
                <div className='container-done'>
                    <h3>Zadania zakończone</h3>
                    <div className='tasks'>
                    <div className='filter'>
                            <p>Sortuj według: </p>
                            <button name='endDate' style={this.state.filterDone === 'endDate' ? {background: 'rgb(150,255,150)'} : null} onClick={this.handleDonefilter}>daty zakończenia {this.state.filterDone==='endDate' ? <span style={!this.state.doneEndDateGrow ? null : {transform: 'rotate(180deg)'}}>^</span> : null}</button>
                            <button name='planEnd' style={this.state.filterDone === 'planEnd' ? {background: 'rgb(150,255,150)'} : null} onClick={this.handleDonefilter}>planowanej daty zakończenia {this.state.filterDone==='planEnd' ? <span style={!this.state.donePlanEndGrow ? null : {transform: 'rotate(180deg)'}}>^</span> : null}</button>
                            <button name='alphabet' style={this.state.filterDone === 'alphabet' || this.state.filterDone === 'alphabet decrease'  ? {background: 'rgb(150,255,150)'} : null} onClick={this.handleDonefilter}>alfabetycznie {this.state.filterDone ==='alphabet' ? <span style={!this.state.doneAlphabetGrow ? null : {transform: 'rotate(180deg)'}}>^</span> : null}</button>
                        </div>
                        {this.doneTask}
                        {this.doneTask.length < 1 ? <p className='noTask'>Brak zakończonych zadań</p> : null}
                    </div>
                </div>
            </div>
        </>
    );
}}

export default TaskList;    
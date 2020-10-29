import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: ''
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name] : event.target.value})
      }

    onSubmitHandler = event => {
        event.preventDefault();
        this.setState({task: ""});
        this.props.addTask(event, this.state.task)
    }

    render() {
        return(
        <form onSubmit={this.onSubmitHandler}>
            <input 
            type="text"
            name="task"
            placeholder="Type here"  
            value={this.state.task}
            onChange={this.handleInputChange}
            />
            <button>Add Task</button>
        </form>
          )
        }
    }

export default TodoForm
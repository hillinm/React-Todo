import React from 'react'

class Todo extends React.Component {
    render () {
        return(
            <div>
                <div onClick={()=>this.props.toggleTask(this.props.item.id)}
                className={`${this.props.item.completed ? "completed" : ""}`}
                >
                    {this.props.item.task}
                </div>
            </div>
        )
    }
}

export default Todo 
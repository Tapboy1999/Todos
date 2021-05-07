import React, { Component, PureComponent } from 'react'
import {connect} from 'react-redux'
import {deleteTodo , checkTodo} from '../actions'
import axios from 'axios'
class Item extends Component {
    
    constructor(props){
        super(props);
    }
    handleDelete = (_id) => {
        const action = deleteTodo(_id);
        this.props.dispatch(action);
        axios.post('http://localhost:8000/delete', {
            _id,
        }).then(function (response){
            console.log(response);
        }).catch(function (error){
            console.log(error);
        });
    }
    handleCheck = (_id) => {
        axios.post('http://localhost:8000/check',{
            _id,
        }).then(function (response){
            console.log(response.data);
        }).catch(function (error){
            console.log(error);
        });
        console.log(_id);
        const action = checkTodo(_id);
        this.props.dispatch(action);
    }
    render() {

        const {todos} = this.props;
        return (
            todos.map((todo, index) =>(
                <li className="todo-item" key={index}>
                    <div className="item-text">
                        <input name="check" type="checkbox" checked={todo.isComplete}  onClick={() => this.handleCheck(todo._id)}/><span className={ todo.isComplete ?"done":"undone"}> {todo.message}</span>
                    </div>
                    <button type="submit" id="delete" className="btn btn-danger" onClick={() => this.handleDelete(todo._id)}>Delete</button>
                </li>
            ))
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos.data,
})

export default connect(mapStateToProps)(Item)
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodo, loadTodo} from '../actions'
import axios from 'axios'
class AddTodo extends Component {
    constructor(props){
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.all = this.bind(this);
    }
    handleSubmit = (event) => { 
        event.preventDefault();
        let id = Math.random();
        let input = event.target.todoInput.value;
        if(input != ''){
            const action = addTodo(id,input,false);
            this.props.dispatch(action);
            event.target.todoInput.value="";
            axios.post('http://localhost:8000/create', {
                _id : id,
                message: input,
                isComplete: false,
            }).then(function (response){
                console.log(response);
            }).catch(function (error){
                console.log(error);
            });
        }
    }
    componentDidMount(props = this.props){
        // console.log(todos);
        axios.get('http://localhost:8000/').then(function (response) {
        // console.log(response.data);
            if(response && response.data?.length > 0){
                    const action = loadTodo(response?.data);
                    props.dispatch(action);
                // response.data.map((item, index) => {
                //     const action = loadTodo(item._id,item.message,item.isComplete);
                //     props.dispatch(action);
                // })
            }
        }).catch(function (error) {
            console.log(error);
        });
    }
    render() {
        const {todos} = this.props;
        // console.log(this.all);
        return (
            <div className="form-input">
                 <form onSubmit = {this.handleSubmit}>
                    <input className="form-control" type="text" name="todoInput"/>
                    <button className="add-btn btn btn-primary" type="submit" id="add">Add</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos.data,
})


export default connect(mapStateToProps)(AddTodo);
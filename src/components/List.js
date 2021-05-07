import React, { Component } from 'react'
import {connect} from 'react-redux'

import Item from './Item';
// import todos from '../reducers/todos';
class List extends Component {
    constructor(props){
        super(props);
    }
    render() {
        // console.log(this.props.todos)
        const {todos} = this.props;
        return (
            <div className="todo-list">
                <ul>
                    <Item />
                </ul>
            </div>
            
        )
    }
}
const mapStateToProps = (state) => ({
    todos: state.todos.data,
})
export default connect(mapStateToProps)(List);

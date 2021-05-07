const ADD_TODO = "ADD_TODO";
export const addTodo = (id,message,isComplete) => ({
    type: ADD_TODO,
    message,
    _id : id,
    isComplete,
});

const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    _id : id,
});
const CHECK_TODO = "CHECK_TODO";
export const checkTodo = (id) => ({
    type: CHECK_TODO,
    _id : id,
});
const CHECK_UPDATE = "CHECK_UPDATE";
export const checkUpdate = (id) => ({
    type: CHECK_UPDATE,
    _id : id,
})
const HANDLE_UPDATE = "HANDLE_UPDATE";
export const handleUpdate = (id, message) => ({
    type: HANDLE_UPDATE,
    message,
    _id : id,
})
const LOAD_TODO = "LOAD_TODO";
export const loadTodo = (data) => ({
    type: LOAD_TODO,
    data
})
const LOG_TODO = "LOG_TODO";
export const logTodo = (log) => ({
    type: LOG_TODO,
    log
})






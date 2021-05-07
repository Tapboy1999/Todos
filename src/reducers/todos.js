
const initialState = {
    data:[]
}
// const initialState = {
//     data: [
//         {
//             id: Math.random(),
//             message: 'Todo 1',
//             isComplete: false,
//         },
//         {
//             id: Math.random(),
//             message: 'Todo 2',
//             isComplete: false,
//         },
//         {
//             id: Math.random(),
//             message: 'Todo 3',
//             isComplete: false,
//         }
//     ],
// };
const todos = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD_TODO': 
            return {
                ...state,
                data: [
                    ...state.data,
                    {   
                        message: action.message,
                        _id: action._id,
                        isComplete: action.isComplete
                    }
                ]
            };
        case 'DELETE_TODO':
            const todos = state.data.filter((todo) => todo._id != action._id)
            return {
               ...state,
               data: todos
            };
        case 'CHECK_TODO':
            // const todo = state.data.map((todo) => todo.id == action.id)
            return {
                ...state,
                data : state.data.map(todo => todo._id === action._id ? ({...todo,isComplete: !todo.isComplete}) : todo)
            };
        case 'LOAD_TODO': 
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}


export default todos;
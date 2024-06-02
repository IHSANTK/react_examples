const initialState = {
    todo: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...state,
                todo: [...state.todo, { text: action.payload }]
            };
        case 'DELETE_DATA':
            return {
                ...state,
                todo: state.todo.filter((_, index) => index !== action.payload)
            };
        case 'UPDATED_DATA':
            console.log("bhbhjbh",action.payload.inputvalue);
            return {
                ...state,
                todo: state.todo.map((item, index) => 
                    index === action.payload.index ? { ...item, text: action.payload.inputvalue} : item
                )
            };
        default:
            return state;
    }
}

export default rootReducer;

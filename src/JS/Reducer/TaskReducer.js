import { ADD_TASK, EDIT_TASK} from "../Action-types/action-Type";

const initialState = {
    listTasks : [{id:1,text:"hello world from here"}],
}

const TaskReducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case ADD_TASK :
            return {...state, listTasks: [...state.listTasks,payload]}
        case EDIT_TASK :
            return {...state, listTasks: state.listTasks.map((el) =>
                el.id === payload.id ? {...el , text: payload.newTask} : el )}    


        default:
            return state
    }
}

export default TaskReducer;
import { GET_TASK_REQUEST, GET_TASK_SUCCESS, GET_TASK_FAILED } from '../constants';

const initialState = {
    taskArr: [],
    fetching: false,
    failed: false
};

export default function tasks(state = initialState, action) {

    switch (action.type) {
        case GET_TASK_REQUEST:
            return { ...state, failed:false, fetching: true };
        case GET_TASK_SUCCESS:
            return {
                ...state,
                taskArr: action.payload,
                failed: false,
                fetching: false
            };
        case GET_TASK_FAILED:
            return {
                ...state,
                taskArr: action.payload,
                failed: true,
                fetching: false
            };
        default:
            return state;
    }
}
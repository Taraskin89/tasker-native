import { GET_TASK_REQUEST, GET_TASK_SUCCESS, GET_TASK_FAILED } from '../constants';

import Data from '../../api/task.json'

import { loadData } from '../utils/load';

export function setTasks() {
    return (dispatch) => {
        dispatch({
            type: GET_TASK_REQUEST,
            payload: 'Please wait...!'
        });
        // loadData(url)
        //     .then(data => {
        //         dispatch({
        //             type: GET_TASK_SUCCESS,
        //             payload: data
        //         });
        //     })
        //     .catch(error => {
        //         dispatch({
        //             type: GET_TASK_FAILED,
        //             payload: error
        //         });
        //     })
        setTimeout(() => {
            let data = Data;
            dispatch({ type: GET_TASK_SUCCESS, payload: data });
        }, 2000);
        
    }

}

// fetch(url)
//     .then((data) => {
//         dispatch({
//             type: GET_TASK_SUCCESS,
//             payload: data.json()
//         });
//     })
//     .catch((error) => {
//         dispatch({
//             type: GET_TASK_FAILED,
//             payload: error
//         });
//     })
import { ADD_JOB, MODIFY_JOB, CLOSE_JOB, OPEN_JOB } from './Types'



export const addJob = job => {
    return {
        type: ADD_JOB,
        payload: job
    }
}

export const modifyJob = job => {
    return {
        type: MODIFY_JOB,
        payload: job
    }
}

export const closeJob = id => {
    return {
        type: CLOSE_JOB,
        payload: id
    }
}
export const openJob = id => {
    return {
        type: OPEN_JOB,
        payload: id
    }
}
import {DETAILS_FETCH_SUCCESS, DETAILS_FETCH_FAILED, PARTICULAR_DETAILS_SUCCESS, PARTICULAR_DETAILS_FAILED, DETAILS_DANGER_FAILED, DETAILS_DANGER_SUCCESS} from "../types"

export default (state, action) => {
    switch (action.type) {
        case DETAILS_FETCH_SUCCESS:
            return{
                ...state,
                stateWiseDetails: action.payload,
                errors: undefined
            }
        case DETAILS_FETCH_FAILED:
            return{
                 ...state,
                 errors: action.payload
            }
        case PARTICULAR_DETAILS_SUCCESS:
            return{
                ...state,
                particularStateDetails: action.payload,
                errors: undefined
            }
        case PARTICULAR_DETAILS_FAILED:
            return{
                ...state,
                errors: action.payload
            }
        case DETAILS_DANGER_SUCCESS:
            return{
                ...state,
                dangerStates: action.payload,
                errors: undefined
            }
        case DETAILS_DANGER_FAILED:
            return{
                ...state,
                errors: action.payload
            }
    }
}
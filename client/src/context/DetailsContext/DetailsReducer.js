import {DETAILS_FETCH_SUCCESS, DETAILS_FETCH_FAILED, PARTICULAR_DETAILS_SUCCESS, PARTICULAR_DETAILS_FAILED} from "../types"

export default (state, action) => {
    switch (action.type) {
        case DETAILS_FETCH_SUCCESS:
            return{
                ...state,
                stateWiseDetails: action.payload
            }
        case DETAILS_FETCH_FAILED:
            return{

            }
        case PARTICULAR_DETAILS_SUCCESS:
            return{
                ...state,
                particularStateDetails: action.payload
            }
        case PARTICULAR_DETAILS_FAILED:
            return{}
    }
}
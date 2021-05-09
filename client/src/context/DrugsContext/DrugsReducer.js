import {DRUG_ADD_FAILED, DRUG_ADD_SUCCESS, DRUG_BYID_FAILED, DRUG_BYID_SUCCESS, DRUG_FETCH_FAILED, DRUG_FETCH_SUCCESS} from '../types'

export default (state, action) => {
    switch (action.type) {
        case DRUG_FETCH_SUCCESS:
            return{
                ...state,
                alldrugs: action.payload,
                error: undefined
            }
        case DRUG_FETCH_FAILED:
            return{
                ...state,
                error: action.payload
            }
        case DRUG_ADD_SUCCESS:
            return{
                ...state,
                alldrugs: [...state.alldrugs, action.payload],
                error: undefined
            }
        case DRUG_ADD_FAILED:
            return{
                ...state,
                error: action.payload
            }
        case DRUG_BYID_SUCCESS:
            return{
                ...state,
                particularDrug: action.payload,
                error: undefined
            }
        case DRUG_BYID_FAILED:
            return{
               ...state,
               error: action.payload
            }
    }
}
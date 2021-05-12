import {BIOMODEL_FETCH_FAILED, BIOMODEL_FETCH_SUCCESS, ACCESSION_ID_FAILED, ACCESSION_ID_SUCCESS, BIOMODEL_GENESYMBOL_FAILED, BIOMODEL_GENESYMBOL_SUCCESS} from "../types"

export default (state, action) => {
    switch (action.type) {
        case BIOMODEL_FETCH_SUCCESS:
            return{
                ...state,
                biomodels: action.payload,
                error: undefined
            }
        case BIOMODEL_FETCH_FAILED:
            return{
                ...state,
                error: action.payload
            }
        case BIOMODEL_GENESYMBOL_SUCCESS:
            return{
                ...state,
                geneSymbol: action.payload,
                error: undefined
            }
        case BIOMODEL_FETCH_FAILED:
            return{
                ...state,
                error: action.payload
            }
        case ACCESSION_ID_SUCCESS: 
            return{
                ...state,
                accId: action.payload,
                error: undefined
            }
        case ACCESSION_ID_FAILED:
            return{
                ...state,
                error: undefined
            }
        default:
            break;
    }
}
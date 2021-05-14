import React, { useReducer } from 'react'
import BioModelContext from "./BioModelContext"
import BioModelReducer from "./BioModelReducer"
import axios from "axios"
import {BIOMODEL_FETCH_FAILED, BIOMODEL_FETCH_SUCCESS, BIOMODEL_GENESYMBOL_FAILED, BIOMODEL_GENESYMBOL_SUCCESS, ACCESSION_ID_FAILED, ACCESSION_ID_SUCCESS} from "../types"


const BioModelState = (props) => {
    const initialState = {
        biomodels: [],
        geneSymbol: [],
        accId: {},
        error: {}
    }

    const [state, dispatch] = useReducer(BioModelReducer, initialState)

    //Fetch all Biomodels
    const FetchData = async() => {
        try {
            const {data} = await axios.get("http://localhost:5000/api/v1/bio/getdetails");
            dispatch({
                type: BIOMODEL_FETCH_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: BIOMODEL_FETCH_FAILED,
                payload: err
            })
        }
    }

    //Fetch Model By gene symbol
    const FetchByGene = async(id) => {
        try {
            const {data} = await axios.get(`http://localhost:5000/api/v1/bio/getdetailsbygene/${id}`);
            dispatch({
                type: BIOMODEL_GENESYMBOL_SUCCESS,
                payload: data
            })
        } catch (err) {
           dispatch({
               type: BIOMODEL_GENESYMBOL_FAILED,
               payload: err
           })   
        }
    }

    //Fetch by accession id:
    const FetchByAcId = async(id) => {
        try {
            const {data} = await axios.get(`http://localhost:5000/api/v1/bio/getdetails/${id}`)
            dispatch({
                type: ACCESSION_ID_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: ACCESSION_ID_FAILED,
                payload: err
            })
        }
    }
    return (
        <BioModelContext.Provider value={{
            biomodels: state.biomodels,
            geneSymbol: state.geneSymbol,
            accId: state.accId,
            error: state.error,
            FetchData,
            FetchByAcId,
            FetchByGene
        }}>
            {props.children}
        </BioModelContext.Provider>
    )
}

export default BioModelState

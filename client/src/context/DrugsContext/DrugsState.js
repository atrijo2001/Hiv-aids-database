import React, {useReducer} from 'react';
import DrugsContext from "../DrugsContext/DrugsContext";
import DrugsReducer from "../DrugsContext/DrugsReducer";
import {DRUG_FETCH_FAILED, DRUG_FETCH_SUCCESS, DRUG_BYID_FAILED, DRUG_BYID_SUCCESS, DRUG_ADD_FAILED, DRUG_ADD_SUCCESS} from "../types";
import axios from "axios";

const DrugsState = (props) => {
    const initialState = {
        alldrugs: [],
        particularDrug: {},
        error: {}
    }

    const [state, dispatch] = useReducer(DrugsReducer, initialState);

    //Fetch all drugs from the database
    const FetchDrugs = async() =>{
        try {
            const {data} = await axios.get('http://localhost:5000/api/v1/drug');
            dispatch({
                type: DRUG_FETCH_SUCCESS,
                payload: data
            })   
        } catch (err) {
            dispatch({
                type: DRUG_FETCH_FAILED,
                payload: err
            })
        }
    }

    //Fetch Drugs by id
    const FetchDrugsById = async(id) =>{
        try {
            const {data} = await axios.get(`http://localhost:5000/api/v1/drug/${id}`);
            dispatch({
                type: DRUG_BYID_SUCCESS,
                payload: data
            })    
        } catch (err) {
            dispatch({
                type: DRUG_BYID_FAILED,
                payload: err
            })
        }
    }

    //Add Drug
    const AddDrug = async(formData) =>{
        try {
            const {data} = await axios.post('http://localhost:5000/api/v1/drug', formData, {
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                type: DRUG_ADD_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: DRUG_ADD_FAILED,
                payload: err
            })
        }
    }
    return (
        <DrugsContext.Provider value={{
            alldrugs: state.alldrugs,
            particularDrug: state.particularDrug,
            error: state.error,
            FetchDrugs,
            FetchDrugsById,
            AddDrug
        }}>
            {props.children}
        </DrugsContext.Provider>
    )
}

export default DrugsState

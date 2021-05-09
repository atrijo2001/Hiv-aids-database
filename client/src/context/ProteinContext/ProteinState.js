import React, { useReducer } from 'react'
import axios from "axios";
import ProteinContext from "./ProteinContext";
import ProteinReducer from "./ProteinReducer";
import {PROTEIN_ADD_FAILED, PROTEIN_ADD_SUCCESS, PROTEIN_FETCH_FAILED, PROTEIN_FETCH_SUCCESS, PROTEIN_ID_FAILED, PROTEIN_ID_SUCCESS} from "../types"

const ProteinState = (props) => {
    const initialState = {
        allProteins: [],
        protein: {},
        error: {}
    }
    const [state, dispatch] = useReducer(ProteinReducer, initialState);

    //Fetch all the proteins
    const FetchProteins = async(pdb, structure)=>{
        try {
            if(pdb !== ''){
                const {data} = await axios.get("http://localhost:5000/api/v1/getprotein", {
                    params:{
                        "pdbAccessionId": pdb,
                    }
                });
                dispatch({
                    type: PROTEIN_FETCH_SUCCESS,
                    payload: data
                })
            } else if(structure!==''){
                const {data} = await axios.get("http://localhost:5000/api/v1/getprotein",{
                    params:{
                        "structureDetails": structure
                    }
                });
                dispatch({
                    type: PROTEIN_FETCH_SUCCESS,
                    payload: data
                })
            } else{
                const {data} = await axios.get("http://localhost:5000/api/v1/getprotein");
                dispatch({
                    type: PROTEIN_FETCH_SUCCESS,
                    payload: data
                })
            }
        } catch (err) {
            dispatch({
                type: PROTEIN_FETCH_FAILED,
                payload: err
            })
        }
    }

    //Fetch Proteins by their id
    const FetchProteinById = async(id) => {
        try {
            const {data} = await axios.get(`http://localhost:5000/api/v1/getproteinbyid/${id}`)
            dispatch({
                type: PROTEIN_ID_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: PROTEIN_ID_FAILED,
                payload: err
            })
        }
    }

    //Add proteins to the database
    const AddProtein = async(formData) => {
        try {
            const {data} = await axios.post("http://localhost:5000/api/v1/createprotein", formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            dispatch({
                type: PROTEIN_ADD_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: PROTEIN_ADD_FAILED,
                payload: err
            })
        }
    }

    return (
        <ProteinContext.Provider value={{
            allProteins: state.allProteins,
            protein: state.protein,
            error: state.error,
            FetchProteins,
            FetchProteinById,
            AddProtein
        }}>
            {props.children}
        </ProteinContext.Provider>
    )
}

export default ProteinState

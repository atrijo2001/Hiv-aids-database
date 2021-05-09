import axios from 'axios';
import React, {useReducer} from 'react';
import DetailsContext from "./DetailsContext";
import DetailsReducer from "./DetailsReducer";
import {DETAILS_FETCH_SUCCESS, DETAILS_FETCH_FAILED, PARTICULAR_DETAILS_FAILED, PARTICULAR_DETAILS_SUCCESS, DETAILS_DANGER_FAILED, DETAILS_DANGER_SUCCESS} from "../types"

const DetailsState = (props) => {
    const initialState = {
        stateWiseDetails: [],
        particularStateDetails: {},
        dangerStates: [],
        errors: {}
    }

    const [state, dispatch] = useReducer(DetailsReducer, initialState);
    
    //Fetch All the details
    const fetchDetails = async()=>{
        try {
            const {data} = await axios.get("http://localhost:5000/api/v1/details/getdetails");
            dispatch({
                type: DETAILS_FETCH_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: DETAILS_FETCH_FAILED,
                err
            })
        }
    }

    //Fetch Details of a Particular state
    const FetchStateDetails = async(name) => {
        try {
            const {data} = await axios.get(`http://localhost:5000/api/v1/details/getdetails/${name}`);
            dispatch({
                type: PARTICULAR_DETAILS_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                PARTICULAR_DETAILS_FAILED,
                err
            })
        }
    }

    //Fetch All the danger states
    const FetchDangerDetails = async()=>{
        try {
            const {data} = await axios.get("http://localhost:5000/api/v1/details/alarmingservices");
            dispatch({
                type: DETAILS_DANGER_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: DETAILS_FETCH_FAILED,
                payload: err
            })
        }
    }
    return (
        <DetailsContext.Provider value={{
            stateWiseDetails: state.stateWiseDetails,
            particularStateDetails: state.particularStateDetails,
            dangerStates: state.dangerStates,
            fetchDetails,
            FetchStateDetails
        }}>
            {props.children}
        </DetailsContext.Provider>
    )
}

export default DetailsState

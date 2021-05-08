import React, { useContext, useEffect } from 'react'
import StateContext from "../../context/StateContext/StateContext";


const StateWiseCases = () => {
    const stateContext = useContext(StateContext);
    const {getCases, stateWiseCases} = stateContext;

    useEffect(()=>{
        getCases();
    }, [])

    if(stateWiseCases.length > 0){
        console.log(stateWiseCases)
    }
    return (
        <div>
            henlo
        </div>
    )
}

export default StateWiseCases

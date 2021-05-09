import React, { useContext, useEffect } from 'react'
import DrugsContext from "../../../context/DrugsContext/DrugsContext"
import Spinner from "../../UI/Spinner"
import DrugComp from "./DrugComp"

const GetAllDrugs = () => {
    const drugContext = useContext(DrugsContext);
    const {alldrugs, FetchDrugs} = drugContext;

    useEffect(()=>{
        FetchDrugs();
    }, [])
    return (
        <div>
            {alldrugs? alldrugs.map((drug, key)=> <DrugComp key={key} drug={drug}/>):<Spinner/>}
        </div>
    )
}

export default GetAllDrugs

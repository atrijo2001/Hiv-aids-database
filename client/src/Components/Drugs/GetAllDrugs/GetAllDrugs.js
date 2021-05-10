import React, { useContext, useEffect } from 'react'
import DrugsContext from "../../../context/DrugsContext/DrugsContext"
import "./drug.css"

import Spinner from "../../UI/Spinner"
import DrugComp from "./DrugComp"
import Header from "../../UI/Header";
import Footer from "../../UI/Footer";

const GetAllDrugs = () => {
    const drugContext = useContext(DrugsContext);
    const {alldrugs, FetchDrugs} = drugContext;

    useEffect(()=>{
        FetchDrugs();
    }, [])
    return (
        <>
            <Header/>
            <div className="bg">
            {alldrugs? alldrugs.map((drug, key)=> <DrugComp key={key} drug={drug}/>):<Spinner/>}
            </div>
            <Footer/>
        </>
    )
}

export default GetAllDrugs

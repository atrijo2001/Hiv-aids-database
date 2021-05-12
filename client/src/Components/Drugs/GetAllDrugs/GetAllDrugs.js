import React, { useContext, useEffect } from 'react'
import DrugsContext from "../../../context/DrugsContext/DrugsContext"
import "./drug.css"

import Spinner from "../../UI/Spinner"
import DrugComp from "./DrugComp"
import Header from "../../UI/Header";
import Footer from "../../UI/Footer";

import {Container, Card} from "@material-ui/core"

const GetAllDrugs = () => {
    const drugContext = useContext(DrugsContext);
    const {alldrugs, FetchDrugs} = drugContext;

    useEffect(()=>{
        FetchDrugs();
    }, [])
    return (
        <>
            <Header/>
            <div style={{
				background: 'linear-gradient(90deg, #221E1B -1.67%, #262320 98.54%)',
			}}>
            {alldrugs? alldrugs.map((drug, key)=>
             <Container>
                 <div style={{textAlign: 'center', marginTop: '1rem'}}>
                    <Card>
                        <DrugComp key={key} drug={drug}/>
                    </Card>
                 </div>
             </Container>
             ):<Spinner/>}
            </div>
            <Footer/>
        </>
    )
}

export default GetAllDrugs

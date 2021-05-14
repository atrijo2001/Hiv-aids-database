import React, { useEffect } from 'react'
import {useContext} from "react";

import Header from "../../UI/Header";
import Footer from "../../UI/Footer";
import BioModelComp from "./BioModelComp";

import BioModelContext from "../../../context/BioModelContext/BioModelContext";

import {Card, Container} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    cardStyles: {
        marginTop: '1rem',
        borderRadius: '8px',
    }
}));

const GetBiomodel = () => {
    const classes = useStyles()
    const biomodelContext = useContext(BioModelContext);
    const {FetchData, biomodels} = biomodelContext
    useEffect(()=> {
       FetchData()
    }, [])

    return (
        <>
           <Header/>
            <h1 style={{textAlign: 'center', fontFamily: 'Bowlby One SC'}}>Structure and Sequence Details</h1>
            {biomodels.length>0? biomodels.map((biomodel, key)=>
            (
                <Container>
                    <Card key={key} className={classes.cardStyles}>
                        <BioModelComp biomodel={biomodel}/>
                     </Card>
                </Container>
            )): ''}
           <Footer/>
        </>
    )
}

export default GetBiomodel

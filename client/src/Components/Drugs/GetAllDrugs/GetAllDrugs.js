import React, { useContext, useEffect } from 'react'
import DrugsContext from "../../../context/DrugsContext/DrugsContext"

import Spinner from "../../UI/Spinner"
import DrugComp from "./DrugComp"
import Header from "../../UI/Header";
import Footer from "../../UI/Footer";

import {Container, Card} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    cardStyles: {
        marginTop: '1rem',
        borderRadius: '8px',
    }
}));

const GetAllDrugs = () => {
    const drugContext = useContext(DrugsContext);
    const {alldrugs, FetchDrugs} = drugContext;

    const classes = useStyles()

    useEffect(()=>{
        FetchDrugs();
    }, [])
    return (
        <div style={{background: 'linear-gradient(90deg, #221E1B -1.67%, #262320 98.54%)'}}>
            <Header/>
            <Container>
                {alldrugs? alldrugs.map((drug, key)=>
                <Container>
                    <div style={{textAlign: 'center', marginTop: '1rem'}}>
                        <Card className={classes.cardStyles}>
                            <DrugComp key={key} drug={drug}/>
                        </Card>
                    </div>
                </Container>
                ):<Spinner/>}
            </Container>
            <Footer/>
        </div>
    )
}

export default GetAllDrugs

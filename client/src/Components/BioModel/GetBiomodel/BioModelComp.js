import React from 'react'
import {Typography, Container} from "@material-ui/core"

const BioModelComp = ({biomodel}) => {
    const {accessionId, clinicalSignificance, conditions, geneSymbol, proteinChange} = biomodel
    const {clinVarLink, varId} = biomodel.variation
    const {fastaLink, fullName, geneType} = biomodel.gene

    console.log(biomodel)
    return (
        <div style={{textAlign: 'center'}}>
            <Container>
                <Typography variant='p'>Accession Id: {accessionId}</Typography>
                <br/>
                <Typography variant='p'>Clinical Significance: {clinicalSignificance}</Typography>
                <br/>
                <Typography variant='p'>Conditions: {conditions}</Typography>
                <br/>
                <Typography variant='p'>Protein Change: {proteinChange}</Typography>
                <h3 style={{textAlign: 'center', marginBottom: '1px'}}>Variation Information</h3>
                <a href={clinVarLink}>Clinvar Link</a>
                <br />
                <Typography variant='p'>Var Id: {varId}</Typography>
                <br/>
                <h3 style={{textAlign: 'center', marginBottom: '1px'}}>Gene Information</h3>
                <Typography variant='p'>Full Name: {fullName}</Typography>
                <br />
                <Typography variant='p'>Gene Type: {geneType}</Typography>
                <br />
                <a href={fastaLink}>Fasta Link</a>
                <br />
            </Container>
        </div>
    )
}

export default BioModelComp

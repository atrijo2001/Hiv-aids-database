import Header from "../../UI/Header"
import Footer from "../../UI/Footer"
import TextError from './TextError'

import {Container, Button} from "@material-ui/core"
import {ErrorMessage, Field, Form, Formik, FieldArray} from "formik"
import * as Yup from "yup"
import ProteinContext from "../../../context/ProteinContext/ProteinContext"
import { useContext } from "react"

const AddProteins = () => {
    const proteinContext = useContext(ProteinContext)
    const {AddProtein} = proteinContext
    const initialValues = {
        pdbAccessionId: "",
        structureDetails: "",
        releaseDate: "",
        method: "",
        macromolecules: [""],
        uniqueLigands: "",
        image: ""
    }

    //Call the add Protein function on submit
    const onSubmit = async(values) => {
        let data = {
            // pdbAccessionId: values.pdbAccessionId,
            // structureDetails: values.structureDetails,
            // releaseDate: values.releaseDate,
            // method: values.method,
            // macromolecules: values.macromolecules,
            // uniqueLigands: values.uniqueLigands,
            // image: values.image
            pdbAccessionId: "1JLC",
            structureDetails: "CRYSTAL STRUCTURE OF Y181C MUTANT HIV-1 REVERSE TRANSCRIPTASE IN COMPLEX WITH PETT-2",
            releaseDate: "2001-10-03",
            method: "X-RAY DIFFRACTION 3 Å",
            organism: "HIV-1 M:B_HXB2R",
            macromolecules: ["HIV-1 RT A-chain (protein)","HIV-1 RT B-chain (protein)"],
            uniqueLigands: "FTC",
            image: "https://cdn.rcsb.org/images/structures/jl/1jlc/1jlc_assembly-1.jpeg"
        }
        const res = await AddProtein(data)
        console.log(res)
    }

    //Validate the values
    const validationSchema = Yup.object({
        pdbAccessionId: Yup.string().required('Required'),
        structureDetails: Yup.string().required('Required'),
        method: Yup.string().required('Required'),
        uniqueLigands: Yup.string().required('Required'),
        image: Yup.string().required('Required')
    })
    return (
        <div>
            <Header/>
            <Container>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnBlur='false' validareOnChange='false'>
                    <Form>
                    <div className="form-aontrol">
                        <label htmlFor="pdbAccessionId">PDB Accession ID:</label>
                        <Field type="text" id="pdbAccessionId" name="pdbAccessionId"/>
                        <ErrorMessage name="pdbAccessionId" component={TextError}/>
                    </div>
                    <div className="form-aontrol">
                        <label htmlFor="structureDetails">Structure Details:</label>
                        <Field type="text" id="structureDetails" name="structureDetails"/>
                        <ErrorMessage name="structureDetails" component={TextError}/>
                    </div>
                    <div className="form-aontrol">
                        <label htmlFor="releaseDate">Release Date</label>
                        <Field type="date" id="releaseDate" name="releaseDate"/>
                    </div>

                    <div className="form-aontrol">
                        <label htmlFor="method">Method:</label>
                        <Field type="text" id="method" name="method"/>
                        <ErrorMessage name="method" component={TextError}/>
                    </div>

               <FieldArray name="macromolecules">
                    {
                        (fieldArrayProps)=>{
                        const {push, remove, form} = fieldArrayProps
                        const {values} = form
                        const {macromolecules} = values
                        return(
                            <div>
                                {macromolecules.map((macromolecule, idx)=>(
                                    <div key={idx}>
                                        <Field name={`macromolecules[${idx}]`}/>
                                        <button onClick={()=>remove(idx)}>-</button>
                                        <button onClick={()=>push('')}>+</button>
                                    </div>
                                ))}
                            </div>
                        )
                        }
                    }
                </FieldArray>
                    <div className="form-aontrol">
                        <label htmlFor="uniqueLigands">Unique Ligands:</label>
                        <Field type="text" id="uniqueLigands" name="uniqueLigands"/>
                        <ErrorMessage name="uniqueLigands" component={TextError}/>
                    </div>
                    <div className="form-aontrol">
                        <label htmlFor="image">Image Url:</label>
                        <Field type="text" id="image" name="image"/>
                        <ErrorMessage name="image" component={TextError}/>
                    </div>
                    <Button type='submit'>Submit</Button>
                    </Form>
                </Formik>
            </Container>
            <Footer/>
        </div>
    )
}

export default AddProteins

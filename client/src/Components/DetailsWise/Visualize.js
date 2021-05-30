import Header from "../UI/Header"
import Footer from "../UI/Footer"

import DetailsContext from "../../context/DetailsContext/DetailsContext"


import { useContext, useEffect } from "react"
import {Container, Row, Col, Card} from "react-bootstrap"

import {VictoryPie} from "victory"

const Visualize = ({match}) => {
    const detailsContext = useContext(DetailsContext)
    const {FetchDetailById, detail} = detailsContext
    useEffect(()=>{
        FetchDetailById(match.params.id)
    }, [match])
    const {adults, casesIn1000s, incidencesPer1000sUninfected, livingWithHivIn1000s, mortality, state} = detail
    return (
        <>
        <Header/>
            <Container>
                <h3 className="text-center my-4">State: {state}</h3>
                <Row>
                    <Col md='6' sm='12'>
                        <Card>
                            <Row>
                                <Col md='6'>
                                <Card.Header>
                                <h4 className='text-center'>Adults Infected:</h4>
                                </Card.Header>
                                <Card.Body>
                                    <VictoryPie  colorScale={["cyan", "navy" ]} data={[
                                        { x: `Male`, y: adults.male },
                                        { x: `Female`, y: adults.female }
                                    ]}/>
                                </Card.Body>
                                <Card.Footer>
                                    <p className='text-center'>Male: {adults.male}%</p>
                                    <p className='text-center'>Female: {adults.female}%</p>
                                </Card.Footer>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        <Footer/>
        </>
    )
}

export default Visualize

import {Container} from "@material-ui/core"

const DetailsComp = ({detail}) => {
    const {state, adults, incidencesPer1000sUninfected, livingWithHivIn1000s, mortality, services} = detail
    return (
        <Container>
            <div style={{textAlign: 'center'}}>
                <h3>State: {state}</h3>
                
                <h4>Percentage of adults Infected:</h4>
                <p>Male: {adults.male}</p>
                <p>Male: {adults.female}</p>

                <h4>Incidences per 1000 uninfected people:</h4>
                <p>Male: {incidencesPer1000sUninfected.male}</p>
                <p>Male: {incidencesPer1000sUninfected.female}</p>

                <h4>Cases of HIV every 1000 people:</h4>
                <p>Male: {livingWithHivIn1000s.male}</p>
                <p>Male: { livingWithHivIn1000s.female}</p>
                <p>Male: { livingWithHivIn1000s.children}</p>

                <h4>Mortality:</h4>
                <p>Male: {mortality.male}</p>
                <p>Male: { mortality.female}</p>
                <p>Male: { mortality.children}</p>

            </div>
        </Container>
    )
}

export default DetailsComp

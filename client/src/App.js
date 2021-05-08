import StateWiseCases from './Components/StateWise/StateWiseCases'
import StateState from "./context/StateContext/StateState"
import  DetailsState from "./context/DetailsContext/DetailsState"
import AllDetails from "./Components/DetailsWise/AllDetails/AllDetails"
import StateWiseDetails from "./Components/DetailsWise/StateWiseDetails/StateWiseDetails"

const App = () => {
  return (
    <StateState>
      <DetailsState>
        <StateWiseDetails/>
      </DetailsState>
    </StateState>
  )
}

export default App

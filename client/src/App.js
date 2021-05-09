import StateState from "./context/StateContext/StateState"
import  DetailsState from "./context/DetailsContext/DetailsState"
import DrugState from "./context/DrugsContext/DrugsState"
import StateWiseDetails from "./Components/DetailsWise/StateWiseDetails/StateWiseDetails"

const App = () => {
  return (
    <StateState>
      <DetailsState>
        <DrugState>
          <StateWiseDetails/>
        </DrugState>
      </DetailsState>
    </StateState>
  )
}

export default App

import StateState from "./context/StateContext/StateState"
import  DetailsState from "./context/DetailsContext/DetailsState"
import DrugState from "./context/DrugsContext/DrugsState"
import ProteinState from "./context/ProteinContext/ProteinState"

import StateWiseDetails from "./Components/DetailsWise/StateWiseDetails/StateWiseDetails"
import GetAllDrugs from "./Components/Drugs/GetAllDrugs/GetAllDrugs"
import {BrowserRouter, Route, Switch} from "react-router-dom"

const App = () => {
  return (
    <StateState>
      <DetailsState>
        <DrugState>
          <ProteinState>
          <BrowserRouter>
            <Switch>
              <Route exact path='/statewisedetails' component={StateWiseDetails}/>
              <Route exact path='/getalldrugs' component={GetAllDrugs}/>
            </Switch>
          </BrowserRouter>
          </ProteinState>
        </DrugState>
      </DetailsState>
    </StateState>
  )
}

export default App

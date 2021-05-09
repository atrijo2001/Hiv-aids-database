import StateState from "./context/StateContext/StateState"
import  DetailsState from "./context/DetailsContext/DetailsState"
import DrugState from "./context/DrugsContext/DrugsState"
import ProteinState from "./context/ProteinContext/ProteinState"
import GeneState from "./context/GeneContext/GeneState"

import StateWiseDetails from './Components/DetailsWise/StateWiseDetails/StateWiseDetails';
import GetAllDrugs from './Components/Drugs/GetAllDrugs/GetAllDrugs';
import GetAllProteins from './Components/Protein/GetAllProtein/GetAllProtein';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/UI/Homepage';
import Scientist from './Components/UI/Scientist';
import Layman from './Components/UI/Layman';

const App = () => {
	return (
		<StateState>
			<DetailsState>
				<DrugState>
					<ProteinState>
						<BrowserRouter>
							<Switch>
								<Route exact path='/' component={Homepage} />
								<Route exact path='/scientist' component={Scientist} />
								<Route exact path='/layman' component={Layman} />
								<Route
									exact
									path='/statewisedetails'
									component={StateWiseDetails}
								/>
								<Route exact path='/getalldrugs' component={GetAllDrugs} />
								<Route
									exact
									path='/getallproteins'
									component={GetAllProteins}
								/>
							</Switch>
						</BrowserRouter>
					</ProteinState>
				</DrugState>
			</DetailsState>
		</StateState>
	);
};

export default App;

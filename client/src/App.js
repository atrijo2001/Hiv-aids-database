import StateState from './context/StateContext/StateState';
import DetailsState from './context/DetailsContext/DetailsState';
import DrugState from './context/DrugsContext/DrugsState';
import ProteinState from './context/ProteinContext/ProteinState';
import GeneState from './context/GeneContext/GeneState';
import BioModelState from './context/BioModelContext/BioModelContext';

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
						<GeneState>
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
									<Route
										exact
										path='/scientist/getalldrugs'
										component={GetAllDrugs}
									/>
									<Route
										exact
										path='/scientist/getallproteins'
										component={GetAllProteins}
									/>
								</Switch>
							</BrowserRouter>
						</GeneState>
					</ProteinState>
				</DrugState>
			</DetailsState>
		</StateState>
	);
};

export default App;

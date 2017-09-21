import React, { Component } from 'react';
import SoundStudioPage from './components/SoundStudioView/SoundStudioPage';
import IndexPage from './components/IndexView/IndexPage';
import LibraryPage from './components/LibraryView/LibraryPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import getSongs from './requests/getSongs';
import getSongsProcess from './redux/thunks/getSongsProcess';
import LibraryPageContainer from './redux/containers/LibraryPageContainer';

import setupStore from './redux/setupStore';
import { Provider } from 'react-redux';

const store = setupStore();

class App extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		// getSongsProcess();
		// replace with getSongsProcess thunk
		getSongs({
			databaseId: 'appxhHjmck1PuVaSU',
			token: 'keymBy1TajObCCmUW'
		}).then(data => {
			this.setState({ data });
		});
	}

	updateData = () => {
		// replace with getSongsProcess thunk
		getSongs({
			databaseId: 'appxhHjmck1PuVaSU',
			token: 'keymBy1TajObCCmUW'
		}).then(data =>
			this.setState({
				data
			})
		);
	};

	render() {
		return (
			<div className="App">
				<Provider store={store}>
					<Router>
						<Switch>
							<Route exact path="/" component={IndexPage} />
							<Route
								exact
								path="/studio"
								render={() => {
									return (
										<SoundStudioPage
											song={{
												melody: [
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
													[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
												],
												info: { title: '', description: '' }
											}}
											notes={[
												'C5',
												'B4',
												'A4',
												'G4',
												'F4',
												'E4',
												'D4',
												'C4',
												'B3',
												'A3',
												'G3',
												'F3',
												'E3',
												'D3',
												'C3'
											]}
											onSelect={this.onSelect}
											instruments={['Synth']}
											onReplay={this.onReplay}
											onClear={this.onClear}
											onSave={this.onSave}
											onDelete={this.onDelete}
											chooseInstrument={this.chooseInstrument}
											updateData={this.updateData}
											data={this.state.data}
										/>
									);
								}}
							/>
							<Route
								exact
								path="/library"
								render={() => {
									return <LibraryPageContainer songs={this.state.data} />;
								}}
							/>
							<Route
								exact
								path="/studio/:songId"
								render={({ match }) => {
									const id = match.params.songId;
									return (
										<SoundStudioPage
											song={
												this.state.data.find(song => song.id === id)
													? this.state.data.find(song => song.id === id)
													: {}
											}
											songId={match.params.songId}
											notes={[
												'C5',
												'B4',
												'A4',
												'G4',
												'F4',
												'E4',
												'D4',
												'C4',
												'B3',
												'A3',
												'G3',
												'F3',
												'E3',
												'D3',
												'C3'
											]}
											onSelect={this.onSelect}
											instruments={['Synth']}
											onReplay={this.onReplay}
											onClear={this.onClear}
											onSave={this.onSave}
											onDelete={this.onDelete}
											chooseInstrument={this.chooseInstrument}
											updateData={this.updateData}
											data={this.state.data}
										/>
									);
								}}
							/>
							<Route component={NotFoundPage} />
						</Switch>
					</Router>
				</Provider>
			</div>
		);
	}
}

export default App;

import { connect } from 'react-redux';
import SoundStudioPage from '../../components/SoundStudioView/SoundStudioPage';
import getSongsProcess from '../thunks/getSongsProcess';
import getSongProcess from '../thunks/getSongProcess';
import updateSongProcess from '../thunks/updateSongProcess';
import deleteSongProcess from '../thunks/deleteSongProcess';
import createSongProcess from '../thunks/createSongProcess';
import melodyToString from '../../requests/utils/melodyToString';

import { compose, lifecycle } from 'recompose';

function mapStateToProps(state, ownProps) {
	return {
		song: ownProps.song
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	console.log(ownProps);
	return {
		onMount: () => {
			dispatch(getSongsProcess());
		},
		onReceiveProps: nextProps => {
			dispatch({ type: 'GET_SONG', song: nextProps.song });
		},
		chooseInstrument: instrument => {
			console.log(instrument);
		},
		onClear: id => {
			if (id) {
				dispatch(getSongProcess(id));
			} else {
				dispatch({ type: 'CLEAR_ALL' });
			}
		},
		onSave: (song, id) => {
			if (id) {
				// updatesong thunk
				const update = melodyToString(song.melody);
				song = { ...song, melody: update };
				dispatch(updateSongProcess(id, song));
			} else {
				// createSong thunk
				dispatch(createSongProcess(song));
			}
		},
		onDelete: songId => {
			dispatch(deleteSongProcess(songId));
		},
		onEditForm: changes => {
			if (changes.title !== undefined) {
				// dispatch CHANGE_TITLE
				dispatch({ type: 'CHANGE_TITLE', title: changes.title });
			} else {
				// dispatch CHANGE_DESCRIPTION
				dispatch({ type: 'CHANGE_DESCRIPTION', description: changes.description });
			}
		}
	};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifeCycle = lifecycle({
	componentDidMount() {
		this.props.onMount();
	},
	componentWillReceiveProps(nextProps) {
		this.props.onReceiveProps();
	}
});

export default compose(connectToStore, withLifeCycle)(SoundStudioPage);

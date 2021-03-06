import getSong from '../../requests/getSong';

export default function getSongProcess(id) {
	return (dispatch, getState, env) => {
		const { token } = getState();
		return getSong(id, {
			baseUrl: env.BASE_URL,
			token
		}).then(song => {
			dispatch({ type: 'GET_SONG', song });
			return song;
		});
	};
}

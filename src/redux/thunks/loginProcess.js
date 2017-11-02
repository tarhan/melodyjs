import login from '../../requests/users/login';
import decode from 'jwt-decode';
import getUser from '../../requests/users/getUser';
import { defer } from 'lodash.defer';

export default function loginProcess({ userName, password }, history) {
	return async (dispatch, getState, env) => {
		try {
			const { token } = await login({ userName, password }, { baseUrl: env.BASE_URL });
			localStorage.setItem('token', token);
			const { sub: userId } = decode(token);
			const user = await getUser(userId, { baseUrl: env.BASE_URL, token });

			// dispatch('LOGIN_USER', user);
			console.log('HEREEEEE', user);
			defer(() => {
				history.push('/library');
			});
		} catch (error) {
			console.error(error);
			localStorage.removeItem('token');
		}
	};
}

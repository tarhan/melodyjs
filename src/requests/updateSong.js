import recordToSong from './utils/recordToSong';

export default function updateNote(id, update, { databaseId, token }) {
	return fetch(`https://api.airtable.com/v0/${databaseId}/notes/${id}`, {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			fields: { song: update }
		})
	})
		.then(response => response.json())
		.then(record => recordToSong(record).song);
}
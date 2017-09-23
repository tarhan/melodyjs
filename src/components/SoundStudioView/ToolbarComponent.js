import React from 'react';
import handleReplay from 'helperFunctions/handleReplay';

export default function ToolbarComponent({
	songId,
	song,
	onReplay,
	onClear,
	onSave,
	onDelete,
	info,
	passChord,
	playingChord
}) {
	function _handleReplay() {
		handleReplay(song, passChord);
	}

	// fetch current song
	function _handleClear() {
		onClear(songId);
	}

	// send changes to api
	function _handleSave(event) {
		event.preventDefault();
		onSave(song, songId);
	}

	// delete song from api
	function _handleDelete() {
		onDelete(songId);
	}

	return (
		<div className="ToolbarComponent">
			<h1>Options</h1>
			<button
				className="action-button action-button-replay"
				onClick={_handleReplay}
				disabled={playingChord}>
				{' '}PLAY SONG{' '}
			</button>

			{songId
				? <div className="ToolbarComponent">
						<button className="action-button action-button-save" onClick={_handleSave}>
							{' '}SAVE CHANGES{' '}
						</button>
						<button className="action-button action-button-undo" onClick={_handleClear}>
							{' '}UNDO CHANGES{' '}
						</button>
						<button className="action-button action-button-delete" onClick={_handleDelete}>
							{' '}DELETE SONG{' '}
						</button>
					</div>
				: <div className="ToolbarComponent">
						<button className="action-button action-button-save" onClick={_handleSave}>
							{' '}SAVE NEW{' '}
						</button>
						<button className="action-button action-button-clear" onClick={_handleClear}>
							{' '}CLEAR{' '}
						</button>
					</div>}
		</div>
	);
}

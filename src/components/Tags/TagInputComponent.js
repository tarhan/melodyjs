import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default function TagInputComponent({ addTag, tags, song, loggedUser }) {
	return (
		<form className="Form" onSubmit={this.props.addTag}>
			<FormGroup className="form" controlId="formControlsTextarea">
				<ControlLabel>Add Tags</ControlLabel>
				<FormControl
					className="Form-tagInput"
					name="tagInput"
					type="text"
					placeholder="happy, new, experimental"
					required
				/>
			</FormGroup>
		</form>
	);
}

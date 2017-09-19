import React, { PureComponent } from 'react';
import classNames from 'classnames';

export default class NoteComponent extends PureComponent {
	render() {
		const { selected, name, id } = this.props;
		const noteClassNames = classNames('note', { selected });
		return (
			<div className={noteClassNames} onClick={this._handleClick} name={name} id={id}>
				<span className="noteSpan">
					{name}
				</span>
			</div>
		);
	}

	_handleClick = event => {
		event.preventDefault();
		const { onSelect } = this.props;
		console.log(event.target.attributes);
		const note = event.target.attributes.name.value;
		const column = event.target.attributes.id.value.split(',')[0];
		const row = event.target.attributes.id.value.split(',')[1];
		onSelect({ note, column, row });
	};
}

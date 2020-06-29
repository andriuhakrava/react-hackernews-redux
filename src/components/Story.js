import React from 'react';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';
import { ButtonInline } from './Button';
import './Story.css';

const Story = ({ story, columns, onArchive }) => {
	const { title, url, author, num_comments, points, objectID } = story;

	return (
		<div className="story">
			<span>
				<a href={ url }>{ title }</a>
			</span>
			<span>{ author }</span>
			<span>{ num_comments }</span>
			<span>{ points }</span>
			<span style={{ width: columns.archive.width }}>
        <ButtonInline onClick={ () => onArchive(objectID) }>
        	Archive
        </ButtonInline>
      </span>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id))
});

export default connect(null, mapDispatchToProps)(Story);
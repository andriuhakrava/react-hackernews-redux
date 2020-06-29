import { call, put } from 'redux-saga/effects';
import { fetchStories } from '../api/story';
import { doAddStories, doFetchStoriesError } from '../actions/story';

function *handleFetchStories(action){
	const { query } = action;

	try {
		const result = yield call(fetchStories, query);
		yield put(doAddStories(result.hits));
	} catch(error) {
		yield put(doFetchStoriesError(error));
	}
	
}

export { handleFetchStories };
import reducer from './reducer';
import { createStore } from 'redux';
import * as State from './State';

const initialState: State.State = {
    properties: {}
}

export const store = createStore(reducer, initialState);
import {createStore} from 'redux';

import scoreKeeper from './reducer.js'

var store = createStore(scoreKeeper);
export default store;
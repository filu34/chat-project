import { combineReducers } from 'redux';

import usersReducer from './users/users.reducer';
import messagesReducer from './messages/messages.reducer';

const rootReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
})

export default rootReducer;
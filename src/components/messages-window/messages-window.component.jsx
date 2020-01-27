import React from 'react';
import './messages-window.styles.scss';

//Components;
import Messages from '../messages/messages.component';
import CreateMessage from '../create-message/create-message.component';

const MessagesWindow = () => (
    <div className="messages-window">
        <Messages/>
        <CreateMessage/>
    </div>
)

export default MessagesWindow;
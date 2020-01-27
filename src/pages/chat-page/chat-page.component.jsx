import React from 'react';
import './chat-page.styles.scss';

//Components;
import UsersList from '../../components/users-list/users-list.component';
import MessagesWindow from '../../components/messages-window/messages-window.component';

const ChatPage = () => (
    <div className="chat-page">
        <UsersList/>
        <MessagesWindow/>
    </div>
)

export default ChatPage;
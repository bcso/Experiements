import React from 'react';
import PageBaseLayout from '../../common/PageBaseLayout';
import PageInProgress from '../../common/PageInProgress';

function ChatApp() {
    return(
        <PageBaseLayout pageTitle="ChatApp">
            <PageInProgress 
                pageTitle="ChatApp"
                pageDescription="This is a work in progress page for a websocket based game!"/>
        </PageBaseLayout>
    )
}

export default ChatApp;
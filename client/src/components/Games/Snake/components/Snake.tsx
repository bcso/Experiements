import React from 'react';
import PageBaseLayout from '../../../common/PageBaseLayout';
import PageInProgress from '../../../common/PageInProgress';

function Snake() {
    return(
        <PageBaseLayout pageTitle="Snake">
            <PageInProgress 
                pageTitle="Snake"
                pageDescription="This is a work in progress page for the Snake game!"/>
        </PageBaseLayout>
    )
}

export default Snake;
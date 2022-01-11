import React from 'react';
import PageBaseLayout from '../common/PageBaseLayout';
import PageInProgress from '../common/PageInProgress';

function About() {
    return (
      <PageBaseLayout pageTitle="About">
            <PageInProgress 
                pageTitle="About"
                pageDescription="Descriptions to be added about different pages."/>
      </PageBaseLayout>
    );
}

export default About;
import React from 'react';
import PageLayout from '../components/PageLayout/PageLayout';

interface PageLayoutContainerProps {
  children: React.ReactNode
}

function PageLayoutContainer({ children }: PageLayoutContainerProps) {
  return (
    <PageLayout>
      {children}
    </PageLayout>
  );
}

export default PageLayoutContainer;

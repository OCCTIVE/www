// File: src/layout/pages/AdoptPageContainer.tsx
import React from 'react';
import Header from '../components/Header';
import PageLayout from './PageLayout';
import AdoptPage from '../components/AdoptPage';
import Footer from '../components/Footer';

function AdoptPageContainer() {
  return (
    <>
      {/* no heroURL prop now */}
      <Header />

      <PageLayout>
        {/* <HomePage heroURL={header} /> prop removed inside HomePage */}
        <AdoptPage />
      </PageLayout>

      <Footer />
    </>
  );
}

export default AdoptPageContainer;

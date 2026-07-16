import React from 'react';

import Header from '../components/Header';
import PageLayout from './PageLayout';
import UnitPage from '../components/UnitPage';
import Footer from '../components/Footer';

function UnitPageContainer() {
  return (
    <>
      <Header />
      <PageLayout>
        <UnitPage />
      </PageLayout>
      <Footer />
    </>
  );
}

export default UnitPageContainer;

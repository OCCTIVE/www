// File: src/layout/pages/ErrorPage.tsx
import React from 'react';
import Header from '../components/Header';
import PageLayout from './PageLayout';
import ErrorPage from '../components/ErrorPage';
import Footer from '../components/Footer';

function ErrorPageContainer() {
  return (
    <>
      <Header />
      <PageLayout>
        <ErrorPage />
      </PageLayout>
      <Footer />
    </>
  );
}

export default ErrorPageContainer;

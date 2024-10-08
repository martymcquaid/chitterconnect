import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CurrencyProvider } from '@/contexts/CurrencyContext';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import SignUpPage from '@/pages/SignUpPage';
import PricingPage from '@/pages/PricingPage';
import PSTNSwitchoff from '@/pages/PSTNSwitchoff';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/pstn-switchoff" element={<PSTNSwitchoff />} />
            </Routes>
          </Layout>
        </Router>
      </CurrencyProvider>
    </QueryClientProvider>
  );
}

export default App;
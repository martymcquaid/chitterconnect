import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CurrencyProvider } from '@/contexts/CurrencyContext';
import CurrencySelector from '@/components/CurrencySelector';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import SignUpPage from '@/pages/SignUpPage';
import PricingPage from '@/pages/PricingPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <header className="bg-background border-b">
              <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <nav>
                  <ul className="flex space-x-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                  </ul>
                </nav>
                <CurrencySelector />
              </div>
            </header>
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/pricing" element={<PricingPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CurrencyProvider>
    </QueryClientProvider>
  );
}

export default App;

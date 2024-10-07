import React from 'react';
import CurrencySelector from '@/components/CurrencySelector';
import Footer from '@/components/Footer';

const Layout = ({ children }) => {
  return (
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
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
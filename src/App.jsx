import React from 'react';
import Header from './assets/components/Header/Header';
import HomeMain from './assets/components/HomeMain/HomeMain';
import Footer from './assets/components/Footer/Footer'; // Yeni import

function App() {
  return (
    <div className="app-container">
      <Header />
      <main style={{ minHeight: '100vh', paddingTop: '160px' }}>
        <HomeMain />
        {/* Digər səhifə komponentləri bura gələcək */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

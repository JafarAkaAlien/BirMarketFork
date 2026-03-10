import React from 'react';
import Header from './components/Header/Header';
import HomeMain from './components/HomeMain/HomeMain';
import MegaSale from "./components/megaSASALELE";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main style={{ minHeight: '100vh', paddingTop: '160px' }}>
        <HomeMain />
         <MegaSale />
        {/* Digər səhifə komponentləri bura gələcək */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
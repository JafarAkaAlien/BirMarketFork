import React from 'react';
import Header from './components/Header/Header';
import HomeMain from './components/HomeMain/HomeMain';
// import Footer from './components/Footer/Footer'; // Yeni import
import MegaSale from "./components/megaSASALELE";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main style={{ minHeight: '100vh', paddingTop: '160px' }}>
        <HomeMain />
         <MegaSale />
        {/* Digər səhifə komponentləri bura gələcək */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
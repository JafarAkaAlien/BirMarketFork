import React from 'react';
import Header from './components/Header/Header';
import HomeMain from './components/HomeMain/HomeMain';
// import MegaSale from "./components/megaSASALELE";
import Footer from './components/Footer/Footer';
import Rais from "./components/rais"
import DailySales from './components/DailySales/DailySales';
import Endirim from './components/Endirim/Endirim';
import Brendler from './components/Brendler/Brendler';

function App() {

 

  return (
    <div className="app-container">
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <HomeMain />
        <DailySales/>
        <Endirim/>
        <Brendler/>
         {/* <MegaSale /> */}
         <Rais/>
        {/* Digər səhifə komponentləri bura gələcək */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
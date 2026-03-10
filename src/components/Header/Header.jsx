import React, { useState } from 'react';
import './Header.css';
import logoImg from '../../images/logo.png'; 

const Header = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  // Kateqoriyalar (Aside-dəki siyahı ilə eyni)
  const categories = [
    { name: "Həmişə seçilən hədiyyələr", icon: "🌹" },
    { name: " Gözəllik mehsullari", icon: "🧸" },
    { name: "Tikinti materiallari", icon: "👩‍🎤" },
    { name: "Avtomobi hissleri", icon: "👵" },
    { name: "Mega endirimlər", icon: "🔥", highlight: true },
    { name: "Telefonlar və Smart cihazlar", icon: "📱" },
    { name: "Məişət texnikası", icon: "🧺" },
    { name: "Notbuk və kompüterlər", icon: "💻" },
    { name: "TV, audio və video", icon: "📺" },
    { name: "Ev əşyaları", icon: "🏠" },
    { name: "Gözəllik və Baxım", icon: "💄" }
  ];

  return (
    <header className="header-main-container">
      {/* Top Header hissəsi (Dəyişməyib) */}
      <div className="top-header">
        <div className="header-wrapper">
          <div className="top-left">
            <a href="#">Çatdırılma və ödəmə</a>
            <a href="#">Qaytarılma</a>
            <a href="#">Zəmanət</a>
            <button className="sell-on-btn">Birmarket-də satın</button>
          </div>
          <div className="top-right">
            <div className="top-item">📞 915 <span>▾</span></div>
            <div className="top-item">👤 Qeydiyyat | Giriş</div>
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <div className="middle-header">
        <div className="header-wrapper">
          <div className="logo-section">
            <img src={logoImg} alt="birmarket" className="main-logo" />
          </div>

          <div className="city-box">
            <span className="location-icon">📍</span>
            <span className="city-text">Şəhər: <strong>Bakı</strong></span>
          </div>

          {/* KATALOQ DÜYMƏSİ */}
          <div className="catalog-container">
            <button 
              className="catalog-button" 
              onClick={() => setIsCatalogOpen(!isCatalogOpen)}
            >
              ☰ Məhsul kataloqu
            </button>

            {/* AÇILAN MENYU (Dropdown) */}
            {isCatalogOpen && (
              <div className="catalog-dropdown">
                <div className="dropdown-scroll-area">
                  <ul className="dropdown-menu">
                    {categories.map((cat, index) => (
                      <li key={index} className={`dropdown-item ${cat.highlight ? 'highlight' : ''}`}>
                        <span className="cat-icon">{cat.icon}</span>
                        <span className="cat-name">{cat.name}</span>
                        <span className="arrow-icon">›</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="dropdown-footer">Bütün kateqoriyalar ∨</div>
              </div>
            )}
          </div>

          <div className="search-box">
            <input type="text" placeholder="Məhsul axtar" />
            <button className="search-btn">Axtar</button>
          </div>

          <div className="user-menu">
            <div className="menu-item"><span className="menu-icon">♡</span><span className="menu-text">Seçilmişlər</span></div>
            <div className="menu-item"><span className="menu-icon">🛒</span><span className="menu-text">Səbət</span></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
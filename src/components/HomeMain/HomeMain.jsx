import React, { useState, useEffect } from 'react';
import './HomeMain.css';

import img1 from '../../images/img1.png'; 
import img2 from '../../images/img2.png'; 
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';

const HomeMain = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const categories = [
    { name: "Avtomobil ehtiyyat hisseler", icon: "🌹" },
    { name: "Tikinti materiallari", icon: "🧸" },
    { name: "Gözəllik mehsullari", icon: "👩‍🎤" },
    { name: "Ərzaq mehsullari", icon: "👵" },
    { name: "İdman alətləri", icon: "👩‍❤️‍👩" },
    { name: "Mega endirimlər", icon: "🔥", highlight: true },
    { name: "Telefonlar və Smart cihazlar", icon: "📱", hasSub: true },
    { name: "Məişət texnikası", icon: "🧺", hasSub: true },
    { name: "Notbuk və kompüterlər", icon: "💻", hasSub: true },
    { name: "TV, audio və video", icon: "📺", hasSub: true },
    { name: "Ev əşyaları", icon: "🏠", hasSub: true },
    { name: "Avtomobil məhsulları", icon: "🚗", hasSub: true },
    { name: "Gözəllik və Baxım", icon: "💄", hasSub: true }
  ];

  return (
    <div className="home-main-section">
      <div className="home-container">
        
        {/* Üst tərəf: Menyu + Slider + Side Banners */}
        <div className="main-content-top">
          <aside className="category-sidebar">
            <div className="menu-scroll-area">
              <ul className="category-menu">
                {categories.map((cat, index) => (
                  <li key={index} className={`menu-item ${cat.highlight ? 'highlight' : ''}`}>
                    <span className="cat-icon">{cat.icon}</span>
                    <span className="cat-name">{cat.name}</span>
                    {cat.hasSub && <span className="arrow-icon">›</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div className="all-categories">
               <span className="down-arrow">∨</span> Bütün kateqoriyalar
            </div>
          </aside>

          <div className="main-slider-area">
            <div className="slider-box">
              <img src={images[currentIndex]} alt="Banner" className="slider-img" />
              <div className="slider-dots">
                {images.map((_, index) => (
                  <span 
                    key={index}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          <div className="side-banners">
            <div className="small-banner"><img src={img2} alt="Side 1" /></div>
            <div className="small-banner"><img src={img3} alt="Side 2" /></div>
            <div className="small-banner"><img src={img4} alt="Side 3" /></div>
          </div>
        </div>

        {/* Alt tərəf: 4 İkonlu Bar (Tam şəkildəki kimi yan-yana) */}
        <div className="info-bar">
          <div className="info-item">
            <div className="info-circle" style={{backgroundColor: '#58c8bd'}}>🛍️</div>
            <span>500 000-dən çox məhsul</span>
          </div>
          <div className="info-item">
            <div className="info-circle" style={{backgroundColor: '#e31e78'}}>🚚</div>
            <span>50 m-dən başlayan sifarişlərə pulsuz çatdırılma</span>
          </div>
          <div className="info-item">
            <div className="info-circle" style={{backgroundColor: '#8a3393'}}>%</div>
            <span>Endirimlər və aksiyalar</span>
          </div>
          <div className="info-item">
            <div className="info-circle" style={{backgroundColor: '#ffc107'}}>💳</div>
            <span>Birbank ilə 24 ayadək taksit</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeMain;
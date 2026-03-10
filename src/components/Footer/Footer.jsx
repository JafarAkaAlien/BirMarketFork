import React from 'react';
import './Footer.css';
import footerImg from '../../images/footer.png'; // Sənin yükləyəcəyin şəkil

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* 1. Üst tərəf: Rəngli Reklam Bölməsi */}
      <div className="footer-promo-banner">
        <div className="footer-container">
          <img src={footerImg} alt="App Promo" className="footer-promo-img" />
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-container">
          
          {/* 2. Hazırda aktual olanlar (Tag-lar) */}
          <div className="actual-tags">
            <h3>Hazırda aktual olanlar</h3>
            <div className="tags-cloud">
              <span>almaz qulaqlıq</span> <span>xiaomi 13</span> <span>smartfon samsung galaxy s23 ultra</span>
              <span>kombi</span> <span>iphone 15 pro max</span> <span>airpods</span> <span>macbook air</span>
              <span>qızılı xətkeşlər</span> <span>iphone 11</span> <span>dyson fen</span>
            </div>
          </div>

          <hr className="footer-divider" />

          {/* 3. Əsas Link Sütunları */}
          <div className="footer-columns">
            
            {/* Çağrı mərkəzi */}
            <div className="footer-col">
              <h4>Çağrı mərkəzi</h4>
              <p className="footer-hotline">Qaynar xətt</p>
              <h2 className="footer-phone">915</h2>
              <p className="footer-work-hours">Çağrı mərkəzinin iş saatları:<br/>Hər gün: 08:00 - 01:00</p>
              <div className="online-support">💬 Online dəstək</div>
              
              <div className="social-links">
                <h4>Bizi izləyin</h4>
                <div className="social-item">🟢 Whatsapp kanalı</div>
                <div className="social-item">🔵 Telegram kanalı</div>
                <div className="social-item">📸 Instagram Birmarket</div>
                <div className="social-item">📘 Facebook Birmarket</div>
                <div className="social-item">🎵 TikTok</div>
                <div className="social-item">🎥 Youtube</div>
              </div>
            </div>

            {/* Müştərilər üçün */}
            <div className="footer-col">
              <h4>Müştərilər üçün</h4>
              <ul>
                <li>Birmarket-də necə sifariş etmək olar</li>
                <li>Çatdırılma və ödəmə</li>
                <li>Azərpoçt şöbələrinə çatdırılma</li>
                <li>Kredit</li>
                <li>Taksitli ödəniş</li>
                <li>Promokodlar və endirimlər</li>
                <li>Məhsulun geri qaytarılması</li>
                <li>Ən çox verilən suallar</li>
              </ul>
            </div>

            {/* Tərəfdaşlar və Şirkət */}
            <div className="footer-col">
              <h4>Tərəfdaşlar üçün Birmarket</h4>
              <ul>
                <li>Birmarket-də satışa necə başlamaq olar</li>
              </ul>
              
              <h4 className="mt-20">Şirkət</h4>
              <ul>
                <li>İstifadə şərtləri (ictimai oferta) Bir Bonus</li>
                <li>İstifadə şərtləri (ictimai oferta) Birmarket</li>
              </ul>
            </div>

          </div>

          {/* 4. Alt tərəf: Copyright və Dillər */}
          <div className="footer-bottom">
            <p>Birmarket — hər zaman sərfəli qiymətlər!<br/>İstifadəçi razılaşması Birmarket və məxfilik siyasəti</p>
            <div className="lang-switcher">
              <span>AZ</span> | <span>RU</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
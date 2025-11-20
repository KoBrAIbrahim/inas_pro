import { useState } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('ar')
  const [selectedImage, setSelectedImage] = useState(null)

  // Generate image paths
  const images = Array.from({ length: 40 }, (_, i) => `/images_temp/image${i + 1}.png`)

  const content = {
    ar: {
      title: 'هدايا يدوية مميزة',
      subtitle: 'صُنعت بحب... لتُهدى بحب',
      name: 'إيناس جمال غانم',
      intro: 'مرحباً بكم في عالم الإبداع اليدوي',
      aboutTitle: 'عن أعمالنا',
      about: 'نقدم لكم مجموعة فريدة من الأعمال اليدوية المصنوعة بعناية فائقة وحب كبير. كل قطعة تحكي قصة وتحمل لمسة خاصة تجعلها هدية لا تُنسى.',
      servicesTitle: 'ما نقدمه',
      galleryTitle: 'معرض أعمالنا',
      galleryDesc: 'استمتع بمشاهدة مجموعة من إبداعاتنا اليدوية',
      service1Title: 'الخياطة اليدوية',
      service1Desc: 'تطريز وخياطة يدوية على أشكال متنوعة، كل غرزة تعبر عن الإتقان والجمال. نصنع قطعاً فنية تدوم للأبد.',
      service2Title: 'الشموع والعطور',
      service2Desc: 'شموع معطرة برائحة الطبيعة، صُنعت بعناية لتمنح المكان أجواءً دافئة ومريحة. عطور فواحة تضفي لمسة من الأناقة.',
      service3Title: 'الفخار والسيراميك',
      service3Desc: 'قطع فخارية مميزة مصنوعة يدوياً، تجمع بين الأصالة والحداثة. كل قطعة فريدة ومصممة بحب.',
      service4Title: 'هدايا الأطفال',
      service4Desc: 'هدايا مميزة للأطفال، آمنة ومصنوعة بحب. ألعاب وإكسسوارات تجلب الفرح والابتسامة.',
      giftsTitle: 'هدايا لكل مناسبة',
      giftsDesc: 'سواء كنت تبحث عن هدية فردية مميزة أو هدايا جماعية للحفلات والمناسبات، نحن هنا لنصنع لك ما تحلم به. كل منتجاتنا مصنوعة يدوياً بنسبة 100% بأيدٍ محلية وبحب.',
      whyTitle: 'لماذا تختارنا؟',
      why1: '✨ صناعة يدوية 100%',
      why2: '💝 تصميم فريد لكل قطعة',
      why3: '🎁 مناسبة لجميع المناسبات',
      why4: '🌸 جودة عالية ومواد طبيعية',
      contactTitle: 'تواصل معنا',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      social: 'وسائل التواصل الاجتماعي'
    },
    en: {
      title: 'Unique Handmade Gifts',
      subtitle: 'Made with Love... Given with Love',
      name: 'Inas Jamal Ghanem',
      intro: 'Welcome to the World of Handmade Creativity',
      aboutTitle: 'About Our Work',
      about: 'We offer you a unique collection of handmade crafts created with exceptional care and great love. Each piece tells a story and carries a special touch that makes it an unforgettable gift.',
      servicesTitle: 'What We Offer',
      galleryTitle: 'Our Gallery',
      galleryDesc: 'Explore our collection of handmade creations',
      service1Title: 'Hand Sewing',
      service1Desc: 'Hand embroidery and sewing in various designs, each stitch expressing perfection and beauty. We create artistic pieces that last forever.',
      service2Title: 'Candles & Fragrances',
      service2Desc: 'Scented candles with natural fragrances, carefully crafted to bring warmth and comfort to any space. Fragrant scents add a touch of elegance.',
      service3Title: 'Pottery & Ceramics',
      service3Desc: 'Distinctive handmade pottery pieces combining tradition and modernity. Each piece is unique and designed with love.',
      service4Title: 'Children\'s Gifts',
      service4Desc: 'Special gifts for children, safe and made with love. Toys and accessories that bring joy and smiles.',
      giftsTitle: 'Gifts for Every Occasion',
      giftsDesc: 'Whether you\'re looking for a unique individual gift or group gifts for parties and events, we\'re here to create what you dream of. All our products are 100% handmade with local hands and love.',
      whyTitle: 'Why Choose Us?',
      why1: '✨ 100% Handmade',
      why2: '💝 Unique Design for Each Piece',
      why3: '🎁 Suitable for All Occasions',
      why4: '🌸 High Quality & Natural Materials',
      contactTitle: 'Contact Us',
      email: 'Email',
      phone: 'Phone',
      social: 'Social Media'
    }
  }

  const t = content[language]

  return (
    <div className="app" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Language Toggle */}
      <div className="language-toggle">
        <button 
          className={language === 'ar' ? 'active' : ''} 
          onClick={() => setLanguage('ar')}
        >
          العربية
        </button>
        <button 
          className={language === 'en' ? 'active' : ''} 
          onClick={() => setLanguage('en')}
        >
          English
        </button>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="logo-container">
            <img src="/images_temp/logo.png" alt="Logo" className="logo" />
          </div>
          <h1 className="hero-title">{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          <div className="hero-name">{t.name}</div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <h2>{t.intro}</h2>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">{t.aboutTitle}</h2>
          <p className="about-text">{t.about}</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <h2 className="section-title">{t.galleryTitle}</h2>
          <p className="gallery-desc">{t.galleryDesc}</p>
          <div className="gallery-grid">
            {images.map((img, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`Work ${index + 1}`} loading="lazy" />
                <div className="gallery-overlay">
                  <span>🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img src={selectedImage} alt="Selected work" />
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">{t.servicesTitle}</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🧵</div>
              <h3>{t.service1Title}</h3>
              <p>{t.service1Desc}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🕯️</div>
              <h3>{t.service2Title}</h3>
              <p>{t.service2Desc}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏺</div>
              <h3>{t.service3Title}</h3>
              <p>{t.service3Desc}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎁</div>
              <h3>{t.service4Title}</h3>
              <p>{t.service4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gifts Section */}
      <section className="gifts">
        <div className="container">
          <h2 className="section-title">{t.giftsTitle}</h2>
          <p className="gifts-text">{t.giftsDesc}</p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us">
        <div className="container">
          <h2 className="section-title">{t.whyTitle}</h2>
          <div className="why-grid">
            <div className="why-item">{t.why1}</div>
            <div className="why-item">{t.why2}</div>
            <div className="why-item">{t.why3}</div>
            <div className="why-item">{t.why4}</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">{t.contactTitle}</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <h3>{t.email}</h3>
              <a href="mailto:Inas.j.ghanem@gmail.com">Inas.j.ghanem@gmail.com</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <h3>{t.phone}</h3>
              <a href="tel:0597541095">0597541095</a>
            </div>
          </div>
          <div className="social-links">
            <h3>{t.social}</h3>
            <div className="social-buttons">
              <a href="https://www.facebook.com/share/1SKrCZHW9G/" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
                <span className="social-icon">f</span> Facebook
              </a>
              <a href="https://www.instagram.com/inas_handmade_gift?igsh=c2hlZHRpcG5vNHc5" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                <span className="social-icon">📷</span> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 {t.name} - {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}</p>
      </footer>
    </div>
  )
}

export default App

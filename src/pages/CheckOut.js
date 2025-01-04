// CheckOut.js
import React from 'react';

const CheckOut = () => {
  const handleCopyClick = () => {
    const text = `🏖Günaydın🌞

-Check-Out Saatimizin 12.00 olduğunu hatırlatmak ister. Sizleri tesisimizde ağırladığımız için mutluluklar duyduğumuzu belirtmek isteriz. 🤗

-Ekstra yeme içme harcamalarınızı restoran bölümüne yapabilirsiniz.

Bizim Ev Datça`;
    
    navigator.clipboard.writeText(text)
      .then(() => alert('Metin kopyalandı!'))
      .catch(err => console.error('Kopyalama başarısız:', err));
  };

  return (
    <div className='container'>
            <h2>Check Out </h2>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <button 
          onClick={handleCopyClick}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Metni Kopyala
        </button>
      </div>
      
          
      <div className="checkout-message">
        <p>🏖Günaydın🌞</p>
        <p>-Check-Out Saatimizin <strong>12.00</strong> olduğunu hatırlatmak ister. Sizleri tesisimizde ağırladığımız için mutluluklar duyduğumuzu belirtmek isteriz. 🤗</p>
        <p>-Ekstra yeme içme harcamalarınızı <strong>restoran</strong> bölümüne yapabilirsiniz.</p>
        <p>Bizim Ev Datça</p>
      </div>
    </div>
  );
};

export default CheckOut; // Default export
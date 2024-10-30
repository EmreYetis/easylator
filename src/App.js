import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Bizim Ev Datça Kargı Otel Rezervasyon Onayı

Sayın ${name},

${date.split('-').reverse().join('.')} tarihinde, ${guestCount} kişilik rezervasyonunuz başarıyla onaylanmıştır. Sizi Bizim Ev Datça Kargı Otel’de ağırlamaktan mutluluk duyacağız.

Eğer rezervasyonunuzla ilgili değişiklik yapmak isterseniz, bizimle iletişime geçebilirsiniz. Rezervasyonunuzun keyifli bir deneyime dönüşmesi için tüm detayları özenle planlamaya devam ediyoruz.

Şimdiden güzel bir konaklama dileriz!`;
    setConfirmationMessage(message);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(confirmationMessage);
    
  };

  return (
    <div className="App container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="form-group">
              <input 
                type="text" 
                className="form-control" 
                placeholder="İsim Soyisim" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="date" 
                className="form-control" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="number" 
                min="1" 
                className="form-control" 
                value={guestCount} 
                onChange={(e) => setGuestCount(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn btn-success btn-block">Rezervasyonu Onayla</button>
          </form>
          {confirmationMessage && (
            <div className="alert alert-success mt-3">
              {confirmationMessage}
              <br/>
              <button onClick={handleCopy} className="btn btn-info btn-md mt-2">Mesajı Kopyala</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

const KapiGiris = () => {
  const [selectedHouse, setSelectedHouse] = useState('');
  const [adSoyad, setAdSoyad] = useState('');
  const [telefon, setTelefon] = useState('');
  const [yetişkinSayısı, setYetişkinSayısı] = useState(0);
  const [çocukSayısı, setÇocukSayısı] = useState(0);
  const [message, setMessage] = useState('');

  const houses = [
    'İskaroz Taş Oda',
    'İskorpit Taş Oda',
    'Lopa Taş Oda',
    'İnceburun Vagon Ev',
    'Gökliman Vagon Ev',
    'Armutlusu Vagon Ev',
    'Çetisuyu Vagon Ev',
    'İncirliin Vagon Ev',
    'Hurmalıbük Vagon Ev',
    'Değirmenbükü Vagon Ev',
    'Kızılbük Vagon Ev',
  ];

  const handleSubmit = () => {
    const formattedTelefon = telefon.replace(/(\d{4})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
    
    const childrenMessage = çocukSayısı > 0 ? `${çocukSayısı} Çocuk` : '';
    const newMessage = `Merhaba\n\n-${selectedHouse} kapı misafiri giriş yaptı.\n\n${yetişkinSayısı} Yetişkin ${childrenMessage}\n\n${adSoyad}\n${formattedTelefon}`;
    setMessage(newMessage);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
    alert('Mesaj kopyalandı!');
  };

  const handleTelefonChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 11) {
      setTelefon(value);
    }
  };

  return (
    <div className='container'>
      <h2>Kapı Müşterisi</h2>
      <select onChange={(e) => setSelectedHouse(e.target.value)}>
        <option value="">Ev Seçin</option>
        {houses.map((house, index) => (
          <option key={index} value={house}>{house}</option>
        ))}
      </select>
      <input type="text" placeholder="İsim Soyisim" onChange={(e) => setAdSoyad(e.target.value)} />
      <input type="text" placeholder="Telefon Numarası" onChange={handleTelefonChange} />
      <input type="number" placeholder="Yetişkin Sayısı" onChange={(e) => setYetişkinSayısı(e.target.value)} />
      <input type="number" placeholder="Çocuk Sayısı" onChange={(e) => setÇocukSayısı(e.target.value)} />
      <button onClick={handleSubmit}>Gönder</button>
      {message && (
        <div>
          <pre>{message}</pre>
          <button onClick={copyToClipboard}>Kopyala</button>
        </div>
      )}
    </div>
  );
};

export default KapiGiris; 
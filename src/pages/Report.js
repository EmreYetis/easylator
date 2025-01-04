import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './Report.css'; // CSS dosyasını ekleyin

// Baş harfleri büyük yapma fonksiyonu
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

// İsim ve soyismi büyük harfle yazma fonksiyonu
const capitalizeFullName = (fullName) => {
  return fullName.split(' ').map(name => capitalizeFirstLetter(name)).join(' ');
};

const Report = () => {
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');
  const [checkOuts, setCheckOuts] = useState([{ name: '', room: '' }]);
  const [stayingGuests, setStayingGuests] = useState([{ name: '', room: '' }]);
  const [checkIns, setCheckIns] = useState([{ name: '', room: '' }]);
  const [reportMessage, setReportMessage] = useState('');

  useEffect(() => {
    const today = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dayOptions = { weekday: 'long' };
    setDate(today.toLocaleDateString('tr-TR', options));
    setDay(today.toLocaleDateString('tr-TR', dayOptions));
  }, []);

  const generateReport = () => {
    const checkOutList = checkOuts.filter(guest => guest.name && guest.room).map((guest) => `${capitalizeFirstLetter(guest.room)} - ${capitalizeFullName(guest.name)}`).join('\n . ');
    const stayingList = stayingGuests.filter(guest => guest.name && guest.room).map((guest) => `${capitalizeFirstLetter(guest.room)} - ${capitalizeFullName(guest.name)}`).join('\n . ');
    const checkInList = checkIns.filter(guest => guest.name && guest.room).map((guest) => `${capitalizeFirstLetter(guest.room)} - ${capitalizeFullName(guest.name)}`).join('\n . ');

    const message = `
${date} / ${day}

         Günaydın ☀️ 

- Bugün ${stayingGuests.filter(guest => guest.name && guest.room).length} Odamız Konaklamaya Devam Ediyor.
- ⁠${checkOuts.filter(guest => guest.name && guest.room).length} Odamız Çıkış Yapıyor.
- ⁠${checkIns.filter(guest => guest.name && guest.room).length} Odamız Giriş Yapıyor.

Çıkışlar ;

 . ${checkOutList}

Konaklayanlar ;

 . ${stayingList}

Girişler ;

. ${checkInList}

                    Saygılar
    `;
    setReportMessage(message);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(reportMessage);
    alert('Mesaj kopyalandı!');
  };

  return (
    <div className="container mt-3">
      <h2 className='mb-5'>Rapor Oluşturma Sayfası</h2>
      <button className="btn btn-primary" onClick={generateReport}>Raporu Oluştur</button>
      <button className="btn btn-secondary" onClick={handleCopy} disabled={!reportMessage}>Raporu Kopyala</button>
      <pre>{reportMessage}</pre>

      <div className='row'>
        {/* Çıkışlar */}
        <div className='col-md-4'>
          <h3>Çıkışlar</h3>
          {checkOuts.map((checkOut, index) => (
            <div className="form-row" key={index}>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Oda"
                  value={checkOut.room}
                  onChange={(e) => {
                    const newCheckOuts = [...checkOuts];
                    newCheckOuts[index].room = e.target.value;
                    setCheckOuts(newCheckOuts);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="İsim Soyisim"
                  value={checkOut.name}
                  onChange={(e) => {
                    const newCheckOuts = [...checkOuts];
                    newCheckOuts[index].name = e.target.value; // Kullanıcı girişi
                    setCheckOuts(newCheckOuts);
                  }}
                />
              </div>
            </div>
          ))}
          <button className="btn btn-success" onClick={() => setCheckOuts([...checkOuts, { name: '', room: '' }])}>Çıkış Ekle</button>
        </div>

        {/* Konaklayanlar */}
        <div className='col-md-4'>
          <h3>Konaklayanlar</h3>
          {stayingGuests.map((guest, index) => (
            <div className="form-row" key={index}>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Oda"
                  value={guest.room}
                  onChange={(e) => {
                    const newGuests = [...stayingGuests];
                    newGuests[index].room = e.target.value;
                    setStayingGuests(newGuests);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="İsim Soyisim"
                  value={guest.name}
                  onChange={(e) => {
                    const newGuests = [...stayingGuests];
                    newGuests[index].name = e.target.value; // Kullanıcı girişi
                    setStayingGuests(newGuests);
                  }}
                />
              </div>
            </div>
          ))}
          <button className="btn btn-success" onClick={() => setStayingGuests([...stayingGuests, { name: '', room: '' }])}>Konaklayan Ekle</button>
        </div>

        {/* Girişler */}
        <div className='col-md-4'>
          <h3>Girişler</h3>
          {checkIns.map((checkIn, index) => (
            <div className="form-row" key={index}>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Oda"
                  value={checkIn.room}
                  onChange={(e) => {
                    const newCheckIns = [...checkIns];
                    newCheckIns[index].room = e.target.value;
                    setCheckIns(newCheckIns);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="İsim Soyisim"
                  value={checkIn.name}
                  onChange={(e) => {
                    const newCheckIns = [...checkIns];
                    newCheckIns[index].name = e.target.value; // Kullanıcı girişi
                    setCheckIns(newCheckIns);
                  }}
                />
              </div>
            </div>
          ))}
          <button className="btn btn-success" onClick={() => setCheckIns([...checkIns, { name: '', room: '' }])}>Giriş Ekle</button>
        </div>
      </div>
    </div>
  );
};

export default Report;
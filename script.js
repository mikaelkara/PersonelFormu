// Dil yönetimi ve form işlemleri
const form = document.getElementById('personel-form');
const successMessage = document.getElementById('success-message');
const languageSelect = document.getElementById('language-select');

const defaultLang = localStorage.getItem('lang') || 'tr';
languageSelect.value = defaultLang;
loadLanguage(defaultLang);

languageSelect.addEventListener('change', (e) => {
  const lang = e.target.value;
  loadLanguage(lang);
  localStorage.setItem('lang', lang);
});

function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then((res) => res.json())
    .then((translations) => {
      document.documentElement.lang = lang;
      applyTranslations(translations);
    })
    .catch((err) => console.error('Dil dosyası yüklenemedi:', err));
}

function applyTranslations(translations) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const keys = el.getAttribute('data-i18n').split('.');
    let text = translations;
    keys.forEach((k) => {
      if (text) text = text[k];
    });
    if (text) el.textContent = text;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const keys = el.getAttribute('data-i18n-placeholder').split('.');
    let text = translations;
    keys.forEach((k) => {
      if (text) text = text[k];
    });
    if (text) el.setAttribute('placeholder', text);
  });
}

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Sayfanın yenilenmesini engelle

  // Form verilerini topla
  const data = {
    ad: document.getElementById('firstName').value,
    soyad: document.getElementById('lastName').value,
    dogumTarihi: document.getElementById('birthDate').value,
    tcKimlik: document.getElementById('tcNo').value,
    sicilNo: document.getElementById('sicilNo').value,
    rutbe: document.getElementById('rank').value,
    gorevBirimi: document.getElementById('unit').value,
    donem: document.getElementById('period').value,
    kursBilgileri: document.getElementById('courses').value,
    telefon: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    iban: document.getElementById('iban').value,
    adres: document.getElementById('address').value,
    acilKisi: document.getElementById('emergencyContact').value,
    acilTelefon: document.getElementById('emergencyPhone').value,
  };

  // Konsola yazdır
  console.log('Form Verileri:', data);

  // Başarı mesajını göster
  successMessage.classList.remove('d-none');
  successMessage.focus();

  // Formu sıfırla (isteğe bağlı)
  form.reset();
});


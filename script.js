// Form gönderimini yakalayıp bilgileri konsola yazdıran basit JS
const form = document.getElementById('personel-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event) {
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
        acilTelefon: document.getElementById('emergencyPhone').value
    };

    // Konsola yazdır
    console.log('Form Verileri:', data);

    // Başarı mesajını göster
    successMessage.classList.remove('d-none');
    successMessage.focus();

    // Formu sıfırla (isteğe bağlı)
    form.reset();
});

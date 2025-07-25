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
        gorevBirimi: document.getElementById('unit').value,
        kursBilgileri: document.getElementById('courses').value,
        telefon: document.getElementById('phone').value,
        email: document.getElementById('email').value
    };

    // Konsola yazdır
    console.log('Form Verileri:', data);

    // Başarı mesajını göster
    successMessage.classList.remove('d-none');
    successMessage.focus();

    // Formu sıfırla (isteğe bağlı)
    form.reset();
});

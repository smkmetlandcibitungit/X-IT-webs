document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name && email) {
        alert('Terima kasih, ' + name + '! Kami akan menghubungi Anda melalui email: ' + email);
    } else {
        alert('Silakan isi semua data.');
    }
});

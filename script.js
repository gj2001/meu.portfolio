document.addEventListener('DOMContentLoaded', function() {

    setTimeout(function() {
        document.querySelector('nav ul').classList.add('show');
    }, 500);

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulário enviado com sucesso!');
    });
});

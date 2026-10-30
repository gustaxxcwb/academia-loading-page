
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Menu para celular
menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');

    menuButton.setAttribute(
        'aria-expanded',
        String(isOpen)
    );

    menuButton.textContent = isOpen ? '✕' : '☰';
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = '☰';
    });
});

// Ano automático no rodapé
document.getElementById('year').textContent =
    new Date().getFullYear();


  message.textContent = `Obrigado, ${name}! Formulário demonstrativo preenchido. Configure o WhatsApp para receber esse contato.`;
  event.target.reset();
});

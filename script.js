const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (event) => {
  let value = event.target.value.replace(/\D/g, '').slice(0, 11);
  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
  } else if (value.length > 6) {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d*)/, '($1) $2');
  } else if (value.length) {
    value = value.replace(/^(\d*)/, '($1');
  }
  event.target.value = value;
});

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const goal = document.getElementById('goal').value;
  const message = document.getElementById('formMessage');

  if (!name || !phoneInput.value.trim() || !goal) {
    message.textContent = 'Preencha todos os campos para continuar.';
    return;
  }

  message.textContent = `Obrigado, ${name}! Formulário demonstrativo preenchido. Configure o WhatsApp para receber esse contato.`;
  event.target.reset();
});

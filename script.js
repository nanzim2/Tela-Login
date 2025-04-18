const botaoTema = document.getElementById('modo-escuro');
const icone = botaoTema.querySelector('i');


botaoTema.addEventListener('click', () => {
  // Aplica/remover a classe no <body>
  document.body.classList.toggle('dark');

  // Alternar ícone
  if (document.body.classList.contains('dark')) {
    icone.classList.remove('fa-moon');
    icone.classList.add('fa-sun');
  } else {
    icone.classList.remove('fa-sun');
    icone.classList.add('fa-moon');
  }
});


const senhaInput = document.getElementById('senha');
const togglePassword = document.getElementById('togglePassword');
const icon = document.getElementById('iconolho');

togglePassword.addEventListener('click', () => {
  const isPassword = senhaInput.type === 'password';
  senhaInput.type = isPassword ? 'text' : 'password';

  // Alternar o ícone (olho aberto e fechado)
  icon.classList.toggle('fa-eye');
  icon.classList.toggle('fa-eye-slash');
});
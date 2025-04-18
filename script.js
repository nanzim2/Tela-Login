const modo = document.getElementById('tema')

modo.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})
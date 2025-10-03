
export function manejarLogin() {
  const form = document.querySelector('#loginModal form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuarioIngresado = document.getElementById('loginUsuario').value.trim();
    const passwordIngresada = document.getElementById('loginPassword').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(u => u.usuario === usuarioIngresado && u.password === passwordIngresada);

    if (!usuarioEncontrado) {
      alert("Usuario o contraseña incorrectos");
      return;
    }

    alert(`¡Bienvenido, ${usuarioEncontrado.nombre}!`);
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();

    sessionStorage.setItem('usuarioActivo', JSON.stringify(usuarioEncontrado));
  });
}
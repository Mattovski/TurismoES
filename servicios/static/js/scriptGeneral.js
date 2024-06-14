document.addEventListener("DOMContentLoaded", function () {
  const registrateLink = document.getElementById('registrate');
  const modalRegistro = new bootstrap.Modal(document.getElementById('modalRegistro'));
  const iniciarSesionLink = document.getElementById('iniciarSesion');
  const modalIniciarSesion = new bootstrap.Modal(document.getElementById('modalIniciarSesion'));

  // Muestra el modal de registro al hacer clic en "Regístrate"
  registrateLink.addEventListener('click', function (event) {
      event.preventDefault();
      modalRegistro.show();
  });
  // Muestra el modal de inicio de sesión al hacer clic en "Iniciar sesión"
  iniciarSesionLink.addEventListener('click', function (event) {
      event.preventDefault();
      modalIniciarSesion.show();
  });

  window.addEventListener("resize", handleNavbarItems);
  handleNavbarItems();
});

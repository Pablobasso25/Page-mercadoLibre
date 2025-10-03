

export function actualizarNavbar(){
    const usuarioActivo = JSON.parse(sessionStorage.getItem("usuarioActivo")); //Recupera el usuario logueado desde "sessionStorage", si no hay sesión activa, "usuarioActivo será "null

    // se capturan los elementos del DOM que se van a mostrar u ocultar segun el estado de la sesión
    const navUsuario = document.getElementById("navUsuario");//el saludo con el nombre del usuario
    const navCerrarSesion = document.getElementById("navCerrarSesion");//el botón para cerrar sesión
    const navIngresar = document.getElementById("navIngresar");//el botón para abrir el modal de login
    const nombreActivo = document.getElementById("nombreActivo");//el span donde se muestra el nombre del usuario
    const navMisCompras = document.getElementById("navMisCompras");//el botón “Mis compras”
    const navCrearCuenta = document.getElementById("navCrearCuenta"); //el botón de "crea tu cuenta"

    if (usuarioActivo) {  // verificamos si hay algun usuario logueado.Si existe, se muestran los elementos correspondientes 
      nombreActivo.textContent = `Hola, ${usuarioActivo.usuario}`;
      navUsuario.style.display = "block";       // muestra el saludo al usuario
      navCerrarSesion.style.display = "block";  // muestra el botón de cerrar sesión
      navIngresar.style.display = "none";       // oculta el botón de "ingresá"
      navMisCompras.style.display = "block";    // activa el acceso a "mis compras"
      navCrearCuenta.style.display = "none";    // oculta el botón "creá tu cuenta"
    } else {              // Si no hay sesión activa, se ocultan los elementos que solo se muestran cuando hay un usuario logueado
      navUsuario.style.display = "none";        // oculta el saludo
      navCerrarSesion.style.display = "none";   // oculta el botón de cerrar sesión
      navIngresar.style.display = "block";      // muestra el botón de "ingresá"
      navMisCompras.style.display = "none";     // oculta el botón "mis compras"
      navCrearCuenta.style.display = "block";   // muestra el botón "creá tu cuenta"
    }



}

export function cerrarSesion() {
  sessionStorage.removeItem('usuarioActivo'); // Elimina el usuario logueado de sessionStorage, cerrando la sesión
  actualizarNavbar();                        // Llama a actualizarNavbar() para que el navbar se actualice y refleje que ya no hay sesión activa
  alert("Sesión cerrada correctamente");     // mensaje de confirmación al usuario
}



/* - El navbar se adapta automáticamente al estado de sesión
- El usuario ve su nombre y puede cerrar sesión
- Se evita el acceso a “Mis compras” si no está logueado
 */
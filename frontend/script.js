document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize",anchoPagina);

//Declarando variables
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPagina();

function iniciarSesion(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display= "block";
        caja_trasera_login.style.display = "none";
    }

    $(document).ready(function() {
        $('#loginForm').submit(function(event) {

            console.log("SI ESTA CORRIENDO");

            event.preventDefault();
            var formData = {
                email: $('#correo').val(),
                password: $('#contrasena').val()
            };

            $.ajax({
                type: 'GET',
                url: 'http://localhost:8080/users?email=' + $('#correo').val() + '&password=' + $('#contrasena').val(),
                success: function(response) {
                    if (response === "TRUE") {
                        // Usuario autenticado
                        alert("Login exitoso!");
                        window.location.href = "main.html"; // Redireccionar al dashboard u otra página
                    } else {
                        // Credenciales incorrectas
                        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
                    }
                },
                error: function() {
                    // Error de conexión o del servidor
                    alert("Error de conexión. Por favor, inténtalo de nuevo más tarde.");
                }
            });
        });
    });
    
}

function register(){
    
    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";

    }

}


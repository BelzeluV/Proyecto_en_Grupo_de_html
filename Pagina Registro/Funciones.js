function validarcamposvacios()
{
    let nombreusuario = document.getElementById("Nombreusuario").value;
    let real = document.getElementById("nombre_real").value;
    let rut = document.getElementById('rut').value;
    let dv = document.getElementById('dv').value;
    let correo = document.getElementById('email_contacto').value;
    let contraseña = document.getElementById('contraseña').value;
    let contraseña2 = document.getElementById('contraseñarepite').value;
    let fechanacimiento = document.getElementById('nacimiento').value;
    let sexo = document.getElementById('sexo').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let comuna = document.getElementById('comuna').value;

    if(nombreusuario==""||real==""||rut==""||dv==""||correo ==""||contraseña==""||contraseña2 ==""||fechanacimiento==""||sexo==""|telefono==""||direccion==""||comuna=="")
    {
        alert("tiene campos sin llenar en el formulario");
        return;
    }
    
}

function validarRut()
{
    let rut = document.getElementById('rut').value;
    let tamañorut = rut.length;
    let dv = document.getElementById('dv').value;
    var suma = 0;
    var multiplicador = 3;
    var i = 1
    var resto = suma %11;
    var res_aux = 'k'; 
    
    if(rut.length < 7){ 
        alert("el rut está incompleto");
        return;
    }

    if (rut == 7 ){s
        multiplicador = 2;
    }

    while (i < tamañorut){
    
        suma = suma + rut.substr(i,1) * multiplicador;

        multiplicador = multiplicador -1
        if (multiplicador = 1){
            multiplicador = 7;
        }
        i = i++;
    }
    var resto = suma %11;
    var resultado = 11-resto;

    if (resultado == dv || res_aux == dv){
        let mensaje = "Rut Valido.";
        document.getElementById("lblmensaje").innerHTML = mensaje;
    }
    else
    {
        alert("rut invalido, por favor introduzca un rut valido");
    }
}





function validarcontraseña(){
    let contraseña = document.getElementById('contraseña').value;
    let contraseña2 = document.getElementById('contraseñarepite').value;
    var espacio = false;
    var cont = 0;

    while (!espacio && (cont < contraseña.length)) {
    if (contraseña.charAt(cont) == " ")
        espacio = true;
    cont++;
    }
    
    if (espacio) {
    alert ("La contraseña no puede contener espacios en blanco");
    return false;
    }

    if (contraseña.length == 0 || contraseña2.length == 0) {
        alert("Los campos de la password no pueden quedar vacios");
        return;
    }
    if (p1 != p2){
        let mensaje = "las contraseñas coinciden";
        document.getElementById("lblmensajecontraseña").innerHTML = mensaje;
        return;
    }
    
}

function validaredad() {
    let fechanacimiento = document.getElementById('nacimiento').value;
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechanacimiento.getFullYear();
    var m = hoy.getMonth() - fechanacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < fechanacimiento.getDate())) {
        edad--;
    }
    if(edad < 18){
        alert("Eres menor de edad, no puedes comprar aqui ningún articulo.");
    }
}
function validarRut() //V1
{
    let rut = document.getElementById('rut').value;
    let tamañorut = rut.length;
    let dv = document.getElementById('dv').value;
    var suma = 0;
    var multiplicador = 3;
    var i = 1
    var resto = suma %11;
    var res_aux = "a";
    var res_aux2 = "a";
    
    if(rut.length < 7){ 
        alert("el rut está incompleto");
        return;
    }

    if (rut == 7 ){s
        multiplicador = 2;
    }

    while (i < tamañorut){
    
        suma = suma + (rut.substr(i,1) * multiplicador);

        multiplicador = multiplicador -1
        if (multiplicador = 1){
            multiplicador = 7;
        }
        i++;
    }
    var resto = suma %11;
    var resultado = 11-resto;


    if (resultado == 11){
        resultado = 0;
    }
    else if (resultado ==10){
        res_aux = "k";
        res_aux2 = "K";
    }

    if (resultado == dv){
        let mensaje = "Rut Valido.";
        document.getElementById("lblmensaje").innerHTML = mensaje;
    }
    else if(resultado == 10 && dv == k)
    {
        let mensaje = "Rut Valido.";
        document.getElementById("lblmensaje").innerHTML = mensaje;
    }
    else{
        let mensaje = "Rut invalido.";
        document.getElementById("lblmensaje").innerHTML = mensaje;
        return;
    }
}





function validarcontraseña(){
    let contraseña = document.getElementById('contraseña').value;
    let contraseña2 = document.getElementById('contraseñarepite').value;
    var espacio = false;
    var cont = 0;

    while (!espacio && (cont < contraseña.length)) {
    if (contraseña.charAt(cont) == " ")
    {
        espacio = true;
        let mensaje = "la contraseña no puede tener espacios, intente nuevamente.";
        document.getElementById("lblmensajecontraseña").innerHTML = mensaje;
        return;
    }
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

function checkRut(rut) { //v2
    var valor = rut.value.replace('.','');
    valor = valor.replace('-','');
    
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    rut.value = cuerpo + '-'+ dv
    
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    
    suma = 0;
    multiplo = 2;
    
    for(i=1;i<=cuerpo.length;i++) {
        index = multiplo * valor.charAt(cuerpo.length - i);
        suma = suma + index;
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    

    dvEsperado = 11 - (suma % 11);
    
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }
    rut.setCustomValidity('');
}
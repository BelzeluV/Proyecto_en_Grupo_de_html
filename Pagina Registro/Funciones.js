function checkRut(rut) { //v2
    var valor = rut.value.replace('.','');
    valor = valor.replace('-','');
    
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    rut.value = cuerpo + '-'+ dv
    
    if(cuerpo.length < 7) 
    { 
        rut.setCustomValidity("RUT Incompleto"); 
        return false;
    }
    
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
    
    if(dvEsperado != dv)
    { rut.setCustomValidity("RUT Inválido"); 
    return false; 
    }
    rut.setCustomValidity('');
}

function checkigualdad(){
    let contrasena = document.getElementById('contrasena').value;
    let contrasenarepite = document.getElementById('contrasenarepite').value;
    
    if (contrasenarepite != contrasena){
        alert("las contraseñas no coinciden.");
        return false;
    }
}

function checkcontrasena(contrasena){
    if (contrasena.length < 8){
        contrasena.setCustomValidity("la contraseña debe tener mas de 8 caracteres");
    }
    while (!espacio && (cont < contraseña.length)) {
        if (contrasena.charAt(cont) == " ")
        {
            espacio = true;
            contrasena.setCustomValidity("la contraseña no puede tener espacios.");
            return false;
        }
        cont++;
    }
}

function validaedad (fecha_naci) {
    if(!fecha_naci){
        alert('ingrese fecha');
        return false;
    }
    var valores = fecha_naci.split ("-");
    var mes_naci = valores [1];
    var anio_naci = valores [0];
    var fecha_act = new Date();
    
    var mes_act = fecha_act.getMonth() + 1;
    var anio_act = fecha_act.getFullYear();
    
    var resta = (anio_act - anio_naci) * 12 - (mes_act - mes_naci);
    
    if (resta < (18*12)) 
    {
        alert('es menor de edad, no puede ingresarse');
        return false;
    }
    return true;
}
function validarnumero(numero){
    if (numero <8)
    {
        numero.setCustomValidity("el numero no es valido, deben ser 8 digitos.")
        return false;
    }
}


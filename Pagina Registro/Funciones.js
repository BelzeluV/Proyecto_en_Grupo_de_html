function validarcamposvacios()
{
    let nombreusuario = document.getElementById("Nombreusuario").value;
    let real = document.getElementById("nombre_real").value;
    let rut = document.getElementById('rut').value;
    let dv = document.getElementById('dv').value;
    let correo = document.getElementById('Correo').value;
    let contraseña = document.getElementById('contraseña').value;
    let contraseña2 = document.getElementById('contraseñarepite').value;
    let fechanacimiento = document.getElementById('nacimiento').value;
    let sexo = document.getElementById('sexo').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let comuna = document.getElementById('comuna').value;

    if( nombreusuario =="" || real =="" ||rut =="" ||dv=="" ||correo ==""||contraseña == "" || contraseña2 == ""| fechanacimiento== "" || sexo == ""| telefono == "" || direccion == "" || comuna =="")
    {
        alert("tiene campos sin llenar en el formulario");
        return;
    }
    else
    {
    
    }
}
function validarRut(){

}
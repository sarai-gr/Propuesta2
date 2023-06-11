function Validar()
{
    let nombre,telefono,municipio,correo,direccion,motivo,terminos,i,a;
    nombre = document.getElementById("nombre");

    if(nombre.value!="")
    {
        document.getElementById("MensajeNombre").innerHTML= "";
        telefono = document.getElementById("telefono");
        if(telefono.value!="")
        {
            document.getElementById("MensajeTelefono").innerHTML= "";
            municipio = document.getElementById("municipio");
            if(municipio.value!="")
            {
                document.getElementById("MensajeMunicipio").innerHTML= "";
                correo = document.getElementById("email");
                if(correo.value!="")
                {
                    document.getElementById("MensajeCorreo").innerHTML= "";
                    direccion = document.getElementById("direccion");
                    if(direccion.value!="")
                    {
                        document.getElementById("MensajeDireccion").innerHTML= "";
                        motivo = document.getElementById("motivo");
                        if(motivo.value!="")
                        {
                            document.getElementById("MensajeMotivo").innerHTML= "";
                            terminos = document.getElementById("terminos")
                            if(terminos.checked)
                            {
                                document.getElementById("MensajeTerminos").innerHTML= "";
                                alert("Todos los datos han sido guardados. ¡Gracias por tu preferencia!");
                                return true;
                            }
                            else
                            {
                                document.getElementById("MensajeTerminos").innerHTML = "Debes aceptar los terminos y condiciones";
                                terminos.focus();
                                return false;
                            }
                        }
                        else
                        {
                            document.getElementById("MensajeMotivo").innerHTML = "No puedes dejar este campo vacio";
                            motivo.focus();
                            return false;
                        }
                    }
                    else
                    {
                        document.getElementById("MensajeDireccion").innerHTML = "No puedes dejar este campo vacio";
                        direccion.focus();
                        return false;
                    }
                }
                else
                {
                    document.getElementById("MensajeCorreo").innerHTML = "No puedes dejar este campo vacio";
                    email.focus();
                    return false;
                }
            }
            else
            {
                document.getElementById("MensajeMunicipio").innerHTML = "No puedes dejar este campo vacio";
                municipio.focus();
                return false;
            }
        }
        else
        {
            document.getElementById("MensajeTelefono").innerHTML = "No puedes dejar este campo vacio";
            telefono.focus();
            return false;
        }
    }
    else
    {
        document.getElementById("MensajeNombre").innerHTML = "No puedes dejar este campo vacio";
        nombre.focus();
        return false;
    }
}
function resetForm() 
{
    document.getElementById("MensajeNombre").innerHTML= "";
    document.getElementById("MensajeTelefono").innerHTML= "";
    document.getElementById("MensajeMunicipio").innerHTML= "";
    document.getElementById("MensajeCorreo").innerHTML= "";
    document.getElementById("MensajeDireccion").innerHTML= "";
    document.getElementById("MensajeMotivo").innerHTML= "";
    document.getElementById("MensajeTerminos").innerHTML= "";
}
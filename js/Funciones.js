function Validar()
{
    let nombre,telefono,municipio,correo,direccion,motivo,terminos,i,a;
    nombre = document.getElementById("nombre");

    if(nombre.value!="")
    {
        telefono = document.getElementById("telefono");
        if(telefono.value!="")
        {
            municipio = document.getElementById("municipio");
            if(municipio.value!="")
            {
                correo = document.getElementById("email");
                if(correo.value!="")
                {
                    direccion = document.getElementById("direccion");
                    if(direccion.value!="")
                    {
                        motivo = document.getElementById("motivo");
                        if(motivo.value!="")
                        {
                            terminos = document.getElementById("terminos")
                            if(terminos.checked)
                            {
                                alert("Todos los datos han sido guardados");
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
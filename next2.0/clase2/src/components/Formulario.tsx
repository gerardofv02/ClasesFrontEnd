import { useState } from "react";
import styled from "styled-components";
const Formulario = () => {
    const[edad,setEdad] = useState<number>(0)
    const[correo , setCorreo] = useState<string>("")
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /*
    function validateEmail(correo : string){
        if(re.test(correo) == true){
            return true;
        }
        else{return false;}
    }
    */

    /* creo variable eddad que se modifica con la funcion setedad que es de tipo numero y de valor inicial 0 */
    /* sirve para repintar la pagina y asi poder actualizar el valor de abajo de mayor o mneor de edad*/
    return(
        <>

        
        Introduce nombre : <input type="string"/> <br/>
        Introduce Edad:  <input type = "number" onChange={(e) => setEdad(parseInt(e.target.value))}/> <br/>
        {edad >14 && (
            <>
            Correo  <Input type="string" onChange={(e) => setCorreo(e.target.value)}/> 
            {!re.test(correo) &&(

                <div>El correo es incorrecto</div>
            )
                
            
            }
            </>
        )}


        </>
    )
    
    
    /*
    return(
        <>
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/.test(value.email)) {
    ctx.response.status = 404;
    return;
  }
        
        Introduce tu edad : <input type = "number" onChange={(e) => setEdad(parseInt(e.target.value))}/>
        {edad >17 ? <div> Eres mayor de edad</div> : <div>Eres menor de edad</div>}
        {edad >17 && (
            <>
            <input type="checkbox"/> Tengo coche
            </>
        )}
        </>
    )
    */
};

type InputProps = {
    error? :string
}

const Input = styled.input<InputProps>`
    background-color:red    ;
    

`;

export default Formulario;
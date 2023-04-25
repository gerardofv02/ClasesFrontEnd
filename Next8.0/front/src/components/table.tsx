import {
    Formulario,
    Arriba,
    Abajo,
    Section,
    MiBoton,
  } from "@/styles/styledComponents";
  import Image from "next/image";
  import { useEffect, useState } from "react";
  type fila = {
    name: string;
    phone: string;
    id?:string;
  };
  export var x = 4;
  const Tabla = () => {
    const [name, setNombre] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
  
    const columnas =[
      "Name",
      "Numero",
      " ",
    ];
  

  
    const [filaa, setFila] = useState<fila[]>([]);
  
    /*function addComponent() {
      let number = parseInt(numero);
      setFila([
        ...filaa,
        {
          nombre: nombre,
          numero: number,
        },
      ]);
      setNombre("");
      setNumero("");
      console.log(filaa);
    }
    function eliminar(index: number) {
      const filas = filaa.filter((element, i) => i !== index);
      setFila(filas);
      console.log(filas);
    }

    
*/
async function postContact(){
  const introducir:  fila = {
    name : name,
    phone: numero
  }
  await fetch(`http://localhost:8080/addContact`, {
    method: 'POST',
    body: JSON.stringify(introducir),
  })
  setFila([
    ...filaa,
    {
      name:name,
      phone: numero,
    },
  ]);
  setNombre("");
  setNumero("")
}

async function deleteContact(index: number){
  const eliminar : fila = filaa[index];
  console.log(eliminar);
  const filas = filaa.filter((element, i) => i !== index);
  await fetch(`http://localhost:8080/deleteContact`, {
    method: 'DELETE',
    body:JSON.stringify(eliminar),
  })
  setFila(filas);
  
}
useEffect(() => {
  const fetchData = async () => {
    const lines = await fetch(`http://localhost:8080/contacts`);
    const json = await lines.json();
    setFila(json.contacts);
    console.log(json);
    
  };
  try {
    fetchData();
  } catch (e) {
    console.log(e);
  }
}, []);

console.log(Array.isArray(filaa));
console.log(filaa);

    return (
      <>
        <Section>Table</Section>
        <Formulario>
          {columnas.map((element) => {
            return (
              <>
                <Arriba>{element}</Arriba>
              </>
            );
          })}
  
          
          {filaa?.map((element, index) => {
            return(
            <>
              <Abajo>{element.name}</Abajo>
              <Abajo>{element.phone}</Abajo>
              <Image
                src="/papelera.png"
                alt="una foto"
                width="40"
                height="40"
                className="imagen"
                onClick={() => deleteContact(index)}
              />
            </>
  )})}
          <Abajo>
            <input
              type="text"
              value={name}
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
            ></input>
          </Abajo>
          <Abajo>
            <input
              type="text"
              value={numero}
              placeholder="Numero"
              onChange={(e) => setNumero(e.target.value)}
            ></input>
          </Abajo>
  
          <Image
            src="/anadir.png"
            alt="fotito"
            width="40"
            height="40"
            className="imagen"
            onClick={() => postContact()}
          />
        </Formulario>
      </>
    );
  };
  
  export default Tabla;
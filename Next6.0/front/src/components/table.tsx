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
    nombre: string;
    phone: string;
    id : string;
  };
  export var x = 4;
  const Tabla = () => {
    const [nombre, setNombre] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
  
    const columnas =[
      "Nombre",
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
useEffect(() => {
  const fetchData = async () => {
    const lines = await fetch(`http://localhost:8080/contacts`);
    const json = await lines.json();

    setFila(json);
    console.log(json);
  };
  try {
    fetchData();
  } catch (e) {
    console.log(e);
  }
}, []);


console.log(Array.isArray(filaa));


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
  
          
          {Object.values(filaa).map((element, index) => {
            return(
            <>
              <Abajo>{element.nombre}</Abajo>
              <Abajo>{element.phone}</Abajo>
              <Image
                src="/papelera.png"
                alt="una foto"
                width="40"
                height="40"
                className="imagen"
              />
            </>
  )})}
          <Abajo>
            <input
              type="text"
              value={nombre}
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
          />
        </Formulario>
      </>
    );
  };
  
  export default Tabla;
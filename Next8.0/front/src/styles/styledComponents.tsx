import styled from "styled-components";

export const Formulario = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 3px solid black;
  text-align: center;
  margin-top: 2rem;
  width: 80%;
  height: 80%;
`;
export const Arriba = styled.h2`
  font-weight: bold;
`;
export const Abajo = styled.div`
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 8px;
  font-weight: bold;
`;
export const Section = styled.section`
  background-color: #07f;
  text-align: left;
  color: white;
  border-radius: 5px;
  padding: 8px;
  font-weight: bold;
`;
export const MiBoton = styled.button`
  background-color: #07f;
  color: white;
  border-radius: 5px;
  padding: 8px;
  font-weight: bold;
`;
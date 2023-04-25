import { GetServerSideProps } from "next";
import  getClient  from "../libs/client";


import {gql }from "@apollo/client";
export const getServerSideProps:GetServerSideProps = async (context) => {

  const {id} = context.query;
  const query = gql`
  query character($id: ID!){
    character(id:$id){
      name
    }
  }
  
  
  `

  const client = getClient();
  const {data} = await client.query<{
    character: {
        name:string
      
    }
  }>({
    query,
    variables:{
      id,
    }
  });

  return {
    props:{
      name: data.character.name
    }
  }

}

export default function Home(props: {name: string}){
  return(
    <>
      {props.name}
    </>
  )
}
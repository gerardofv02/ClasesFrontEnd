import { GetServerSideProps, NextPage } from "next";
import  getClient  from "@/libs/client";

import {gql }from "@apollo/client";
import Link from "next/link";
export const getServerSideProps:GetServerSideProps = async (context) => {

  const {page} = context.query;
  const query = gql`
  query{
    characters(page:${page}){
    results{
      name
    }
  }
  
}

  
  `

  const client = getClient();
  const {data} = await client.query<{
    characters:{
        results: {
        name : string
        }[]
    }
  }>({
    query,
    variables:{
      page,
    }
  });

  return {
    props:{
      name: data.characters.results,
      page
    }
  }

}
/*
export const getServerSideProps:GetServerSideProps = async (context) => {

 const {id} = context.query;

  return {
    props:{
      id
    }
  }

}
*/
const Page= (props: {name:any, page:string}) => {
  return (
    <div>
         { props.name.map((character: any) => {return <div>Character : {character.name}</div>}) }
         <Link href={`/page/${parseInt(props.page)+1}`}><button>Siguiente Pagina</button></Link>
         <Link href={`/page/${parseInt(props.page)-1}`}><button>Anterior Pagina</button></Link>

    </div>
  )
}

export default Page;
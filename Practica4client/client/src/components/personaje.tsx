import { gql ,useQuery} from "@apollo/client";
import getClient from "../libs/client";
import React, {FC, useEffect, useState} from "react";
import Link from "next/link";


const Character = () => {
  const query = gql`
  query characters($page : Int!){
    characters(page:$page){
    results{
      name
    }
  }
  
}
  
  `
  const [page, setPage] = useState<number>(1);
  const {loading,error,data} =  useQuery<{
    characters: {
      results: {
        name: string,
      }[]
    }
  }>(
    query,{
    variables: {
      page
    }
  }
  );





  if(loading) return <div>Loading...</div>
  if(error) return <div>Error</div>
  return(
    <div>
       {data!.characters.results.map((character : any) => {return <div> Character : {character.name}</div>}) }
       <Link href={`/page/${page+1}`}><button onClick={() => setPage(page+1)}> Pag Siguiente</button></Link>
       <Link href={`/page/${page-1}`}><button onClick={() => setPage(page-1)}> Pag Anterior</button></Link>
    </div>
  )
}

export default Character;
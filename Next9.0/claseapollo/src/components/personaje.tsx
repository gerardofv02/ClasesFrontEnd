import { gql ,useQuery} from "@apollo/client";
import getClient from "../libs/client";
import React, {FC, useEffect, useState} from "react";


const Character: FC<{id:string}> = ({id}) => {
  const query = gql`
  query character($id: ID!){
    character(id:$id){
      name
    }
  }
  
  
  `
  const [charID,setCharID] = useState<string>(id);
  const {loading,error,data,refetch} = useQuery<{
    character: {
      name:string
    }
  }>(
    query,{
    variables: {
      id:charID
    }
  }
  );





  if(loading) return <div>Loading...</div>
  if(error) return <div>Error</div>
  return(
    <div>
      {data!.character.name }
      <input type="text" onChange={(e)=> setCharID(e.target.value)}/>
    </div>
  )
}

export default Character;
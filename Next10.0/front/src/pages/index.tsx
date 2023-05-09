import { GetServerSideProps } from "next";
import  getClient  from "@/libs/client";


import {gql }from "@apollo/client";
export const getServerSideProps:GetServerSideProps = async () => {


  const query = gql`
  query ExampleQuery {
    list
  }
  
  `

  const client = getClient();
  const {data} = await client.query<{
    list: string[],
  }>({
    query
  });
  return {
    props:{
      data: data
    }
  }

}

export default function Home(props: {data: {list:string[]}}){
    console.log(props.data);
  return(
    <>
      {props.data.list.map((word) => {
        return word;
      })}
    </>
  )
}

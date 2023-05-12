import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'



import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import getApolloClient from "@/libs/client";
import { gql } from "@apollo/client";

import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id;

  const query = gql`
  query {
    characters {
      results {
        id
        name
      },
      info{
        count,
        pages,
        next,
        prev
      }
    }
  }
  `;


  
  const client = getApolloClient();

  const { data } = await client.query<{
    characters: {
      results: {
        id: string,
        name: string,
      }[];
      info:{
        count: number,
        pages: number,
        next: number,
        prev: number
      }
    };
  }>({
    query,
  });



  return {
    props: {
      data: data.characters.results,
      info: data.characters.info
    },
  };
};



export default function Home(props: {
    data:{
      id: string,
      name:string
    }[],
    info:{
      count: number,
      pages: number,
      next: number,
      prev: number
    }
}) {  

  return (
    <>
        {props.data.map( (character) => {
return(
  <div key={character.id}>
        {character.name}
        
        </div>
)

         } )}
        <div>{props.info.count}</div>
        
    </>
  )
}
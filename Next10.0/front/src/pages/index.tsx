import { GetServerSideProps } from 'next';
import  getClient  from '../libs/client';
import { gql } from '@apollo/client';
import Link from 'next/link'
import Agenda from '@/components/mutation';


export  const getServerSideProps : GetServerSideProps = async ()=> {
  const query = gql`
  query ExampleQuery{
    list
  }
  `;

  const client = getClient();
  const {data} = await client.query({
    query
  });

  console.log("Informacion data", {data})

  return {
    props: {
      data: data.list
    }
  }
}

export default function Home(props: {data:string[]}) {


  return (
    <>
      <Agenda data={props.data}/>
    </>
  )
}
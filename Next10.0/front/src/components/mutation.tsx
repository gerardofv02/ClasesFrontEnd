import { useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";



const Agenda = (props:{data:any}) => {



    const mutation = gql`
    mutation ($word: String!) {
        addWord(word: $word) 
      }
    `;

    const [myword, setWord] = useState<string>("a");

    const[mywords, setWords] = useState<string[]>(props.data);


    const [mymutation] = useMutation(mutation);



    return (
        <>
        <div>
        {props.data.map( (word: string) => {return <div>{word}</div>})}
            
            <button onClick={e =>{ 
                mymutation({variables: {word: myword}}); 
                const newWords= mywords;
                newWords.push(myword);
                setWords(newWords);
                }}>Si</button>
        </div> 
        </>
    )

 
}

export default Agenda;
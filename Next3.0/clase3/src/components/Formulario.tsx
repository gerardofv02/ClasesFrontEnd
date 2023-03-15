import Link from "next/link"
import { useEffect, useState } from "react"

const Formulario = () => {
    const [data, setData] = useState<string[]>([])
    const [nombre, setNombre] = useState<string>("")
    const [page, setPage] = useState<number>(1) 
    useEffect(() => {
        const fetchData = async () => {
            const chars = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&page=${page}`);
            const json = await chars.json();
            const names = json.results.map((char: any) => char.name);
            setData(names);
        }
        try{
        fetchData();
    }catch(e){
        setData(["Error al buscar"]);
    }
        
    }
        , [nombre,page])


    if (data.length === 0) {
        return <>Loading data</>
    }

    return (
        <>
           Introduce nombre : <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/> <br/>
           Introduce Pagina : <input type="number" value={page} onChange={(e) => setPage(parseInt(e.target.value))}/> <br/>
           <button onClick={() => setPage(page+1)}>Siguiente página</button>
           <button onClick={() => setPage(page-1)}>Pagina anterior </button>
            {data.map((item,index) => (<Link href={`character/${index+1}`}>{item}</Link>))}
        </>
    )
}

export default Formulario;
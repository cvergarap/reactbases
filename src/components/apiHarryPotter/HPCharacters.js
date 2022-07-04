import { useState, useEffect } from "react";
import HPCharacter from "./HPCharacter";

function HPCharacters(){
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(()=>{(async()=>{
        const response = await fetch ("https://hp-api.herokuapp.com/api/characters");
        const json = await response.json();
        setCharacters(json);
        setLoading(false);
    })()},[])

    if(loading){
        return(
            <div className="w-1/2 mx-auto mt-10 p-2">
                <div className="text-white p-2">
                    Cargando ...
                </div>
            </div>
        )
    } else {
        return(
            <div className="w-1/2 mx-auto mt-10 p-2">
                <div className="text-white p-2">
                   <h1 className="text-3xl"> Listado de Personajes de Harry Potter</h1>
                   {characters.map(
                    (character, index)=>(
                        character.image && (
                            <HPCharacter 
                                key={index}
                                {...character}
                            />
                        )
                    )
                   )}
                </div>
            </div>
        )
    }
}
export default HPCharacters;
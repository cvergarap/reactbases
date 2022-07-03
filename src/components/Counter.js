import { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    return(
        <div 
            className= "mb-5 mx-auto">
                <h1 
                    className= "mb-5 text-3xl">
                        Contador
                </h1>
            <button 
                onClick= {()=>setCount(count + 1)}
                className="btn bg-gray-500 hover:bg-gray-700 ml-2 mr-1 text-white-2xl py-2 px-4 rounded">
                    Incrementar [+]
            </button>
            <button 
                onClick= {()=>setCount(count - 1)}
                className="btn bg-gray-500 hover:bg-gray-700 ml-1 mr-2 text-white-2xl py-2 px-4 rounded">
                    Decrementar [-]
            </button>
            <br/>
            <p id="idContador" className="mt-2 text-2xl text-white">{count}</p>
            
            <br/>
        </div>
    )
}

export default Counter;
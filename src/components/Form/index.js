import React, { useState } from 'react';
import './styles.css'
import { useHistory } from "react-router-dom";

export default function Form() {
    let history = useHistory();

    const [userName, setuserName] = useState('');

    function handleClick() {
         console.log(history)
         history.push(`/ProfileDetail/${userName}`)
   }

   return(
        <div className="Form">
            <form  >
                <input onChange={e => setuserName(e.target.value)} type="text" placeholder="Preencha um usuário" value={userName} />
                <button onClick={handleClick}>Procurar</button>
            </form>
        </div>
    )

    }

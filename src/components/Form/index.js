import React, { useState } from 'react';
import './styles.css'
import { useHistory } from "react-router-dom";

export default function Form({requestSearch}) {
    let history = useHistory();
    const [userName, setuserName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if(userName)
        if(requestSearch != null)
            requestSearch()
        history.push(`/ProfileDetail/${userName}`)
        
   }

   return(
        <section className="Form">
            <form onSubmit={e => handleSubmit(e)}>
                <input  required onChange={e => setuserName(e.target.value)} type="text" placeholder="Preencha um usuário" value={userName} />
                <button data-testid="search-button" className="button" >Procurar</button>
            </form>
        </section>
    )
}

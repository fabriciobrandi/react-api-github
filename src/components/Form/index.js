import React, { useState } from 'react';
import './styles.css'
import { useHistory } from "react-router-dom";

export default function Form(props) {
    let history = useHistory();
    const [userName, setuserName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if(userName)
        history.push(`/ProfileDetail/${userName}`)
   }


   return(
        <section className="Form">
            <form data-testid="form" onSubmit={e => handleSubmit(e)}>
                <input data-testid="input-login" required onChange={e => setuserName(e.target.value)} type="text" placeholder="Preencha um usuário" value={userName} />
                <button data-testid="search-button" className="button" >Procurar</button>
            </form>
        </section>
    )
}

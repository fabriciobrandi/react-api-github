import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

export default function Card(props){

    const profile = props;
    let cardDetail
    if(!profile.name){
        cardDetail= <Link to={`/ProfileDetail/${profile.login}`}>Visualizar perfil</Link>
    }else{
        cardDetail = 
        <div>
            <p>Nome:  <strong>{profile.name}</strong></p>
            <p>Bio:  <strong>{profile.bio}</strong></p>
            <p>Localidade: <strong>{profile.location}</strong></p>
        </div>
    }


    return(
        <div className="github-profile">
            <article>
                <img src= {profile.avatar_url} alt="imagem"/>
                <p>{profile.login}</p>
                {cardDetail}
                    {/* <Link to={`/ProfileDetail/${profile.login}`}>Visualizar perfil</Link> */}
            </article>
        </div>
    )
}

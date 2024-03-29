import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

export default function Card(props){

    const profile = props;
    let cardDetail,className


    //A validacao de como apresentar o card é realizado verificando se o parametro name existe, apenas no profile completo apresenta este dado
    if(!profile.name){
        cardDetail= <p className="user-link"> <Link to={`/ProfileDetail/${profile.login}`}>Visualizar perfil</Link></p>
    }else{
        className = "profile-detail"
        cardDetail = 
        <div>
            <ul>
                <li>Nome:  <strong>{profile.name}</strong> </li>
                <li>Bio:  <strong>{profile.bio}</strong>  </li>
                <li>Localidade: <strong>{profile.location}</strong>  </li>
            </ul>
        </div>
    }
    return(
        <div data-testid="card-div" className={className}>
            <div className="user-avatar-img">
                <img data-testid="img-avatar" src= {profile.avatar_url} alt="img"  />
            </div>
            <div className="user-content">
                <div className="user-login">
                    <h1>{profile.login}</h1>
                </div>
                <div className="user-info">
                    {cardDetail}
                </div>
            </div>
        </div>
    )
}

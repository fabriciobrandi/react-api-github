import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import logo from './logo.png'; // Tell webpack this JS file uses this image

export default function Card(props){

    const profile = props;
    let cardDetail
    if(!profile.name){
        cardDetail= <p className="link"> <Link to={`/ProfileDetail/${profile.login}`}>Visualizar perfil</Link></p>
    }else{
        cardDetail = 
        <div>
            <p>Nome:  <strong>{profile.name}</strong></p>
            <p>Bio:  <strong>{profile.bio}</strong></p>
            <p>Localidade: <strong>{profile.location}</strong></p>
        </div>
    }


    return(
        <div className="card">
            <div className="image">
                <img src= {profile.avatar_url}  />
              
            </div>
            <div className="content">
                <div className="title">
                    <h1>{profile.login}</h1>
                </div>
                <div className="info">
                    {cardDetail}
                </div>
            </div>
        </div>
    )
}

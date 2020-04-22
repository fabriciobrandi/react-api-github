import React, {useState,useEffect } from 'react'

import api from '../../services/api'
import Card from '../../components/Card';
import RepositoryList from '../../components/RepositoryList';

import './styles.css'

import {Link,useParams} from 'react-router-dom'

export default function ProfileDetail(props){
    
    const [profile, setProfile] = useState({});
    const [repositories, setRepositories] = useState([]);
    const {login} = useParams();

    useEffect( () => {
        async function getUser() {

            try{
                const result = await api.get(`/users/${login}`)
                setProfile(result.data === null  ?  console.log("pan") :result.data );
            } 
            catch(error){
                setProfile({name: "invalido"})
                console.log(error)
           };
        }
        getUser();
    },[login]);

    useEffect( () => {
        async function getRepos() {
            try{
                const result = await api.get(`/users/${login}/repos`)
                setRepositories(result.data);
            } 
            catch(error){
                console.log(error)
           };
        
    }
    getRepos();
},[login]);
    
    if(profile.name === "invalido"){
        return  (  
            <div className="root-detail">
                <div className="navigation">
                    <p><Link className="button" to={`/`}>Voltar</Link></p>
                </div>
                <div style={{textAlign:'center'}} ><h1>Nao Foi encontrado nenhum usuario com o login informado</h1></div>
            </div>
            );
        }
        else if(profile.name !== null)
        {
        return  (  
            <div className="root-detail">
            <div className="navigation">
                <p><Link className="button" to={`/`}>Voltar</Link></p>
            </div>
            <div className="profile-detail">    
                <Card {...profile}/>
            </div>
            <RepositoryList repositories={repositories}/>
        </div>
        );
    }

        
    
  
}
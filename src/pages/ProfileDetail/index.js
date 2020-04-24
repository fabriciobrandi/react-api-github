import React, {useState,useEffect,useContext, useRef } from 'react'

import api from '../../services/api'
import Card from '../../components/Card';
import RepositoryList from '../../components/RepositoryList';

import './styles.css'
import LoadingContext from '../../contexts/LoadingContext.js'
import {Link,useParams} from 'react-router-dom'

export default function ProfileDetail(){
    const {showLoading, hideLoading} = useContext(LoadingContext);

    const [profile, setProfile] = useState({});
    const [repositories, setRepositories] = useState([]);
    const {login} = useParams();
    let userValid = useRef(true) ;

    useEffect( () => {
        async function getUser() {
            try{
                const result = await api.get(`/users/${login}`)
                setProfile(result.data);
                userValid.current = true;
            } 
            catch(error){
                console.log(error)
                userValid.current = false;
           };
        }
        getUser();
        
    },[login]);

    useEffect( () => {
        showLoading("Carregando repositorios");
        async function getRepos() {
            try{
                const result = await api.get(`/users/${login}/repos`)
                setRepositories(result.data);
                hideLoading()
                userValid.current = true;

            } 
            catch(error){
                userValid.current = false;
                console.log(error)
                hideLoading()
           };
        
    }
    getRepos();
},[login]);

    if(!userValid.current){
        return  (  
            <div className="root-detail">
                <div className="navigation">
                    <p><Link className="button" to={`/`}>Voltar</Link></p>
                </div>
                <div style={{textAlign:'center'}} ><h1>Nao Foi encontrado nenhum usuario com o login informado</h1></div>
            </div>
            );
        }
        else 
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
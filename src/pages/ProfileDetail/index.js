import React, {useState,useEffect,useLayoutEffect } from 'react'

import api from '../../services/api'
import Card from '../../components/Card';
import RepositoryList from '../../components/RepositoryList';

import './styles.css'

import {Link,useParams} from 'react-router-dom'

export default function ProfileDetail(props){
    
    const [profile, setProfile] = useState({});
    const [repositories, setRepositories] = useState([]);
    const {login} = useParams();

    useLayoutEffect( () => {
        async function getUser() {
            const result = await api.get(`/users/${login}`);
            setProfile(result.data);
        }
        getUser();
    },[login]);

    useLayoutEffect( () => {
        async function getRepos() {
            const result = await api.get(`/users/${login}/repos`);
            setRepositories(result.data);
    }
    getRepos();
},[login]);

    return  (  
        <div>
            <div className="navigation">
                <p><Link className="button" to={`/`}>Voltar</Link></p>
            </div>
            <div>    
                <Card {...profile}/>
                <RepositoryList repositories={repositories}/>
            </div>
        </div>
    );
  
}
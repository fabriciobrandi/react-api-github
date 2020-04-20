import React, {useState,useEffect } from 'react'

import api from '../../services/api'
import Card from '../../components/Card';
import RepositoryList from '../../components/RepositoryList';

import {Link} from 'react-router-dom'

export default function ProfileDetail(props){
    
    const [profile, setProfile] = useState({});
    const [repositories, setRepositories] = useState([]);
    const {login} = props.match.params 

    useEffect( () => {
        async function fetchData() {
            const result = await api.get(`/users/${login}`);
            setProfile(result.data);
        }
        fetchData();
  },[login]);

  useEffect( () => {
    async function fetchData() {
        const result = await api.get(`/users/${login}/repos`);
        setRepositories(result.data);
    }
    fetchData();
},[login]);

// async componentDidMount(){
    
// }

    return  (  

    <div>
        <p><Link className="voltar" to={`/`}>Voltar</Link></p>
        <Card {...profile}/>
        <RepositoryList repositories={repositories}/>
    </div>
    );
  
}
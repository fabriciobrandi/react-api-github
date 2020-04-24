import React,{useEffect,useState} from 'react';
import api from '../../services/api'
import Form from '../../components/Form'
import CardList from '../../components/CardList'

import './styles.css'
export default function Main() {

    const [profiles, setProfiles] = useState([]);
    const [lastUserId, setLastUserId] = useState(0);

  useEffect( () => {
    LoadUsers();
},[]);

async function LoadUsers  (lastUserId = 0){
    const response = await api.get(`/users?since=${lastUserId}&per_page=10`)
    const maxValueOfId = Math.max(...response.data.map(o => o.id), 0);
    setProfiles([...profiles, ...response.data])
    setLastUserId(maxValueOfId)
};

function nextPage(){
    LoadUsers(lastUserId)
}

    return (
      <main>
         <Form />
         <CardList profiles={profiles} />  
         <div className="actions">
            <button className="button" onClick={nextPage}>Carregar mais..</button>
        </div>

      </main>
    );
  
}


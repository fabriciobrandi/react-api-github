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
    const response = await api.get(`/users?since=${lastUserId}&per_page=5`)
    const maxValueOfId = Math.max(...response.data.map(o => o.id), 0);
    setProfiles([...profiles, ...response.data])
    setLastUserId(maxValueOfId)
};

function nextPage(){
    LoadUsers(lastUserId)
}



    return (
      <div className="App" >
         {/* <Form onSubmit={this.searchProfile}/> */}
         <Form />
         <CardList profiles={profiles} />  
        
         <div className="actions">
            {/* <button disabled={lastUser === 0} onClick={this.prevPage}>Anterior</button> */}
            <button onClick={nextPage}>Ver mais 5..</button>
        </div>

      </div>
    );
  
}


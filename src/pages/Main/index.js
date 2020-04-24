import React,{useEffect,useState,useContext} from 'react';
import api from '../../services/api'
import Form from '../../components/Form'
import CardList from '../../components/CardList'
import LoadingContext from  '../../contexts/LoadingContext.js'

import './styles.css'
export default function Main() {

    const [profiles, setProfiles] = useState([]);
    const [lastUserId, setLastUserId] = useState(0);
    const {showLoading, hideLoading} = useContext(LoadingContext);

  useEffect( () => {
    LoadUsers();
},[]);

async function LoadUsers  (lastUserId = 0){
  showLoading('Carregando usuarios')

  //Para carregar os itens de acordo com a resolucao de tela
  const resolution = window.innerWidth;
  const showItems = resolution > 1132 ? 8 : resolution > 759 ? 4 : 2
  
    const response = await api.get(`/users?since=${lastUserId}&per_page=${showItems}`)
    const maxValueOfId = Math.max(...response.data.map(o => o.id), 0);
    setProfiles([...profiles, ...response.data])
    setLastUserId(maxValueOfId)

    hideLoading()
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


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


//   componentDidMount(){
//     this.loadProducts();       
//   }


async function LoadUsers  (lastUserId = 0){
    const response = await api.get(`/users?since=${lastUserId}&per_page=5`)
    const maxValueOfId = Math.max(...response.data.map(o => o.id), 0);
    setProfiles([...profiles, ...response.data])
    setLastUserId(maxValueOfId)

    //this.setState({profiles: [...profiles, ...response.data],lastUserId:maxValueOfId});
};

function nextPage(){
    LoadUsers(lastUserId)

    
    //if(page === productInfo.pages) return;

   // const lastUser = Math.max(...profiles.data.map(o => o.id), 0);
    //const pageNumber = page + lastUser;

    
}

//  searchProfile = (profileData) =>{
//     //  this.setState({profiles: [profileData]});
//     //  console.log(profileData);
//     this.props.history.push('/ProfileDetail/mojomno')
//     }

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


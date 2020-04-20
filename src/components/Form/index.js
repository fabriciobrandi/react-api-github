import React, { useState } from 'react';
import './styles.css'
import api from '../../services/api'
//import { browserHistory as history } from 'react-router';

export default function Form() {

    const [userName, setuserName] = useState('');

    // handleSubmit = (event) =>{
    //     //let history = useHistory();
    //     event.preventDefault();
    //      //console.log(history)

    //     //const resp = await api.get(`/users/${this.state.userName}`);
        //this.props.onSubmit(resp.data)
        // history.push(`/ProfileDetail/${this.state.userName}`)

        //console.log(resp)
   // }

    // useEffect(() => {
    //     function onChangeInput(event) {
    //         setuserName(event.target.value);
    //     }
       
    //   });
    

    // onChangeInput(event){ 
    //     setuserName(event.target.value);
    // }

    return(
        <div className="Form">
            <form  >
                <input onChange={e => setuserName(e.target.value)} type="text" placeholder="Preencha um usuário" value={userName} />
                <button>Procurar</button>
            </form>
        </div>
    )

    }

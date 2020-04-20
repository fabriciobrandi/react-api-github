import React from 'react'
import Card from '../../components/Card'
import './styles.css'


export default function CardList(props){
        const profiles = props.profiles;
       
        return(
            <div className="product-list">
               {profiles.map(profile => <Card key={profile.id} {...profile}/>)}  
          </div>
        )
    }
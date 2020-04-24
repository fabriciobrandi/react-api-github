import React from 'react'
import Card from '../../components/Card'
import './styles.css'


export default function CardList(props){
        const profiles = props.profiles;
        return(
          <section className="card-list">
              {profiles.map(profile => <div className="card" key={profile.id} ><Card key={profile.id} {...profile}/></div> )}  
          </section>
        )
    }
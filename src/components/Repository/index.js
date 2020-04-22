import React from 'react'
import './styles.css'

export default function Repository(props){

    const repo = props;
    return(
            <div className="box" key={repo.id}>
                <strong><a href = {repo.html_url}> {repo.name}</a></strong>  
                <ul>
                    <li><strong>Descricao: </strong>{repo.description}</li>
                    <li><strong>Tamanho: </strong>{repo.size}</li>
                    <li><strong>Linguagem:</strong> {repo.language}</li>
                    <li> <strong>Issues abertos:</strong>{repo.open_issues_count}</li>
                </ul>
            </div>
        
    )
    
}
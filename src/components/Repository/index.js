import React from 'react'
import './styles.css'

export default function Repository(props){

    const repo = props;
    return(
        <div className="github-profile">
            <article key={repo.id}>
            <strong>{repo.title}</strong>
            <p>Descricao: {repo.description}</p>
            <p>Tamanho: {repo.size}</p>
            <p>Linguagem: {repo.language}</p>
            <p>Issues abertos: {repo.open_issues_count}</p>
        </article>
        </div>
    )
    
}
import React  from 'react'
import Repository from '../../components/Repository'
import './styles.css'

export default function RepositoryList(props){
    
    function getTotalLanguages (repositories) {
        var result = [];
        repositories.reduce(function(res, value,index) {
        const separator = index > 0 ? "," : ""
          if (!res[value.language]) {
            res[value.language] = { 
                Language: separator + (value.language ?? "Sem Linguagem"), qty: 0 };
                result.push(res[value.language])
          }
          res[value.language].qty++
          return res;
        }, {});
         return result
    }
    const repositories = props.repositories;
    const languages = getTotalLanguages(repositories);
    
    console.log(languages);

    return(
    <div>
        <div className="product-list">
            <p>Tamanho total:  <strong>{repositories.reduce((prev,next) => prev + next.size,0)} bytes</strong></p>
            <p>Issues abertos: <strong>{repositories.reduce((prev,next) => prev + next.open_issues_count,0)}</strong></p>
            <p>Linguagens: 
                {languages.map(language =>(
                    <strong> {language.Language} ({language.qty}) </strong>
                ))}
            </p>

        </div>

            <div className="product-list">
            {repositories.map(repo => <Repository key={repo.id} {...repo}/>)}  
        </div>
    </div>
    )
}
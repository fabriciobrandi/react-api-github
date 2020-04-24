import React  from 'react'
import Repository from '../../components/Repository'
import './styles.css'

export default function RepositoryList(props){
    
    function getTotalLanguages (repositories) {
        var result = [];
        repositories.reduce(function(res, value,index) {
        //const separator = index > 0 ? "," : ""
          if (!res[value.language]) {
            res[value.language] = {
                Key: index, 
                Language: (value.language ?? "Sem Linguagem"), qty: 0 };
                result.push(res[value.language])
          }
          res[value.language].qty++
          return res;
        }, {});
         return result
    }
    const repositories = props.repositories;
    const languages = getTotalLanguages(repositories);

    return(
    <div className="row">
        <div className="column">
        <h3>Resumo</h3>
            <div className="sumary">
                <ul>
                    <li><strong>Tamanho total: </strong> <i data-testid="sum-sizes"> {repositories.reduce((prev,next) => prev + next.size,0)} bytes</i></li>
                    <li><strong>Issues abertos:</strong> <i data-testid="sum-issues"> {repositories.reduce((prev,next) => prev + next.open_issues_count,0)}</i> </li>
                    <li>
                        <strong>Linguagens:  </strong> <i data-testid="sum-languages">
                        {
                            languages.map(language =>(
                            <ul   key={language.Key}>
                            <li>  {language.Language} <strong> ({language.qty})</strong> </li>
                            </ul>
                        ))}
                        </i>
                    </li>
                </ul>
            </div>
        </div>

        <div className="column">
            <h3>Repositorios</h3>
            {repositories.map(repo =>  <Repository key={repo.id} {...repo}/>)}  
        </div>
    </div>
    )
}
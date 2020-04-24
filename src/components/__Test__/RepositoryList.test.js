import React from 'react';
import {render} from "@testing-library/react";
import RepositoryList from "../RepositoryList"
import { BrowserRouter as Router } from 'react-router-dom';

const repoList = [
  {id:1, html_url:"url1", name: "name1",description:"description1",size:100,language:"C++",open_issues_count:1 },
  {id:2, html_url:"url2", name: "name2",description:"description2",size:200,language: "Javascript",open_issues_count:2 },
  {id:3, html_url:"url3", name: "name3",description:"description3",size:300,language: "Javascript",open_issues_count:3 },
]

describe('Render elements', () => {
  
  describe('Sumary of repositories', () => {
    const { getByTestId } = render(<Router> <RepositoryList repositories={repoList}/> </Router>)
    it('Should sum value correctly ', () => {
      expect(getByTestId('sum-sizes').textContent).toBe(" 600 bytes")
      expect(getByTestId('sum-issues').textContent).toBe(' 6')
      expect(getByTestId('sum-languages').textContent).toBe('  C++  (1)   Javascript  (2) ')
    });
  });

  describe('List of repositories', () => {
    it('Should have 3 repository objects created ', () => {
      const { getByText ,getAllByText} = render(<Router> <RepositoryList repositories={repoList}/> </Router>)
      
      expect(getByText('name1')).toBeInTheDocument()
      expect(getByText('name2')).toBeInTheDocument()
      expect(getByText('name3')).toBeInTheDocument()
   
      expect(getAllByText('Descricao:')).toHaveLength(3)
    });
  });

});

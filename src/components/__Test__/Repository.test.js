import React from 'react';
import {render} from "@testing-library/react";
import Repository from "../Repository"
import { BrowserRouter as Router } from 'react-router-dom';


describe('Render elements', () => {
  
  describe('Rendering elements with values passed', () => {
    const repo =   {id:1, html_url:"url1", name: "name1",description:"description1",size:100,language:"C++",open_issues_count:300 }

    const { getByText } = render(<Router> <Repository {...repo}/> </Router>)
    it('Should have the values of object repo ', () => {
     
      expect(getByText('name1')).toBeInTheDocument()
      expect(getByText('description1')).toBeInTheDocument()
      expect(getByText('100')).toBeInTheDocument()
      expect(getByText('C++')).toBeInTheDocument()
      expect(getByText('300')).toBeInTheDocument()
     
    });
  });
});

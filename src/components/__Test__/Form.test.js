import React from 'react';
import {render,fireEvent,cleanup} from "@testing-library/react";
import Form from "../Form"
import { BrowserRouter as Router } from 'react-router-dom';
import ReactTestUtils from 'react-dom/test-utils'; // ES6


describe('Search button', () => {
  
  describe('with input not null', () => {
    it('Should trigger a function ', () => {
      const requestSearch = jest.fn();

      const { getByTestId,queryByPlaceholderText, debug  } = render(<Router> <Form requestSearch={requestSearch} /> </Router>)
      const searchInput = queryByPlaceholderText('Preencha um usuário')
     
      fireEvent.change(searchInput, {target:{value:"test"}})
      fireEvent.click(getByTestId('search-button'))
      
      expect(requestSearch).toHaveBeenCalled();
    });
  });

  describe('with empty query', () => {
    it('Should not trigger a function ', () => {
      const requestSearch = jest.fn();
      const { getByTestId  } = render(<Router> <Form requestSearch={requestSearch}  /> </Router>)
     
      fireEvent.click(getByTestId('search-button'))
      
      expect(requestSearch).not.toHaveBeenCalled();
    });
  });
  
 
});

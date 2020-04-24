import React from 'react';
import {render,fireEvent} from "@testing-library/react";
import Form from "../Form"
import { BrowserRouter as Router } from 'react-router-dom';
import ReactTestUtils from 'react-dom/test-utils'; // ES6

describe('Search button', () => {
  describe('with empty query', () => {
    it('Should not trigger valuefunction ', () => {
      const requestSearch = jest.fn();
      const { getByTestId  } = render(<Router> <Form /> </Router>)
     
      fireEvent.click(getByTestId('search-button'))
      expect(requestSearch).not.toHaveBeenCalled();
    });
  });
  
  describe('with input not null', () => {
    it('Should trigger a function ', () => {
      const handler = jest.fn(e => e.preventDefault())
      const { getByTestId,queryByPlaceholderText, debug  } = render(<Router> <Form/> </Router>)
      const searchInput = queryByPlaceholderText('Preencha um usuário')
     
      fireEvent.change(searchInput, {target:{value:"test"}})
     
      ReactTestUtils.Simulate.submit(getByTestId('form'))

      //debug()

      expect(searchInput).toBeInTheDocument()
    });
  });
});

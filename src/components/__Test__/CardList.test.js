import React from 'react';
import {render} from "@testing-library/react";
import CardList from "../CardList"
import { BrowserRouter as Router } from 'react-router-dom';


const twoElementsList = [
  {id:1, login:"login_test1", avatar_url: "avatar1.jpg" },
  {id:2, login:"login_test2", avatar_url: "avatar2.jpg" }
]

describe('Render elements', () => {
  describe('with simple profile input', () => {
const { getByText,getAllByTestId,getAllByText  } = render(<Router> <CardList profiles={twoElementsList}/> </Router>)
    it('Should list 2 cards ', () => {

       expect(getByText('login_test1')).toBeInTheDocument()
       expect(getByText('login_test2')).toBeInTheDocument()

       expect(getAllByTestId('card-div')).toHaveLength(2)
       expect(getAllByText('Visualizar perfil')).toHaveLength(2)
    });
  });
});

import React from 'react';
import {render} from "@testing-library/react";
import Card from "../Card"
import { BrowserRouter as Router } from 'react-router-dom';

const simpleProfile = {id:1, login:"login_test", avatar_url: "avatar.jpg" }
const detailedProfile = {id:1, login:"login_test", avatar_url: "avatar.jpg",name:"name_test",bio :"bio_test", location:"location_test"}
  

 describe('Render elements', () => {
   describe('with simple profile input', () => {
     it('Should show a simple card', () => {
      const { getByText,getByTestId  } = render(<Router> <Card key={simpleProfile.id} {...simpleProfile}/> </Router>)
      expect(getByText('login_test')).toBeInTheDocument()
      expect(getByText('Visualizar perfil')).toBeInTheDocument()
      expect(getByText('Visualizar perfil')).toHaveAttribute('href', '/ProfileDetail/login_test')
      expect(getByTestId('img-avatar')).toHaveAttribute('src', 'avatar.jpg')
      
    });
  });
  describe('With detailed input', () => {
    it('Should show a detailed card', () => {
      const { getByText,getByTestId  } = render(<Router> <Card key={detailedProfile.id} {...detailedProfile}/> </Router>)
      expect(getByText('login_test')).toBeInTheDocument()
      expect(getByText('name_test')).toBeInTheDocument()
      expect(getByText('bio_test')).toBeInTheDocument()
      expect(getByText('location_test')).toBeInTheDocument()
      expect(getByTestId('img-avatar')).toHaveAttribute('src', 'avatar.jpg')
    
    });
  });
});

describe('Class Toggle', () => {
  describe('With simple input', () => {
    it('Shouldn´t have className', () => {
      const { getByTestId } = render(<Router> <Card key={simpleProfile.id} {...simpleProfile}/> </Router>)
      expect(getByTestId('card-div')).not.toHaveClass('profile-detail')
    });
  });
  describe('With detailed input', () => {
    it('Should have className profile-detail  ', () => {
      const { getByTestId } = render(<Router> <Card key={detailedProfile.id} {...detailedProfile}/> </Router>)
      expect(getByTestId('card-div')).toHaveClass('profile-detail')
    });
  });
});

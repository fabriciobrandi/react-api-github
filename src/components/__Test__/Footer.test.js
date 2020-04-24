import React from 'react';
import {render} from "@testing-library/react";
import Footer from "../Footer"

describe('Render elements', () => {
  describe('Footer', () => {
const { getByText  } = render(<Footer />)
    it('Should render ', () => {
       expect(getByText('2020 - Desenvolvido por Fabricio Brandi')).toBeInTheDocument()
    });
  });
});

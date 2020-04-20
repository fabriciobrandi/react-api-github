import React, { Component } from 'react';

import Header from './components/Header';

import Route from './routes';
import Footer from './components/FooterC';


function App (){
    return (
      <div className="App">
        <Header/>
        <Route/>
        {/* <Footer/> */}
       </div>
    );
}

export default App;
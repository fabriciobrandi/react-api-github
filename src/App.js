import React,{useState} from 'react';

import Route from './routes';
import Footer from './components/Footer';
import Loading from './components/Loading';

import LoadingContext from  './contexts/LoadingContext.js'




function App (){ const 
  
  [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  
  function showLoading(msg) {
    setLoading(true);
    setMessage(msg);
  }

  function hideLoading() {
    setLoading(false);
  }

  const value = {
    ...{loading, message},
    showLoading,
    hideLoading
  };

    return (
      <div className="App">
        <LoadingContext.Provider value={value}>
          <LoadingContext.Consumer>
            {
              ({showLoading, hideLoading, loading, message}) => (
                <>
            <Route {...{ showLoading, hideLoading}} />
            <Loading {...{ loading, message}} />
            </>
              )
            }
          </LoadingContext.Consumer>
        </LoadingContext.Provider>
        <Footer/>
       </div>
    );
}

export default App;
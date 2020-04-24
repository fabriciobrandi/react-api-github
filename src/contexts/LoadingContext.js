import React  from 'react';

const LoadingContext = React.createContext({
    loading: false,
    message: '',
    showLoading: message => {},
    hideLoading: () => {}
  });

  export default LoadingContext
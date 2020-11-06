import React,{useReducer} from 'react';
import Provider from './navigation';
// import {reducer, initialState} from './reducer/userReducer';

const App = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  return <Provider 
  // value={{state, dispatch}}
  />;
}

export default App;
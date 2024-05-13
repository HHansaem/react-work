import './App.css';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import { reducer } from './Reducer';
import Page1 from './Page1';
import Page2 from './Page2';

const store = configureStore({reducer});
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Page1/>
        <Page2/>
      </div>
    </Provider>
  );
}

export default App;

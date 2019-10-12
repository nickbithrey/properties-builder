import React from 'react';
import AddProperty from './AddProperty.container';
import PropertyList from './PropertiesList.container';
import ConvertedProperties from './ConvertedProperties.container';
import './App.css';
import { store } from './store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store} >
        <div className="App">
              <AddProperty />
              <PropertyList />
              <ConvertedProperties />
        </div>
    </Provider>
  );
}

export default App;

import React from 'react';
import AddProperty from './components/AddProperty.container';
import ConvertedProperties from './components/ConvertedProperties.container';
import './App.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

const App: React.FC = () => {
  return (
    <Provider store={store} >
        <div className="App">
          <Stack>
              <Stack.Item 
                  shrink={true} 
                  align={'auto'} 
                  disableShrink={false} 
                  verticalFill={true}
                  styles={{root: {padding: 30}}}>
                  <h1>Properties Builder</h1>
              </Stack.Item>
              <Stack.Item 
                  shrink={true} 
                  align={'auto'} 
                  disableShrink={false}
                  styles={{root: {padding: 30}}}>
                  <AddProperty />
              </Stack.Item>
              <Stack.Item 
                  shrink={true} 
                  align={'auto'} 
                  disableShrink={false}
                  styles={{root: {padding: 30}}}>
                  <ConvertedProperties />
              </Stack.Item>
          </Stack>
        </div>
    </Provider>
  );
}

export default App;

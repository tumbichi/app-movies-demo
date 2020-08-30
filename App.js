// Core - Vendor
import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import AppLayout from './src/app';

import Loading from './src/components/loading';

const App = () => {
  
  return (
    <Provider store={store}>
      <PersistGate 
        loading={<Loading />}
        persistor={persistor}>
        <AppLayout />
      </PersistGate>
    </Provider>
  );
};

export default App;

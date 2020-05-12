import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import Loader from './components/Loader';
import Root from './Root';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;

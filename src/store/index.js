import React from 'react';
import TestStore from './test';

export const storeContext = React.createContext({
  testStore: new TestStore(),
});

export const useStores = () => React.useContext(storeContext);

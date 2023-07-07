import i18n from './src/i18n';
import {NativeRouter, Route, Routes} from 'react-router-native';
import HomePage from './src/pages/Home';
import GamePage from './src/pages/GamePage';
import {I18nextProvider} from 'react-i18next';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <NativeRouter>
        <Routes>
          <Route exact path="/" Component={HomePage}></Route>
          <Route path="/game" Component={GamePage}></Route>
        </Routes>
      </NativeRouter>
    </I18nextProvider>
  );
};

export default App;

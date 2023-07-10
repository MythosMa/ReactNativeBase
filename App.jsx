import i18n from './src/i18n';
import HomePage from './src/pages/Home';
import GamePage from './src/pages/GamePage';
import {I18nextProvider} from 'react-i18next';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="game"
            component={GamePage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <NativeRouter>
        <Routes>
          <Route exact path="/" Component={HomePage}></Route>
          <Route path="/game" Component={GamePage}></Route>
        </Routes>
      </NativeRouter> */}
    </I18nextProvider>
  );
};

export default App;

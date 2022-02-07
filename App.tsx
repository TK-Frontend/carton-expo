import React from 'react';
import { SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const App: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='SignUp'
          options={{ headerShown: false }}
          component={SignUp}
        />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name='SignIn'
          component={SignIn}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

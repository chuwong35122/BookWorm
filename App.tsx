import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import NewBook from './src/screens/NewBook';
import {RootStackParamList} from './src/navigation/types';
import {extendTheme, NativeBaseProvider} from 'native-base';

const App = () => {
  // const isDarkMode = useColorScheme() === "dark";

  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    'NativeBase: The contrast ratio of 1:1 for darkText on transparent',
  ]);

  const nativeBaseTheme = extendTheme({});

  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={nativeBaseTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="NewBook"
              component={NewBook}
              options={{
                title: 'Add a New Book',
                headerStyle: {
                  backgroundColor: 'rgb(180,221,227)',
                },
                headerTintColor: '#0d47a1',
                headerTitleStyle: {
                  fontWeight: '500',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;

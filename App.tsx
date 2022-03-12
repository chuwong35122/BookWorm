import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import NewBook from './src/screens/NewBook';
import AuthScreen from './src/screens/Auth';
import {RootStackParamList} from './src/navigation/types';
import {extendTheme, NativeBaseProvider} from 'native-base';
import {Auth, getAuth, onAuthStateChanged} from 'firebase/auth';
import EmailSignUp from './src/screens/EmailSignUp';
import {firebaseConfig} from './src/libs/firebase';
import {getFirestore} from 'firebase/firestore';
import {initializeApp} from 'firebase/app';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const App = () => {
  // const isDarkMode = useColorScheme() === "dark";

  const [authInstance, setAuthInstance] = React.useState<Auth>(getAuth());

  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    'NativeBase: The contrast ratio of 1:1 for darkText on transparent',
  ]);

  const nativeBaseTheme = extendTheme({
    colors: {
      // primary: {
      // },
    },
  });

  React.useMemo(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        setAuthInstance(auth);
      } else {
        auth.signOut();
      }
    });
  }, []);

  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={nativeBaseTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            {authInstance.currentUser ? (
              <>
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
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Auth"
                  component={AuthScreen}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="EmailSignUp"
                  component={EmailSignUp}
                  options={{
                    title: 'Email Sign-in',
                    headerStyle: {
                      backgroundColor: 'rgb(180,221,227)',
                    },
                    headerTintColor: '#0d47a1',
                  }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;

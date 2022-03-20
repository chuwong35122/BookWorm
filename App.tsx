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
import EmailSignUp from './src/screens/EmailSignUp';
import {firebaseConfig} from './src/libs/firebase';
import {getFirestore} from 'firebase/firestore';
import {initializeApp} from 'firebase/app';
import SearchBook from './src/screens/SearchBook';
import {QueryClient, QueryClientProvider} from 'react-query';
import BookDetail from './src/screens/BookDetail';
import MyProfile from './src/screens/MyProfile';
import {useFirebaseAuth} from './src/hooks/useFirebaseAuth';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const App = () => {
  // const isDarkMode = useColorScheme() === "dark";

  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    'NativeBase: The contrast ratio of 1:1 for darkText on transparent',
    'AsyncStorage has been extracted from react-native core and will be removed in a future release.',
  ]);

  const nativeBaseTheme = extendTheme({
    colors: {
      // primary: {
      // },
    },
  });

  const Stack = createNativeStackNavigator<RootStackParamList>();

  const queryClient = new QueryClient();
  const {user} = useFirebaseAuth();

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider theme={nativeBaseTheme}>
          <NavigationContainer>
            <Stack.Navigator>
              {user ? (
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
                  <Stack.Screen
                    name="SearchBook"
                    component={SearchBook}
                    options={{title: 'Search Book', headerTitleAlign: 'center'}}
                  />
                  <Stack.Screen
                    name="BookDetail"
                    component={BookDetail}
                    options={{title: 'Book Detail', headerTitleAlign: 'center'}}
                  />
                  <Stack.Screen
                    name="Profile"
                    component={MyProfile}
                    options={{title: 'My Profile', headerTitleAlign: 'center'}}
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
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;

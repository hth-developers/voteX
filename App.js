import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home';
import Auth from './Screens/Auth';
import Register from './Screens/Register';
import Login from './Screens/Login';
import E_Dashbord from './Screens/Election_commission/E_Dashbord';
import Add_Org from './Screens/Election_commission/Add_Org';
import All_Org from './Screens/Election_commission/All_Org';
import Verify_PO from './Screens/Election_commission/Verify_PO';
import E_Profile from './Screens/Election_commission/E_Profile';
import E_Chats from './Screens/Election_commission/E_Chats';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Auth} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="E_Dashbord" component={E_Dashbord} />
        <Stack.Screen name="Add_Org" component={Add_Org} />
        <Stack.Screen name="All_Org" component={All_Org} />
        <Stack.Screen name="Verify_PO" component={Verify_PO} />
        <Stack.Screen name="E_Profile" component={E_Profile} />
        <Stack.Screen name="E_Chats" component={E_Chats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

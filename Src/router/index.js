import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Jadwal, Akun, Splash} from '../screen';
import {BottomTabs} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabs {...props} />}>
      <Tab.Screen name="HOME" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="JADWAL"
        component={Jadwal}
        options={{headerShown: false}}
      />
      <Tab.Screen name="AKUN" component={Akun} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Bottom}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

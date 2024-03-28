import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Bemvindo from "../pages/bemvindo";
import Entradalogin from "../pages/login";
import Home from '../pages/home';
import Home2 from '../pages/home2';
import Settings from '../pages/Settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Inicial
export function RoutesInitial(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Bem-Vindo" component={Bemvindo} options={{ headerShown: false }} />
            <Stack.Screen name="LogIn" component={Entradalogin} options={{ headerShown: false }}/>
            <Stack.Screen name="LinkHome1" component={TabRoutesMain} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

// Páginas principais (P.P)
export function TabRoutesMain(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home1" component={Home} options={{ headerShown: false }}/>
            <Tab.Screen name="Home2" component={Home2} options={{ headerShown: false }}/>
            <Tab.Screen name="LinkSettings" component={StackSettings} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

// P.P: Configurações
export function StackSettings(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Configurações" component={Settings}/>
        </Stack.Navigator>
    )
}

// Rota padrão exportada
export default function Routes(){
    return (
        <RoutesInitial/>
    )
}

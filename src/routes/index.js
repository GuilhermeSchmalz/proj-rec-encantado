import { createNativeStackNavigator } from "@react-navigation/native-stack";

import bemvindo from "../pages/bemvindo";
import entradalogin from "../pages/login";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Bem-Vindo" component={bemvindo}/>

            <Stack.Screen name="LogIn" component={entradalogin}/>

        </Stack.Navigator>
    )
}



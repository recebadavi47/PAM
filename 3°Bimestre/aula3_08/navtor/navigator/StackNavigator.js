import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function StackNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                  headerStyle: { backgroundColor: '#070707' },
                  headerTintColor: '#FFFFFF',
                   }}
            >

                <Stack.Screen
                  name="Entrar na Bat família"
                  component={Login}
                  />
                  <Stack.Screen
                  name="Home"
                  component={Home}
                  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
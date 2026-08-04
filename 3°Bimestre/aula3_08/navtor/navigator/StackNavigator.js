import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login/Login';
import Home from '..;screens/home/Home';

const Stack = createNativeStackNavigator();

export default function StackNavigator(){
    return (
        <NavigatorContainer>
            <Stack.Navigator>

                <Stack.Screens
                  name="login"
                  component={Login}
                  />
                  <Stack.Screens
                  name="Home"
                  component={Home}
                  />
            </Stack.Navigator>
        </NavigatorContainer>
    );
}
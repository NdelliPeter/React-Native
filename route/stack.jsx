import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../components/about';
import Home from '../components/home';

// const screens = {
//     Home: {
//         screen: Home
//     },
//     About: {
//         screen: About
//     }
// }

const Stack = createStackNavigator();

export default function MyStacks() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='About' component={About} />
        </Stack.Navigator>
    );
}
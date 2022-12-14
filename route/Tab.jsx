import { View, Text } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/home';
import About from '../components/about';
import Settings from '../components/Settings';
import MyStacks from './stack';



const Tab = createBottomTabNavigator();


export default function MyTabs() {
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={MyStacks} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}
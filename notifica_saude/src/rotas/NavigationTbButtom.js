import { NavigationContainer } from "@react-navigation/native"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Icon from "react-native-vector-icons/FontAwesome"; 
import Home from "../paginas/home"; 
import listagem from "../paginas/listagem"; 
import remedios from "../paginas/remedios"; 
const Tab = createBottomTabNavigator(); 
export default function NavigationTabBottom() { 
  return ( 
    <NavigationContainer> 
      <Tab.Navigator 
        screenOptions={{ headerShown: false }} // oculta o 
        cabecalho 
        padrao 
      > 
        <Tab.Screen 
          name="HOME" 
          component={Home} 
          options={{ 
            tabBarIcon: () => <Icon name="home" size={25} color="blue" />, 
          }} 
        /> 
        <Tab.Screen 
          name="listagem" 
          component={listagem} 
          options={{ 
            tabBarIcon: () => <Icon name="users" size={25} color="blue" />, 
          }} 
        /> 
        <Tab.Screen 
          name="remedios" 
          component={remedios} 
          options={{ 
            tabBarIcon: () => <Icon name="user" size={25} color="blue" />, 
          }} 
        /> 
      </Tab.Navigator> 
    </NavigationContainer> 
  ); 
}
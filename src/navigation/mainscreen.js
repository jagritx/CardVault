import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

import CardScreen from "../screens/CardWindow";
import InputScreen from "../screens/CardInput";
import PasswordScreen from "../screens/PasswordWindow";
import PasswordInputScreen from "../screens/PasswordInput";

const cardName = "Cards";
const inputName = "Add Card";
const passName = "Passwords";
const passinputName = "Save Password";

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        initialRouteName={cardName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === cardName) {
              iconName = focused ? "albums" : "albums-outline";
            } else if (rn === inputName) {
              iconName = focused ? "add" : "add-outline";
            } else if (rn === passName) {
              iconName = focused
                ? "file-tray-stacked"
                : "file-tray-stacked-outline";
            } else if (rn === passinputName) {
              iconName = focused ? "lock-closed" : "lock-closed-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={cardName} component={CardScreen} />
        <Tab.Screen name={inputName} component={InputScreen} />
        <Tab.Screen name={passName} component={PasswordScreen} />
        <Tab.Screen name={passinputName} component={PasswordInputScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainScreen;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import Home from "../screens/Home";
import NewsDetails from "../screens/NewsDetails";

const { Navigator, Screen } = createStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator  
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Login" component={Login} />
      <Screen name="CreateAccount" component={CreateAccount} />
      <Screen name="Home" component={Home} />
      <Screen name="NewDetails" component={NewsDetails} />
    </Navigator>
  );
};

export default StackRoutes;
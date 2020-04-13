import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Article1, Article2 } from "./app/views/Screens";

const HomeStack = createStackNavigator();


export default () => (
    <NavigationContainer>
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Article1" component={Article1} options={{ title: "The Latest Music Scene" }} />
            <HomeStack.Screen name="Article2" component={Article2} options={{ title: "The Latest Music Scene" }} />
        </HomeStack.Navigator>
    </NavigationContainer>
);
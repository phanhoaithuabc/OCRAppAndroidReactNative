import React, {useState} from 'react';
import { 
  View, Text, Image, ScrollView, TextInput, Button, StyleSheet 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Camera from './screens/Camera';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {

  return (
    // <View style={styles.body}>
    //   <Text style={styles.text}>OCR Application designed by ThuPH5</Text>
    //   <Text style={styles.text}>{name*5}</Text>
    //   <Text style={styles.text}>Click {name} times</Text>
    //   <View>
    //     <Button title='READ' onPress={onClickHandler}>
    //     </Button>
    //   </View>
    // </View>
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}>
          <Stack.Screen name="Home" component={Home} 
            options={{ headerShown: false, }} />
          <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  

  // body:{
  //   // flex: 1,
  //   backgroudColor: '#ffffff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderColor: '#000000',
  //   borderWidth: 10,
  //   borderRadius: 10,
  //   // padding: 10
  // },
  // text:{
  //   // fontStyle: 'italic',
  //   fontSize: 20,
  //   margin: 10,
  // },
});

export default App;
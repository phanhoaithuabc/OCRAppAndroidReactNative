import React, {useState} from 'react';
import { 
  View, Text, Image, ScrollView, TextInput, Button, StyleSheet 
} from 'react-native';

const App = () => {
  const [name, setname] = useState(0)
  const onClickHandler = () => {
    setname(name+1)
  }
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

    <View style={styles.body}>
      
    </View>
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
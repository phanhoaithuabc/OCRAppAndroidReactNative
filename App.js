import React from 'react';
import { LocationOCRView } from 'react-native-location-ocr';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      
      <LocationOCRView
        style={styles.root}
        onDetect={(coordinates) => {
          console.log('Coordinates');
        }}
      />

    </ScrollView>
  );
}

export default App;
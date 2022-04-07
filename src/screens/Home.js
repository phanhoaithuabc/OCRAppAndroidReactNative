import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, FlatList, TouchableOpacity
} from 'react-native';
import CustomButton from '../utils/CustomButton';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import TextRecognition from 'react-native-text-recognition';

export default function Home({ navigation }) {
    const [image, setImage] = useState(null);
    const [text, setText] = useState(null);
    // useEffect(()=>{
    //     launchImageLibrary({}, setImage);
    // }, []);
    useEffect(()=>{
        (async () => {
            if (image){
                const result = await TextRecognition.recognize(image.assets[0].uri);
                let result2='';
                for(let item in result){
                    result2 += result[item] + '\n' 
                }
                setText(result2)
                console.log("result: ", result2)
            }
        })();
    }, [image]);
    
    return (
        <View style={styles.body}>
            <Image style={styles.logo} source={require('../../assets/ocrocr.png')}/>
            <Text style={styles.text}>Welcome to OCR</Text>
            <Text style={styles.text}>Application</Text>
            <Text style={styles.subtitle}>designed by ThuPH5</Text>
            <ScrollView contentContainerStyle={styles.result}>
                <Text style={styles.subtitle}>{text ? text : "Not contain text"}</Text>
            </ScrollView>
            {/* <CustomButton title="Select Image" color='#1eb900'
                onPressFunction={() => { navigation.navigate('Camera') }} /> */}
            <CustomButton title="Select Image" color='#1eb900'
                onPressFunction={() => { launchImageLibrary({}, setImage); }} />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c9d5f5',
    },
    logo: {
        width: 200,
        height: 150,
        margin: 15,
    },
    text: {
        fontSize: 30,
        color: '#3168fb',
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtitle: {
        fontSize: 15,
        margin: 5,
        color: '#f39401',
    },
    result: {
        flex: 1,
        backgroundColor: '#ededed',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 200,
      },
})
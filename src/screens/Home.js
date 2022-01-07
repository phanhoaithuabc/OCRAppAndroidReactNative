import * as React from 'react';
import { StyleSheet, View, Text, Image, TextInput, FlatList, TouchableOpacity,
} from 'react-native';
import CustomButton from '../utils/CustomButton';

export default function Home({ navigation }) {

    return (
        <View style={styles.body}>
            <Image style={styles.logo} source={require('../../assets/ocrocr.png')}/>
            <Text style={styles.text}>Welcome to OCR</Text>
            <Text style={styles.text}>Application</Text>
            <Text style={styles.subtitle}>designed by ThuPH5</Text>
            <View style={styles.result}>
                <Text style={styles.subtitle}>result shown here</Text>
            </View>
            <CustomButton title="Open Camera" color='#1eb900'
                onPressFunction={() => { navigation.navigate('Camera') }} />
        </View>
    )
}


//------------------------------------------------------------------------------------ //

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
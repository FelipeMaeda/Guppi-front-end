import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { css } from '../assets/css/GlobalStyles'

export default function Home(props) {
    console.log(props)
    return (
        <View>
            <View style={[css.container_home, css.darkbg]}>
                
            </View>
            <Text>Profile</Text>
        </View>
    )
}
import { useLinkProps } from '@react-navigation/native';
import React, {useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import { css } from '../assets/css/GlobalStyles';

export default function Login(props) {
    
    const [display, setDisplay] = useState('none');

    function onPressButtonLogin() {
        props.navigation.navigate('Home');
        setDisplay('flex');
    }

    return (
        <KeyboardAvoidingView 
            style={[css.container, css.darkbg]}
        >
            <View>
                <Image
                    style={css.logo}
                    source={require('../assets/img/logo.jpg')}
                />
            </View>


            <View>
                <Text style={css.login__msg(display)}>
                    Usuário ou senha inválidos!
                </Text>
            </View>

            <View style={css.login__form}>
                <TextInput
                    style={css.login__input} 
                    placeholder='Usuário:' 
                />
                <TextInput 
                    style={css.login__input}
                    placeholder='Senha'
                    secureTextEntry={true}
                />
                <TouchableOpacity
                style={css.login__button} 
                onPress={() => onPressButtonLogin()}
                >
                    <Text style={css.login__buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
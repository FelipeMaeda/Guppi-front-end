import React from 'react';
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import { css } from '../assets/css/GlobalStyles';
import { Root, Popup } from 'popup-ui';

export default function Home(props) {
    console.log(props)
    return (
        <Root>
            <View>
                <View style={[css.container_home, css.darkbg]}>
                    {/*                <Image
                    style={css.logo_home}
                    source={require('../assets/img/logo.jpg')}
                /> */}
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Profile')}
                    >
                        <Image
                            style={css.icone_perfil}
                            source={require('../assets/img/perfil.png')}
                        />
                    </TouchableOpacity>
                    <View style={css.container_buttons}>
                        <Text style={css.ficha_text}>Ficha de Treino</Text>
                        <TouchableOpacity
                            style={css.treino_button}
                            onPress={() => props.navigation.navigate('Home')}
                        >
                            <Text style={css.text_treino_button}>
                                Treino A
                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={css.treino_button}
                            onPress={() => props.navigation.navigate('Home')}
                        >
                            <Text style={css.text_treino_button}>
                                Treino B
                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={css.treino_button}
                            onPress={() => props.navigation.navigate('Home')}
                        >
                            <Text style={css.text_treino_button}>
                                Treino C
                    </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Warning',
                                    icon: true,
                                    title: <Text style={css.help_popup_title}>Ajuda</Text>,
                                    button: true,
                                    textBody: <Text style={css.help_popup}>Essa parte é dividida em treinos para a maior facilidade de utilização.</Text>,
                                    buttonText: 'Ok',
                                    callback: () => Popup.hide()
                                })
                            }
                            style={css.help_popup}
                        >
                            <Image
                                style={css.icone_help}
                                source={require('../assets/img/help.png')}
                            />
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    </Root >
    )
}
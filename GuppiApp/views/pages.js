import React from 'react';
import { View, Text } from 'react-native';
import {css} from '../assets/css/GlobalStyles';

export default function Page(props){
    return (
        <View style={css.textPage}>
            <Text>
                O nome da empresa é {props.empresa}{'\n'}
                e seu dono é {props.name}{'\n'}
                que tem idade de {props.idade} anos.{'\n'}
                {'\n'}
                Produto: {props.produto}{'\n'}
                Quantidade: {props.quantidade}
            </Text>
        </View>
    )
}
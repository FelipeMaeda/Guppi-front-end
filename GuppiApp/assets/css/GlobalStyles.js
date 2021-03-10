import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_home: {
        height: "100%",
        justifyContent: "center"
    },
    button__home: {
        marginRight: 10,
    },
    textPage: {
        backgroundColor: 'orange',
        padding: 20
    },
    image: {
        width: 300,
        height: 300
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 300,
        marginBottom: 10
    },
    darkbg: {
        backgroundColor: '#333',
    },
    login__msg: (text = 'none') => ({
        fontWeight: "bold",
        fontSize: 22,
        color: "red",
        marginTop: 5,
        marginBottom: 15,
        display: text
    }),
    login__form: {
        width: "74%"
    },
    login__input: {
        borderRadius: 3,
        backgroundColor: "#fff",
        fontSize: 14,
        padding: 7,
        marginBottom: 15
    },
    login__button: {
        padding: 12,
        backgroundColor: 'orange',
        alignSelf: "center",
        borderRadius: 5
    },
    loggin__buttonText: {
        fontWeight: "bold",
        fontSize: 22,
        color: '#333'
    },
    treino_button: {
        width: '50%',
        marginTop: '5%',
        marginBottom: '5%',
        height: 50,
        borderRadius: 40,
        backgroundColor: 'orange',
        alignSelf: "center",
    },
    text_treino_button: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 28,
        color: "#fff",
        marginTop: 5,
    },
    ficha_text: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 30,
        color: "#fff",
        marginTop: 25,
        marginBottom: 50,
    },
    icone_help: {
        width: 70,
        height: 70,
        borderRadius: 300,
    },
    icone_perfil: {
        width: 120,
        height: 120,
        borderRadius: 300,
        alignSelf: "flex-end",
    },
    images_home:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    logo_home: {
        width: 120,
        height: 120,
        borderRadius: 300,
    },
    container_buttons: {
        marginBottom: 90,
    },
    help_popup: {
        fontSize: 22,
    },
    help_popup_title: {
        fontWeight: 'bold',
        fontSize: 25,
    }
});

export { css };
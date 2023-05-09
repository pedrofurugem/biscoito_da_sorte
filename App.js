import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

function app(){

    frases = [
        "Seja corajoso o suficiente para viver a vida de sua escolha, não a vida que os outros escolhem para você.",
        "Acredite em si mesmo e todos os seus sonhos se tornarão realidade.",
        "Seja gentil com os outros e a sorte o recompensará.",
        "A vida é cheia de surpresas agradáveis se mantivermos nossas mentes e corações abertos.",
        "O segredo da felicidade é encontrar alegria nas coisas simples da vida.",
        "Aprenda com os erros do passado e concentre-se no sucesso do futuro.",
        "Grandes oportunidades surgirão para aqueles que estão prontos para elas.",
        "A vida é uma aventura, aproveite o passeio!",
        "Não tenha medo de enfrentar seus medos e seguir seus sonhos.",
        "O amor é a chave para uma vida feliz e satisfatória."
    ]

    const [imagem, setImagem] = useState(require('./src/biscoito.png'))
    const [mensagem, setmensagem] = useState('')

    function quebraBiscoito(){
        let mensagemAleatoria = Math.floor(Math.random() * frases.length)
        setmensagem(' " ' + frases[mensagemAleatoria] + ' " ')
        setImagem(require('./src/biscoitoAberto.png'))
    }

    function reiniciar(){
        setImagem(require('./src/biscoito.png'))
        setmensagem('')
    }

    return(
        <View style={styles.container}>
            <Image 
             style={styles.img}
             source = { imagem }
            />
            <Text style={styles.mensagem}>{mensagem}</Text>
            <TouchableOpacity 
            style={styles.botao}
            onPress={ quebraBiscoito }>
                <View style={styles.textoArea}>
                    <Text style={styles.textoBotao}>Quebrar biscoito</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[styles.botao,  {borderColor: '#000000'}]}
            onPress={ reiniciar }>
                <View style={styles.textoArea}>
                    <Text style={[styles.textoBotao, {color: '#000000'}]}>Reiniciar biscoito</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 250,
        height: 250
    },
    mensagem: {
        fontWeight: 'bold',
        color: '#D2691E',
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    botao: {
        marginTop: 25,
        borderWidth: 2,
        borderColor: '#D2691E',
        width: 280,
        height: 50,
        borderRadius: 25
    },
    textoArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#D2691E',

    }
})

export default app;
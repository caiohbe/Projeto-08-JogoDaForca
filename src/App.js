import React from "react"
import palavras from "./palavras"

function randomizer() { 
	return Math.random() - 0.5; 
}

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const alphabet = alfabeto.map((letter) => {
    return (
        <letter className="selectable" onClick={() => attempt(letter)}>
            {letter.toUpperCase()}
        </letter>
    )
})

let answer
let answerArr = []
let erros = 0

function attempt(letter) {
    console.log(letter)
    console.log(answerArr)
}

export default function App() {
    const [word, setWord] = React.useState('')

    function selectWord() {
        let underline = ''
        palavras.sort(randomizer)
        answer = palavras[0]
        for (let i = 0; i < palavras[0].length; i++) {
            answerArr.push(palavras[0][i])
            underline += '_ '
        }
        console.log(answer)
        console.log(answerArr)
        
        setWord(underline)
    }


    return (
        <content>
            <upper>
                <img src="assets/forca0.png" alt="forca"/>
                <right>
                    <button className="select" onClick={selectWord}>Escolher Palavra</button>
                    <p>{word}</p>
                </right>
            </upper>
            <lower>
                {alphabet}
            </lower>
            <attempt>
                <span>Já sei a palavra! &nbsp;</span>
                <input type="text"></input>
                <button className="try">Chutar</button>
            </attempt>
            
        </content>
    )
}
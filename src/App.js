import React from "react"
import palavras from "./palavras"

let progress = []
let answer
let answerArr = []
let erros = 0

export default function App() {
    const [word, setWord] = React.useState('')

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const alphabet = alfabeto.map((letter) => {
        return (
            <letter className="selectable" onClick={() => attempt(letter)}>
                {letter.toUpperCase()}
            </letter>
        )
    })

    function attempt(letter) {
        for (let i = 0; i < answerArr.length; i++) {
            if (answerArr[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "") === letter) {
                console.log('SIM')
                progress[i] = answerArr[i]
            }
        }

        let word = ''
        progress.forEach((e) => {
            word += `${e} `
        })

        setWord(word)
        console.log(word)
        console.log(answerArr)
        console.log(progress)
    }


    function selectWord() {
        answerArr = []
        progress = []
        let underline = ''

        palavras.sort(() => Math.random() - 0.5)
        answer = palavras[0]

        for (let i = 0; i < palavras[0].length; i++) {
            answerArr.push(palavras[0][i])
            underline += '_ '
            progress.push('_')
        }
        setWord(underline)
        console.log(answer)
    }


    return (
        <React.Fragment>
            <upper>
                <img src="assets/forca0.png" alt="forca" />
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
        </React.Fragment>
    )
}
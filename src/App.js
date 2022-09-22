import React from "react"
import palavras from "./palavras"
import "./style.css";
import forca0 from "./assets/forca0.png" 
import forca1 from "./assets/forca1.png" 
import forca2 from "./assets/forca2.png" 
import forca3 from "./assets/forca3.png" 
import forca4 from "./assets/forca4.png" 
import forca5 from "./assets/forca5.png" 
import forca6 from "./assets/forca6.png" 

const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let progress = []
let answer
let answerArr = []
let errors = 0
let guessed = alfabeto.map((letter, index) => {
    return (index) 
}) 

export default function App() {
    const [image, setImage] = React.useState(images[errors])
    const [color, setColor] = React.useState('')
    const [word, setWord] = React.useState('')
    const alphabet = alfabeto.map((letter, index) => {
        return (
            <letter className={guessed.includes(index) ? "nonSelectable" : "selectable"} onClick={() => guess(letter, index)}>
                {letter.toUpperCase()}
            </letter>
        )
    })

    function guess(letter, index) {
        if (guessed.includes(index) || errors === 6) {
            return
        } else {guessed.push(index)}

        const before = [...progress]

        for (let i = 0; i < answerArr.length; i++) {
            if (answerArr[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "") === letter) {
                progress[i] = answerArr[i]
            }
        }

        for (let i = 0; i <= progress.length; i++) {
            if (before[i] !== progress[i]) {
                break
            } else if (i === progress.length) {
                errors++
                setImage(images[errors])
            }
        }

        let word = ''
        progress.forEach((l) => {
            word += `${l} `
        })

        setWord(word)

        if (errors === 6) {
            disableGame()
            setWord(answer)
            setColor('red')
        }

        if (word.includes('_') === false) {
            disableGame()
            setColor('green')
        }
        console.log(guessed)
    }


    function selectWord() {
        errors = 0
        guessed = []
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
        setImage(images[0])
        console.log(answer)
    }

    function disableGame() {
        console.log('acabo')
        guessed = alfabeto.map((letter, index) => {
            return (index) 
        }) 
    }

    return (
        <React.Fragment>
            <upper>
                <img src={image} alt="forca" />
                <right>
                    <button className="select" onClick={selectWord}>Escolher Palavra</button>
                    <p className={color}>{word}</p>
                </right>
            </upper>
            <lower>
                {alphabet}
            </lower>
            <guess>
                <span>Já sei a palavra! &nbsp;</span>
                <input type="text"></input>
                <button className="try">Chutar</button>
            </guess>
        </React.Fragment>
    )
}
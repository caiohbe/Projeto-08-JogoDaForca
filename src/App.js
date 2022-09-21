import palavras from "./palavras"
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const alphabet = alfabeto.map((letter) => {
    return (
        <letter className="selectable">
            {letter.toUpperCase()}
        </letter>
    )
})

export default function App() {
    return (
        <content>
            <upper>
                <img src="assets/forca0.png"/>
                <button className="select">Escolher Palavra</button>
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